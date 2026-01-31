"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function RequirementsStep({ form, setForm, onNext, onBack }) {
  const details = form.details || {};

  const updateDetails = (key, value) => {
    setForm({
      ...form,
      details: {
        ...details,
        [key]: value,
      },
    });
  };

  const isValid =
    (form.hireType === "planner" &&
      details.budget &&
      details.services) ||
    (form.hireType === "performer" &&
      details.performanceType &&
      details.duration) ||
    (form.hireType === "crew" &&
      details.role &&
      details.count);

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Requirements</h2>
        <p className="text-gray-500 mt-2">
          Tell us exactly what you’re looking for
        </p>
      </div>

      {/* PLANNER */}
      {form.hireType === "planner" && (
        <div className="space-y-6">
          <div>
            <Label className="mb-2">Estimated Budget *</Label>
            <Input
              placeholder="e.g. ₹50,000 - ₹1,00,000"
              value={details.budget || ""}
              onChange={(e) =>
                updateDetails("budget", e.target.value)
              }
            />
          </div>

          <div>
            <Label className="mb-2">Services Required *</Label>
            <Textarea
              placeholder="Planning, vendor management, coordination..."
              value={details.services || ""}
              onChange={(e) =>
                updateDetails("services", e.target.value)
              }
            />
          </div>
        </div>
      )}

      {/* PERFORMER */}
      {form.hireType === "performer" && (
        <div className="space-y-6">
          <div>
            <Label className="mb-2">Performance Type *</Label>
            <Input
              placeholder="DJ, Singer, Band, Anchor..."
              value={details.performanceType || ""}
              onChange={(e) =>
                updateDetails("performanceType", e.target.value)
              }
            />
          </div>

          <div>
            <Label className="mb-2">Performance Duration *</Label>
            <Input
              placeholder="e.g. 2 hours"
              value={details.duration || ""}
              onChange={(e) =>
                updateDetails("duration", e.target.value)
              }
            />
          </div>

          <div>
            <Label className="mb-2">Additional Notes</Label>
            <Textarea
              placeholder="Preferred language, genre, equipment..."
              value={details.notes || ""}
              onChange={(e) =>
                updateDetails("notes", e.target.value)
              }
            />
          </div>
        </div>
      )}

      {/* CREW */}
      {form.hireType === "crew" && (
        <div className="space-y-6">
          <div>
            <Label className="mb-2">Crew Role *</Label>
            <Input
              placeholder="Sound technician, lighting assistant..."
              value={details.role || ""}
              onChange={(e) =>
                updateDetails("role", e.target.value)
              }
            />
          </div>

          <div>
            <Label className="mb-2">Number of Crew Members *</Label>
            <Input
              type="number"
              placeholder="e.g. 4"
              value={details.count || ""}
              onChange={(e) =>
                updateDetails("count", e.target.value)
              }
            />
          </div>

          <div>
            <Label className="mb-2">Shift Duration</Label>
            <Input
              placeholder="e.g. 6 hours"
              value={details.shift || ""}
              onChange={(e) =>
                updateDetails("shift", e.target.value)
              }
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-10">
        <Button variant="outline" onClick={onBack}>
          ← Back
        </Button>

        <Button
          onClick={onNext}
          disabled={!isValid}
          className="bg-orange-500 hover:bg-orange-600 px-8 disabled:opacity-50"
        >
          Next Step →
        </Button>
      </div>
    </>
  );
}
