import React from 'react'

function Result() {
    return (
        <section className='text-center bg-gradient-to-t from-LightRoyalBlueBg to-LightSlateBlueBg p-4 rounded-b-[5%] lg:rounded-[5%] lg:w-[40%] lg:ml-[10%] lg:mt-[20%]'>
            <h2 className='text-LightLavender font-bold'>Your Result</h2>

            <div className="score w-[48%] mx-auto my-4 p-[10%] rounded-full bg-VioletBlueCir">
                <h1 className='text-White font-extrabold my-[10%] text-[200%]'>76</h1>
                <p className='text-LightLavender'>of 100</p>
            </div>

            <h3 className='text-LightLavender font-bold text-[150%]'>Great</h3>

            <p className='text-LightLavender'>You scored higher than 65% of the people who have taken these tests.</p>
        </section>
    )
}

export default Result;