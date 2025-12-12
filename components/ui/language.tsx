import Image from 'next/image'
import Link from 'next/link'

const LanguageButton = () => {
  return (
    <Link href={"https://portfolio-sakab.vercel.app/"}>
        <div className='h-[25px] md:h-[30px] xl:h-[35px] w-[35px] md:w-[40px] xl:w-[45px] absolute top-8 right-6 rounded-md overflow-hidden hover:scale-120 transition-all'>
            <Image src={"/france.png"} alt='flag of france' fill></Image>
        </div>
    </Link>
  )
}

export default LanguageButton