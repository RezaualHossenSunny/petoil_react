import React from 'react'

export const Picture = () => {
  return (
    <>
     <section>
        
        <div className=" md:flex ">
            <div className=" w-full md:w-1/4  mr-3.5 ">
                <div className="bg-p1 bg-no-repeat bg-cover bg-center py-28 "></div>

            </div>

            <div className=" w-full md:w-1/4 mr-3.5 ">
                <div className="bg-p2 bg-no-repeat bg-cover bg-center py-28 "></div>

            </div>
            
            <div className=" w-full md:w-1/4 mr-3.5 ">
                <div className="bg-p3 bg-no-repeat bg-cover bg-center py-28 "></div>

            </div>
            <div className="  w-full md:w-1/4 ">
                <div className="bg-p4 bg-no-repeat bg-cover bg-center py-28 "></div>

            </div>
         

           

        </div>

    
</section>
    </>
  )
}
