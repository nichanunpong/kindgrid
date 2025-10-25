import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import KindnessNode, { KindnessNodeData } from './KindnessNode';

interface KindnessGridProps {
  nodes: KindnessNodeData[];
  onNodeClick?: (node: KindnessNodeData) => void;
}

const KindnessGrid = ({ nodes, onNodeClick }: KindnessGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 1200,
    height: 600,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Update dimensions for positioning calculations
    setCanvasDimensions({ width: canvas.width, height: canvas.height });

    // Clear canvas (lines disabled)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [nodes]);

  return (
    <div
      className='relative w-full h-[500px] md:h-[700px] overflow-hidden retro-box'
      style={{
        background:
          'linear-gradient(to bottom, hsl(280, 80%, 10%), hsl(280, 90%, 5%))',
      }}>
      {/* Retro grid background */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage:
            'linear-gradient(hsl(320 100% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(320 100% 60%) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Connection lines canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ width: '100%', height: '100%' }}
      />

      {/* Nodes */}
      <div className='relative w-full h-full'>
        {nodes.map((node, index) => {
          const position = getNodePosition(
            index,
            nodes.length,
            canvasDimensions.width,
            canvasDimensions.height
          );
          return (
            <KindnessNode
              key={node.id}
              node={node}
              position={position}
              onClick={() => onNodeClick?.(node)}
            />
          );
        })}
      </div>

      {/* Empty state - DOS style */}
      {nodes.length === 0 && (
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <div className='text-center space-y-4 md:space-y-6 retro-box p-6 md:p-8 max-w-md'>
            <div className='w-16 h-16 md:w-24 md:h-24 mx-auto neon-border-pink flex items-center justify-center pixel-corners bg-[hsl(320,100%,60%)]'>
              <Heart className='w-8 h-8 md:w-12 md:h-12 text-black' />
            </div>
            <div className='dos-text text-xs md:text-sm mb-2 md:mb-4'>
              <span className='animate-blink inline'>▮</span> SYSTEM.READY
            </div>
            <h3 className='text-base md:text-xl font-semibold neon-pink orbitron uppercase'>
              INIT FIRST.ACT
            </h3>
            <p className='text-xs md:text-sm dos-text max-w-md px-2'>
              &gt; BE THE SPARK THAT LIGHTS THE GRID
              <br />
              &gt; SHARE YOUR KINDNESS.ACT
              <br />
              &gt; WATCH IT PROPAGATE.NETWORK
            </p>
            <div className='flex justify-center gap-1 mt-4'>
              <div className='w-2 h-2 bg-[hsl(320,100%,60%)] animate-pulse' />
              <div
                className='w-2 h-2 bg-[hsl(180,100%,50%)] animate-pulse'
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className='w-2 h-2 bg-[hsl(90,100%,50%)] animate-pulse'
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Scanline overlay */}
      <div
        className='absolute inset-0 pointer-events-none opacity-10'
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 255, 0.3) 2px, rgba(255, 0, 255, 0.3) 4px)',
        }}
      />
    </div>
  );
};

// Store node positions to ensure minimum spacing
const nodePositions: { x: number; y: number }[] = [];

// Helper function to check if position has minimum distance from all other nodes
const hasMinimumDistance = (
  x: number,
  y: number,
  minDistance: number,
  canvasWidth: number,
  canvasHeight: number
): boolean => {
  for (const pos of nodePositions) {
    const posX = (pos.x * canvasWidth) / 100;
    const posY = (pos.y * canvasHeight) / 100;
    const newX = (x * canvasWidth) / 100;
    const newY = (y * canvasHeight) / 100;

    const distance = Math.sqrt(
      Math.pow(newX - posX, 2) + Math.pow(newY - posY, 2)
    );

    if (distance < minDistance) {
      return false;
    }
  }
  return true;
};

// Helper function to distribute nodes in a pleasing pattern with minimum spacing
const getNodePosition = (
  index: number,
  total: number,
  canvasWidth = 1200,
  canvasHeight = 600
): { x: number; y: number } => {
  const minDistance = 50; // Minimum 50 pixels between nodes

  // Reset positions for first node
  if (index === 0) {
    nodePositions.length = 0;
  }

  // First node goes in the center
  if (total === 0 || index === 0) {
    const pos = { x: 50, y: 65 };
    nodePositions.push(pos);
    return pos;
  }

  // Try to place node in a spiral pattern, but ensure minimum distance
  const maxAttempts = 100;
  let attempt = 0;

  while (attempt < maxAttempts) {
    // Create a spiral pattern centered in the middle
    const spiralIndex = index + attempt * 0.5;
    const angle = spiralIndex * ((137.5 * Math.PI) / 180); // Golden angle
    const radius = Math.sqrt(spiralIndex + 1) * 15;

    const x = 50 + radius * Math.cos(angle);
    const y = 65 + radius * Math.sin(angle);

    // Keep within bounds
    const boundedX = Math.max(10, Math.min(90, x));
    const boundedY = Math.max(10, Math.min(90, y));

    if (
      hasMinimumDistance(
        boundedX,
        boundedY,
        minDistance,
        canvasWidth,
        canvasHeight
      )
    ) {
      const pos = { x: boundedX, y: boundedY };
      nodePositions.push(pos);
      return pos;
    }

    attempt++;
  }

  // Fallback: place at a random position that maintains distance
  for (let i = 0; i < 50; i++) {
    const x = 15 + Math.random() * 70; // 15-85%
    const y = 15 + Math.random() * 70; // 15-85%

    if (hasMinimumDistance(x, y, minDistance, canvasWidth, canvasHeight)) {
      const pos = { x, y };
      nodePositions.push(pos);
      return pos;
    }
  }

  // Last resort: just place it and accept overlap
  const pos = { x: 50, y: 65 };
  nodePositions.push(pos);
  return pos;
};

export default KindnessGrid;
