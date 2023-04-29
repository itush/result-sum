import React from 'react'
import resultData from "../data.json" assert {type: "json"};


function Sum() {
  return (
    <section className='p-4 lg:w-[40%] lg:mt-[20%] lg:ml-[%] lg:pl-[%] lg:rounded-r-[5%]  lg:shadow-[0_15px_90px_-15px_rgba(0,0,0,0.3)] lg:shadow-DarkGrayBlue'>
      <h1 className='font-bold my-4'>Summary</h1>

      <article className='flex justify-between p-2'>

        <div className="flex space-x-2">
          <img src={resultData[0].icon} alt="react" />
          <p className='text-LightRed font-semibold'>{resultData[0].category}</p>
        </div>

        <p className='font-bold'>{resultData[0].score}<span className='text-LightLavender'> / 100</span> </p>
      </article>

      <article className='flex justify-between p-2 my-4'>

        <div className="flex space-x-2">
          <img src={resultData[1].icon} alt="mem" />
          <p className='text-OrangeyYellow font-semibold'>{resultData[1].category}</p>
        </div>

        <p className='font-bold'>{resultData[1].score}<span className='text-LightLavender'> / 100</span> </p>
      </article>


      <article className='flex justify-between p-2'>
      <div className="flex space-x-2">
        <img src={resultData[2].icon} alt="verb" />
      <p className='text-GreenTeal font-semibold'>{resultData[2].category}</p>
      </div>
        
        <p className='font-bold'>{resultData[2].score}<span className='text-LightLavender'> / 100</span>  </p>
      </article>

      <article className='flex justify-between p-2 my-4'>
      <div className="flex space-x-2">
        <img src={resultData[3].icon} alt="vis" />
      <p className='text-CobaltBlue font-semibold'>{resultData[3].category}</p>
      </div>
        
        <p className='font-bold'>{resultData[3].score}<span className='text-LightLavender'> / 100</span> </p>
      </article>

      <button className='w-[100%] bg-DarkGrayBlue 
text-lg 
text-White 
font-bold 
py-2 
rounded-xl  
mx-auto 
mt-8  cursor-pointer hover:bg-LightRoyalBlueBg '>Continue</button>

    </section>
  )
}

export default Sum