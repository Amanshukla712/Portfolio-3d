import React from "react";
import {inViewHandler} from "../animationHandler";
import {motion, useAnimation} from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import emailjs from "emailjs-com"
// import { EmailJSResponseStatus } from "@emailjs/browser";

export const Contact =() =>{
    const animation = useAnimation();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");
    const [emailStatus, setEmailStatus] = useState("");

    const sendEmail =(e) => {
        e.preventDefault();
        if(!name || !email || !subject || !message){
            setEmailStatus("empty");
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result)=>{
            console.log(result.text);
            setEmailStatus("success")
        },
        (error) => {
            console.log(error.message)
            
        });
    }

    return (
        <InView onChange={(inView) => inViewHandler(inView,animation)}>
            <section id ="contact" className="section bg-primary">
                <motion.div
                className="container mx-auto"
                initial={{opacity:0, scale: 0.5}}
                animate={animation}>
                    <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                        <form onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px">
                            <div className="flex gap-8">
                                <input className="input" 
                                type="text" name="name" placeholder="Your name" 
                                value={name} 
                                onChange={(e)=> setName(e.target.value)}
                                />
                                <input className="input" 
                                type="email" name="email" placeholder="Your email" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                                
                            </div>
                            <input className="input" 
                                type="text" name="subject" placeholder="What's the Subject" 
                                value={subject} 
                                onChange={(e)=> setSubject(e.target.value)}
                                />
                            <textarea className="input" 
                            placeholder="Your Message" 
                            name="message"
                            value={message} 
                            onChange={(e)=> setMessage(e.target.value)}
                            />
                            <button className="btn btn-lg bg-blue-700 hover:bg-blue-900 ">
                                Send Message
                            </button>
                        </form>
                        <div className="flex flex-col">
                            <h1 className="section-title text-5xl">Contact me</h1>
                            <p className="text-lg text-gray-200 mt-4 max-w-md">
                                I'm always eagerly waiting to hear about new projects. So, feel free
                                to send me a message, and lets discuss how we can cooperate together..
                                🙂
                            </p>
                        </div>
                    </div>
                    <div className="email-status mt-4">
                        {emailStatus === "success" && (
                            <p className="text-green-400">
                                Email sent successfully!!
                            </p>
                        )}

                        {emailStatus === "empty" && (
                            <p className="text-yellow-400">
                                Please fill in all the details in respective fields before submitting..
                            </p>
                        )}
                    </div>
                </motion.div>
            </section>
        </InView>
    );
};