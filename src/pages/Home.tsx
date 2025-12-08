import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const heroImages = [
  '/images/hero/trees1.webp',
  '/images/hero/trees2.webp',
  '/images/hero/trees3.webp',
]

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      {/* Hero Section with Background Carousel */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Calvin Trees campus nature ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Calvin Trees
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-2xl mx-auto">
            An interactive campus arboretum bringing nature to your fingertips
          </p>
          <Button
            size="lg"
            className="bg-[#8B2233] hover:bg-[#6d1a28] text-white shadow-xl"
            asChild
          >
            <a
              href="https://github.com/Calvin-Trees/calvin-trees-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View Project on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8B2233]">
            Our Vision
          </h2>
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Our goal is to continue the development of Professor Victor Norman’s existing 
              Calvin Trees progressive web app. Specifically; we intend to add new features 
              such as guided walking tours and enhanced UI. Our vision is to increase 
              engagement of various demographics (including faculty, students, and any campus 
              visitors) with Calvin University’s diverse ecosystem of trees. Key ethical and design 
              norms for our project are Stewardship and Aesthetics.
            </p>
            <p>
              By bringing focus to the assortment of trees around campus in an engaging way, it is 
              our goal to highlight the ecological diversity of our grounds, turning a simple walk
              into an educational experience that fosters a lasting appreciation for nature. Moreover, 
              we seek to emphasize the natural beauty of God’s creation and inspire a deeper commitment 
              to the stewardship of our shared environment.
            </p>
            <p>
              Aesthetically, we want to design a web application that is smooth and gorgeous, creating
              an immersive visual experience that mirrors the organic beauty of our campus ecosystem. 
              By utilizing a clean, modern interface and quality imagery, the design will ensure that 
              the technology acts as a seamless bridge to nature rather than a distraction from it."
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
