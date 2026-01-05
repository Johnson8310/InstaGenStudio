import { create } from 'zustand';
import { VideoGeneration, GenerationConfig, GenerationMode } from '@/types';

interface VideoState {
  videos: VideoGeneration[];
  activeMode: GenerationMode;
  setActiveMode: (mode: GenerationMode) => void;
  generateVideo: (config: GenerationConfig) => Promise<void>;
  deleteVideo: (id: string) => void;
  regenerateVideo: (id: string) => Promise<void>;
}

// Mock video data
const mockVideos: VideoGeneration[] = [
  {
    id: '1',
    mode: 'text',
    config: {
      mode: 'text',
      prompt: 'A cinematic shot of a lone astronaut walking across a vast red desert at sunset, dramatic lighting',
      aspectRatio: '16:9',
      duration: 5,
      frameRate: 24,
      cameraMotion: 'dolly',
      lightingStyle: 'cinematic',
      visualStyle: 'cinematic',
      motionIntensity: 70,
      enhancePrompt: true,
    },
    status: 'completed',
    progress: 100,
    thumbnailUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=450&fit=crop&q=80',
    videoUrl: 'https://example.com/video1.mp4',
    createdAt: new Date('2026-01-04T14:30:00'),
    prompt: 'A cinematic shot of a lone astronaut walking across a vast red desert at sunset, dramatic lighting',
    tags: ['sci-fi', 'cinematic', 'desert'],
  },
  {
    id: '2',
    mode: 'image',
    config: {
      mode: 'image',
      aspectRatio: '9:16',
      duration: 3,
      frameRate: 30,
      cameraMotion: 'parallax',
      lightingStyle: 'natural',
      visualStyle: 'realistic',
      motionIntensity: 50,
      enhancePrompt: false,
    },
    status: 'completed',
    progress: 100,
    thumbnailUrl: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=450&h=800&fit=crop&q=80',
    videoUrl: 'https://example.com/video2.mp4',
    createdAt: new Date('2026-01-04T10:15:00'),
    tags: ['portrait', 'natural'],
  },
  {
    id: '3',
    mode: 'hybrid',
    config: {
      mode: 'hybrid',
      prompt: 'Magical glowing particles swirling around the subject',
      aspectRatio: '1:1',
      duration: 4,
      frameRate: 24,
      cameraMotion: 'orbit',
      lightingStyle: 'moody',
      visualStyle: 'stylized',
      motionIntensity: 80,
      enhancePrompt: true,
      imageFidelity: 60,
    },
    status: 'processing',
    progress: 65,
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&q=80',
    createdAt: new Date('2026-01-05T08:45:00'),
    prompt: 'Magical glowing particles swirling around the subject',
    tags: ['magic', 'portrait'],
  },
];

export const useVideoStore = create<VideoState>((set, get) => ({
  videos: mockVideos,
  activeMode: 'text',
  setActiveMode: (mode) => set({ activeMode: mode }),
  generateVideo: async (config: GenerationConfig) => {
    const newVideo: VideoGeneration = {
      id: Date.now().toString(),
      mode: config.mode,
      config,
      status: 'queued',
      progress: 0,
      thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop&q=80',
      createdAt: new Date(),
      prompt: config.prompt,
    };

    set((state) => ({ videos: [newVideo, ...state.videos] }));

    // Simulate processing
    const videoId = newVideo.id;
    setTimeout(() => {
      set((state) => ({
        videos: state.videos.map((v) =>
          v.id === videoId ? { ...v, status: 'processing' as const } : v
        ),
      }));
    }, 500);

    // Simulate progress
    for (let i = 1; i <= 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      set((state) => ({
        videos: state.videos.map((v) =>
          v.id === videoId ? { ...v, progress: i * 10 } : v
        ),
      }));
    }

    // Complete
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId
          ? {
              ...v,
              status: 'completed' as const,
              progress: 100,
              videoUrl: 'https://example.com/generated.mp4',
            }
          : v
      ),
    }));
  },
  deleteVideo: (id) => {
    set((state) => ({
      videos: state.videos.filter((v) => v.id !== id),
    }));
  },
  regenerateVideo: async (id) => {
    const video = get().videos.find((v) => v.id === id);
    if (video) {
      await get().generateVideo(video.config);
    }
  },
}));
