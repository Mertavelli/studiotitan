import Input from "./Input"
import React, { useState } from "react"
import Selection from "./Selection"
import Textarea from "./Textarea"
import DropDown from "./DropDown"
import emailjs from 'emailjs-com';

export default function ContactForm({ setIsSent }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [timeline, setTimeline] = useState("")
    const [selected, setSelected] = useState("");
    const [isActive, setIsActive] = useState({
        brand: false,
        website: false,
        artDirection: false,
        campain: false,
        other: false,
    });


    const handelSubmit = () => {
        const projectType = Object.entries(isActive)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
            .join(", ");

        const templateParams = {
            name: name,
            email: email,
            company: company,
            message: message,
            projectType: projectType,
            budget: selected,
            timeline: timeline
        };

        emailjs
            .send('service_1t378n1', 'template_yfh862v', templateParams, 'pOtCxHynpV6FTv_zj')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        setName("")
        setEmail("")
        setCompany("")
        setMessage("")
        setIsActive({})
        setSelected("")
        setTimeline("")
        setIsSent(true)

    }

    return (
        <div className="grid grid-cols-2 gap-10">
            <Input label={"YOUR NAME"} type={"text"} value={name} setValue={setName} />
            <Input label={"YOUR EMAIL"} type={"email"} value={email} setValue={setEmail} />
            <div className="col-span-2">
                <Input label={"COMPANY NAME"} type={"text"} value={company} setValue={setCompany} />
            </div>
            <div className="col-span-2">
                <Selection isActive={isActive} setIsActive={setIsActive} />
            </div>
            <div className="col-span-2">
                <Textarea label={"PROJECT DESCRIPTION"} placeholder={"Details About Your Project..."} value={message} setValue={setMessage} />
            </div>

            <DropDown selected={selected} setSelected={setSelected} />
            <Input label={"TIMELINE EXPECTATION"} type={"text"} value={timeline} setValue={setTimeline} />

            <button onClick={handelSubmit} className="col-span-2 rounded-xl border border-accent text-accent font-black p-5 text-2xl cursor-pointer hover:bg-accent hover:text-black transition-all">SHIP IT</button>

        </div>
    )
}