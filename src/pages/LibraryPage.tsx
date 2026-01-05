import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoLibrary from '@/components/features/VideoLibrary';
import { GenerationMode } from '@/types';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<GenerationMode | 'all'>('all');

  return (
    <div className="min-h-screen bg-cinema-black">
      <Header />

      <div className="pt-20 px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Video Library</h1>
            <p className="text-muted-foreground">
              Your personal film vault — all generated videos in one place
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as GenerationMode | 'all')} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
              <TabsTrigger value="all">All Videos</TabsTrigger>
              <TabsTrigger value="text">Text → Video</TabsTrigger>
              <TabsTrigger value="image">Image → Video</TabsTrigger>
              <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <VideoLibrary mode="all" />
            </TabsContent>
            <TabsContent value="text">
              <VideoLibrary mode="text" />
            </TabsContent>
            <TabsContent value="image">
              <VideoLibrary mode="image" />
            </TabsContent>
            <TabsContent value="hybrid">
              <VideoLibrary mode="hybrid" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
