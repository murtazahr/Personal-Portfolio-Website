import React from "react";
import {navigate} from "../assets/icons/index.js";

const Research = () => {
    return (
        <section className='max-container'>
            <div className='flex flex-col h-full justify-center align-top'>
            <h1><span className='blue-gradient_text drop-shadow text-6xl font-bold'>Coming Soon</span></h1>
                <div className="flex flex-row justify-normal align-top pt-9">
                    <p className="pt-1">In the meantime, see latest from CLOUDS lab, University of Melbourne</p>
                    <a  className="pl-4" href="https://cloudbus.org" target="_blank">
                        <img src="https://ibb.co/grmKqZr" alt="Icon" className='w-[32px] h-[32px]'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Research;