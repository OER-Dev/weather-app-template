import Card from "@tremor/react"

  function AirTemperature({air_temperature, unit}) {
    return (
      <div>Temp: {air_temperature} {unit}</div>
    )
  }
  
  export default AirTemperature