import Image from "next/image"

export default function Testimonials(){
    return(
        <main className=" w-full h-full md:h-full  flex justify-center items-center my-10  max-w-screen-2xl mx-auto p-5 pb-12">
            <div className=" w-full h-full md:w-[90%] md:h-[80%] flex flex-col justify-start items-center gap-y-10">
                     <div className="flex flex-col justify-center items-center ">
                            <div className="bg-gray-200  text-gray-500 w-[110px] h-[30px] rounded-xl flex justify-center items-center ">Testimonials</div>
                             <p className="text-gray-500 font-serif pt-4 text-sm md:text-lg">Nice things people have said about me:</p>
                      </div> 

                     <div className=" w-full md:w-full md:h-[100%] flex flex-col md:flex-row justify-center items-center md:items-start gap-x-4 gap-y-8">
                       {/* box 1 */}
                       <div className="bg-white shadow-md rounded-xl w-[330px] md:w-[350px] p-5 space-y-4 lg:h-[400px] flex flex-col justify-start items-center cursor-pointer transition-transform duration-500 hover:scale-105">
                         <Image src={"/images/Mark-Zuckerberg.jpg"}
                         className="w-[100px] h-[100px] rounded-full"
                         width={100} height={100} alt="Mark-Zuckerberg"></Image>
                         <p className="lg:text-center text-gray-500">Working with Affan has been a transformative experience. His expertise in web development and design is impressive, and his dedication to delivering quality work is unmatched.</p>
                          <h1 className="text-xl  font-[600]">Mark Zuckerberg</h1>
                          <span className="text-sm">founder & CEO of Facebook.</span>
                       </div>
                       {/* box 2 */}
                       <div className="bg-white shadow-md rounded-xl w-[330px] md:w-[350px]  p-5 space-y-4 lg:h-[400px] flex flex-col justify-start items-center cursor-pointer transition-transform duration-500 hover:scale-105">
                         <Image src={"/images/ambani.jpg"}
                         className="w-[100px] h-[100px]  rounded-full"
                         width={100} height={100} alt="ambani"></Image>
                         <p className="lg:text-center text-gray-500">Affan&apos;s creativity and innovation are outstanding. He consistently delivers results that exceed expectations, and his attention to detail is remarkable.</p>
                          <h1 className="text-xl font-[600] pt-7">Mukesh Ambani</h1>
                          <span className="text-sm"> CEO of Reliance Industries.</span>
                       </div>
                       {/* box 3 */}
                       <div className="bg-white shadow-md rounded-xl w-[330px] md:w-[350px]  p-5 space-y-4 lg:h-[400px] flex flex-col justify-start items-center cursor-pointer transition-transform duration-500 hover:scale-105">
                         <Image src={"/images/Bill-Gates.jpg"}
                         className="w-[100px] h-[100px]  rounded-full"
                         width={100} height={100} alt="avatar"></Image>
                         <p className=" lg:text-center text-gray-500">Affan is a true professional with a strong understanding of technology and development. His contributions have been invaluable, and his work ethic is exemplary.</p>
                          <h1 className="text-xl  font-[600] pt-2">Bill Gates</h1>
                          <span className="text-sm">CEO of Microsoft</span>
                       </div>
                      </div>
            </div>
        </main>
    )
}

// complte 