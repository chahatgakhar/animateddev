"use client"
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content =[
    {
        title: '5 ways on how to cope up with design trends',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum esse numquam sed velit id inventore repellat nulla iste doloremque reiciendis ea placeat animi totam expedita molestias ullam, officiis dolorem accusantium vel, provident aspernatur nostrum, repellendus nobis.',
    },
    {
        title: 'Trending designs to have at home that inspires',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum esse numquam sed velit id inventore repellat nulla iste doloremque reiciendis ea placeat animi totam expedita molestias ullam, officiis dolorem accusantium vel, provident aspernatur nostrum, repellendus nobis.',
    },
    {
        title: 'Patio Renovation during Summer is a need of a Season',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum esse numquam sed velit id inventore repellat nulla iste doloremque reiciendis ea placeat animi totam expedita molestias ullam, officiis dolorem accusantium vel, provident aspernatur nostrum, repellendus nobis.',
    },
    {
        title: 'Discover new methods of Renovating your House',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum esse numquam sed velit id inventore repellat nulla iste doloremque reiciendis ea placeat animi totam expedita molestias ullam, officiis dolorem accusantium vel, provident aspernatur nostrum, repellendus nobis.',
    }
]
function ChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default ChooseUs
