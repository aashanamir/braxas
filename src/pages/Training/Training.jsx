import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import step1Video from "../../assets/training/Step_1.mp4";
import step2Video from "../../assets/training/Step_2.mp4";
import step3Video from "../../assets/training/Step_3_2.mp4";
import step4Video from "../../assets/training/Step_3.mp4";
import step5Video from "../../assets/training/Step_4.mp4";
import step6Video from "../../assets/training/Step_5.mp4";
import step7Video from "../../assets/training/Step_5_2.mp4";
import step8Video from "../../assets/training/Step_6.mp4";
import step9Video from "../../assets/training/Step_6_2.mp4";
import step10Video from "../../assets/training/Step_7.mp4";
import step11Video from "../../assets/training/Step_8.mp4";
import step12Video from "../../assets/training/Step_10.mp4";
import step13Video from "../../assets/training/Step_11.mp4";
import step14Video from "../../assets/training/Step_12.mp4";
import step15Video from "../../assets/training/Step_13.mp4";
import step16Video from "../../assets/training/Step_14.mp4";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Importing icons
import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const TrainingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const videoRef = useRef(null);

  // Video descriptions and titles for each step
  const videoDescriptions = {
    1: {
      title: "Step 1: Verification & Require Documents",
      description:
        "This step covers the verification process and the necessary documents needed for registration.",
    },
    2: {
      title: "Step 2: Ride Kesy Lein",
      description:
        "Learn how to start and complete a ride successfully with all the important steps included.",
    },
    3: {
      title: "Step 3: Peak Area Kya Hy",
      description:
        "Understand what peak areas are and how to take advantage of them to increase your earnings.",
    },
    4: {
      title: "Step 4: Chain Orders Kya Hy",
      description:
        "Find out what chain orders are and how to handle them effectively during high-demand hours.",
    },
    5: {
      title: "Step 5: Chain Orders Kya Hy",
      description:
        "Further exploration of chain orders and how they help with continuous trips.",
    },
    6: {
      title: "Step 6: Pro Level Kya Hy",
      description:
        "This section explains what it means to reach pro level and its benefits.",
    },
    7: {
      title: "Step 7: Pro Level Km kesy hota hy",
      description:
        "Understand how you can achieve pro level status and the requirements for doing so.",
    },
    8: {
      title: "Step 8: Goal Kesy Select Krein",
      description:
        "Learn how to set and achieve goals to maximize your earnings.",
    },
    9: {
      title: "Step 9: Agr Goal Pora Na Ho",
      description:
        "What happens if you don’t reach your goal? Learn how to manage and recover from setbacks.",
    },
    10: {
      title: "Step 10: Bonus Kesy Mily Ga",
      description:
        "Find out how bonuses are earned and how you can take advantage of them to increase your income.",
    },
    11: {
      title: "Step 11: Service Fees Kitni Hy",
      description:
        "Learn about the service fees and how they are calculated for each ride.",
    },
    12: {
      title: "Step 12: Apna Ilaqa Select Krein",
      description:
        "This step guides you through selecting your preferred area for rides.",
    },
    13: {
      title: "Step 13: Apna Map Set Krein",
      description:
        "Learn how to set up your map preferences and get accurate directions.",
    },
    14: {
      title: "Step 14: Support Sy Rabta Kesy Krein",
      description:
        "Need help? Learn how to reach support for any issues or questions.",
    },
    15: {
      title: "Step 15: Promo Codes Kya Hy",
      description:
        "Find out how promo codes work and how you can use them to save or earn more.",
    },
    16: {
      title: "Step 16: Conclusion",
      description:
        "Find out how promo codes work and how you can use them to save or earn more.",
    },
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentStep]);

  const getVideoSource = () => {
    switch (currentStep) {
      case 1:
        return step1Video;
      case 2:
        return step2Video;
      case 3:
        return step3Video;
      case 4:
        return step4Video;
      case 5:
        return step5Video;
      case 6:
        return step6Video;
      case 7:
        return step7Video;
      case 8:
        return step8Video;
      case 9:
        return step9Video;
      case 10:
        return step10Video;
      case 11:
        return step11Video;
      case 12:
        return step12Video;
      case 13:
        return step13Video;
      case 14:
        return step14Video;
      case 15:
        return step15Video;
      case 16:
        return step16Video;
      default:
        return step1Video;
    }
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNextStep = () => {
    if (currentStep < 16) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Complete Captain Training | Yango Partner Braxas Inernational
        </title>
      </Helmet>
      <Navbar />

      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Training Topics</h2>
          <ul className={styles.sidebarList}>
            {Object.keys(videoDescriptions).map((step) => (
              <li
                key={step}
                className={`${styles.sidebarItem} ${
                  currentStep === parseInt(step) ? styles.active : ""
                }`}
                onClick={() => handleStepClick(parseInt(step))}
              >
                {videoDescriptions[step].title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.content}>
          <h1 className={styles.title}>
            {videoDescriptions[currentStep].title}
          </h1>
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay
            loop
            controls
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={getVideoSource()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Navigation buttons */}
          <div className={styles.buttonContainer}>
            <button
              className={styles.navButton}
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
            >
              <FaArrowLeft className={styles.icon} /> Previous
            </button>
            <button
              className={styles.navButton}
              onClick={handleNextStep}
              disabled={currentStep === 16}
            >
              Next <FaArrowRight className={styles.icon} />
            </button>
          </div>

          {/* Dynamic description */}
          <p className={styles.description}>
            {videoDescriptions[currentStep].description}
          </p>
        </main>
      </div>
    </>
  );
};

export default TrainingPage;
