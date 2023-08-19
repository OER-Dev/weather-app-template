import Image from "next"
//Rain next {duration}: {precipitation_amount} {unit}
function RainNextHours({symbol, precipitation_amount, duration, unit}) {
  return (
    <div className=" text-white items-center "> 
      
      <img className="h-25 w-25 pb-2 pt-1" src={`http://localhost:3000/weather/svg/${symbol}.svg`} alt={precipitation_amount}/> 
      <h4 className="text-white">Hidsafdsfadsfdafds</h4>
     
    </div>
  )
}
export default RainNextHours