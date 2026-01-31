"use client";

import { useState } from "react";
import Stepper from "@/components/Stepper";
import ContainerCard from "@/components/ContainerCard";
import EventDetailsStep from "@/components/EventDetailsStep";
import AnimatedStep from "@/components/AnimatedSteps";
import WhoToHireStep from "@/components/WhoToHireStep";
import RequirementsStep from "@/components/RequirementsStep";
import ReviewStep from "@/components/ReviewStep";

export default function Page() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});

  return (
    <div className="min-h-screen bg-linear-gradient-to-b from-white to-gray-50 py-14">
      <h1 className="text-3xl font-bold text-center">
        Post Your Event Requirement
      </h1>
      <p className="text-center text-gray-500 my-2">
        Find the perfect professionals for your event
      </p>

      <Stepper step={step} />

      <div className="max-w-4xl mx-auto">
        <ContainerCard>
          <AnimatedStep stepKey={step}>
            {step === 1 && (
              <EventDetailsStep
                form={form}
                setForm={setForm}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <WhoToHireStep
                form={form}
                setForm={setForm}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {step === 3 && (
              <RequirementsStep
                form={form}
                setForm={setForm}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            )}

            {step === 4 && (
              <ReviewStep form={form} onBack={() => setStep(3)} />
            )}
          </AnimatedStep>
        </ContainerCard>
      </div>
    </div>
  );
}
