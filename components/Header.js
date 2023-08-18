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

const LICENSE_GDL = {
  "all": "All licenses",
  "cc-by-4.0": "CC BY 4.0",
  "cc-by-sa-4.0": "CC BY SA 4.0",
 
};
const CONTENT_TYPE_GDL = {
  all: "All content",
  video: "Video",
  game: "Game",
  book: "Book",
};



function Header() {
  const [license, setLicense] = useState("all");
  const [contentType, setContentType] = useState("all") ;
  const router = useRouter();

  return (
     
     <header className="max-w-3xl mx-auto pb-5 pl-2 pr-2"> 
      <div className="w-full md:max-w-2xl">
        <Link href="/">
          <h1 className="text-center pb-5 pt-8">Search GDL</h1>
        </Link>
      </div>
      <div className="w-full md:max-w-2xl">
        <form action={FormData =>{
          const searchTerm = FormData.get("searchTerm");
          
          const params = new URLSearchParams();
          if (!searchTerm) {
            return "No value provided";
          };

          if (license) params.set("license", license.toString());
          if (contentType) params.set("contentType", contentType.toString());

          router.push(`/search/${searchTerm}?${params.toString()}`)

        }}>
          <div className="flex items-center gap-2 w-full  ">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              
              <input type="text" name="searchTerm" placeholder="Search..." className="outline-none flex-1"/>
            </div>
            <SearchButton />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-4 pb-3 ">
            <SearchSelect onValueChange={value => setLicense(value)} 
            className="min-w-4" placeholder="License">
                {Object.entries(LICENSE_GDL).map(([key, value]) => (
                  <SearchSelectItem key={key} value={key}>
                      {value}
                  </SearchSelectItem>
                ))}
            </SearchSelect>
            <SearchSelect onValueChange={value => setContentType(value)}
            className="min-w-4" placeholder="Content type">
                {Object.entries(CONTENT_TYPE_GDL).map(([key, value]) => (
                  <SearchSelectItem key={key} value={key}>
                      {value}
                  </SearchSelectItem>
                ))}
            </SearchSelect>
          </div>
        </form>
      </div>
     </header>
     
  )
}

export default Header