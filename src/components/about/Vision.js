import React from 'react';

export default function Mission() {
    return (
        <div data-aos="fade-left" className="text-white pt-16 px-4 flex flex-col md:flex-row items-center justify-end gap-5">

            {/* Line with dot */}
            <div className="flex items-center">
                <div className="w-32 h-0.5 bg-red-500"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full ml-2"></div>
            </div>

            {/* Text Section */}
            <div className="w-[95%] md:w-[50%] flex flex-col">
                <h1 className="text-4xl font-bold text-red-500 flex justify-end">Vision</h1>
                <p className="text-lg mt-4 text-right">
                    Ensure the right selection of solutions, and ensure the right procedure
                    of application as part of a customer-focused approach and quest for
                    impeccable quality.
                </p>
            </div>
        </div>
    );
}
