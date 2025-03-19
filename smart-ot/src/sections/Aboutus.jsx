import { useState } from "react";

const AboutUs = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="about" className="p-5">
      <section className="ml-10">
        <div className="mb-4">
          <h3 className="text-black-500 font-bold text-3xl">ABOUT US</h3>
        </div>

        <div>
          <h4>
            <span className="font-bold">SMART-OT</span> is a leading and
            innovative Payment Service Bank with an overarching vision of
            bridging the financial divide by providing rural and urban
            Nigerians secured and reliable banking services as well as
            supporting the Central Bank of Nigeria’s (CBN) drive to ensure
            financial inclusion for every Nigerian. With its corporate
            headquarters in Lagos, Nigeria, Smart-OT’s overarching objective is
            to ensure financial inclusion for everyone including persons in the
            furthest and remotest parts of Nigeria.
          </h4>
        </div>
      </section>

      <section
        className={`flex ml-5 font-bold text-2xl mt-20 inline-block border-b-2 pb-3 cursor-pointer ${
          isClicked ? "text-red-500 border-b-red-500" : ""
        }`}
        onClick={() => setIsClicked(true)}
      >
        <p className="mx-4 inline-block">At A Glance</p>
        <p className="mx-4 inline-block">Our Values</p>
        <p className="mx-4 inline-block">Board of Directors</p>
      </section>

      <section className="ml-10 mt-10">
        <div>
          <h3 className="text-2xl font-bold mb-5">At A Glance</h3>

          <h4>
            SMART-OT was established in 2025 following the approval of the
            Central Bank of Nigeria to actualize its financial inclusion goal
            for every Nigerian, especially the unbanked and underbanked.
            Smart-OT enables Person-to-Person payment service (P2P) that allows
            individuals to send and receive money from anyone around the globe
            through their mobile phones or at the nearest merchant shop outlet.
            The primary purpose of Smart-OT is to deepen financial inclusion,
            appropriating high-volume and low-value transactions in a safe,
            technology-driven environment.
          </h4>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
