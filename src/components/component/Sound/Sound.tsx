'use client'

import React from 'react'
import { useSound } from './useSound'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export const Sound = () => {
  const { isPlaying, toggle, audioRef } = useSound()
  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src={
            'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/sound/Aphrodite.mp3'
          }
          type="audio/mpeg"
        />
        あなたのブラウザではオーディオがサポートされていません。
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="xs:w-14 xs:h-14 xs:p-4 custom-bg z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2.5 text-foreground"
        aria-label={'home'}
      >
        {isPlaying ? (
          <Volume2
            className="h-full w-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="h-full w-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </>
  )
}

export default Sound
