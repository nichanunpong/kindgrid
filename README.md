# KindGrid

A real-time social web where small acts of kindness spread from person to person — like ripples on a grid.

## Features

- **Interactive Kindness Grid**: Visualize acts of kindness as connected nodes
- **Beautiful Animations**: Smooth transitions and glowing effects
- **Real-time Updates**: Watch the kindness web grow in real-time
- **Responsive Design**: Works beautifully on all devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:8080`

## Project Structure

```
KindGrid/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── KindnessGrid.tsx
│   │   ├── KindnessNode.tsx
│   │   ├── AddKindnessForm.tsx
│   │   └── StatsBar.tsx
│   ├── pages/            # Page components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── ...config files
```

## License

MIT

## Built with ❤️ for spreading kindness worldwide
