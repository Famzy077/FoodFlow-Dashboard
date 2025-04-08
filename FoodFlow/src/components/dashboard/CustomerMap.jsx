import BarChart from "../charts/BarChart";
import MapPin from "../shapeDisplays/MapPin";
import PeriodFilter from "./PeriodFilter";

export default function CustomerMap() {
  return (
    <div className="w-[60%] flex flex-col gap-5 border rounded-md h-[300px] border-zinc-300 p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <MapPin/>
                <h2>Customer Map</h2>
              </div>
              <PeriodFilter/>
            </div>

                <div className="w-full h-full mb- relative">
                  <BarChart/>
                </div>
          </div>
  )
}
