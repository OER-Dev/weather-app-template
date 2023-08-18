"use client"
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { useState } from "react";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import { useRouter } from "next/navigation";


function Header() {
  const [license, setLicense] = useState("all");
  const [contentType, setContentType] = useState("all") ;
  const router = useRouter();

  return (
     
     <header className="max-w-3xl mx-auto pb-5 pl-2 pr-2"> 
      <div className="w-full md:max-w-2xl">
        <Link href="/">
          <h1 className="text-center pb-5 pt-8">Check the weather at your spot</h1>
        </Link>
      </div>
      <div className="w-full md:max-w-2xl">
        <form action={FormData =>{
          const searchTerm = FormData.get("searchTerm");
          
          const params = new URLSearchParams();
          if (!searchTerm) {
            return "No value provided";
          };

          router.push(`/myspot/${searchTerm}`)

        }}>
          <div className="flex items-center gap-2 w-full  ">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              
              <input type="text" name="searchTerm" placeholder="Search..." className="outline-none flex-1"/>
            </div>
            <SearchButton />
          </div>
        
        </form>
      </div>
     </header>
     
  )
}

export default Header