import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },

    eventType: {
      type: String,
      required: true,
    },

    dateType: {
      type: String,
      enum: ["single", "range"],
      default: "single",
    },

    eventDate: String,     
    startDate: String,     
    endDate: String,      

    location: {
      type: String,
      required: true,
    },

    venue: String,

    hireType: {
      type: String,
      enum: ["planner", "performer", "crew"],
      required: true,
    },

    details: {
      type: Object, 
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Requirement", requirementSchema);
