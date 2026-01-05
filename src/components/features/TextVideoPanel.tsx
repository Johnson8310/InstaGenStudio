import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CinematicControls from '@/components/features/CinematicControls';
import { useVideoStore } from '@/stores/videoStore';
import { GenerationConfig } from '@/types';
import { useToast } from '@/hooks/use-toast';

export default function TextVideoPanel() {
  const [prompt, setPrompt] = useState('');
  const [enhancePrompt, setEnhancePrompt] = useState(true);
  const [config, setConfig] = useState<Partial<GenerationConfig>>({
    aspectRatio: '16:9',
    duration: 5,
    frameRate: 24,
    cameraMotion: 'dolly',
    lightingStyle: 'cinematic',
    visualStyle: 'cinematic',
    motionIntensity: 70,
  });
  const { generateVideo } = useVideoStore();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Prompt required',
        description: 'Please describe what you want to create',
        variant: 'destructive',
      });
      return;
    }

    const fullConfig: GenerationConfig = {
      mode: 'text',
      prompt,
      enhancePrompt,
      aspectRatio: config.aspectRatio || '16:9',
      duration: config.duration || 5,
      frameRate: config.frameRate || 24,
      cameraMotion: config.cameraMotion || 'dolly',
      lightingStyle: config.lightingStyle || 'cinematic',
      visualStyle: config.visualStyle || 'cinematic',
      motionIntensity: config.motionIntensity || 70,
    };

    await generateVideo(fullConfig);
    toast({
      title: 'Generation started',
      description: 'Your video is being created. Check the render queue.',
    });
  };

  return (
    <div className="space-y-6">
      <Card className="glass-panel border-cinema-mid-gray/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cinema-violet" />
            Text Prompt
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="prompt">Describe your video</Label>
            <Textarea
              id="prompt"
              placeholder="A cinematic shot of a lone astronaut walking across a vast red desert at sunset, dramatic lighting, wide angle..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 mt-2 resize-none bg-cinema-charcoal border-cinema-mid-gray focus:border-cinema-violet"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enhance">AI Prompt Enhancement</Label>
              <p className="text-xs text-muted-foreground">
                Optimize your prompt for Veo 3
              </p>
            </div>
            <Switch
              id="enhance"
              checked={enhancePrompt}
              onCheckedChange={setEnhancePrompt}
            />
          </div>
        </CardContent>
      </Card>

      <CinematicControls config={config} onChange={setConfig} />

      <Button
        onClick={handleGenerate}
        className="w-full h-12 bg-cinema-violet hover:bg-cinema-violet-muted text-white font-semibold"
        size="lg"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Generate Video
      </Button>
    </div>
  );
}
