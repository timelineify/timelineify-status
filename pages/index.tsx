import type { NextPage } from 'next'
import Image from 'next/image'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"

const Home: NextPage = () => {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className="mt-20 absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10"></div>
      <div className="w-full h-40 absolute bg-light-#d6d6d6 dark:#ffffff dark:bg-black">
        <div className="mx-auto max-w-7xl mt-8  px-10 h-full bg-purple-500 dark:bg-black">
          <a href="https://timelineify.com">
          <Image src="/logo-black-text.png" width={235} height={45} className="w-40 h-16" alt="Tailwind Play" />

          </a>
        </div>
      </div>
      <div className='mt-20 w-full z-2'>
        <ServicesSection />
      </div >
    </div>
  )
}

export default Home;
