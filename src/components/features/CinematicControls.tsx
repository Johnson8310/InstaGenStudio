import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';
import { GenerationConfig, AspectRatio, VisualStyle, LightingStyle, CameraMotion } from '@/types';
import { ASPECT_RATIOS, VISUAL_STYLES, LIGHTING_STYLES, CAMERA_MOTIONS, DURATIONS, FRAME_RATES } from '@/constants';

interface CinematicControlsProps {
  config: Partial<GenerationConfig>;
  onChange: (config: Partial<GenerationConfig>) => void;
}

export default function CinematicControls({ config, onChange }: CinematicControlsProps) {
  const updateConfig = (key: keyof GenerationConfig, value: any) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <Card className="glass-panel border-cinema-mid-gray/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-cinema-violet" />
          Cinematic Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
            <Select
              value={config.aspectRatio}
              onValueChange={(v) => updateConfig('aspectRatio', v as AspectRatio)}
            >
              <SelectTrigger id="aspect-ratio" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ASPECT_RATIOS.map((ratio) => (
                  <SelectItem key={ratio.value} value={ratio.value}>
                    {ratio.label} — {ratio.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="duration">Duration</Label>
            <Select
              value={config.duration?.toString()}
              onValueChange={(v) => updateConfig('duration', parseInt(v))}
            >
              <SelectTrigger id="duration" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DURATIONS.map((duration) => (
                  <SelectItem key={duration} value={duration.toString()}>
                    {duration} seconds
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="visual-style">Visual Style</Label>
          <Select
            value={config.visualStyle}
            onValueChange={(v) => updateConfig('visualStyle', v as VisualStyle)}
          >
            <SelectTrigger id="visual-style" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {VISUAL_STYLES.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label} — {style.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="lighting-style">Lighting Style</Label>
          <Select
            value={config.lightingStyle}
            onValueChange={(v) => updateConfig('lightingStyle', v as LightingStyle)}
          >
            <SelectTrigger id="lighting-style" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LIGHTING_STYLES.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label} — {style.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="camera-motion">Camera Motion</Label>
          <Select
            value={config.cameraMotion}
            onValueChange={(v) => updateConfig('cameraMotion', v as CameraMotion)}
          >
            <SelectTrigger id="camera-motion" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CAMERA_MOTIONS.map((motion) => (
                <SelectItem key={motion.value} value={motion.value}>
                  {motion.label} — {motion.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <Label htmlFor="motion-intensity">Motion Intensity</Label>
            <span className="text-sm text-muted-foreground">{config.motionIntensity}%</span>
          </div>
          <Slider
            id="motion-intensity"
            value={[config.motionIntensity || 50]}
            onValueChange={(v) => updateConfig('motionIntensity', v[0])}
            min={0}
            max={100}
            step={10}
          />
        </div>

        <div>
          <Label htmlFor="frame-rate">Frame Rate</Label>
          <Select
            value={config.frameRate?.toString()}
            onValueChange={(v) => updateConfig('frameRate', parseInt(v))}
          >
            <SelectTrigger id="frame-rate" className="mt-2 bg-cinema-charcoal border-cinema-mid-gray">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {FRAME_RATES.map((rate) => (
                <SelectItem key={rate} value={rate.toString()}>
                  {rate} fps
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
