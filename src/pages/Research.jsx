import React from "react";

const Research = () => {
    return (
        <section className='max-container'>
            <div className='flex flex-col h-full justify-center align-top'>
            <h1><span className='blue-gradient_text drop-shadow text-6xl font-bold'>Coming Soon</span></h1>
                <div className="flex flex-col pt-9">
                    <p className="pt-1">In the meantime, see latest from CLOUDS lab, University of Melbourne.</p>
                    <a className='underline text-blue-600 hover:text-blue-800 pt-3' href="https://cloudbus.org" target="_blank">
                        cloudbus.org
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Research;