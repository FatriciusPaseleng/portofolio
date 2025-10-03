import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start = null
    const duration = 2000 // 2 detik

    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progressValue = Math.min((elapsed / duration) * 100, 100)
      setProgress(progressValue)

      if (elapsed < duration) {
        requestAnimationFrame(step)
      } else {
        // Mulai fade out setelah selesai
        setTimeout(() => setFadeText(true), 300)
        setTimeout(() => setFadeScreen(true), 600)
        setTimeout(() => setLoading(false), 1200)
      }
    }

    requestAnimationFrame(step)
  }, [])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex flex-col items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-700 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Aurora */}
        <Aurora
          colorStops={["#FF7E5F", "#FEB47B", "#9B5DE5"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.6}
        />

        {/* Angka sinkron progress */}
        <div
          className={`absolute text-white text-5xl font-bold transition-all duration-700 ${
            fadeText ? "opacity-0 -translate-y-6" : "opacity-100 translate-y-0"
          }`}
        >
          {Math.floor(progress)}%
        </div>

        {/* Progress bar sinkron */}
        <div className="absolute bottom-1/3 w-2/3 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 transition-all ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    )
  )
}

export default PreLoader
