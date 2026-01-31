"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, MapPin, Building2 } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Concert",
  "Conference",
  "Private Party",
  "Other",
];

export default function EventDetailsStep({ form, setForm, onNext }) {
  const dateType = form.dateType || "single";

  const isValid =
    form.eventName &&
    form.eventType &&
    (dateType === "single" ? form.eventDate : form.startDate && form.endDate) &&
    form.location &&
    (form.eventType !== "Other" || form.customEventType);

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Event Details</h2>
        <p className="text-gray-500 mt-2">Tell us about your upcoming event</p>
      </div>

      <div className="space-y-6">
        {/* Event Name */}
        <div>
          <Label className={"mb-2"}>Event Name *</Label>
          <Input
            placeholder="e.g., Sarah's Wedding Reception"
            value={form.eventName || ""}
            onChange={(e) => setForm({ ...form, eventName: e.target.value })}
          />
        </div>

        {/* Event Type */}
        <div>
          <Label>Event Type *</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
            {eventTypes.map((type) => {
              const active = form.eventType === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      eventType: type,
                      customEventType: "",
                    })
                  }
                  className={`
                    border rounded-lg py-2 px-3 text-sm font-medium transition
                    ${
                      active
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "hover:border-orange-500 hover:text-orange-500"
                    }
                  `}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {/* Custom Event Type */}
          {form.eventType === "Other" && (
            <div className="mt-4">
              <Input
                placeholder="Please specify event type"
                value={form.customEventType || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    customEventType: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>

        {/* Event Date */}
        <div>
          <Label className="flex items-center gap-2">
            <Calendar size={16} /> Event Date *
          </Label>

          <RadioGroup
            value={form.dateType || "single"}
            onValueChange={(value) =>
              setForm({
                ...form,
                dateType: value,
                eventDate: "",
                startDate: "",
                endDate: "",
              })
            }
            className="flex gap-6 my-3"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="single" />
              <Label>Single Day</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="range" />
              <Label>Date Range</Label>
            </div>
          </RadioGroup>

          {/* Single Date */}
          {form.dateType !== "range" && (
            <Input
              type="date"
              value={form.eventDate || ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  eventDate: e.target.value,
                })
              }
            />
          )}

          {/* Date Range */}
          {form.dateType === "range" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="date"
                value={form.startDate || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    startDate: e.target.value,
                  })
                }
              />
              <Input
                type="date"
                value={form.endDate || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    endDate: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>

        {/* Location & Venue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="flex items-center gap-2 mb-2">
              <MapPin size={16} /> Location *
            </Label>
            <Input
              placeholder="City, State"
              value={form.location || ""}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-2">
              <Building2 size={16} /> Venue (Optional)
            </Label>
            <Input
              placeholder="Venue name or address"
              value={form.venue || ""}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end pt-6">
          <Button
            onClick={onNext}
            disabled={!isValid}
            className="bg-orange-500 hover:bg-orange-600 px-8 disabled:opacity-50"
          >
            Next Step →
          </Button>
        </div>
      </div>
    </>
  );
}
