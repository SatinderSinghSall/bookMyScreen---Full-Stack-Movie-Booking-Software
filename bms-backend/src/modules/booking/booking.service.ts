import mongoose from "mongoose";
import { generateBookingReference } from "../../utils";
import { IBooking } from "./booking.interface";
import BookingModel from "./booking.model";
import Razorpay from "razorpay";
import { config } from "../../config/config";
import { updateSeatStatus } from "../show/show.service";

export const createBooking = async (bookingData: IBooking, userId: string) => {
  // 1. Basic validation
  if (
    !bookingData.showId ||
    !bookingData.seats ||
    bookingData.seats.length === 0 ||
    !bookingData.paymentId ||
    !bookingData.bookingFee
  ) {
    throw new Error(`Invalid booking data!`);
  }

  // 2. Get booking data
  const { showId, seats, paymentId, bookingFee } = bookingData;

  // 3. Generate booking reference
  const bookingRef = generateBookingReference();

  // 4. Check whether seats are already booked
  const existingBooking = await BookingModel.findOne({
    showId,
    status: "CONFIRMED",
    seats: { $in: seats },
  });

  if (existingBooking) {
    throw new Error(`One or more of the requested seats are already booked!`);
  }

  // 5. Verify payment with Razorpay
  const razorpay = new Razorpay({
    key_id: config.razorpayKey,
    key_secret: config.razorpaySecret,
  });

  const paymentDetails = await razorpay.payments.fetch(paymentId);

  if (paymentDetails.status !== "captured") {
    throw new Error(`Payment not successful!`);
  }

  // 6. Create booking
  const booking = await BookingModel.create({
    bookingRef,
    userId,
    showId,
    seats,
    status: "CONFIRMED",
    paymentId,
    paymentMethod: paymentDetails.method,
    bookingFee,
  });

  // 7. Mark seats as BOOKED
  await updateSeatStatus(showId, seats, "BOOKED");

  // 8. Return booking
  return booking;
};

export const getAllBookings = async (userId: string) => {
  return await BookingModel.find({ userId })
    .populate({
      path: "showId",
      select: "startTime date audioType",
      populate: [
        {
          path: "movie",
          select: "title posterUrl duration format",
        },
        {
          path: "theater",
          select: "name location city state",
        },
      ],
    })
    .sort({ createdAt: -1 }); // latest booking first
};
