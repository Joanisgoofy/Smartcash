import React from 'react'
import { service } from '../components/export';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Logo.webp'
import '../App.css'
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <Link to="/services">Products & Services</Link>
          <Link to="">Locate an Agent</Link>
          <Link to="">Help & Support</Link>
          <Link to="">About Us</Link>
          <Link to="/agent">Become an Agent</Link>
        </div>
        <div className='cta'>
          <Link to="/login">
            <button>Login / Signup</button>
          </Link>
        </div>
      </header>
      <section id='services' className='lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>OUR SERVICES</h1>
          <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Top real estate <br /> services available</h1>
        </div>

        <div id='service-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {
            service.map((item, index) => (
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer'>
                <div className='p-6 rounded-full bg-red-200'>
                  <item.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                </div>

                <h1 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                <p className='text-lg text-slate-700 dark:text-white'>{item.desc}</p>
                
              </div>
            ))
          }
        </div>
      </section>
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
    </>
  )
}

export default Services