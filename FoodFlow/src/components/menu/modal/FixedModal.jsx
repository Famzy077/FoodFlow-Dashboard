
export default function FixedModal({children, onclick}) {
  return (
    <div
    onClick={onclick}
     className="fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 z-[999] flex justify-center items-center">
        {children}
    </div>
  )
}
