
export default function InitialsFormatter({name}) {
  return (
    <span>
        {name?.split(' ').map((x=>x.slice(0,1))).slice(0,2).join('').toUpperCase()}
    </span>
  )
}
