import { useState } from 'react';
import Hero from '@/components/Hero';
import KindnessGrid from '@/components/KindnessGrid';
import AddKindnessForm from '@/components/AddKindnessForm';
import StatsBar from '@/components/StatsBar';
import { KindnessNodeData } from '@/components/KindnessNode';
import { toast } from 'sonner';

const Index = () => {
  const [nodes, setNodes] = useState<KindnessNodeData[]>([
    {
      id: 'demo-1',
      user: 'Sarah',
      message: 'Donated winter coats to homeless shelter',
      timestamp: new Date().toISOString(),
      linkedTo: [],
    },
    {
      id: 'demo-2',
      user: 'Michael',
      message: 'Helped elderly neighbor with groceries',
      timestamp: new Date().toISOString(),
      linkedTo: ['demo-1'],
    },
    {
      id: 'demo-3',
      user: 'Emma',
      message: 'Volunteered at local animal shelter',
      timestamp: new Date().toISOString(),
      linkedTo: ['demo-1'],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedNode, setSelectedNode] = useState<KindnessNodeData | null>(
    null
  );

  const handleAddKindness = (
    kindness: Omit<KindnessNodeData, 'id' | 'timestamp'>
  ) => {
    const newNode: KindnessNodeData = {
      ...kindness,
      id: `node-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };

    setNodes((prev) => [...prev, newNode]);
    setShowForm(false);
    setSelectedNode(null);

    toast.success('Kindness added to the grid!', {
      description: 'Your act of kindness is now inspiring others.',
    });
  };

  const handleNodeClick = (node: KindnessNodeData) => {
    setSelectedNode(node);
    setShowForm(true);
    toast.info(`Continue ${node.user}'s kindness chain!`, {
      description: 'Click to add your own act of kindness.',
    });
  };

  const handleStartKindness = () => {
    setSelectedNode(null);
    setShowForm(true);
  };

  const totalConnections = nodes.reduce(
    (acc, node) => acc + (node.linkedTo?.length || 0),
    0
  );
  const uniqueUsers = new Set(nodes.map((n) => n.user)).size;

  return (
    <div className='min-h-screen'>
      <Hero onStartKindness={handleStartKindness} />

      <StatsBar
        totalNodes={nodes.length}
        totalConnections={totalConnections}
        activeUsers={uniqueUsers}
      />

      <div className='max-w-7xl mx-auto px-4 py-8 md:py-12'>
        {/* DOS-style Section Header */}
        <div className='text-center mb-6 md:mb-8'>
          <div className='dos-text text-xs md:text-sm mb-3 md:mb-4'>
            <span className='animate-blink inline'>▮</span> NET.WORK\GRID.MAP
          </div>
          <h2 className='text-xl md:text-3xl font-bold mb-2 md:mb-4 neon-pink'>
            THE KINDNESS WEB
          </h2>
          <div className='neon-border-cyan inline-block px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm'>
            <p className='text-xs md:text-sm neon-cyan orbitron'>
              ◢ WATCH KINDNESS.PROPAGATE ◣ CLICK NODE TO EXTEND.CHAIN
            </p>
          </div>
        </div>

        <KindnessGrid nodes={nodes} onNodeClick={handleNodeClick} />
      </div>

      {showForm && (
        <AddKindnessForm
          onSubmit={handleAddKindness}
          onCancel={() => {
            setShowForm(false);
            setSelectedNode(null);
          }}
          selectedNode={selectedNode}
        />
      )}

      <footer className='py-6 md:py-8 text-center mt-12 md:mt-16'>
        <div className='neon-border-pink inline-block px-6 md:px-8 py-3 md:py-4'>
          <p className='text-xs md:text-sm dos-text'>
            &gt;&gt; BUILT WITH <span className='neon-pink'>♥</span> FOR
            SPREADING KINDNESS.WORLDWIDE &lt;&lt;
          </p>
          <p className='text-xs mt-2 neon-cyan orbitron'>
            [SYS.VERSION: 1.987] [STATUS: OPERATIONAL]
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
