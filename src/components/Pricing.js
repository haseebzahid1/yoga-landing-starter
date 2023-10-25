import React from 'react';
import { pricing } from "../data";
import PlanList from './PlanList';

const Pricing = () => {
  // destruction pricing data
  const { icon, title, plans } = pricing;

  return (
    <section className='section'>
      {/* section title */}
      <div className="section-title-group mx-w-[540px] mx-auto px-4 lg:px-0" >
      {/* <div className="section-title-group mx-w-[540px] mx-auto px-4 lg:px-0" data-aos='fade-up' data-aos-delay='200'> */}
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  )
};

export default Pricing;
