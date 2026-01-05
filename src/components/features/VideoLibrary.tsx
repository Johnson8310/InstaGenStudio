import { Download, RotateCcw, Trash2, Share2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useVideoStore } from '@/stores/videoStore';
import { GenerationMode } from '@/types';
import { MoreVertical } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VideoLibraryProps {
  mode: GenerationMode | 'all';
}

export default function VideoLibrary({ mode }: VideoLibraryProps) {
  const { videos, deleteVideo, regenerateVideo } = useVideoStore();
  const { toast } = useToast();

  const filteredVideos = mode === 'all' ? videos : videos.filter((v) => v.mode === mode);
  const completedVideos = filteredVideos.filter((v) => v.status === 'completed');

  const handleDownload = (videoId: string) => {
    toast({ title: 'Download started', description: 'Your video is being downloaded' });
  };

  const handleShare = (videoId: string) => {
    toast({ title: 'Link copied', description: 'Shareable link copied to clipboard' });
  };

  const handleRegenerate = async (videoId: string) => {
    await regenerateVideo(videoId);
    toast({ title: 'Regenerating', description: 'Creating a new version of this video' });
  };

  return (
    <div className="space-y-6">
      {completedVideos.length === 0 ? (
        <Card className="glass-panel border-cinema-mid-gray/50">
          <CardContent className="py-16 text-center">
            <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No videos yet</p>
            <p className="text-sm text-muted-foreground">
              {mode === 'all'
                ? 'Start creating videos in the Studio'
                : `No ${mode} videos in your library`}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedVideos.map((video) => (
            <Card key={video.id} className="glass-panel border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all group overflow-hidden">
              <div className="relative aspect-video bg-cinema-charcoal">
                <img
                  src={video.thumbnailUrl}
                  alt={video.prompt || 'Generated video'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-14 h-14 rounded-full bg-cinema-violet/90 hover:bg-cinema-violet text-white"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-cinema-black/80 text-xs font-medium capitalize">
                  {video.mode}
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-cinema-black/80 text-xs font-medium">
                  {video.config.aspectRatio}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate mb-1">
                      {video.prompt || `${video.mode} generation`}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(video.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleDownload(video.id)}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare(video.id)}>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleRegenerate(video.id)}>
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => deleteVideo(video.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-cinema-mid-gray/50 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
