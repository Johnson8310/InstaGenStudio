import { useState } from 'react';
import { Upload, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CinematicControls from '@/components/features/CinematicControls';
import { useVideoStore } from '@/stores/videoStore';
import { GenerationConfig } from '@/types';
import { useToast } from '@/hooks/use-toast';

export default function ImageVideoPanel() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [config, setConfig] = useState<Partial<GenerationConfig>>({
    aspectRatio: '16:9',
    duration: 5,
    frameRate: 30,
    cameraMotion: 'parallax',
    lightingStyle: 'natural',
    visualStyle: 'realistic',
    motionIntensity: 50,
  });
  const { generateVideo } = useVideoStore();
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGenerate = async () => {
    if (selectedImages.length === 0) {
      toast({
        title: 'Image required',
        description: 'Please upload at least one image',
        variant: 'destructive',
      });
      return;
    }

    const fullConfig: GenerationConfig = {
      mode: 'image',
      images: selectedImages,
      enhancePrompt: false,
      aspectRatio: config.aspectRatio || '16:9',
      duration: config.duration || 5,
      frameRate: config.frameRate || 30,
      cameraMotion: config.cameraMotion || 'parallax',
      lightingStyle: config.lightingStyle || 'natural',
      visualStyle: config.visualStyle || 'realistic',
      motionIntensity: config.motionIntensity || 50,
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
            <Upload className="w-5 h-5 text-cinema-violet" />
            Upload Images
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="images">Select images to animate</Label>
            <div className="mt-2 border-2 border-dashed border-cinema-mid-gray rounded-xl p-8 text-center hover:border-cinema-violet/50 transition-colors cursor-pointer">
              <input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="images" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG up to 10MB
                </p>
              </label>
            </div>
          </div>

          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {selectedImages.map((file, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden border border-cinema-mid-gray"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-cinema-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
