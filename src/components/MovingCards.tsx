import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const testimonials = [
    {
        quote: "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
        name: "Le Corbusier",
        title: "Towards a New Architecture"
      },
      {
        quote: "A doctor can bury his mistakes, but an architect can only advise his clients to plant vines.",
        name: "Frank Lloyd Wrig",
        title: "The Natural House"
      },
      {
        quote: "Architecture is the very mirror of life. You only have to cast your eyes on buildings to feel the presence of the past, the spirit of a place; they are the reflection of society.",
        name: "I. M. Pei",
        title: "I.M. Pei: Complete Works"
      },
      {
        quote: "The architect should strive continually to simplify; the ensemble of the rooms should then be carefully considered that comfort and utility may go hand in hand with beauty.",
        name: "Frank Lloyd Wright",
        title: "The Natural House"
      },
      {
        quote: "Every great architect is — necessarily — a great poet. He must be a great original interpreter of his time, his day, his age.",
        name: "Frank Lloyd Wrigh",
        title: "An Autobiography"
      },
      {
        quote: "A building has integrity just like a man. And just as seldom.",
        name: "Ayn Rand",
        title: "The Fountainhead"
      },
      {
        quote: "Architecture starts when you carefully put two bricks together. There it begins.",
        name: "Ludwig Mies van der Rohe",
        title: "Mies van der Rohe: A Critical Biography"
      },
  ];

function MovingCards() {
    return (
        <div className="h-[40rem] w-full  
        dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
        relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl dark:text-neutral-300 font-bold text-center mb-8 z-10">Hear some quotes of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
          />
                </div>
            </div>
        </div>
      )
}

export default MovingCards
