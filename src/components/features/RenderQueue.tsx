import { Clock, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useVideoStore } from '@/stores/videoStore';
import { RenderStatus } from '@/types';

const statusConfig: Record<RenderStatus, { icon: any; color: string; label: string }> = {
  queued: { icon: Clock, color: 'text-muted-foreground', label: 'Queued' },
  processing: { icon: Loader2, color: 'text-cinema-violet', label: 'Processing' },
  completed: { icon: CheckCircle2, color: 'text-green-500', label: 'Completed' },
  failed: { icon: XCircle, color: 'text-destructive', label: 'Failed' },
};

export default function RenderQueue() {
  const { videos } = useVideoStore();
  const activeRenders = videos.filter((v) => v.status !== 'completed');

  return (
    <Card className="glass-panel border-cinema-mid-gray/50 sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Render Queue</CardTitle>
      </CardHeader>
      <CardContent>
        {activeRenders.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-sm text-muted-foreground">No active renders</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activeRenders.map((video) => {
              const { icon: Icon, color, label } = statusConfig[video.status];
              return (
                <div key={video.id} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-cinema-mid-gray">
                      <img
                        src={video.thumbnailUrl}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {video.prompt || `${video.mode} generation`}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Icon className={`w-3.5 h-3.5 ${color} ${video.status === 'processing' ? 'animate-spin' : ''}`} />
                        <span className={`text-xs ${color}`}>{label}</span>
                        {video.status === 'processing' && (
                          <span className="text-xs text-muted-foreground">{video.progress}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {video.status === 'processing' && (
                    <Progress value={video.progress} className="h-1" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
