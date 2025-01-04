import mongoose from "mongoose";

const ticketModel = new mongoose.Schema({
  name: {
    type: String,
  },
  to: {
    type: String,
  },
  from: {
    type: String,
  },

  adult: {
    type: Number,
  },
  adult: {
    type: Number,
  },

  start: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketModel);

export default Ticket;
