import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { Button } from './ui/moving-border'

function Cover(){
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 px-10'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="mt-40 md:mt-20 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Transforming People & Properties</h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptatibus reiciendis. Nesciunt animi eaque consectetur cum sint rem mollitia veniam, adipisci, eos corporis explicabo iste fugiat eligendi aliquam assumenda alias. Doloribus voluptatum, adipisci mollitia et voluptatibus explicabo iste odit sequi id quas vitae nihil incidunt fuga minima optio itaque ad?</p>

      <div className="mt-4">
        <Link href={"/all-services"}>
            <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>
                Expore Services 
            </Button>
        </Link>
      </div>
    </div>
  )
}

export default Cover

