import React from "react";
import me from "../assets/linkedin-photo.png";

function Home() {
  return (
    <div>
    <div className="row">
    <div className="col-md-1" />&gt;
    <div className="col-md-10">
      <div className="card">
        <h4>About Me</h4>
      </div>
      <section>
        {/* need to figure out how to space out the picture from the text */}
        <img src={me} alt="Garrett" width="300px;" height="330px" align="left"
          className="Garrett" />
        {/* updated about me to add personalized details */}
        <p>
          Hi - Nice to meet ya! My name is Garrett Steed and I would invite you to read on to learn more about who I am.
        </p>
        <p>
          My current position entails managing the billing and execution of various multi-tiered projects at one time,
          while maintaining open lines of communication with my marketing counterparts as Adobe. I am responsible for
          strategically organizing upcoming campaigns, with a focus on building and maintaining the loyalty of both our
          end customers and partners. Over the past two years, I have contributed to a successful sales and marketing
          arm and would cherish th ability to build on my experience with my new coding skills. </p>
        <p>
          I am a problem-solver, a self-motivated and a team player. Client satisfaction has driven me to successfully
          contribute
          to the business development of both the After-Sales and Sales accounts. I know how important business
          development and relationship building is to every successful organization.
        </p>
      </section>
      </div>
      </div>
   
  </div>
    
  );
}

export default Home;