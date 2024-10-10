import React from "react";
import styles from "./style.module.css";
import { FaUserPlus, FaClipboardList, FaCarSide } from "react-icons/fa"; // Icons for steps

const steps = [
  {
    stepNumber: "Step 1",
    title: "Sign Up",
    description: "Create an account with your basic details to get started.",
    icon: <FaUserPlus />,
  },
  {
    stepNumber: "Step 2",
    title: "Complete Profile",
    description: "Fill out your profile with personal and vehicle details.",
    icon: <FaClipboardList />,
  },
  {
    stepNumber: "Step 3",
    title: "Start Driving",
    description: "Get approved and start driving with Braxas International.",
    icon: <FaCarSide />,
  },
];

const RegistrationProcess = () => {
  return (
    <div className={styles.registrationProcess}>
      {steps.map((step, index) => (
        <div className={styles.stepContainer} key={index}>
          {/* Step Icon */}
          <div className={styles.iconContainer}>{step.icon}</div>
          
          {/* Step Content */}
          <div className={styles.stepContent}>
            <h2>{step.stepNumber}</h2>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          
          {/* Flow Arrow (if not the last step) */}
          {index < steps.length - 1 && (
            <div className={styles.arrow}>
              <span>&#x2192;</span> {/* Right arrow */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RegistrationProcess;
