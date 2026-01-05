import { useState } from 'react';
import Header from '@/components/layout/Header';
import ModeSelector from '@/components/features/ModeSelector';
import TextVideoPanel from '@/components/features/TextVideoPanel';
import ImageVideoPanel from '@/components/features/ImageVideoPanel';
import HybridVideoPanel from '@/components/features/HybridVideoPanel';
import RenderQueue from '@/components/features/RenderQueue';
import { useVideoStore } from '@/stores/videoStore';
import { GenerationMode } from '@/types';

export default function StudioPage() {
  const { activeMode, setActiveMode } = useVideoStore();
  const [showQueue, setShowQueue] = useState(false);

  return (
    <div className="min-h-screen bg-cinema-black">
      <Header />

      <div className="pt-20 px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">InstaGen Studio</h1>
            <p className="text-muted-foreground">
              Choose your creation mode and start generating cinematic videos
            </p>
          </div>

          <ModeSelector activeMode={activeMode} onModeChange={setActiveMode} />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              {activeMode === 'text' && <TextVideoPanel />}
              {activeMode === 'image' && <ImageVideoPanel />}
              {activeMode === 'hybrid' && <HybridVideoPanel />}
            </div>

            <div className="lg:col-span-1">
              <RenderQueue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
