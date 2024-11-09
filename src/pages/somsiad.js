import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-10'>
      <p>Szukaj tam, gdzie nasze słońce narodu ćwiczy swoją muskulaturę</p>
      <Image
        className='mt-10'
        src='/images/muscle.jpeg'
        alt='muscleadi'
        width={300}
        height={300}
      />
    </div>
  )
}
