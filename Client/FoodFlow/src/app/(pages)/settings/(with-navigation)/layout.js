// import SettingsLayout from "../components/layouts/settingsLayout";

import SettingsLayout from "@/components/layouts/SettingsLayout";

export default function RootLayout({ children }) {
    
  return (
    <div className="flex mx-6 mb-6 h-[90vh] rounded-md shadow-md pr-4 pb-8 pl-2">
        <SettingsLayout/>
        <div className="w-full h-full pt-2 px-8 flex flex-col overflow-y-scroll">{children}</div>
    </div>
  )
}