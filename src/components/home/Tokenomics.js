import React from 'react'
import img from "../../assets/img/TokenPie.svg";

export default function Tokenomics() {
    return (
        <section 
        id='tokenomics' 
        data-aos="flip-down"
        className='my-16 sm:px-1 lg:px-3'>
            <div className='px-3 mb-12 text-center'>
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-bold py-4 text-red1 '>
                     Tokenomics</h1>
                <p className='text-base text-gray-300'>The Community Crypto Incentive & Reward Program</p>
            </div>

            <div className='flex flex-col items-center justify-between md:flex-row'>
                {/* Right div for text */}
                <div className='w-full md:w-[50%] lg:w-[50%] flex flex-col gap-6'>
                    <p className='flex gap-1 text-3xl font-bold text-center text-gray-300 md:text-start'> <span className='text-red1'>$</span> R2PIP</p>
                    <h2 className='flex gap-1 px-1 py-5 text-2xl font-bold text-gray-300 md:text-4xl'>Total Supply <sapan className="ml-2 text-red1">100 Million</sapan></h2>

                    <p className='text-xl text-gray-300'> <span className='text-xl font-bold text-red1'> Buyers Fee:4%</span> {`(2% Reward to holders, 1% Marketing, 1% Dev)`}</p>
                    <p className='text-xl text-gray-300'> <span className='text-xl font-bold text-green-400'> Sellers Fee: 5%</span> {`(2% to holders, 1% Marketing, 1% Dev, 1% Buy Back)`}</p>

                </div>


                {/* Left div for image */}
                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <img src={img} alt='image' className='' />
                </div>
            </div>

        </section>
    )
}
