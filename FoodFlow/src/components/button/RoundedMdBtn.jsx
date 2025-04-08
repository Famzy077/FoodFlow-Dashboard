
export default function RoundedMdBtn({bg='bg-primary', height='h-8', color='white', border='border-0', borderColor='primary', content, width='w-40', size='sm', onclick, type='button'}) {
    return (
        <button
                type={type}
                onClick={onclick}
                className={`${width} ${height} ${bg} text-${color} rounded-md text-${size} ${border} border-${borderColor} `}>
                  {content}
            </button>
      )
    }
