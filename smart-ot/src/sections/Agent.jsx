import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Logo.webp'
import '../App.css'
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const Agent = () => {
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
                    <Link to="/about">About Us</Link>
                    <Link to="/agent">Become an Agent</Link>
                </div>
                <div className='cta'>
                    <Link to="/login">
                        <button>Login / Signup</button>
                    </Link>
                </div>
            </header>
            <section id='agent' className=' w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>


                <form className="flex max-w-md flex-col gap-4">
                    <h1 className='text-black-500 dark:text-white text-5xl'>Becoming An Agent</h1>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Full Name" />
                            </div>
                            <TextInput id="email2" type="" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Mobile Number" />
                            </div>
                            <TextInput id="password2" type="password" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Email" />
                            </div>
                            <TextInput id="repeat-password" type="password" required shadow />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                {/* <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link> */}
                            </Label>
                        </div>
                    </div>
                    <Button type="submit">Register new account</Button>
                </form>
                <div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="NIN" />
                        </div>
                        <TextInput id="email2" type="" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="BVN" />
                        </div>
                        <TextInput id="password2" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput id="repeat-password" type="password" required shadow />
                    </div>

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

export default Agent