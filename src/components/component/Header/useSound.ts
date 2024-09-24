'use client'

import { useEffect, useRef, useState } from 'react'

export const useSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem('musicConsent')
    if (musicConsent === 'true' && !isPlaying) {
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
    ;['click', 'keydown', 'touchstart'].forEach((event) => {
      document.removeEventListener(event, handleFirstUserInteraction)
    })
  }

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent')
    const consentTime = localStorage.getItem('consentTIme')

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 >
        new Date().getTime()
    ) {
      setIsPlaying(consent === 'true')

      if (consent === 'true') {
        ;['click', 'keydown', 'touchstart'].forEach((event) => {
          document.addEventListener(event, handleFirstUserInteraction)
        })
      }
    }
  }, [])

  const toggle = () => {
    const newState = !isPlaying

    setIsPlaying(!isPlaying)
    if (audioRef.current) {
      !isPlaying ? audioRef.current.play() : audioRef.current.pause()
      localStorage.setItem('musicConsent', String(newState))
      localStorage.setItem('consentTime', new Date().toISOString())
    }
  }

  return {
    isPlaying,
    toggle,
    audioRef,
  }
}
