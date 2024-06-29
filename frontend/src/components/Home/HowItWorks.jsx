import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Lavish Finds Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create your account today and unlock a world of job opportunities tailored to your skills and interests.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Explore thousands of job listings and find the perfect role that matches your skills and interests. 
              Reach qualified candidates by posting your job openings on our platform.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Take the next step in your career journey by applying for jobs that match your skills and aspirations.
              Find the perfect fit for your team by recruiting qualified candidates who match your company's needs and culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
