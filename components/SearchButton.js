"use client"
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";


function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full disabled:opacity-50">
      {pending && "Searching..."}    
      {!pending && <MagnifyingGlassIcon className="h-5 w-5"/> }
    </button>
  )
}

export default SearchButton