"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import TypeAnimation from "./TypeAnimation"
import CustomCursor from "./CustonCursor"

export default function AboutPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <CustomCursor position={cursorPosition} />

      <div className="container mx-auto px-4 lg:px-24 py-12 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video w-[300px] md:w-[400px] md:h-[400px] h-[300px] mx-auto xl:w-[500px] xl:h-[500px] overflow-hidden">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="https://cuberto.com/assets/home/summary/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className="space-y-6"
            onMouseEnter={() => setHoveredElement("text")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <motion.div
              className="text-3xl text-black"
              animate={{
                scale: hoveredElement === "text" ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <p>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</p>
            </motion.div>
            <button
              className="relative overflow-hidden  hover:bg-black rounded-full mt-6 border border-black px-20 py-12 text-lg font-medium transition-colors duration-300 group"
              onMouseEnter={() => setHoveredElement("button")}
              onMouseLeave={() => setHoveredElement(null)}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                className="relative z-10 transition-colors duration-300 group-hover:text-white"
                style={{
                  position: "relative",
                  zIndex: 10,
                }}
              >
                What we do
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "0%",
                  backgroundColor: "black",
                  transition: "height 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                }}
                className="group-hover:h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

