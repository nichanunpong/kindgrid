import { Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Comment {
  id: string;
  user: string;
  message: string;
  timestamp: string;
}

export interface KindnessNodeData {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  linkedTo?: string[];
  color?: string;
  comments?: Comment[];
}

interface KindnessNodeProps {
  node: KindnessNodeData;
  position: { x: number; y: number };
  onClick?: () => void;
}

const nodeColors = [
  'hsl(320, 100%, 60%)', // Hot Pink
  'hsl(180, 100%, 50%)', // Cyan
  'hsl(280, 100%, 60%)', // Purple
  'hsl(90, 100%, 50%)', // Lime
  'hsl(30, 100%, 50%)', // Orange
  'hsl(220, 100%, 60%)', // Blue
];

const KindnessNode = ({ node, position, onClick }: KindnessNodeProps) => {
  const nodeColor =
    node.color || nodeColors[Math.floor(Math.random() * nodeColors.length)];

  return (
    <div
      className='absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group animate-float-retro'
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      onClick={onClick}>
      {/* Outer glow ring - pixel style */}
      <div
        className='absolute inset-0 opacity-60 animate-pulse'
        style={{
          background: nodeColor,
          width: '80px',
          height: '80px',
          transform: 'translate(-8px, -8px)',
          filter: 'blur(15px)',
          boxShadow: `0 0 30px ${nodeColor}, 0 0 60px ${nodeColor}`,
        }}
      />

      {/* Node circle - pixelated corners */}
      <div
        className='relative w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-125 pixel-corners'
        style={{
          background: `linear-gradient(135deg, ${nodeColor}, ${nodeColor}dd)`,
          boxShadow: `0 0 20px ${nodeColor}, inset 0 0 20px ${nodeColor}`,
          border: `3px solid ${nodeColor}`,
        }}>
        <Heart className='w-6 h-6 text-black fill-black' />

        {/* Scanline effect */}
        <div
          className='absolute inset-0 opacity-30 pixel-corners'
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />

        {/* Corner brackets */}
        <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white' />
        <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white' />
        <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white' />
        <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white' />
      </div>

      {/* Info card on hover - DOS style */}
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50'>
        <div
          className='retro-box p-4 min-w-[250px] max-w-[320px] max-h-[400px] overflow-y-auto'
          style={{
            borderColor: nodeColor,
            boxShadow: `0 0 20px ${nodeColor}, inset 0 0 10px ${nodeColor}`,
          }}>
          {/* Terminal header */}
          <div
            className='flex items-center gap-2 mb-2 pb-2 border-b-2'
            style={{ borderColor: nodeColor }}>
            <User className='w-4 h-4' style={{ color: nodeColor }} />
            <span
              className='font-bold text-sm orbitron uppercase'
              style={{ color: nodeColor }}>
              {node.user}
            </span>
          </div>

          {/* Original Message */}
          <p
            className='text-xs leading-relaxed mb-2'
            style={{
              fontFamily: 'VT323, monospace',
              color: 'hsl(90, 100%, 50%)',
              textShadow: '0 0 5px hsl(90, 100%, 50%)',
            }}>
            &gt; {node.message}
          </p>

          {/* Comments Section */}
          {node.comments && node.comments.length > 0 && (
            <div
              className='mt-3 pt-3 border-t-2'
              style={{ borderColor: nodeColor }}>
              <div
                className='text-xs font-bold orbitron mb-2'
                style={{ color: nodeColor }}>
                [COMMENTS: {node.comments.length}]
              </div>
              <div className='space-y-2 max-h-[200px] overflow-y-auto'>
                {node.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className='p-2 bg-black/30 border border-current'
                    style={{ borderColor: nodeColor }}>
                    <div className='flex items-center gap-2 mb-1'>
                      <span
                        className='text-xs font-bold orbitron'
                        style={{ color: nodeColor }}>
                        {comment.user}:
                      </span>
                    </div>
                    <p
                      className='text-xs'
                      style={{
                        fontFamily: 'VT323, monospace',
                        color: 'hsl(180, 100%, 50%)',
                        textShadow: '0 0 5px hsl(180, 100%, 50%)',
                      }}>
                      &gt; {comment.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connection count */}
          {node.linkedTo && node.linkedTo.length > 0 && (
            <div
              className='mt-2 pt-2 border-t-2'
              style={{ borderColor: nodeColor }}>
              <span
                className='text-xs font-bold orbitron'
                style={{ color: nodeColor }}>
                [CHAIN: +{node.linkedTo.length}]
              </span>
            </div>
          )}

          {/* Corner decorations */}
          <div
            className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2'
            style={{ borderColor: nodeColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default KindnessNode;
