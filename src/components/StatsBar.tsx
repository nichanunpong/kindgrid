import { Heart, Link, Users, Activity } from 'lucide-react';

interface StatsBarProps {
  totalNodes: number;
  totalConnections: number;
  activeUsers: number;
}

const StatsBar = ({
  totalNodes,
  totalConnections,
  activeUsers,
}: StatsBarProps) => {
  const stats = [
    {
      icon: Heart,
      label: 'KIND.ACT',
      value: totalNodes,
      color: 'neon-pink',
      bgColor: 'bg-[hsl(320,100%,60%)]',
    },
    {
      icon: Link,
      label: 'CONNECT.SYS',
      value: totalConnections,
      color: 'neon-cyan',
      bgColor: 'bg-[hsl(180,100%,50%)]',
    },
    {
      icon: Users,
      label: 'USER.LOG',
      value: activeUsers,
      color: 'neon-lime',
      bgColor: 'bg-[hsl(90,100%,50%)]',
    },
  ];

  return (
    <div className='w-full py-6 md:py-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* DOS-style Header */}
        <div className='dos-text text-center mb-4 md:mb-6 text-sm md:text-base'>
          <Activity className='w-4 h-4 md:w-5 md:h-5 inline-block mr-2 neon-lime' />
          <span className='animate-blink inline'>▮</span> SYSTEM.STATS /MONITOR
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
          {stats.map((stat, index) => (
            <div key={index} className='relative group'>
              {/* Retro Box */}
              <div
                className={`retro-box p-4 md:p-6 transition-all hover:scale-105 cursor-pointer`}
                style={{
                  borderColor: `hsl(var(--${stat.color}))`,
                  boxShadow: `0 0 20px hsl(var(--${stat.color}) / 0.8), inset 0 0 20px hsl(var(--${stat.color}) / 0.3)`,
                }}>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4'>
                  {/* Icon */}
                  <div className={`p-2 md:p-3 ${stat.bgColor} relative`}>
                    <stat.icon className='w-5 h-5 md:w-6 md:h-6 text-black' />
                    <div className='absolute inset-0 bg-white/20 animate-pulse' />
                  </div>

                  {/* Stats */}
                  <div className='flex-1 text-center md:text-left'>
                    {/* Value with pixelated display */}
                    <div className='font-bold orbitron text-3xl md:text-4xl mb-1'>
                      <span className={stat.color}>
                        [{stat.value.toString().padStart(3, '0')}]
                      </span>
                    </div>

                    {/* Label */}
                    <div
                      className={`text-xs md:text-sm ${stat.color} orbitron tracking-wider`}>
                      {stat.label}
                    </div>

                    {/* Progress Bar */}
                    <div className='mt-2 md:mt-3 h-2 bg-black/50 relative overflow-hidden'>
                      <div
                        className={`h-full ${stat.bgColor} animate-pulse`}
                        style={{
                          width: `${Math.min((stat.value / 10) * 100, 100)}%`,
                          boxShadow: `0 0 10px hsl(var(--${stat.color}))`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div
                  className='absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-current'
                  style={{ borderColor: `hsl(var(--${stat.color}))` }}
                />
                <div
                  className='absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-current'
                  style={{ borderColor: `hsl(var(--${stat.color}))` }}
                />
                <div
                  className='absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-current'
                  style={{ borderColor: `hsl(var(--${stat.color}))` }}
                />
                <div
                  className='absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-current'
                  style={{ borderColor: `hsl(var(--${stat.color}))` }}
                />
              </div>

              {/* Glitch effect on hover */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-glitch' />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom terminal line */}
        <div className='mt-6 md:mt-8 text-center dos-text text-xs md:text-sm'>
          <span className='neon-pink'>◢◤</span>
          <span className='mx-2'>STATUS: OPERATIONAL</span>
          <span className='neon-cyan'>◢◤</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
