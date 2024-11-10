import Image from "next/image"

export default function About(){
    return(
        <main className="w-full h-full   flex  justify-start items-center mb-14 md:my-10 max-w-screen-2xl mx-auto ">
                    
                     <div className="w-[90%] bg-yellw-200 flex flex-col md:flex-row  ">
                        {/* left */}
                        <div className=" md:w-[50%] flex justify-center items-start">
                            <Image src={"/images/about-pics.png"}
                            alt="hero"
                            className="w-[200px] md:w-[320px]"
                            width={100}
                            height={100}
                            ></Image>
                        </div>
                        {/* right */}
                        <div className=" md:w-[50%] space-y-4 flex flex-col justify-center md:justify-start items-start pl-5 ">
                        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-serif font-semibold ">A bit about me:</h1>
                        <p className="text-gray-500">I&apos;m a full-stack developer passionate about bringing digital experiences to life through clean, efficient code and pixel-perfect design. Specializing in React.js and Node.js, I prioritize user experience and performance in every project.</p>
                            <p className="text-gray-500">Since starting my journey in 2022, I&apos;ve embraced modern technologies like Next.js, TypeScript, and Tailwind CSS to build robust web applications. I work as a full-time freelancer, driven by the excitement of bringing ideas to life from concept to launch.</p>
                            <p className="text-gray-500">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                            <p className="text-gray-500 ">When I&apos;m not in full-on developer mode, you can find me hovering around on Linkedin or on Facebook, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                            <p className="text-gray-500">Finally, a few quick bits about me:</p>
                            <ul className="text-gray-500 grid grid-cols-1 md:grid-cols-2 pl-5 space-y-1">
                                <li className="list-disc">B.E. in Computer Engineering</li>
                                <li className="list-disc md:ml-5">Avid learner</li>
                                <li className="list-disc">Full time freelancer</li>
                                <li className="list-disc md:ml-5">Aspiring indie hacker</li>
                            </ul>
                            <p className="text-gray-500">One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉</p>
                        </div>
                     </div>
                     
        </main>
    )
}

// complte 