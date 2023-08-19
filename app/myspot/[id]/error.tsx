"use client" // Error components must be Client Components
 import HeaderYr from "@/components/HeaderYr"
import Image from "next/image"
import { useEffect } from 'react';
import { Text } from "@tremor/react"; 

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <HeaderYr />
      <div className="flex flex-col items-center">
        
        <Text className="max-w-3xl text-center">Something went wrong! Search for another place.</Text>
        <Image className="object-contain" src="/404.svg" width={600} height={600} alt="404 illustration" />
          
        </div>
      
    </div>
  )
}