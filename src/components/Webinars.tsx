'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
import { Team } from "./Team";

function Webinars() {

  const featuredWebinars = [
    {
        "title": "The Visual Handbook of Building",
        "description": "A comprehensive guide to construction and renovation, filled with practical tips, illustrations, and step-by-step instructions.",
        "slug": "visual-handbook-building-remodeling",
        "isFeatured": true,
      },
      {
        "title": "Construction Management JumpStart",
        "description": "Get a head start in the field of construction management with this beginner-friendly guide covering essential concepts and techniques.",
        "slug": "construction-management-jumpstart",
        "isFeatured": true,
      },
      {
        "title": "Building Construction",
        "description": "An indispensable resource for architects, engineers, and builders, offering clear illustrations and explanations of construction techniques and material.",
        "slug": "building-construction",
        "isFeatured": true,
      },
      {
        "title": "Fundamentals of Building Construction",
        "description": "Master the basics of building construction, from foundation to roof, with this comprehensive textbook suitable for students and professionals alike.",
        "slug": "fundamentals-building-construction",
        "isFeatured": true,
      },
      {
        "title": "Construction Planning, Equipment, and Methods",
        "description": "Explore the intricacies of construction planning and project management, covering equipment, methods, and best practices in the industry.",
        "slug": "construction-planning-equipment-methods",
        "isFeatured": true,
      },
      {
        "title": "Modern Construction Handbook",
        "description": "Discover contemporary construction techniques and materials, with insights into sustainable practices and cutting-edge technologies.",
        "slug": "modern-construction-handbook",
        "isFeatured": true,
      },
      {
        "title": "Building Codes Illustrated",
        "description": "An essential reference for architects and builders, providing a visual guide to understanding and applying building codes and regulations.",
        "slug": "building-codes-illustrated",
        "isFeatured": true,
      },
      {
        "title": "Construction Contracts",
        "description": "Navigate the complexities of construction contracts with confidence, learning about legal issues, negotiation strategies, and dispute resolution.",
        "slug": "construction-contracts",
        "isFeatured": true,
      },
      {
        "title": "Structures: Or Why Things Don't Fall Down",
        "description": "Delve into the fascinating world of structural engineering, uncovering the principles behind the stability and strength of buildings and bridges.",
        "slug": "structures-why-things-dont-fall-down",
        "isFeatured": true,
      }
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Renovation Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
            <Button>
                <Link href={"/"}
                className="px-4 py-2 rounded transition duration-200"
                >
                    View All webinars
                </Link>
          </Button>
        </div>
        <div className="my-10 text-neutral-300 text-3xl md:text-5xl space-y-16 bg-black p-5 rounded-lg flex flex-col text-center justify-center">
            <h1 className="font-bold tracking-tight">Meet our Team</h1>
            <Team />
        </div>
      </div>
    </div>
  )
}

export default Webinars