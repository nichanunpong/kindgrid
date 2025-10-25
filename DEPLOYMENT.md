# 🕹️ KindGrid - GitHub Pages Deployment Guide

## 📋 Prerequisites

- GitHub account
- Git installed on your computer

## 🚀 Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name**: `KindGrid` (or any name you prefer)
   - **Description**: "A retro 80s themed kindness sharing web app"
   - **Public** or **Private**: Choose based on your preference
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### 2. Update Repository Name in Config

⚠️ **IMPORTANT**: If your repository name is NOT "KindGrid", update the base path:

Open `vite.config.ts` and change line 9:

```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Replace `YOUR-REPO-NAME` with your actual repository name.

### 3. Initialize Git and Push Code

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Retro KindGrid app"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. That's it! The deployment will start automatically

### 5. Access Your Live Site

After a few minutes, your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://luckshizuka.github.io/KindGrid/`

## 🔄 Future Updates

Whenever you make changes:

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

The GitHub Action will automatically rebuild and redeploy your site! 🎉

## 🛠️ Manual Build (Optional)

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📝 Repository Settings Summary

- **Base URL**: `/YOUR-REPO-NAME/`
- **Build output**: `dist/` folder
- **Deployment**: Automatic via GitHub Actions
- **Branch**: `main` (or `master`)

## 🎮 Technologies Used

- **React + TypeScript**: Frontend framework
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **GitHub Actions**: CI/CD
- **GitHub Pages**: Hosting

## 🐛 Troubleshooting

### Build fails

- Check that all dependencies are in `package.json`
- Ensure no TypeScript errors: `npm run lint`

### 404 errors on refresh

- Verify the `base` path in `vite.config.ts` matches your repo name
- Ensure it ends with `/`

### Assets not loading

- Check browser console for path errors
- Verify base path configuration

### GitHub Actions fails

1. Go to **Actions** tab in your repository
2. Click on the failed workflow
3. Check the error logs
4. Most common issue: Wrong repository name in `vite.config.ts`

## 📞 Need Help?

Check the GitHub Actions logs:

1. Repository → **Actions** tab
2. Click on the latest workflow run
3. View the detailed logs for each step

---

**Made with ❤️ in the retro 80s style** 🕹️✨
