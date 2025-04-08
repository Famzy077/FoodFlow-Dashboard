import AuthCoverImage from "@/components/auth/AuthCoverImage";

export default function RootLayout({ children }) {
    return (
          <div className="w-full flex h-screen">
            <div className="w-1/2">
                <AuthCoverImage/> 
            </div>

            <div className="w-1/2 px-20 py-10 flex flex-col gap-8 overflow-y-scroll scrollbar-none">
                {children}
            </div>

          </div>
    );
  }