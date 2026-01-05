export type GenerationMode = 'text' | 'image' | 'hybrid';

export type AspectRatio = '16:9' | '9:16' | '1:1' | '21:9';

export type VisualStyle = 'realistic' | 'stylized' | 'animated' | 'cinematic';

export type LightingStyle = 'natural' | 'cinematic' | 'moody' | 'studio';

export type CameraMotion = 'static' | 'pan' | 'dolly' | 'orbit' | 'parallax';

export type RenderStatus = 'queued' | 'processing' | 'completed' | 'failed';

export type SubscriptionTier = 'free' | 'pro' | 'studio';

export interface GenerationConfig {
  mode: GenerationMode;
  prompt?: string;
  images?: File[];
  aspectRatio: AspectRatio;
  duration: number;
  frameRate: number;
  cameraMotion: CameraMotion;
  lightingStyle: LightingStyle;
  visualStyle: VisualStyle;
  motionIntensity: number;
  enhancePrompt: boolean;
  imageFidelity?: number; // For hybrid mode
}

export interface VideoGeneration {
  id: string;
  mode: GenerationMode;
  config: GenerationConfig;
  status: RenderStatus;
  progress: number;
  thumbnailUrl: string;
  videoUrl?: string;
  createdAt: Date;
  prompt?: string;
  tags?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  tier: SubscriptionTier;
  creditsRemaining: number;
  avatar?: string;
}
