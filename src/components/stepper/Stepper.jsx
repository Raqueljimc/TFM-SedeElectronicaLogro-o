import { useState } from "react";
import "./Stepper.css";

export default function Stepper({
  steps = [],
  initialStep = 1
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  return (
    <div className="stepper">

      <div className="stepper-row">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div
              key={index}
              className="step"
              onClick={() => setCurrentStep(stepNumber)}
            >

              {/* CÍRCULO + LÍNEA */}
              <div className="step-top">

                <div
                  className={`step-circle 
                    ${isCompleted || isActive ? "filled" : ""}`}
                >
                  {stepNumber}
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`step-line 
                      ${isCompleted ? "filled" : ""}`}
                  />
                )}

              </div>

              {/* TEXTO */}
              <div className="step-texts">
                <p
                  className={`step-title ${
                    isActive ? "active" : ""
                  }`}
                >
                  {step.title}
                </p>

                <p
                className={`step-description ${
                    isActive ? "active" : ""
                }`}
                >
                {step.description}
                </p>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}