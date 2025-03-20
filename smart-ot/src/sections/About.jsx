import { useState } from "react";
import Logo from '../assets/Logo.webp'
import '../App.css'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="about" >
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <Link to="/services">Products & Services</Link>
          <Link to="">Locate an Agent</Link>
          <Link to="">Help & Support</Link>
          <Link to="/about">About Us</Link>
          <Link to="/agent">Become an Agent</Link>
        </div>
        <div className='cta'>
          <Link to="/login">
            <button>Login / Signup</button>
          </Link>
        </div>
      </header>
      <div className="p-5">
        <section className="ml-10">
          <div className="mb-4">
            <h3 className="text-black-500 font-bold text-3xl">ABOUT US</h3>
          </div>

          <div>
            <h4>
              <span className="font-bold">SMART-OT</span> is a leading and
              innovative Payment Service Bank with an overarching vision of
              bridging the financial <br></br> divide by providing rural and urban
              Nigerians secured and reliable banking services as well as
              supporting the <br></br> Central Bank of Nigeria’s (CBN) drive to ensure
              financial inclusion for every Nigerian. With its corporate <br></br>
              headquarters in Lagos, Nigeria, Smart-OT’s overarching objective is
              to ensure financial inclusion for everyone <br></br> including persons in the
              furthest and remotest parts of Nigeria.
            </h4>
          </div>
        </section>

        <section
          className={` ml-5 font-bold text-2xl mt-20 inline-block border-b-2 pb-3 cursor-pointer ${isClicked ? "text-red-500 border-b-red-500" : ""
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
              Central Bank <br></br> of Nigeria to actualize its financial inclusion goal
              for every Nigerian, especially the <br></br> unbanked and underbanked.
              Smart-OT enables Person-to-Person payment <br></br> service (P2P) that allows
              individuals to send and receive money from anyone around <br></br> the globe
              through their mobile phones or at the nearest merchant shop outlet. <br></br>
              The primary purpose of Smart-OT is to deepen financial inclusion,
              appropriating <br></br> high-volume and low-value transactions in a safe,
              technology-driven environment.
            </h4>
          </div>
        </section>
      </div>

      <Footer id="help" container className='bg-black'>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='logo'>
              <h1 className='text-gray-400'>Smart-OT</h1>
              <img src={Logo} alt="Smart-OT Logo" width="100" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>

      </Footer>



    </div>
  );
};

export default AboutUs;
