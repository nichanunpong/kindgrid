# 🕹️ KindGrid - Retro 80s Edition

> **A real-time social web where small acts of kindness spread from person to person — like ripples on a digital grid.**

Styled in authentic 1980s retro aesthetics with neon colors, pixel fonts, CRT effects, and DOS-style prompts!

## ✨ Features

- **🎮 Retro 80s Theme**: Neon pink, cyan, and lime colors with CRT scanlines
- **💬 Interactive Comments**: Click nodes to view and add comments
- **🎨 Pixel Perfect UI**: Press Start 2P, VT323, and Orbitron fonts
- **⚡ Beautiful Animations**: Neon glows, floating effects, and retro transitions
- **📱 Fully Responsive**: Works beautifully on mobile, tablet, and desktop
- **🌐 Node Details Modal**: Full-screen view showing all comments and details
- **DOS-Style Interface**: Terminal prompts and retro command aesthetics

## 🚀 Live Demo

**Coming Soon**: `https://YOUR-USERNAME.github.io/KindGrid/`

## 🎨 Design Elements

- **Neon Color Palette**: Hot Pink (#FF00FF), Cyan (#00FFFF), Lime (#00FF00)
- **Retro Fonts**:
  - Press Start 2P (pixel headers)
  - VT323 (DOS terminal text)
  - Orbitron (futuristic accents)
- **Visual Effects**:
  - CRT scanline overlay
  - Screen flicker animation
  - Neon glow shadows
  - Pixel-perfect corners
  - Animated loading bars

## 💻 Tech Stack

- **Vite** - Lightning-fast build tool
- **TypeScript** - Type safety
- **React 18** - UI framework
- **shadcn-ui** - Beautiful components
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **GitHub Actions** - CI/CD deployment

## 📦 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/KindGrid.git
cd KindGrid

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions or [GITHUB_DEPLOY.txt](./GITHUB_DEPLOY.txt) for quick commands.

**Quick Summary:**

1. Create a GitHub repository named `KindGrid`
2. Update `vite.config.ts` if needed (line 9)
3. Push your code to GitHub
4. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
5. Your site will be live at `https://YOUR-USERNAME.github.io/KindGrid/`

## 📁 Project Structure

```
KindGrid/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn-ui components
│   │   ├── Hero.tsx         # Retro hero section
│   │   ├── KindnessGrid.tsx # Node grid display
│   │   ├── KindnessNode.tsx # Individual heart nodes
│   │   ├── NodeDetailsModal.tsx  # Comment viewer modal
│   │   ├── AddKindnessForm.tsx   # Add/comment form
│   │   └── StatsBar.tsx     # Retro stats display
│   ├── pages/
│   │   └── Index.tsx        # Main page
│   ├── lib/                 # Utilities
│   ├── hooks/               # Custom hooks
│   └── index.css            # Retro 80s styling
├── DEPLOYMENT.md            # Detailed deployment guide
├── GITHUB_DEPLOY.txt        # Quick deploy reference
└── ...config files
```

## 🎮 How to Use

1. **View Nodes**: Hover over hearts to see quick info
2. **Click Nodes**: Opens full details modal with all comments
3. **Add Comments**: Click "ADD COMMENT" button in the modal
4. **Create New Kindness**: Click hero button to start a new chain
5. **Watch It Grow**: See the web expand as people participate!

## 🛠️ Customization

### Change Repository Name

Edit `vite.config.ts` line 9:

```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

### Modify Colors

Edit `src/index.css` in the `:root` section to change neon colors.

### Adjust Fonts

Update Google Fonts link in `index.html` and CSS font-family rules.

## 📝 License

MIT License - feel free to use this project for your own kindness initiatives!

## 🙏 Credits

- **Fonts**: Press Start 2P, VT323, Orbitron (Google Fonts)
- **Icons**: Lucide React
- **UI Components**: shadcn-ui
- **Inspiration**: 1980s computer terminals and retro gaming aesthetics

---

## 🎯 Future Enhancements

- [ ] Backend integration for persistence
- [ ] User authentication
- [ ] Social sharing features
- [ ] Leaderboards
- [ ] More retro themes (Commodore 64, DOS, etc.)

---

<div align="center">

**◢◤ BUILT WITH ❤️ FOR SPREADING KINDNESS WORLDWIDE ◢◤**

**[SYS.VERSION: 1.987] [STATUS: OPERATIONAL]**

_Make positivity as contagious as memes_ 🕹️✨

</div>
