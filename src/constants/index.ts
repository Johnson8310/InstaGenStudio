export const ASPECT_RATIOS = [
  { value: '16:9', label: '16:9', description: 'YouTube, Desktop' },
  { value: '9:16', label: '9:16', description: 'TikTok, Reels' },
  { value: '1:1', label: '1:1', description: 'Instagram' },
  { value: '21:9', label: '21:9', description: 'Cinematic' },
] as const;

export const VISUAL_STYLES = [
  { value: 'realistic', label: 'Realistic', description: 'True to life' },
  { value: 'stylized', label: 'Stylized', description: 'Artistic interpretation' },
  { value: 'animated', label: 'Animated', description: '3D rendered look' },
  { value: 'cinematic', label: 'Cinematic', description: 'Film-grade quality' },
] as const;

export const LIGHTING_STYLES = [
  { value: 'natural', label: 'Natural', description: 'Daylight balanced' },
  { value: 'cinematic', label: 'Cinematic', description: 'Dramatic contrast' },
  { value: 'moody', label: 'Moody', description: 'Low-key atmospheric' },
  { value: 'studio', label: 'Studio', description: 'Even, professional' },
] as const;

export const CAMERA_MOTIONS = [
  { value: 'static', label: 'Static', description: 'No camera movement' },
  { value: 'pan', label: 'Pan', description: 'Left/right sweep' },
  { value: 'dolly', label: 'Dolly', description: 'Push in/pull out' },
  { value: 'orbit', label: 'Orbit', description: 'Circular rotation' },
  { value: 'parallax', label: 'Parallax', description: 'Depth layers' },
] as const;

export const DURATIONS = [3, 5, 10, 15, 30];

export const FRAME_RATES = [24, 30, 60];

export const PRICING_TIERS = [
  {
    name: 'Free',
    price: 0,
    credits: 50,
    features: [
      '50 credits/month',
      '720p resolution',
      'Max 5 seconds',
      'InstaGen watermark',
      'Basic controls',
    ],
  },
  {
    name: 'Pro',
    price: 29,
    credits: 500,
    features: [
      '500 credits/month',
      '1080p resolution',
      'Max 30 seconds',
      'No watermark',
      'Advanced controls',
      'Priority rendering',
    ],
  },
  {
    name: 'Studio',
    price: 99,
    credits: 2000,
    features: [
      '2000 credits/month',
      '4K resolution',
      'Max 60 seconds',
      'No watermark',
      'Full control suite',
      'Fastest rendering',
      'API access',
      'Team workspace',
    ],
  },
];
