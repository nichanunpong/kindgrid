import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Zap } from 'lucide-react';

const Hero = ({ onStartKindness }: { onStartKindness: () => void }) => {
  return (
    <div className='relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-8 md:py-16 overflow-hidden grid-bg'>
      {/* Retro Grid Lines */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-30'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage:
              'linear-gradient(90deg, hsl(320 100% 60%) 1px, transparent 1px), linear-gradient(hsl(320 100% 60%) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Neon Glow Orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-[hsl(320,100%,60%)] rounded-full blur-3xl opacity-40 animate-float-retro' />
        <div
          className='absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[hsl(180,100%,50%)] rounded-full blur-3xl opacity-40 animate-float-retro'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-1/2 right-1/3 w-40 h-40 md:w-72 md:h-72 bg-[hsl(90,100%,50%)] rounded-full blur-3xl opacity-40 animate-float-retro'
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* DOS-style Header */}
      <div className='relative z-10 w-full max-w-4xl mx-auto mb-4 md:mb-8'>
        <div className='dos-text text-xs md:text-sm font-mono text-left px-4 md:px-0'>
          <p className='animate-blink inline'>▮</p> C:\KINDNESS\GRID.EXE
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center space-y-4 md:space-y-8 px-4'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-3 md:px-4 py-2 neon-border-cyan backdrop-blur-sm mb-2 md:mb-4 animate-float-retro'>
          <Sparkles className='w-3 h-3 md:w-4 md:h-4 neon-cyan' />
          <span className='text-xs md:text-sm font-bold neon-cyan orbitron'>
            ◢◤ SYSTEM ONLINE ◢◤
          </span>
        </div>

        {/* Main Title */}
        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight px-2'>
          <span className='text-gradient-retro animate-neon-pulse block mb-2'>
            KINDGRID
          </span>
          <span className='text-xs sm:text-sm md:text-lg lg:text-xl neon-cyan orbitron block'>
            .EXE v1.987
          </span>
        </h1>

        {/* ASCII Art Divider */}
        <div className='hidden md:block neon-pink text-xs md:text-sm font-mono'>
          ════════════════════════════════════════
        </div>

        {/* Description */}
        <div className='retro-box p-4 md:p-6 max-w-2xl mx-auto'>
          <p className='text-sm sm:text-base md:text-xl orbitron leading-relaxed neon-lime'>
            &gt;&gt; A REAL-TIME SOCIAL WEB WHERE SMALL ACTS OF KINDNESS SPREAD
            FROM PERSON TO PERSON
          </p>
          <p className='text-xs sm:text-sm md:text-lg neon-cyan mt-2 md:mt-4 orbitron'>
            // LIKE RIPPLES ON A DIGITAL GRID //
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6'>
          <Button
            size='lg'
            onClick={onStartKindness}
            className='w-full sm:w-auto group neon-border-pink bg-[hsl(320,100%,60%)] hover:bg-[hsl(320,100%,70%)] text-black font-bold orbitron transition-all text-xs md:text-base px-4 md:px-8 py-4 md:py-6 uppercase'>
            <Heart className='w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform' />
            [ENTER] START CHAIN
          </Button>
          <Button
            size='lg'
            className='w-full sm:w-auto neon-border-cyan bg-[hsl(180,100%,50%)] hover:bg-[hsl(180,100%,60%)] text-black font-bold orbitron transition-all text-xs md:text-base px-4 md:px-8 py-4 md:py-6 uppercase'>
            <Zap className='w-4 h-4 md:w-5 md:h-5' />
            [ESC] EXPLORE GRID
          </Button>
        </div>

        {/* Stats Bar */}
        <div className='pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs md:text-sm orbitron'>
          <div className='flex items-center gap-2 neon-border-pink px-3 md:px-4 py-2'>
            <div className='w-2 h-2 rounded-full bg-[hsl(320,100%,60%)] animate-pulse shadow-[0_0_10px_hsl(320,100%,60%)]' />
            <span className='neon-pink'>LIVE.FEED</span>
          </div>
          <div className='flex items-center gap-2 neon-border-cyan px-3 md:px-4 py-2'>
            <div
              className='w-2 h-2 rounded-full bg-[hsl(180,100%,50%)] animate-pulse shadow-[0_0_10px_hsl(180,100%,50%)]'
              style={{ animationDelay: '0.5s' }}
            />
            <span className='neon-cyan'>NET.WORK</span>
          </div>
          <div
            className='flex items-center gap-2 neon-border-lime px-3 md:px-4 py-2'
            style={{
              borderColor: 'hsl(90,100%,50%)',
              boxShadow: '0 0 20px hsl(90 100% 50% / 0.8)',
            }}>
            <div
              className='w-2 h-2 rounded-full bg-[hsl(90,100%,50%)] animate-pulse shadow-[0_0_10px_hsl(90,100%,50%)]'
              style={{ animationDelay: '1s' }}
            />
            <span className='neon-lime'>∞.KIND</span>
          </div>
        </div>

        {/* Loading Bar Effect */}
        <div className='mt-6 md:mt-8 max-w-md mx-auto'>
          <div className='flex items-center gap-2 text-xs md:text-sm dos-text'>
            <span>LOADING KINDNESS</span>
            <div className='flex gap-1'>
              <span className='animate-blink' style={{ animationDelay: '0s' }}>
                █
              </span>
              <span
                className='animate-blink'
                style={{ animationDelay: '0.2s' }}>
                █
              </span>
              <span
                className='animate-blink'
                style={{ animationDelay: '0.4s' }}>
                █
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
