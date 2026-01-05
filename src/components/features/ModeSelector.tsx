import { Wand2, Image as ImageIcon, Blend } from 'lucide-react';
import { GenerationMode } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface ModeSelectorProps {
  activeMode: GenerationMode;
  onModeChange: (mode: GenerationMode) => void;
}

const modes = [
  {
    value: 'text' as GenerationMode,
    icon: Wand2,
    label: 'Text → Video',
    description: 'Describe your vision',
  },
  {
    value: 'image' as GenerationMode,
    icon: ImageIcon,
    label: 'Image → Video',
    description: 'Animate still images',
  },
  {
    value: 'hybrid' as GenerationMode,
    icon: Blend,
    label: 'Hybrid Mode',
    description: 'Combine text + images',
  },
];

export default function ModeSelector({ activeMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {modes.map(({ value, icon: Icon, label, description }) => (
        <Card
          key={value}
          className={`cursor-pointer transition-all glass-panel ${
            activeMode === value
              ? 'border-cinema-violet bg-cinema-violet/5'
              : 'border-cinema-mid-gray/50 hover:border-cinema-violet/30'
          }`}
          onClick={() => onModeChange(value)}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeMode === value
                    ? 'bg-cinema-violet/20'
                    : 'bg-cinema-mid-gray/50'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    activeMode === value ? 'text-cinema-violet' : 'text-muted-foreground'
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{label}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
