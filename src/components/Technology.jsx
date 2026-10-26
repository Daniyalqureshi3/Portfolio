import React from 'react'

const Technology = () => {
  return (
    <div className='pt-20'>
<h1 className="font-Panchang text-2xl font-bold tracking-wide text-[#F5E6CC] drop-shadow-[0_0_14px_rgba(245,230,204,0.18)] transition-all duration-300 hover:text-[#FFE4B5] hover:drop-shadow-[0_0_20px_rgba(245,230,204,0.35)] sm:text-3xl md:text-5xl text-center">
  Technologies <span className="text-white/85">& Expertise</span>
</h1>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
    {/* ye mera first div hai jis mai tech on name aen gey is sey uper parent hai */}
    <div className="px-4 py-4 flex flex-col">
        <div className="flex gap-2"> 
            <div className="">logo</div>
            <div className="flex flex-col gap-2">
                <p>kjhkh</p>
                <p>fnekkkkk</p>
            </div>


      </div>

        <div className="flex flex-row flex-wrap ">
            {/* tech ke name */}
        </div>


    </div>

</div>
    </div>
  )
}

export default Technology
