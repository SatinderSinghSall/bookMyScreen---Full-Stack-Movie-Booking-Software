import mongoose, { Types } from "mongoose";
import { generateSeatLayout, groupShowsByTheatreAndMovie } from "../../utils";
import { IShow } from "./show.interface";
import { ShowModel } from "./show.model";

//1. Create a show
export const createShow = async (showData: IShow) => {
  const seatLayout = generateSeatLayout();
  const showToCreate = { ...showData, seatLayout };

  return await ShowModel.create(showToCreate);
};

//2. get shows by movie date and location
export const getShowsByMovieDateLocation = async (
  movieId: string,
  date: string,
  location: string,
) => {
  const query: any = {
    movie: new Types.ObjectId(movieId),
    location: { $regex: new RegExp(location, "i") },
  };

  if (date) {
    query.date = date;
  }

  const shows = await ShowModel.find(query)
    .populate("movie theater")
    .sort({ startTime: 1 });

  const groupedShows = groupShowsByTheatreAndMovie(shows);

  return groupedShows;
};

//3. get show by id
export const getShowById = async (showId: string) => {
  return await ShowModel.findById(showId).populate("movie theater");
};

//4. update seat status
export const updateSeatStatus = async (
  showId: mongoose.Types.ObjectId,
  seats: string[],
  status: "AVAILABLE" | "BOOKED" | "BLOCKED",
) => {
  const show = await ShowModel.findById(showId);

  if (!show) {
    throw new Error(`Show not found!`);
  }

  // Parse seats like A1, B5, C10
  const parsedSeats = seats.map((seat) => {
    const row = seat.charAt(0);
    const number = parseInt(seat.slice(1));

    return { row, number };
  });

  for (const parsedSeat of parsedSeats) {
    const row = show.seatLayout.find((r) => r.row === parsedSeat.row);

    if (!row) {
      throw new Error(`Invalid seat row: ${parsedSeat.row}`);
    }

    const seat = row.seats.find((s) => s.number === parsedSeat.number);

    if (!seat) {
      throw new Error(
        `Invalid seat number: ${parsedSeat.number} in row ${parsedSeat.row}`,
      );
    }

    // Prevent double booking
    if (status === "BOOKED" && seat.status === "BOOKED") {
      throw new Error(
        `Seat ${parsedSeat.row}${parsedSeat.number} is already booked!`,
      );
    }

    seat.status = status;
  }

  show.markModified("seatLayout");

  await show.save();
};
