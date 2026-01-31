"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

const Row = ({ label, value }) => (
  <div className="flex justify-between text-sm py-2 border-b last:border-none">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-right">{value || "-"}</span>
  </div>
);

export default function ReviewSubmitStep({ form, onBack }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async () => {
  try {
    setLoading(true);

    await axios.post(
      "http://localhost:5000/api/requirements/create",
      form
    );

    setSuccess(true);
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  if (success) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-green-600">
          🎉 Requirement Posted Successfully!
        </h2>
        <p className="text-gray-500 mt-3">
          Professionals will start reaching out to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Review Your Requirement</h2>
        <p className="text-gray-500 mt-2">
          Please verify all details before submitting
        </p>
      </div>

      <div className="border rounded-xl p-6 mb-6">
        <h3 className="font-semibold mb-3">Event Details</h3>
        <Row label="Event Name" value={form.eventName} />
        <Row
          label="Event Type"
          value={
            form.eventType === "Other" ? form.customEventType : form.eventType
          }
        />
        <Row label="Date" value={form.eventDate} />
        <Row label="Location" value={form.location} />
        <Row label="Venue" value={form.venue} />
      </div>

      <div className="border rounded-xl p-6 mb-6">
        <h3 className="font-semibold mb-3">Hiring</h3>
        <Row label="Looking For" value={form.hireType} />
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-3">Requirements</h3>
        {Object.entries(form.details || {}).map(([key, value]) => (
          <Row key={key} label={key.replace(/([A-Z])/g, " $1")} value={value} />
        ))}
      </div>

      <div className="flex justify-between pt-10">
        <Button variant="outline" onClick={onBack}>
          ← Back
        </Button>

        <Button
          onClick={submit}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 px-10 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Requirement"}
        </Button>
      </div>
    </>
  );
}
