import Image from "next"
//Rain next {duration}: {precipitation_amount} {unit}
function RainNextHours({symbol, precipitation_amount, duration, unit}) {
  return (
    <div className=" text-white"> 
     <img className="h-25 w-25" src={`http://localhost:3000/weather/svg/${symbol}.svg`} alt={precipitation_amount}/> 
     <h3 className="text-white">Hidsafdsfadsfdafds</h3>
     
    </div>
  )
}
export default RainNextHours