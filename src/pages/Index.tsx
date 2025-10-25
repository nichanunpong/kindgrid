import { useState } from 'react';
import Hero from '@/components/Hero';
import KindnessGrid from '@/components/KindnessGrid';
import AddKindnessForm from '@/components/AddKindnessForm';
import NodeDetailsModal from '@/components/NodeDetailsModal';
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
      comments: [
        {
          id: 'comment-1',
          user: 'Alex',
          message: 'This is so inspiring! Thank you!',
          timestamp: new Date().toISOString(),
        },
        {
          id: 'comment-2',
          user: 'Jordan',
          message: 'Just donated too, thanks for the idea!',
          timestamp: new Date().toISOString(),
        },
      ],
    },
    {
      id: 'demo-2',
      user: 'Michael',
      message: 'Helped elderly neighbor with groceries',
      timestamp: new Date().toISOString(),
      linkedTo: ['demo-1'],
      comments: [],
    },
    {
      id: 'demo-3',
      user: 'Emma',
      message: 'Volunteered at local animal shelter',
      timestamp: new Date().toISOString(),
      linkedTo: ['demo-1'],
      comments: [
        {
          id: 'comment-3',
          user: 'Taylor',
          message: 'Animals need more people like you!',
          timestamp: new Date().toISOString(),
        },
      ],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showNodeDetails, setShowNodeDetails] = useState(false);
  const [selectedNode, setSelectedNode] = useState<KindnessNodeData | null>(
    null
  );

  const handleAddKindness = (
    kindness: Omit<KindnessNodeData, 'id' | 'timestamp'> & {
      isComment?: boolean;
      nodeId?: string;
    }
  ) => {
    // Check if this is a comment
    if (kindness.isComment && kindness.nodeId) {
      // Add comment to existing node
      setNodes((prev) =>
        prev.map((node) => {
          if (node.id === kindness.nodeId) {
            return {
              ...node,
              comments: [
                ...(node.comments || []),
                {
                  id: `comment-${Date.now()}`,
                  user: kindness.user,
                  message: kindness.message,
                  timestamp: new Date().toISOString(),
                },
              ],
            };
          }
          return node;
        })
      );

      toast.success('Comment added!', {
        description: 'Your comment has been added to the node.',
      });
    } else {
      // Create new node
      const newNode: KindnessNodeData = {
        user: kindness.user,
        message: kindness.message,
        linkedTo: kindness.linkedTo,
        id: `node-${Date.now()}`,
        timestamp: new Date().toISOString(),
        comments: [],
      };

      setNodes((prev) => [...prev, newNode]);

      toast.success('Kindness added to the grid!', {
        description: 'Your act of kindness is now inspiring others.',
      });
    }

    setShowForm(false);
    setSelectedNode(null);
  };

  const handleNodeClick = (node: KindnessNodeData) => {
    setSelectedNode(node);
    setShowNodeDetails(true);
  };

  const handleAddCommentClick = () => {
    setShowNodeDetails(false);
    setShowForm(true);
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

      {showNodeDetails && selectedNode && (
        <NodeDetailsModal
          node={selectedNode}
          onClose={() => {
            setShowNodeDetails(false);
            setSelectedNode(null);
          }}
          onAddComment={handleAddCommentClick}
        />
      )}

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
