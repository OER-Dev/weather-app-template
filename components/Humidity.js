import React from 'react'

function Humidity({relative_humidity, unit}) {
  return (
    <div>Humidity: {relative_humidity}{unit} </div>
  )
}
export default Humidity