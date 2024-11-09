import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Page() {
  const [code, setCode] = useState(['-', '-'])
  const router = useRouter()

  const onKeyPress = key => {
    if (key === '<') {
      setCode(prev => {
        if (prev[1] !== '-') {
          return [prev[0], '-']
        }
        return ['-', '-']
      })
    } else {
      setCode(prev => {
        if (prev[0] === '-') {
          return [key, '-']
        }
        if (prev[1] === '-') {
          return [prev[0], key]
        }
        return prev
      })
    }
  }

  const onEnterPress = () => {
    if (['09', '10', '11', '12'].includes(code.join(''))) {
      router.push('/broda')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen p-10'>
      <p className='mb-10'>Ile CM ma broda Adiego</p>
      <div className='tracking-[1em] text-2xl text-red-700 mb-20 text-center'>
        {code.join('')}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div
          onClick={() => onKeyPress('1')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          1
        </div>
        <div
          onClick={() => onKeyPress('2')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          2
        </div>
        <div
          onClick={() => onKeyPress('3')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          3
        </div>
        <div
          onClick={() => onKeyPress('4')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          4
        </div>
        <div
          onClick={() => onKeyPress('5')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          5
        </div>
        <div
          onClick={() => onKeyPress('6')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          6
        </div>
        <div
          onClick={() => onKeyPress('7')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          7
        </div>
        <div
          onClick={() => onKeyPress('8')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          8
        </div>
        <div
          onClick={() => onKeyPress('9')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          9
        </div>
        <div
          onClick={() => onKeyPress('<')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          <span>{'<'}</span>
        </div>
        <div
          onClick={() => onKeyPress('0')}
          className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all aspect-square w-20 flex justify-center items-center'
        >
          <span>0</span>
        </div>
      </div>

      <div
        onClick={onEnterPress}
        className='bg-gray-950 text-red-700 text-lg font-semibold active:bg-red-950 transition-all w-4/5 p-5 mt-20 flex justify-center items-center'
      >
        ENTER
      </div>
    </div>
  )
}
