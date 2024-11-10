import { MapPin } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoLogoYoutube } from "react-icons/io5";

export default function Hero(){
    return(
        <main className="w-full h-full  md:h-[500px] bg-white flex justify-center items-center max-w-screen-2xl mx-auto relative">
           <div className="box-animation w-[200px] h-7 flex items-center justify-center bg-black absolute top-0 left-0 text-white font-serif ">Personal Portfolio</div>
           <div className="box2-animation w-[200px] h-7 flex items-center justify-center bg-black absolute bottom-0 right-0 text-white font-serif ">AI Developer</div>
            <div className="w-full md:w-[100%] h-[80%] flex flex-col md:flex-row justify-evenly items-center md:items-start">
                {/* left side */}
                <div className="mt-8 mb-5 mb md:mt-0 md:mb-0 relative ">
                <div className="-rotate-90 w-[200px] h-7 flex items-center justify-center bg-black absolute top-20 -left-24 md:-left20 text-white font-serif ">Student of Giaic</div>
                 <Image src={"/images/hero.png"}
                 width={200}
                 height={200}
                 className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-xl"
                 alt="profile-image"
                 ></Image>
                </div>
                {/* right side */}
                <div className="w-[80%] md:w-[50%] space-y-5 md:space-y-2 lg:space-y-6 pb-8">
                <h1 className="intro text-2xl md:text-3xl lg:text-4xl font-serif font-semibold relative shadow-glow">
                Hi, I&apos;m Affan Sheikh 👋
                </h1>
                  <p>I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                 <div className="space-y-2">
                 <span className="flex "><MapPin className="mr-2"/>Karachi, Pakistan</span>
                 <span className="flex items-center"><GoDotFill className="text-green-500 text-2xl  mr-2"/>Available for new projects</span>
                 </div>
                 <span className="flex items-center space-x-5 "><Link href={"https://github.com/AffanSheikh362"}><FiGithub className="text-gray-900 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link><Link href={"https://www.linkedin.com/in/affan-sheikh-45b16a24b/"}><FaLinkedin className="text-blue-700 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link><Link href={"https://www.youtube.com/@AIWeb3.0MetaverseTutionClasses"}><IoLogoYoutube className="text-red-500 text-2xl md:text-3xl cursor-pointer transition-transform duration-500 hover:scale-105"/></Link></span>
                 </div>
            </div>
        </main>
    )
}


// herro complte