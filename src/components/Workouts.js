import React from "react";
import { workouts } from "../data";
import WorkoutSlider from "../components/WorkoutSlider";
// destructure workouts data
const { title, icon } = workouts;
const Workouts = () => {
  return (
    <section className="section">
      {/* section title */}
      <div className="section-title-group mx-w-[540px] mx-auto px-4 lg:px-0" >
      {/* <div className="section-title-group mx-w-[540px] mx-auto px-4 lg:px-0" data-aos='fade-up' data-aos-delay='200'> */}
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <WorkoutSlider  />
      {/* <WorkoutSlider data-aos='fade-up' data-aos-delay='300' /> */}
    </section>
  );
};

export default Workouts;
