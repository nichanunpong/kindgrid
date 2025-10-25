import { X, User, MessageSquare, Heart } from 'lucide-react';
import { KindnessNodeData } from './KindnessNode';
import { Button } from './ui/button';

interface NodeDetailsModalProps {
  node: KindnessNodeData;
  onClose: () => void;
  onAddComment: () => void;
}

const NodeDetailsModal = ({
  node,
  onClose,
  onAddComment,
}: NodeDetailsModalProps) => {
  const nodeColors = [
    'hsl(320, 100%, 60%)', // Hot Pink
    'hsl(180, 100%, 50%)', // Cyan
    'hsl(280, 100%, 60%)', // Purple
    'hsl(90, 100%, 50%)', // Lime
    'hsl(30, 100%, 50%)', // Orange
    'hsl(220, 100%, 60%)', // Blue
  ];

  const nodeColor =
    node.color || nodeColors[Math.floor(Math.random() * nodeColors.length)];

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300'>
      <div className='w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        {/* Retro Card */}
        <div
          className='retro-box p-6 md:p-8 relative'
          style={{
            borderColor: nodeColor,
            boxShadow: `0 0 30px ${nodeColor}, inset 0 0 20px ${nodeColor}`,
          }}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute right-4 top-4 neon-border-pink p-2 hover:scale-110 transition-transform z-10'>
            <X className='w-4 h-4 neon-pink' />
          </button>

          {/* DOS Header */}
          <div className='dos-text text-xs md:text-sm mb-4'>
            <span className='animate-blink inline'>▮</span> C:\KIND\NODE.VIEW
          </div>

          {/* Header with Icon */}
          <div className='flex items-start gap-4 mb-6'>
            <div
              className='w-16 h-16 flex items-center justify-center pixel-corners'
              style={{
                background: `linear-gradient(135deg, ${nodeColor}, ${nodeColor}dd)`,
                boxShadow: `0 0 20px ${nodeColor}`,
                border: `3px solid ${nodeColor}`,
              }}>
              <Heart className='w-8 h-8 text-black fill-black' />
            </div>

            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-2'>
                <User className='w-5 h-5' style={{ color: nodeColor }} />
                <h2
                  className='text-xl md:text-2xl font-bold orbitron uppercase'
                  style={{ color: nodeColor }}>
                  {node.user}
                </h2>
              </div>

              <div className='text-xs md:text-sm dos-text opacity-70'>
                {new Date(node.timestamp).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Original Message */}
          <div className='mb-6'>
            <div
              className='text-xs md:text-sm font-bold orbitron mb-2 uppercase'
              style={{ color: nodeColor }}>
              [KINDNESS.ACT]
            </div>
            <div
              className='p-4 neon-border-lime bg-black/30'
              style={{
                borderColor: 'hsl(90, 100%, 50%)',
                boxShadow: '0 0 10px hsl(90 100% 50% / 0.3)',
              }}>
              <p
                className='text-sm md:text-base leading-relaxed'
                style={{
                  fontFamily: 'VT323, monospace',
                  color: 'hsl(90, 100%, 50%)',
                  textShadow: '0 0 5px hsl(90, 100%, 50%)',
                }}>
                &gt; {node.message}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className='flex gap-4 mb-6'>
            {node.linkedTo && node.linkedTo.length > 0 && (
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[hsl(320,100%,60%)] animate-pulse' />
                <span className='text-xs neon-pink orbitron'>
                  [CHAIN: +{node.linkedTo.length}]
                </span>
              </div>
            )}
            <div className='flex items-center gap-2'>
              <MessageSquare className='w-4 h-4 neon-cyan' />
              <span className='text-xs neon-cyan orbitron'>
                [COMMENTS: {node.comments?.length || 0}]
              </span>
            </div>
          </div>

          {/* Comments Section */}
          <div className='mb-6'>
            <div className='flex items-center justify-between mb-4'>
              <div
                className='text-xs md:text-sm font-bold orbitron uppercase'
                style={{ color: nodeColor }}>
                [COMMENT.THREAD]
              </div>
              <Button
                onClick={onAddComment}
                size='sm'
                className='neon-border-cyan bg-[hsl(180,100%,50%)] hover:bg-[hsl(180,100%,60%)] text-black font-bold orbitron uppercase text-xs'>
                <MessageSquare className='w-3 h-3' />
                ADD COMMENT
              </Button>
            </div>

            {node.comments && node.comments.length > 0 ? (
              <div className='space-y-3 max-h-[400px] overflow-y-auto'>
                {node.comments.map((comment, index) => (
                  <div
                    key={comment.id}
                    className='p-3 md:p-4 bg-black/50 border-2 transition-all hover:scale-[1.02]'
                    style={{
                      borderColor: nodeColor,
                      boxShadow: `0 0 10px ${nodeColor}40`,
                    }}>
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center gap-2'>
                        <User
                          className='w-4 h-4'
                          style={{ color: nodeColor }}
                        />
                        <span
                          className='text-sm font-bold orbitron uppercase'
                          style={{ color: nodeColor }}>
                          {comment.user}
                        </span>
                      </div>
                      <span className='text-xs dos-text opacity-50'>
                        #{(index + 1).toString().padStart(3, '0')}
                      </span>
                    </div>

                    <p
                      className='text-xs md:text-sm leading-relaxed'
                      style={{
                        fontFamily: 'VT323, monospace',
                        color: 'hsl(180, 100%, 50%)',
                        textShadow: '0 0 5px hsl(180, 100%, 50%)',
                      }}>
                      &gt; {comment.message}
                    </p>

                    <div className='text-xs dos-text opacity-50 mt-2'>
                      {new Date(comment.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className='p-6 text-center neon-border-cyan bg-black/20'
                style={{
                  borderColor: 'hsl(180, 100%, 50%)',
                  boxShadow: '0 0 10px hsl(180 100% 50% / 0.2)',
                }}>
                <MessageSquare className='w-8 h-8 mx-auto mb-2 neon-cyan opacity-50' />
                <p className='text-xs md:text-sm dos-text opacity-70'>
                  &gt; NO.COMMENTS.YET
                  <br />
                  &gt; BE.FIRST.TO.COMMENT
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className='flex gap-3'>
            <Button
              onClick={onClose}
              size='lg'
              className='flex-1 neon-border-pink bg-[hsl(320,100%,60%)] hover:bg-[hsl(320,100%,70%)] text-black font-bold orbitron uppercase text-xs md:text-base'>
              [ESC] CLOSE
            </Button>
          </div>

          {/* Corner decorations */}
          <div
            className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2'
            style={{ borderColor: nodeColor }}
          />
          <div
            className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2'
            style={{ borderColor: nodeColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default NodeDetailsModal;
