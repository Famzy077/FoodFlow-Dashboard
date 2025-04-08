
export default function SquareDisplay({content, size='w-8 h-8',bg='',border='', rounded='rounded-md', color='text-white', justify='justify-center'}) {
  return (
    <div className={`${size} ${bg} ${border} ${rounded} ${color} flex items-center ${justify}`}>{content}</div>
  )
}
