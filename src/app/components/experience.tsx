

export default function Experience(){
    return(
        <main className="w-full h-full  flex justify-center items-center my-10 md:my-20 max-w-screen-2xl mx-auto p-5 pb-12">
            <div className="w-full md:w-[90%] h-[80%]  flex flex-col justify-start items-center gap-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="bg-gray-200  text-gray-500 w-[100px] h-[30px] rounded-xl flex justify-center items-center ">Experience</div>
                             <p className="text-gray-500 font-serif pt-4 text-center text-xs  md:text-lg">Here is a quick summary of my most recent experiences:</p>
                        </div> 
                      <div className="rounded-xl shadow-md w-full h-full md:w-[800px] lg:w-[800px] xl:w-[800px] bg-white  flex flex-col justify-start items-start md:items-center p-5 pl-8">
                       <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
                          <h2 className="text-2xl font-bold text-green-500">UPWORK</h2>
                          <h1 className="hidden md:block text-xl md:text-2xl font-bold text-gray-900 font-sans">Frontend Developer</h1>
                          <span className="text-sm text-gray-500">Nov 2023 - Present</span>
                          <h1 className=" md:hidden text-xl md:text-2xl font-bold text-gray-900 font-sans">Frontend Developer</h1>

                        </div>              
                        
                           <ul className="mt-2 md:mt-4 md:ml-32 space-y-3">
                           
                            <li className="list-disc pl-3">Developed and optimized responsive web applications using Next.js, Tailwind CSS, and React.js, ensuring seamless functionality across mobile and desktop devices.</li>
                            <li className="list-disc pl-3">Collaborated with clients to understand their vision and provided technical solutions, resulting in a 95% client satisfaction rate on Upwork.</li>
                            <li className="list-disc pl-3">Enhanced website performance by implementing best practices in coding and optimizing assets, reducing page load times by up to 30% and improving user experience.</li>
                        
                           </ul>
                         
                </div>
                {/* 2 box */}
                <div className="rounded-xl shadow-md w-full h-full md:w-[800px] lg:w-[800px] xl:w-[800px] bg-white  flex flex-col justify-start items-start md:items-center p-5 pl-8">
                       <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
                          <h2 className="text-2xl font-bold text-green-500">FIVERR</h2>
                          <h1 className="hidden md:block text-xl md:text-2xl font-bold text-gray-900 font-sans">Team Lead</h1>
                          <span className="text-sm text-gray-500">Feb 2024 </span>
                          <h1 className=" md:hidden text-xl md:text-2xl font-bold text-gray-900 font-sans">Team Lead</h1>

                        </div>              
                        
                           <ul className="mt-2 md:mt-4 md:ml-32 space-y-3">
                           
                            <li className="list-disc pl-3">Effectively led a diverse team of skilled freelancers, taking a proactive approach to managing project quality. Ensured all project milestones and deadlines were consistently met, delivering each task with a high standard of excellence and attention to detail.</li>
                            <li className="list-disc pl-3">Offered hands-on mentorship to team members, fostering skill development and securing high client satisfaction across all projects delivered.</li>
                            <li className="list-disc pl-3">Optimized workflow processes to enhance operational efficiency, achieving a 20% increase in productivity and smoother project execution.</li>
                        
                           </ul>
                         
                </div>
                {/* 3 BOX */}
                <div className="rounded-xl shadow-md w-full h-full md:w-[800px] lg:w-[800px] xl:w-[800px] bg-white  flex flex-col justify-start items-start md:items-center p-5 pl-8">
                       <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
                          <h2 className="text-2xl font-bold text-blue-500">LinkedIn </h2>
                          <h1 className="hidden md:block text-xl md:text-2xl font-bold text-gray-900 font-sans">Full Stack Developer</h1>
                          <span className="text-sm text-gray-500">Feb 2023 </span>
                          <h1 className=" md:hidden text-xl md:text-2xl font-bold text-gray-900 font-sans">Full Stack Developer</h1>

                        </div>              
                        
                           <ul className="mt-2 md:mt-4 md:ml-32 space-y-3">
                           
                            <li className="list-disc pl-3">Worked remotely as a Full Stack Developer, leveraging my expertise in modern web technologies to deliver high-quality, scalable solutions. Successfully collaborated with cross-functional teams to create responsive applications, optimize performance, and ensure seamless user experiences, demonstrating strong adaptability and communication skills in a remote work environment.</li>
                           
                        
                           </ul>
                         
                </div>
            </div>
        </main>
    )
}

// complte 