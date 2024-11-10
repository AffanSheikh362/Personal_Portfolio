import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  

export default function Header(){
    return(
        <header className="w-full h-[60px] bg-white flex justify-between items-center px-2 md:px-10 max-w-screen-2xl mx-auto">
            {/* logo */}
            <div>
                <h1 className="text-2xl font-bold">{"AFFAN SHEIKH"}</h1>
            </div>
            {/* nav links */}
            <ul className="hidden md:block">
                <li className="space-x-5">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/projects"}>Projects</Link>
                  <Link href={"/contact"}>Contact</Link>
              <button className="bg-slate-950 px-5 py-2 rounded-[10px] text-white font-[400] transition-transform duration-500 hover:scale-105">Download CV</button>
                </li>
            </ul>
           
            
            <Sheet>
              <SheetTrigger className="md:hidden">
              <Menu className="text-2xl"/>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Affan Sheikh</SheetTitle>
                  <ul>
                <li className="flex flex-col space-y-6">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/projects"}>Projects</Link>
                  <Link href={"/contact"}>Contact</Link>
                  <button className="bg-slate-900  py-2 rounded-[10px] text-white font-[400] ">Download CV</button>
                </li>
               
            </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>

        </header>
    )
}