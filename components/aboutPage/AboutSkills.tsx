import { useEffect, useRef, useState } from "react"
import { BsCodeSlash } from "react-icons/bs"
import { MdOutlineFlag } from "react-icons/md"

const devSkills = [
  { label: "AI", value: 95 },
  { label: "Backend", value: 90 },
  { label: "Frontend", value: 88 },
  { label: "DevOps", value: 80 },
]

interface BarProps {
  label: string
  value: number
  delay?: number
}

function SkillBar({ label, value, delay = 0 }: BarProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
          window.setTimeout(() => setProgress(value), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current)
    }
  }, [value, delay, isVisible])

  const size = 120
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          aria-label={`${label}: ${progress}%`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e0f5fd"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#56c8e8"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-[1500ms] ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[2.4rem] font-bold text-main-orange">
            {progress}%
          </span>
        </div>
      </div>

      <p className="mt-4 text-[1.5rem] font-medium text-gray-700">{label}</p>
    </div>
  )
}

export default function AboutSkills() {
  return (
    <div className="px-12 py-10 customLine relative before:bottom-0 borderLeft">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 place-items-center">
        {devSkills.map((skill, index) => (
          <SkillBar
            key={skill.label}
            label={skill.label}
            value={skill.value}
            delay={index * 120}
          />
        ))}
      </div>
    </div>
  )
}
