import SearchInput from "../../../components/form-inputs/SearchInput";
import Calendar from "../../../components/dashboard/Calendar";
import DisplayTotals from "../../../components/dashboard/DisplayTotals";
import OrderSummary from "../../../components/dashboard/OrderSummary";
import CustomerMap from "../../../components/dashboard/CustomerMap";
import RecentOrderRequest from "../../../components/dashboard/RecentOrderRequest";
import TrendingMenus from "../../../components/dashboard/TrendingMenus";

export default function Page() {
  return(  
    <div className="flex flex-col pr-6 pb-8 pl-4">

      <div className="flex items-center justify-between">
        <div className="w-[400px]">
          <SearchInput
           bg="bg-white"
            border="border border-zinc-300"
            searchIconPos='top-2.5 right-8'
            pl='pl-2 pr-12'
             rounded="rounded-md"/>
        </div>
        <Calendar/>
      </div>

      <div className="mt-8 mb-4">
        <div className="flex gap-4 justify-between p-[1px]">
          <DisplayTotals/>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
          <OrderSummary/>
          <CustomerMap/>
      </div>

      <div className="flex gap-2 h-[200px]">
          <RecentOrderRequest/>
          <TrendingMenus/>
      </div>
  </div>
  )
}
