import create from "zustand";

interface SoundStore {
  isPlaying: boolean
  toggle: () => void
  audioRef: React.RefObject<HTMLAudioElement>
}

export const useSoundStore = create<SoundStore>((set) => ({
  isPlaying: false,
  audioRef: { current: null },
  toggle: () =>
    set((state) => {
      const audio = state.audioRef.current
      if (audio) {
        if (state.isPlaying) {
          audio.pause()
        } else {
          audio.play()
        }
      }
      return { isPlaying: !state.isPlaying }
    }),
}))
