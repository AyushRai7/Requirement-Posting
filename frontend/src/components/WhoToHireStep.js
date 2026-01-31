"use client";

import { Button } from "@/components/ui/button";
import { User, Mic2, Users } from "lucide-react";

const options = [
  {
    id: "planner",
    title: "Event Planner",
    description: "Plan, manage and execute your event smoothly",
    icon: User,
  },
  {
    id: "performer",
    title: "Performer",
    description: "Artists, DJs, musicians, anchors and more",
    icon: Mic2,
  },
  {
    id: "crew",
    title: "Crew",
    description: "Technical, support, logistics or operations staff",
    icon: Users,
  },
];

export default function WhoToHireStep({ form, setForm, onNext, onBack }) {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Who do you want to hire?</h2>
        <p className="text-gray-500 mt-2">
          Select the type of professional you’re looking for
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((opt) => {
          const active = form.hireType === opt.id;
          const Icon = opt.icon;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() =>
                setForm({ ...form, hireType: opt.id })
              }
              className={`
                text-left border rounded-xl p-6 transition-all
                hover:border-orange-500 hover:shadow-md
                ${
                  active
                    ? "border-orange-500 bg-orange-50 shadow-md"
                    : "border-gray-200"
                }
              `}
            >
              <div
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center mb-4
                  ${active ? "bg-orange-500 text-white" : "bg-gray-100"}
                `}
              >
                <Icon size={20} />
              </div>

              <h3 className="font-semibold text-lg">{opt.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {opt.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-10">
        <Button variant="outline" onClick={onBack}>
          ← Back
        </Button>

        <Button
          onClick={onNext}
          disabled={!form.hireType}
          className="bg-orange-500 hover:bg-orange-600 px-8 disabled:opacity-50"
        >
          Next Step →
        </Button>
      </div>
    </>
  );
}
