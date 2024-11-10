import Image from "next/image"

export default function Skill(){
    return(
        <main className="w-full h-full md:h-full  bg-white flex justify-center items-center my-10 md:my-20 max-w-screen-2xl mx-auto p-5 pb-12">
            <div className="w-[100%] md:w-[90%] h-[80%] flex flex-col justify-start items-center gap-y-10">
                        <div className=" flex flex-col justify-center items-center ">
                            <div className="bg-gray-200  text-gray-500 w-[75px] h-[30px] rounded-xl flex justify-center items-center ">Skills</div>
                             <p className="text-gray-500 font-serif pt-4 text-center text-xs md:text-lg">The skills, tools and technologies I am really good at:</p>
                        </div> 
                      <div className=" flex flex-wrap justify-center items-center gap-y-8 gap-x-5 md:gap-x-14 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-28">
                     
                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-javscript.svg"}
                       className="w-[80px] h-[80px] cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-javascript"></Image>
                       <span className="text-gray-500">Javascript</span>
                      </div>
                       

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-typescript.svg"}
                        className="w-[80px] h-[80px] cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-typescript"></Image>
                       <span className="text-gray-500">Typescript</span>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-react.svg"}
                        className="w-[80px] h-[80px] hover:rotate-90 cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-typescript"></Image>
                       <span className="text-gray-500">React</span>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-nextjs.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-nextjs"></Image>
                       <span className="text-gray-500">Next.js</span>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-nodejs.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-nodejs"></Image>
                       <span className="text-gray-500">Node.js</span>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-nest.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-nest"></Image>
                       <span className="text-gray-500">Nest.js</span>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-tailwindcss.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-tailwindcss"></Image>
                       <span className="text-gray-500">Tailwindcss</span>
                      </div>
                       
                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-storybook.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-storybook"></Image>
                       <span className="text-gray-500">Storybook</span>
                      </div>

                       <div className="flex flex-col justify-center items-center">
                       <Image src={"/images/icon-git.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-git"></Image>
                       <span className="text-gray-500">Git</span>
                       </div>

                       <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-postgresql.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-postgresql"></Image>
                       <span className="text-gray-500">PostgreSQL</span>
                      </div>

                       <div className="flex flex-col justify-center items-center">
                       <Image src={"/images/icon-sass.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-sass"></Image>
                       <span className="text-gray-500">Sass/Scss</span>
                       </div>

                      <div className="flex flex-col justify-center items-center">
                      <Image src={"/images/icon-cypress.svg"}
                        className="w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-cypress"></Image>
                       <span className="text-gray-500">Cypress</span>
                      </div>

                     <div  className="md:hidden lg:block flex flex-col justify-center items-center">
                     <Image src={"/images/icon-express.svg"}
                      className="md:hidden lg:block w-[80px] h-[80px] cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-javascript"></Image>
                       <span className="text-gray-500">Express.js</span>
                     </div>
                      
                       <div className="md:hidden lg:block flex flex-col justify-center items-center">
                       <Image src={"/images/icon-figma.svg"}
                       className=" w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105"
                       width={100} height={100} alt="icon-javascript"></Image>
                       <span className="flex justify-center items-center text-gray-500">Figma</span>
                       </div>

                        <div  className="md:hidden flex flex-col justify-center items-center">
                        <Image src={"/images/icon-socket.svg"}
                        className="md:hidden w-[80px] h-[80px]  cursor-pointer transition-transform duration-500 hover:scale-105 "
                       width={100} height={100} alt="icon-socket"></Image> 
                       <span className="text-gray-500">Socket.io</span>
                        </div>

                </div>
            </div>
        </main>
    )
}

// complte 