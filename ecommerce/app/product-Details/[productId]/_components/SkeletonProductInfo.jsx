import React from 'react'

export default function SkeletonProductInfo() {
  return (
  <>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">

<h1 className="sm: text-2xl font-bold bg-slate-200 animate-pulse text-slate-200 sm:text-3xl">skeleton title</h1>


<p className="my-2 text-sm font-medium bg-slate-200 animate-pulse w-[100px] text-slate-200">skelecategory</p>



 <div className="mt-5 flex items-center">
   <div className="flex items-center bg-slate-200 animate-pulse text-slate-200 w-[200px] h-[20px]">
   </div>
 </div>

 <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
 <div className="mt-3 flex select-none flex-wrap items-center gap-1">
   <label className="">
     <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
   </label>
   <label className="">
     <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
   </label>
   <label className="">
     <input type="radio" name="type" value="Groud" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
   </label>
 </div>

 <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
 <div className="mt-3 flex select-none flex-wrap items-center gap-1">
   <label className="">
     <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
     <span className="mt-1 block text-center text-xs">$80/mo</span>
   </label>
   <label className="">
     <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
     <span className="mt-1 block text-center text-xs">$60/mo</span>
   </label>
   <label className="">
     <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
     <span className="mt-1 block text-center text-xs">$40/mo</span>
   </label>
 </div>

 <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
   <div className="flex items-end">
  
          <h1 className="text-3xl font-bold bg-slate-200 animate-pulse text-slate-200 h-[50px]">
    skeleprice
     </h1>
 

   </div>



      <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent  bg-slate-200 animate-pulse w-[200px] h-[60px] text-slate-200">
skelebutton
   </button>

 </div>

 <ul className="mt-8 space-y-2">
   <li className="flex items-center text-left text-sm font-medium bg-slate-200 animate-pulse w-[250px] h-[20px] text-slate-200">
   
   skeleadvantage
   </li>

   <li className="flex items-center text-left text-sm font-medium bg-slate-200 animate-pulse w-[200px] h-[20px] text-slate-200">
   
   skeleadvantage
   </li>
 </ul>
</div>


   <div className="lg:col-span-3">
     <div className="border-b border-gray-300">
       <nav className="flex gap-4">
         <p className="hover:cursor-pointer border-b-2 border-gray-900 py-4 text-sm font-medium  bg-slate-200 animate-pulse w-[100px] h-[50px] text-slate-200">
     skeledescrib
          </p>

        
       </nav>
     </div>

     <div className="mt-8 flow-root sm:mt-12">
       <h1 className="text-3xl font-bold bg-slate-200 animate-pulse text-slate-200">headerskeletop</h1>
       <p className="mt-4 bg-slate-200 animate-pulse text-slate-200">describtion skeleton describtion skeleton describtion skeleton describtion skeleton</p>

       <h1 className="mt-8 text-3xl bg-slate-200 animate-pulse text-slate-200">skelerow</h1>
       <p className="mt-4 bg-slate-200 animate-pulse text-slate-200">skelerowwwwwwsssssssswwwwwwwww</p>
     
     </div>
   </div>
  </>
  )
}
