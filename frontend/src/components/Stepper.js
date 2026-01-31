export default function Stepper({ step = 1 }) {
  const steps = [
    { id: 1, label: "Event Details" },
    { id: 2, label: "Who to Hire" },
    { id: 3, label: "Requirements" },
    { id: 4, label: "Review" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12 px-4">
      <div className="flex items-start justify-center">
        {steps.map((s, i) => {
          const active = step >= s.id;

          return (
            <div key={s.id} className="flex items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center
                    font-semibold
                    ${
                      active
                        ? "bg-orange-500 text-white"
                        : "border border-gray-300 text-gray-400 bg-white"
                    }
                  `}
                >
                  {s.id}
                </div>

                <span
                  className={`mt-2 text-xs md:text-sm whitespace-nowrap ${
                    step === s.id ? "text-black" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>

              {i !== steps.length - 1 && (
                <div className="flex items-center">
                  <div
                    className={`
                      w-10 md:w-20 h-px mx-2 mt-[18px]
                      ${step > s.id ? "bg-orange-500" : "bg-gray-200"}
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
