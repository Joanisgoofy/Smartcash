import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";


const Agent = () => {
    return (
        <>
         <section id='agent' className=' w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
         <form className="flex max-w-md flex-col gap-4">
         <h1 className='text-black-500 dark:text-white text-5xl'>Becoming An Agent</h1>
              <div>
              <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Full Name" />
                    </div>
                    <TextInput id="email2" type=""  required shadow />
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
                    <TextInput id="email2" type=""  required shadow />
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
        </>
    )
}

export default Agent