import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function Work(){
    return(
        <main className="w-full h-full md:h-full  bg-white flex flex-col justify-center items-center mb-10  max-w-screen-2xl mx-auto p-5 pb-12 ">
            <div className="w-full h-full md:w-[90%] lg:w-full  md:h-[80%] flex flex-col justify-start items-center gap-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="bg-gray-200  text-gray-500 w-[75px] h-[30px] rounded-xl flex justify-center items-center ">Work</div>
                             <p className="text-gray-500 font-serif pt-4 text-center text-xs  md:text-lg">The skills, tools and technologies I am really good at:</p>
                        </div> 
                        {/* box 1*/}
                      <div className="w-full h-full  lg:w-[900px] xl:w-[900px] 2xl:w-[61%]  flex flex-col lg:flex-row  justify-between items-center lg:items-start  bg-white rounded-lg shadow-lg ">
                        {/* left side */}
                           <div className="w-[90%] h-full md:w-[450px] lg:h-[400px] bg-gray-100 flex justify-center pl-6 md:pl-0 items-center ">
                           <Link href={"https://github.com/AffanSheikh362/codealpha_Hangman"}>
                           <Image src={"/images/hangman.jpg"}
                            width={200}
                            height={200}
                            className="w-[90%] h-[90%]  md:w-[400px] md:h-[350px] rounded-xl  cursor-pointer transition-transform duration-500 hover:scale-105"
                            alt="Ecommerce-web"></Image> 
                            </Link>
                           </div>
                        {/* rigth side */}
                        <div  className="w-full h-full md:w-[450px] bg-white space-y-5  p-5 pl-8  flex flex-col justify-start items-start">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-sans">Hang Man Game</h1>
                             <p className="text-[16px] text-gray-600">A fast, responsive game built with python..</p>
                           <div className="flex flex-wrap gap-x-7 gap-y-2">
                           <div className="bg-gray-200  text-gray-600 w-[80px] h-[30px] rounded-xl flex justify-center items-center ">Python</div>
                           
                            </div>
                            <Link href={"https://github.com/AffanSheikh362/codealpha_Hangman"}><ExternalLink className=" cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>

                           </div>
                </div>
                {/* box 2 */}
                <div className="w-full h-full  lg:w-[900px] xl:w-[900px] 2xl:w-[61%]  flex flex-col lg:flex-row  justify-between items-center lg:items-start  bg-white rounded-lg shadow-lg ">
                        {/* left side */}
                           <div className="w-[90%] h-full md:w-[450px] lg:h-[400px] bg-gray-100 pl-6 md:pl-0 flex justify-center items-center ">
                           <Link href={"https://github.com/AffanSheikh362/Word_Counter"}>
                           <Image src={"/images/website-word-count.jpg"}
                            width={200}
                            height={200}
                            className="w-[90%] h-[90%]  md:w-[400px] md:h-[350px] rounded-xl  cursor-pointer transition-transform duration-500 hover:scale-105"
                            alt="Ecommerce-web"></Image> 
                            </Link>
                           </div>
                        {/* rigth side */}
                        <div  className="w-full h-full md:w-[450px] bg-white space-y-5  p-5 pl-8  flex flex-col justify-start items-start">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-sans">Word Counter</h1>
                          <p className="text-[16px] text-gray-600">A responsive project built with Typrscript and javascript for fast performance.</p>
                           <div className="flex flex-wrap gap-x-7 gap-y-2">
                           <div className="bg-gray-200  text-gray-600 w-[80px]  h-[30px] rounded-xl flex justify-center items-center ">Javascript</div>
                           
                           <div className="bg-gray-200  text-gray-600 w-[100px] h-[30px] rounded-xl flex justify-center items-center ">Typescript</div>
                          
                            </div>
                            <Link href={"https://github.com/AffanSheikh362/Word_Counter"}><ExternalLink className=" cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>

                           </div>
                           {/* box 2 complte */}
                </div>
                {/* box 3 */}
                <div className="w-full h-full  lg:w-[900px] xl:w-[900px] 2xl:w-[61%]  flex flex-col lg:flex-row  justify-between items-center lg:items-start  bg-white rounded-lg shadow-lg ">
                        {/* left side */}
                           <div className="w-[90%] h-full md:w-[450px] lg:h-[400px] bg-gray-100  pl-6 md:pl-0 flex justify-center items-center ">
                           <Link href={"https://github.com/AffanSheikh362/CodeAlpha_Basic_Chatbot"}>
                           <Image src={"/images/chatbot.png"}
                            width={200}
                            height={200}
                            className="w-[90%] h-[90%]  md:w-[400px] md:h-[350px] rounded-xl  cursor-pointer transition-transform duration-500 hover:scale-105"
                            alt="Ecommerce-web"></Image> 
                            </Link>
                           </div>
                        {/* rigth side */}
                        <div  className="w-full h-full md:w-[450px] bg-white space-y-5  p-5 pl-8  flex flex-col justify-start items-start">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-sans">Chat-Bot</h1>
                        <p className="text-[16px] text-gray-600">A fast, responsive Chat=Bot built with python..</p>
                           <div className="flex flex-wrap gap-x-7 gap-y-2">
                           <div className="bg-gray-200  text-gray-600 w-[80px]  h-[30px] rounded-xl flex justify-center items-center ">Python</div>
                          
                            </div>
                            <Link href={"https://github.com/AffanSheikh362/CodeAlpha_Basic_Chatbot"}><ExternalLink className=" cursor-pointer transition-transform duration-500 hover:scale-105"/></Link>

                           </div>
                           {/* box 3 complete */}
                </div>


            </div>
            
            <Link href={"https://www.linkedin.com/in/affan-sheikh-45b16a24b/"}
            className="md:text-xl font-sans mt-8 text-blue-500 flex"
            >View More Projects On My Linkedin Page<ExternalLink className="ml-2"/> </Link>
            
           
        </main>
    )
}

// complte 