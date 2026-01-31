import Requirement from "../models/Requirement.js";

export const createRequirement = async (req, res) => {
  try {
    let data = req.body;

    if (data.eventType === "Other" && data.customEventType) {
      data.eventType = data.customEventType;
    }

    delete data.customEventType;

    if (data.dateType === "single") {
      data.startDate = undefined;
      data.endDate = undefined;
    }

    if (data.dateType === "range") {
      data.eventDate = undefined;
    }

    const requirement = await Requirement.create(data);

    res.status(201).json({
      success: true,
      message: "Requirement created successfully",
      requirement,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
