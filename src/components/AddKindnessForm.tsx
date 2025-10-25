import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Heart, Sparkles, X } from 'lucide-react';
import { KindnessNodeData } from './KindnessNode';

interface AddKindnessFormProps {
  onSubmit: (kindness: Omit<KindnessNodeData, 'id' | 'timestamp'>) => void;
  onCancel: () => void;
  selectedNode?: KindnessNodeData | null;
}

const AddKindnessForm = ({
  onSubmit,
  onCancel,
  selectedNode,
}: AddKindnessFormProps) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const isComment = !!selectedNode; // Always comment mode if node is selected

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.trim() && message.trim()) {
      onSubmit({
        user: user.trim(),
        message: message.trim(),
        linkedTo: [],
        isComment: isComment,
        nodeId: isComment && selectedNode ? selectedNode.id : undefined,
      } as any);
      setUser('');
      setMessage('');
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300'>
      <div className='w-full max-w-lg'>
        {/* Retro Card */}
        <div className='retro-box p-6 md:p-8 relative'>
          {/* Close Button */}
          <button
            onClick={onCancel}
            className='absolute right-4 top-4 neon-border-pink p-2 hover:scale-110 transition-transform'>
            <X className='w-4 h-4 neon-pink' />
          </button>

          {/* DOS Header */}
          <div className='dos-text text-xs md:text-sm mb-4'>
            <span className='animate-blink inline'>▮</span> C:\KIND\INPUT.EXE
          </div>

          {/* Title */}
          <div className='mb-4 md:mb-6'>
            <h2 className='flex items-center gap-2 text-lg md:text-2xl font-bold mb-2 neon-pink orbitron uppercase'>
              <Heart className='w-5 h-5 md:w-6 md:h-6' />
              {isComment ? 'ADD COMMENT' : 'SHARE KINDNESS'}
            </h2>
            <p className='text-xs md:text-sm neon-cyan orbitron'>
              {selectedNode
                ? isComment
                  ? `// COMMENT ON: ${selectedNode.user.toUpperCase()}`
                  : `// EXTENDING CHAIN FROM: ${selectedNode.user.toUpperCase()}`
                : '// INITIALIZE NEW KINDNESS.CHAIN'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
            {/* Link Info */}
            {selectedNode && (
              <div
                className='p-3 md:p-4 neon-border-lime backdrop-blur-sm'
                style={{
                  borderColor: 'hsl(90, 100%, 50%)',
                  boxShadow:
                    '0 0 10px hsl(90 100% 50% / 0.5), inset 0 0 10px hsl(90 100% 50% / 0.2)',
                }}>
                <div className='flex items-center gap-2 mb-2'>
                  <Sparkles className='w-3 h-3 md:w-4 md:h-4 neon-lime' />
                  <span className='text-xs md:text-sm font-bold orbitron neon-lime'>
                    {isComment ? '[COMMENT ON:]' : '[LINKING TO:]'}
                  </span>
                </div>
                <p className='text-xs md:text-sm dos-text pl-4'>
                  &gt; "{selectedNode.message}" - {selectedNode.user}
                </p>
              </div>
            )}

            {/* User Name Input */}
            <div className='space-y-2'>
              <Label
                htmlFor='user'
                className='text-xs md:text-sm neon-cyan orbitron uppercase'>
                &gt; USER.NAME
              </Label>
              <Input
                id='user'
                placeholder='ENTER.NAME...'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                className='h-10 md:h-12 bg-black/50 neon-border-pink text-white font-mono placeholder:text-gray-500 placeholder:text-xs md:placeholder:text-sm'
              />
            </div>

            {/* Message Input */}
            <div className='space-y-2'>
              <Label
                htmlFor='message'
                className='text-xs md:text-sm neon-cyan orbitron uppercase'>
                &gt; {isComment ? 'COMMENT.TEXT' : 'KIND.ACTION'}
              </Label>
              <Textarea
                id='message'
                placeholder={
                  isComment
                    ? 'ENTER.YOUR.COMMENT...'
                    : 'DESCRIBE.YOUR.KIND.ACT...'
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className='resize-none bg-black/50 neon-border-pink text-white font-mono placeholder:text-gray-500 placeholder:text-xs md:placeholder:text-sm'
              />
              {!isComment && (
                <p className='text-xs dos-text opacity-70'>
                  // EXAMPLES: "DONATED.TO.SHELTER" "HELPED.NEIGHBOR"
                  "VOLUNTEERED.AT.CENTER"
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 pt-2 md:pt-4'>
              <Button
                type='submit'
                size='lg'
                className='flex-1 neon-border-pink bg-[hsl(320,100%,60%)] hover:bg-[hsl(320,100%,70%)] text-black font-bold orbitron transition-all uppercase text-xs md:text-base'>
                <Heart className='w-4 h-4' />
                {isComment ? '[ENTER] POST COMMENT' : '[ENTER] ADD TO GRID'}
              </Button>
              <Button
                type='button'
                size='lg'
                onClick={onCancel}
                className='neon-border-cyan bg-[hsl(180,100%,50%)] hover:bg-[hsl(180,100%,60%)] text-black font-bold orbitron transition-all uppercase text-xs md:text-base'>
                [ESC] CANCEL
              </Button>
            </div>
          </form>

          {/* Corner decorations */}
          <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[hsl(320,100%,60%)]' />
          <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[hsl(320,100%,60%)]' />
          <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[hsl(320,100%,60%)]' />
          <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[hsl(320,100%,60%)]' />
        </div>
      </div>
    </div>
  );
};

export default AddKindnessForm;
