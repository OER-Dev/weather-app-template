import HeaderYr from "@/components/HeaderYr"
import ListWeather from "@/components/ListWeather"



type PageProps = {
  params: {
    id: string
  }
}

// fetching search data 
const fetchPlaces = async ({id}: any) => {
  let key = process.env.GOOGLE_API_KEY;
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${id}&key=${key}`;
  const res = await fetch(url);
  const list = await res.json();
  
  return list;

} 
  
async function MySpotPage({params: {id}}: PageProps) {
  const mySpot = await fetchPlaces({id});
  

  let feedback = "not working";
  if(mySpot.status == "ZERO_RESULTS") {
    feedback="Not working...."
     
  } else {
     feedback = "Showing results for:"
  }
  
  return (
    <div className="text-center">
    <HeaderYr />
        <div>{feedback} {mySpot?.results[0]?.formatted_address} </div>
        <ListWeather status={mySpot.status} lat={mySpot?.results[0]?.geometry.location.lat} lng={mySpot?.results[0]?.geometry.location.lng} />
           
    </div>
  )
}

export default MySpotPage