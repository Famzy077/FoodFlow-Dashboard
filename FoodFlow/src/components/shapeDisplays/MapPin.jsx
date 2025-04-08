import Image from "next/image";
import mapPin from '/public/images/map-pin.png'

export default function MapPin() {
  return (
    <Image src={mapPin} alt="line-chart" width={8} height={2} quality={100}/>
  )
}
