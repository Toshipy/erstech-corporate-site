'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { createPortal } from 'react-dom'
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui'

type ModalProps = {
  onClose: () => void
  toggle: () => void
}

const Modal: React.FC<ModalProps> = ({ onClose, toggle }) => {
  // return createPortal(
  // <div className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
  //   <div className="xs:px-10 shadow-glass-inset space-y-8 rounded border border-solid border-accent/30 bg-background/20 px-6 py-8 text-center backdrop-blur-[6px] sm:px-16">
  //     <Typography className="font-light">
  //       バックグラウンドミュージックを再生しますか？
  //     </Typography>
  //     <div className="flex items-center justify-center space-x-4">
  //       <Button
  //         onClick={toggle}
  //         className="hover:shadow-glass-sm mr-2 rounded border border-solid border-accent/30 px-4 py-2"
  //       >
  //         はい
  //       </Button>
  //       <button
  //         onClick={onClose}
  //         className="hover:shadow-glass-sm rounded border border-solid border-accent/30 px-4 py-2"
  //       >
  //         いいえ
  //       </button>
  //     </div>
  //   </div>
  // </div>,
  // document.getElementById('my-modal') as HTMLElement,
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-slate-100 text-center">
        <DialogHeader>
          <DialogTitle>
            バックグラウンドミュージックを再生しますか？
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center space-x-4">
          <Button
            onClick={toggle}
            // variant="ghost"
            // className="hover:shadow-glass-sm rounded border px-4 py-2"
          >
            はい
          </Button>
          <Button
            // variant="outline"
            onClick={onClose}
            // className="hover:shadow-glass-sm rounded border px-4 py-2"
          >
            いいえ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Sound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
    } else {
      setShowModal(true)
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
    setShowModal(false)
  }

  return (
    <div className="xs:right-4 group fixed right-2.5 top-4 z-50">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
      <audio ref={audioRef} loop>
        <source
          src={
            'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/sound/universe.mp3'
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
    </div>
  )
}
