import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='relative'>
        <Image src='/images/adi.jpg' alt='Adi' width={300} height={300} />
        <Image
          src='/images/tombstone.png'
          alt='Dove'
          width={100}
          height={100}
          className='absolute -bottom-10 -right-10'
        />
      </div>
      <p className='mt-20'>Spoczywaj w pokoju Adziczku</p>
      <Link href='first'>
        <Image src='/images/candle.gif' alt='Dove' width={100} height={100} />
      </Link>
    </div>
  )
}
