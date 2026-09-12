import mongoose from "mongoose";
import dotenv from "dotenv";
import { TheaterModel } from "../modules/theater/theater.model";
import { config } from "../config/config";

dotenv.config();

mongoose
  .connect(config.databaseUrl as string)
  .then(async () => {
    console.log("Connected to MongoDB ✅");

    const cities = [
      // =========================
      // ANDHRA PRADESH
      // =========================
      {
        name: "Visakhapatnam",
        state: "Andhra Pradesh",
        areas: ["MVP Colony", "Gajuwaka", "Dwaraka Nagar", "Madhurawada"],
      },
      {
        name: "Vijayawada",
        state: "Andhra Pradesh",
        areas: ["Benz Circle", "Patamata", "Governorpet", "Moghalrajpuram"],
      },
      {
        name: "Guntur",
        state: "Andhra Pradesh",
        areas: ["Brodipet", "Arundelpet", "Lakshmipuram", "Nallapadu"],
      },
      {
        name: "Tirupati",
        state: "Andhra Pradesh",
        areas: ["Tiruchanoor", "Renigunta Road", "KT Road", "Alipiri"],
      },
      {
        name: "Nellore",
        state: "Andhra Pradesh",
        areas: [
          "Magunta Layout",
          "Dargamitta",
          "Balaji Nagar",
          "Nellore Rural",
        ],
      },
      {
        name: "Kurnool",
        state: "Andhra Pradesh",
        areas: ["Budhawarpet", "Ashok Nagar", "Nandyal Road", "Bellary Road"],
      },
      {
        name: "Rajahmundry",
        state: "Andhra Pradesh",
        areas: ["Danavaipeta", "Morampudi", "AV Appa Rao Road", "Diwancheruvu"],
      },

      // =========================
      // ARUNACHAL PRADESH
      // =========================
      {
        name: "Itanagar",
        state: "Arunachal Pradesh",
        areas: ["Naharlagun", "Ganga Market", "Chimpu", "Bank Tinali"],
      },

      // =========================
      // ASSAM
      // =========================
      {
        name: "Guwahati",
        state: "Assam",
        areas: ["Paltan Bazar", "Ganeshguri", "Dispur", "Six Mile"],
      },
      {
        name: "Dibrugarh",
        state: "Assam",
        areas: ["Chowkidingee", "RKB Path", "Mancotta", "Graham Bazar"],
      },
      {
        name: "Silchar",
        state: "Assam",
        areas: ["Tarapur", "Ambicapatty", "Rangirkhari", "National Highway"],
      },
      {
        name: "Jorhat",
        state: "Assam",
        areas: ["Gar Ali", "Tarajan", "Chinamara", "Malow Ali"],
      },
      {
        name: "Tezpur",
        state: "Assam",
        areas: ["Mahabhairab", "Mission Chariali", "Dekargaon", "Ketla"],
      },

      // =========================
      // BIHAR
      // =========================
      {
        name: "Patna",
        state: "Bihar",
        areas: ["Boring Road", "Kankarbagh", "Patliputra", "Bailey Road"],
      },
      {
        name: "Gaya",
        state: "Bihar",
        areas: ["Bodh Gaya", "Kendui", "Ramna Road", "Station Road"],
      },
      {
        name: "Muzaffarpur",
        state: "Bihar",
        areas: ["Brahmapura", "Mithanpura", "Club Road", "Akharaghat"],
      },
      {
        name: "Bhagalpur",
        state: "Bihar",
        areas: ["Tilkamanjhi", "Adampur", "Barari", "Nathnagar"],
      },
      {
        name: "Darbhanga",
        state: "Bihar",
        areas: ["Laheriasarai", "Donar", "Benta", "Darbhanga Tower"],
      },
      {
        name: "Purnia",
        state: "Bihar",
        areas: ["Bhatta Bazar", "Line Bazar", "Gulabbagh", "Khuskibagh"],
      },

      // =========================
      // CHHATTISGARH
      // =========================
      {
        name: "Raipur",
        state: "Chhattisgarh",
        areas: ["Telibandha", "Shankar Nagar", "Pandri", "Tatibandh"],
      },
      {
        name: "Bhilai",
        state: "Chhattisgarh",
        areas: ["Supela", "Nehru Nagar", "Civic Centre", "Risali"],
      },
      {
        name: "Bilaspur",
        state: "Chhattisgarh",
        areas: ["Vyapar Vihar", "Telipara", "Mangla", "Sarkanda"],
      },
      {
        name: "Korba",
        state: "Chhattisgarh",
        areas: ["Transport Nagar", "Kosabadi", "Darri", "Rishabh Nagar"],
      },

      // =========================
      // DELHI
      // =========================
      {
        name: "Delhi",
        state: "Delhi",
        areas: ["Connaught Place", "Saket", "Dwarka", "Rohini"],
      },
      {
        name: "New Delhi",
        state: "Delhi",
        areas: ["Rajouri Garden", "Karol Bagh", "Vasant Kunj", "Lajpat Nagar"],
      },

      // =========================
      // GOA
      // =========================
      {
        name: "Panaji",
        state: "Goa",
        areas: ["Miramar", "Altinho", "Campal", "Dona Paula"],
      },
      {
        name: "Margao",
        state: "Goa",
        areas: ["Colva Road", "Fatorda", "Navelim", "Comba"],
      },
      {
        name: "Vasco da Gama",
        state: "Goa",
        areas: ["Chicalim", "Dabolim", "Vaddem", "Airport Road"],
      },

      // =========================
      // GUJARAT
      // =========================
      {
        name: "Ahmedabad",
        state: "Gujarat",
        areas: ["Navrangpura", "Maninagar", "Thaltej", "Vastrapur"],
      },
      {
        name: "Surat",
        state: "Gujarat",
        areas: ["Adajan", "Piplod", "Vesu", "Varachha"],
      },
      {
        name: "Vadodara",
        state: "Gujarat",
        areas: ["Alkapuri", "Manjalpur", "Gotri", "Akota"],
      },
      {
        name: "Rajkot",
        state: "Gujarat",
        areas: [
          "Kalawad Road",
          "Raiya Road",
          "150 Feet Ring Road",
          "University Road",
        ],
      },
      {
        name: "Gandhinagar",
        state: "Gujarat",
        areas: ["Sector 11", "Sector 21", "Infocity", "Kudasan"],
      },
      {
        name: "Bhavnagar",
        state: "Gujarat",
        areas: [
          "Waghawadi Road",
          "Kalubha Road",
          "Nilkanth Nagar",
          "Ghogha Circle",
        ],
      },
      {
        name: "Jamnagar",
        state: "Gujarat",
        areas: [
          "Patel Colony",
          "Indira Marg",
          "Ranjit Road",
          "Pancheshwar Tower",
        ],
      },
      {
        name: "Junagadh",
        state: "Gujarat",
        areas: ["Joshipura", "Majevadi Gate", "Zanzarda Road", "Talav Gate"],
      },

      // =========================
      // HARYANA
      // =========================
      {
        name: "Gurugram",
        state: "Haryana",
        areas: ["Cyber City", "Golf Course Road", "Sohna Road", "Sector 29"],
      },
      {
        name: "Faridabad",
        state: "Haryana",
        areas: ["Sector 15", "Sector 16", "NIT", "Mathura Road"],
      },
      {
        name: "Panipat",
        state: "Haryana",
        areas: ["Model Town", "GT Road", "Sector 11", "Assandh Road"],
      },
      {
        name: "Ambala",
        state: "Haryana",
        areas: ["Sadar Bazar", "Ambala Cantt", "Model Town", "Jagadhri Road"],
      },
      {
        name: "Hisar",
        state: "Haryana",
        areas: ["Model Town", "Urban Estate", "PLA", "Sector 14"],
      },
      {
        name: "Rohtak",
        state: "Haryana",
        areas: ["Model Town", "Delhi Road", "Civil Lines", "Sector 1"],
      },

      // =========================
      // HIMACHAL PRADESH
      // =========================
      {
        name: "Shimla",
        state: "Himachal Pradesh",
        areas: ["Mall Road", "Sanjauli", "Chotta Shimla", "New Shimla"],
      },
      {
        name: "Dharamshala",
        state: "Himachal Pradesh",
        areas: ["McLeod Ganj", "Kotwali Bazaar", "Sidhpur", "Kangra Road"],
      },
      {
        name: "Solan",
        state: "Himachal Pradesh",
        areas: ["Mall Road", "Chambaghat", "Saproon", "Barog Road"],
      },

      // =========================
      // JAMMU & KASHMIR
      // =========================
      {
        name: "Jammu",
        state: "Jammu and Kashmir",
        areas: ["Gandhi Nagar", "Trikuta Nagar", "Channi Himmat", "Janipur"],
      },
      {
        name: "Srinagar",
        state: "Jammu and Kashmir",
        areas: [
          "Lal Chowk",
          "Rajbagh",
          "Srinagar Airport Road",
          "Jawahar Nagar",
        ],
      },

      // =========================
      // JHARKHAND
      // =========================
      {
        name: "Ranchi",
        state: "Jharkhand",
        areas: ["Lalpur", "Harmu", "Morabadi", "Kokar"],
      },
      {
        name: "Jamshedpur",
        state: "Jharkhand",
        areas: ["Bistupur", "Sakchi", "Sonari", "Mango"],
      },
      {
        name: "Dhanbad",
        state: "Jharkhand",
        areas: ["Bank More", "Saraidhela", "Hirapur", "Sarai Dhela"],
      },
      {
        name: "Bokaro",
        state: "Jharkhand",
        areas: ["Sector 4", "Sector 5", "Chas", "City Centre"],
      },
      {
        name: "Deoghar",
        state: "Jharkhand",
        areas: ["Tower Chowk", "Castairs Town", "Bilasi", "Jasidih"],
      },

      // =========================
      // KARNATAKA
      // =========================
      {
        name: "Bangalore",
        state: "Karnataka",
        areas: ["Whitefield", "Koramangala", "Indiranagar", "Marathahalli"],
      },
      {
        name: "Mysore",
        state: "Karnataka",
        areas: ["VV Mohalla", "Vijayanagar", "Hebbal", "Kuvempu Nagar"],
      },
      {
        name: "Mangalore",
        state: "Karnataka",
        areas: ["Kankanady", "Kadri", "Bejai", "Hampankatta"],
      },
      {
        name: "Hubli",
        state: "Karnataka",
        areas: ["Gokul Road", "Vidya Nagar", "Deshpande Nagar", "Keshwapur"],
      },
      {
        name: "Belgaum",
        state: "Karnataka",
        areas: ["Tilakwadi", "Shahapur", "Sadashiv Nagar", "Angol"],
      },
      {
        name: "Shimoga",
        state: "Karnataka",
        areas: ["Gandhi Bazaar", "Vinoba Nagar", "Sagar Road", "Vidya Nagar"],
      },
      {
        name: "Davangere",
        state: "Karnataka",
        areas: ["PJ Extension", "SS Layout", "Vidyanagar", "MCC"],
      },

      // =========================
      // KERALA
      // =========================
      {
        name: "Kochi",
        state: "Kerala",
        areas: ["Edappally", "Kakkanad", "Vyttila", "Fort Kochi"],
      },
      {
        name: "Thiruvananthapuram",
        state: "Kerala",
        areas: ["Kowdiar", "Pattom", "Kazhakootam", "Kesavadasapuram"],
      },
      {
        name: "Kozhikode",
        state: "Kerala",
        areas: ["Nadakkavu", "Mavoor Road", "Kallai", "West Hill"],
      },
      {
        name: "Thrissur",
        state: "Kerala",
        areas: ["Punkunnam", "Ayyanthole", "Swaraj Round", "Ollur"],
      },
      {
        name: "Kollam",
        state: "Kerala",
        areas: ["Chinnakada", "Kadappakada", "Kavanad", "Asramam"],
      },
      {
        name: "Kannur",
        state: "Kerala",
        areas: ["Thavakkara", "Talap", "South Bazaar", "Chovva"],
      },
      {
        name: "Alappuzha",
        state: "Kerala",
        areas: ["Mullakkal", "Avalookunnu", "Kalarcode", "Vazhicherry"],
      },

      // =========================
      // MADHYA PRADESH
      // =========================
      {
        name: "Indore",
        state: "Madhya Pradesh",
        areas: ["Vijay Nagar", "Rajwada", "Palasia", "MG Road"],
      },
      {
        name: "Bhopal",
        state: "Madhya Pradesh",
        areas: ["MP Nagar", "Arera Colony", "Kolar", "TT Nagar"],
      },
      {
        name: "Gwalior",
        state: "Madhya Pradesh",
        areas: ["City Centre", "Lashkar", "Thatipur", "Morar"],
      },
      {
        name: "Jabalpur",
        state: "Madhya Pradesh",
        areas: ["Wright Town", "Napier Town", "Vijay Nagar", "Sadar"],
      },
      {
        name: "Ujjain",
        state: "Madhya Pradesh",
        areas: ["Freeganj", "Nanakheda", "Dewas Road", "Tower Chowk"],
      },
      {
        name: "Sagar",
        state: "Madhya Pradesh",
        areas: ["Civil Lines", "Makronia", "Tili", "Katara"],
      },

      // =========================
      // MAHARASHTRA
      // =========================
      {
        name: "Mumbai",
        state: "Maharashtra",
        areas: ["Andheri", "Bandra", "Powai", "Borivali"],
      },
      {
        name: "Pune",
        state: "Maharashtra",
        areas: ["Hinjewadi", "Kothrud", "Viman Nagar", "Baner"],
      },
      {
        name: "Nagpur",
        state: "Maharashtra",
        areas: ["Sitabuldi", "Dharampeth", "Wardha Road", "Manish Nagar"],
      },
      {
        name: "Nashik",
        state: "Maharashtra",
        areas: ["College Road", "Gangapur Road", "Panchavati", "Indira Nagar"],
      },
      {
        name: "Aurangabad",
        state: "Maharashtra",
        areas: ["CIDCO", "Garkheda", "Waluj", "Jalna Road"],
      },
      {
        name: "Thane",
        state: "Maharashtra",
        areas: ["Ghodbunder Road", "Manpada", "Wagle Estate", "Naupada"],
      },
      {
        name: "Navi Mumbai",
        state: "Maharashtra",
        areas: ["Vashi", "Nerul", "Kharghar", "Belapur"],
      },
      {
        name: "Kolhapur",
        state: "Maharashtra",
        areas: ["Rajarampuri", "Tarabai Park", "Shahupuri", "Rankala"],
      },
      {
        name: "Solapur",
        state: "Maharashtra",
        areas: ["Hotgi Road", "Jule Solapur", "Sadar Bazar", "Akkalkot Road"],
      },
      {
        name: "Amravati",
        state: "Maharashtra",
        areas: ["Camp", "Rajapeth", "Badnera Road", "Dastur Nagar"],
      },
      {
        name: "Sangli",
        state: "Maharashtra",
        areas: ["Vishrambag", "Miraj Road", "Madhavnagar", "Gaon Bhag"],
      },

      // =========================
      // MANIPUR
      // =========================
      {
        name: "Imphal",
        state: "Manipur",
        areas: ["Thangal Bazar", "Paona Bazar", "Lamphel", "Uripok"],
      },

      // =========================
      // MEGHALAYA
      // =========================
      {
        name: "Shillong",
        state: "Meghalaya",
        areas: ["Police Bazar", "Laitumkhrah", "Nongthymmai", "Polo"],
      },

      // =========================
      // MIZORAM
      // =========================
      {
        name: "Aizawl",
        state: "Mizoram",
        areas: ["Lalchhuanawma Road", "Zarkawt", "Chaltlang", "Bawngkawn"],
      },

      // =========================
      // NAGALAND
      // =========================
      {
        name: "Kohima",
        state: "Nagaland",
        areas: [
          "Mahatma Gandhi Road",
          "PR Hill",
          "High School Junction",
          "Midland",
        ],
      },
      {
        name: "Dimapur",
        state: "Nagaland",
        areas: ["Hongkong Market", "3rd Mile", "Purana Bazar", "Circular Road"],
      },

      // =========================
      // ODISHA
      // =========================
      {
        name: "Bhubaneswar",
        state: "Odisha",
        areas: ["Patia", "Saheed Nagar", "Kharavel Nagar", "Nayapalli"],
      },
      {
        name: "Cuttack",
        state: "Odisha",
        areas: ["CDA Sector 6", "Link Road", "College Square", "Badambadi"],
      },
      {
        name: "Rourkela",
        state: "Odisha",
        areas: ["Civil Township", "Chhend", "Sector 19", "Panposh"],
      },
      {
        name: "Berhampur",
        state: "Odisha",
        areas: [
          "Gandhi Nagar",
          "Court Peta",
          "Engineering School Road",
          "Golabandha",
        ],
      },
      {
        name: "Sambalpur",
        state: "Odisha",
        areas: ["Ainthapali", "Dhanupali", "Budharaja", "Modipada"],
      },
      {
        name: "Puri",
        state: "Odisha",
        areas: [
          "Grand Road",
          "Sea Beach Road",
          "Station Road",
          "Chakratirtha Road",
        ],
      },
      {
        name: "Balasore",
        state: "Odisha",
        areas: ["FM College Road", "Motiganj", "Remuna", "Sahadevkhunta"],
      },
      {
        name: "Baripada",
        state: "Odisha",
        areas: ["Station Road", "Takatpur", "Baripada Town", "Palbani"],
      },
      {
        name: "Jharsuguda",
        state: "Odisha",
        areas: ["Sarbahal", "Beheramal", "Station Road", "Bus Stand"],
      },

      // =========================
      // PUNJAB
      // =========================
      {
        name: "Chandigarh",
        state: "Chandigarh",
        areas: ["Sector 17", "Sector 35", "Sector 22", "Manimajra"],
      },
      {
        name: "Ludhiana",
        state: "Punjab",
        areas: [
          "Sarabha Nagar",
          "Ferozepur Road",
          "Model Town",
          "Pakhowal Road",
        ],
      },
      {
        name: "Amritsar",
        state: "Punjab",
        areas: ["Ranjit Avenue", "Mall Road", "Lawrence Road", "GT Road"],
      },
      {
        name: "Jalandhar",
        state: "Punjab",
        areas: ["Model Town", "GT Road", "Urban Estate", "Maqsudan"],
      },
      {
        name: "Patiala",
        state: "Punjab",
        areas: ["Leela Bhawan", "Rajbaha Road", "Model Town", "Tripuri"],
      },
      {
        name: "Bathinda",
        state: "Punjab",
        areas: ["Model Town", "Civil Lines", "Mall Road", "Goniana Road"],
      },

      // =========================
      // RAJASTHAN
      // =========================
      {
        name: "Jaipur",
        state: "Rajasthan",
        areas: ["Malviya Nagar", "Vaishali Nagar", "C Scheme", "Mansarovar"],
      },
      {
        name: "Jodhpur",
        state: "Rajasthan",
        areas: ["Sardarpura", "Ratanada", "Paota", "Chopasni Road"],
      },
      {
        name: "Udaipur",
        state: "Rajasthan",
        areas: ["Hiran Magri", "Shobhagpura", "Fatehpura", "Surajpole"],
      },
      {
        name: "Kota",
        state: "Rajasthan",
        areas: ["Talwandi", "Mahaveer Nagar", "Vigyan Nagar", "Dadabari"],
      },
      {
        name: "Ajmer",
        state: "Rajasthan",
        areas: [
          "Vaishali Nagar",
          "Civil Lines",
          "Panchsheel Nagar",
          "Kaiser Ganj",
        ],
      },
      {
        name: "Bikaner",
        state: "Rajasthan",
        areas: ["Rani Bazar", "Pawan Puri", "JNV Colony", "Sadul Ganj"],
      },
      {
        name: "Alwar",
        state: "Rajasthan",
        areas: ["Shalimar", "Scheme 10", "Hope Circus", "Behror Road"],
      },

      // =========================
      // SIKKIM
      // =========================
      {
        name: "Gangtok",
        state: "Sikkim",
        areas: ["MG Marg", "Deorali", "Tadong", "Sichey"],
      },

      // =========================
      // TAMIL NADU
      // =========================
      {
        name: "Chennai",
        state: "Tamil Nadu",
        areas: ["T Nagar", "Velachery", "Adyar", "Anna Nagar"],
      },
      {
        name: "Coimbatore",
        state: "Tamil Nadu",
        areas: ["RS Puram", "Gandhipuram", "Peelamedu", "Singanallur"],
      },
      {
        name: "Madurai",
        state: "Tamil Nadu",
        areas: ["KK Nagar", "Anna Nagar", "Mattuthavani", "Simmakkal"],
      },
      {
        name: "Tiruchirappalli",
        state: "Tamil Nadu",
        areas: ["Thillai Nagar", "Srirangam", "Woraiyur", "Cantonment"],
      },
      {
        name: "Salem",
        state: "Tamil Nadu",
        areas: [
          "Fairlands",
          "Hasthampatti",
          "Suramangalam",
          "Seelanaickenpatti",
        ],
      },
      {
        name: "Tirunelveli",
        state: "Tamil Nadu",
        areas: [
          "Palayamkottai",
          "Vannarpettai",
          "Perumalpuram",
          "Maharaja Nagar",
        ],
      },
      {
        name: "Erode",
        state: "Tamil Nadu",
        areas: [
          "Perundurai Road",
          "Surampatti",
          "Veerappanchatram",
          "Teachers Colony",
        ],
      },
      {
        name: "Vellore",
        state: "Tamil Nadu",
        areas: ["Katpadi", "Sathuvachari", "Gandhi Nagar", "Thorapadi"],
      },

      // =========================
      // TELANGANA
      // =========================
      {
        name: "Hyderabad",
        state: "Telangana",
        areas: ["Banjara Hills", "Gachibowli", "Madhapur", "Ameerpet"],
      },
      {
        name: "Warangal",
        state: "Telangana",
        areas: ["Hanamkonda", "Kazipet", "Subedari", "Nakkalagutta"],
      },
      {
        name: "Nizamabad",
        state: "Telangana",
        areas: [
          "Dwaraka Nagar",
          "Vinayak Nagar",
          "Khaleelwadi",
          "Mubarak Nagar",
        ],
      },
      {
        name: "Karimnagar",
        state: "Telangana",
        areas: [
          "Mankammathota",
          "Vidya Nagar",
          "Housing Board Colony",
          "Kothirampur",
        ],
      },

      // =========================
      // TRIPURA
      // =========================
      {
        name: "Agartala",
        state: "Tripura",
        areas: ["Dhaleswar", "Battala", "Melarmath", "Krishna Nagar"],
      },

      // =========================
      // UTTAR PRADESH
      // =========================
      {
        name: "Lucknow",
        state: "Uttar Pradesh",
        areas: ["Hazratganj", "Gomti Nagar", "Alambagh", "Indira Nagar"],
      },
      {
        name: "Noida",
        state: "Uttar Pradesh",
        areas: ["Sector 18", "Sector 62", "Sector 137", "Sector 50"],
      },
      {
        name: "Ghaziabad",
        state: "Uttar Pradesh",
        areas: ["Indirapuram", "Vaishali", "Raj Nagar", "Crossings Republik"],
      },
      {
        name: "Kanpur",
        state: "Uttar Pradesh",
        areas: ["Swaroop Nagar", "Kakadeo", "Mall Road", "Kidwai Nagar"],
      },
      {
        name: "Agra",
        state: "Uttar Pradesh",
        areas: ["Sanjay Place", "Kamla Nagar", "Sikandra", "Taj Nagari"],
      },
      {
        name: "Varanasi",
        state: "Uttar Pradesh",
        areas: ["Lanka", "Sigra", "Bhelupur", "Mahmoorganj"],
      },
      {
        name: "Prayagraj",
        state: "Uttar Pradesh",
        areas: ["Civil Lines", "George Town", "Naini", "Allahpur"],
      },
      {
        name: "Meerut",
        state: "Uttar Pradesh",
        areas: ["Shastri Nagar", "Begum Bridge", "Garh Road", "Pallavpuram"],
      },
      {
        name: "Bareilly",
        state: "Uttar Pradesh",
        areas: ["Civil Lines", "Rajendra Nagar", "DD Puram", "Izzatnagar"],
      },
      {
        name: "Gorakhpur",
        state: "Uttar Pradesh",
        areas: ["Golghar", "Civil Lines", "Mohaddipur", "Taramandal"],
      },
      {
        name: "Mathura",
        state: "Uttar Pradesh",
        areas: [
          "Dampier Nagar",
          "Krishna Nagar",
          "Maholi Road",
          "Refinery Road",
        ],
      },

      // =========================
      // UTTARAKHAND
      // =========================
      {
        name: "Dehradun",
        state: "Uttarakhand",
        areas: ["Rajpur Road", "Vasant Vihar", "Ballupur", "Prem Nagar"],
      },
      {
        name: "Haridwar",
        state: "Uttarakhand",
        areas: ["Ranipur More", "Jwalapur", "Har Ki Pauri", "Kankhal"],
      },
      {
        name: "Rishikesh",
        state: "Uttarakhand",
        areas: ["Tapovan", "Haridwar Road", "Shyampur", "Swarg Ashram"],
      },
      {
        name: "Haldwani",
        state: "Uttarakhand",
        areas: ["Nainital Road", "Kathghariya", "Mukhani", "Kaladhungi Road"],
      },

      // =========================
      // WEST BENGAL
      // =========================
      {
        name: "Kolkata",
        state: "West Bengal",
        areas: ["Salt Lake", "New Town", "Park Street", "Gariahat"],
      },
      {
        name: "Siliguri",
        state: "West Bengal",
        areas: ["Sevoke Road", "Hill Cart Road", "Matigara", "Pradhan Nagar"],
      },
      {
        name: "Durgapur",
        state: "West Bengal",
        areas: ["City Centre", "Benachity", "Muchipara", "Bidhannagar"],
      },
      {
        name: "Asansol",
        state: "West Bengal",
        areas: ["Burnpur", "Ushagram", "Sen Raleigh Road", "GT Road"],
      },
      {
        name: "Howrah",
        state: "West Bengal",
        areas: ["Shibpur", "Santragachi", "Avani Riverside", "Kadamtala"],
      },
      {
        name: "Kharagpur",
        state: "West Bengal",
        areas: ["Inda", "Malicha", "Gol Bazar", "Prem Bazar"],
      },

      // =========================
      // OTHER MAJOR CITIES / UTs
      // =========================
      {
        name: "Puducherry",
        state: "Puducherry",
        areas: ["White Town", "MG Road", "Lawspet", "Reddiarpalayam"],
      },
      {
        name: "Port Blair",
        state: "Andaman and Nicobar Islands",
        areas: ["Aberdeen", "Dairy Farm", "Garacharma", "Prothrapur"],
      },
      {
        name: "Leh",
        state: "Ladakh",
        areas: ["Main Market", "Chanspa", "Skara", "Changspa"],
      },
    ];

    const brands = ["PVR", "INOX", "Cinepolis"];
    const logos: Record<string, string> = {
      PVR: "https://res.cloudinary.com/amritrajmaurya/image/upload/v1751788726/omht27letnpbbaj2w0op.avif",
      INOX: "https://res.cloudinary.com/amritrajmaurya/image/upload/v1751788726/yxjgnxhxlccfdon3fyzg.avif",
      Cinepolis:
        "https://res.cloudinary.com/amritrajmaurya/image/upload/v1751788726/eebu3t34depdmmgxyknq.avif",
    };

    const theatres = [];

    for (const city of cities) {
      const numTheatres = Math.floor(Math.random() * 2) + 3; // 3 or 4 per city
      for (let i = 0; i < numTheatres; i++) {
        const brand = brands[i % brands.length];
        const area = city.areas[i % city.areas.length];
        theatres.push({
          name: `${brand} ${area}`,
          location: `${area}, ${city.name}`,
          city: city.name,
          state: city.state, // ✅ Added here
          logo: logos[brand],
        });
      }
    }

    await TheaterModel.deleteMany({});
    await TheaterModel.insertMany(theatres);

    console.log(`✅ Seeded ${theatres.length} theatres successfully.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });
