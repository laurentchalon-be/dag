# 🚀 Deployment Guide - Morning Glow

Complete guide for deploying Morning Glow to Vercel (or other platforms).

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Run through [UI_UX_CHECKLIST.md](./UI_UX_CHECKLIST.md)
- [ ] Test locally on http://localhost:3000/
- [ ] Build succeeds: `npm run build`
- [ ] Preview build works: `npm run preview`
- [ ] All console errors fixed
- [ ] Lighthouse audit passes (90+ accessibility)
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Click the button above
2. Sign in to Vercel (or create account)
3. Import your repository
4. Add environment variables (optional):
   - `GEMINI_API_KEY` - Your Gemini API key
5. Click "Deploy"
6. Wait for deployment to complete
7. Visit your live site!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From project root
   vercel
   
   # Follow the prompts:
   # - Set up and deploy? Yes
   # - Which scope? Your account
   # - Link to existing project? No
   # - Project name? morning-glow (or your choice)
   # - Directory? ./ (current directory)
   # - Override settings? No
   ```

4. **Add Environment Variables** (optional)
   ```bash
   vercel env add GEMINI_API_KEY
   # Paste your API key when prompted
   # Select: Production, Preview, Development
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 3: GitHub Integration

1. **Push to GitHub** (see below)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Add environment variables (if needed)
7. Click "Deploy"

---

## 📦 Prepare for GitHub

### 1. Review Files to Commit

```bash
# Check what will be committed
git status

# Files that SHOULD be committed:
# ✅ Source code (*.tsx, *.ts, *.html, *.css)
# ✅ Configuration (package.json, vite.config.ts, tsconfig.json)
# ✅ Documentation (*.md files)
# ✅ Design system (design-system/)
# ✅ .gitignore
# ✅ .env.example
# ✅ vercel.json

# Files that should NOT be committed (already in .gitignore):
# ❌ node_modules/
# ❌ .env (contains secrets!)
# ❌ dist/
# ❌ package-lock.json (optional)
# ❌ .agent/ (local development only)
```

### 2. Add Files to Git

```bash
# Add all changes
git add .

# Or add specific files
git add App.tsx components/ index.html
git add *.md design-system/ .gitignore .env.example vercel.json
```

### 3. Commit Changes

```bash
git commit -m "feat: UI/UX improvements - WCAG AA compliance

- Replaced emoji icons with SVG (Heroicons)
- Added cursor-pointer to interactive elements
- Implemented prefers-reduced-motion support
- Added proper form labels and ARIA attributes
- Fixed cart functionality (increment/decrement)
- Optimized animation timings (150-300ms)
- Added visible focus states
- Improved alt text descriptions

UI/UX Score: 6.25/10 → 8.75/10 (+2.5)
Accessibility: 4/10 → 9/10 (+5)
WCAG AA Compliant ✅"
```

### 4. Push to GitHub

```bash
# Push to main branch
git push origin main

# Or if you're on a different branch
git push origin <branch-name>
```

---

## 🔑 Environment Variables

### Required for AI Assistant

If you want the AI assistant to work, you need to set:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### How to Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key

### Setting in Vercel

**Via Dashboard:**
1. Go to your project settings
2. Click "Environment Variables"
3. Add:
   - Key: `GEMINI_API_KEY`
   - Value: Your API key
   - Environments: Production, Preview, Development
4. Redeploy

**Via CLI:**
```bash
vercel env add GEMINI_API_KEY
# Paste your key
# Select all environments
```

---

## 🏗️ Build Verification

Before deploying, verify the build works:

```bash
# Clean previous builds
rm -rf dist

# Build
npm run build

# Check build output
ls dist/

# Preview build
npm run preview

# Open http://localhost:4173/
# Test thoroughly!
```

### Common Build Issues

**Issue: Build fails with TypeScript errors**
```bash
# Fix TypeScript errors
npm run build

# If you see errors, fix them in the code
# Don't ignore TypeScript errors!
```

**Issue: Missing dependencies**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue: Environment variables not working**
```bash
# Make sure vite.config.ts is correct
# Check that .env file exists (for local testing)
# For production, set in Vercel dashboard
```

---

## 🌍 Custom Domain (Optional)

### Add Custom Domain in Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `morningglow.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

### DNS Configuration

**For Vercel:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

---

## 📊 Post-Deployment Checks

After deployment, verify:

### Functionality
- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Menu items are clickable
- [ ] Cart functionality works
- [ ] Forms submit properly
- [ ] AI assistant works (if API key set)

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify images are optimized
- [ ] Check bundle size

### Accessibility
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify focus states
- [ ] Check color contrast

### SEO
- [ ] Verify meta tags
- [ ] Check Open Graph tags
- [ ] Test social media previews
- [ ] Submit sitemap to Google

---

## 🔄 Continuous Deployment

### Automatic Deployments

With Vercel + GitHub integration:

1. **Push to main** → Automatic production deployment
2. **Push to other branches** → Automatic preview deployment
3. **Pull requests** → Automatic preview for each PR

### Deployment Workflow

```bash
# 1. Make changes locally
# Edit files...

# 2. Test locally
npm run dev

# 3. Build and preview
npm run build
npm run preview

# 4. Commit changes
git add .
git commit -m "feat: add new feature"

# 5. Push to GitHub
git push origin main

# 6. Vercel automatically deploys!
# Check deployment status in Vercel dashboard
```

---

## 🐛 Troubleshooting Deployment

### Build Fails on Vercel

**Check build logs:**
1. Go to Vercel dashboard
2. Click on failed deployment
3. View build logs
4. Fix errors shown

**Common fixes:**
```bash
# Missing dependencies
npm install <missing-package>

# TypeScript errors
# Fix in code, don't skip

# Environment variables
# Add in Vercel dashboard
```

### Site Loads But Broken

**Check browser console:**
1. Open DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

**Common issues:**
- Missing environment variables
- Incorrect API endpoints
- CORS issues
- Missing assets

### Slow Performance

**Optimize:**
1. Enable Vercel Analytics
2. Check bundle size: `npm run build`
3. Optimize images (use WebP)
4. Enable caching headers
5. Code splitting

---

## 📈 Monitoring

### Vercel Analytics

1. Go to your project
2. Click "Analytics"
3. View:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Error Tracking

Consider adding:
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Google Analytics** - User analytics

---

## 🎯 Deployment Checklist

### Before Pushing to GitHub
- [x] .gitignore created ✅
- [x] .env.example created ✅
- [x] README.md updated ✅
- [x] vercel.json created ✅
- [ ] All changes committed
- [ ] Build succeeds locally
- [ ] Tests pass (if any)

### Before Deploying to Vercel
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Environment variables ready
- [ ] Custom domain ready (optional)

### After Deployment
- [ ] Site loads correctly
- [ ] All features work
- [ ] Lighthouse audit passes
- [ ] Analytics set up (optional)
- [ ] Custom domain configured (optional)

---

## 🚀 Quick Deploy Commands

```bash
# Full deployment workflow
git add .
git commit -m "feat: your changes"
git push origin main

# Vercel will automatically deploy!

# Or manual Vercel deployment
vercel --prod
```

---

## 📞 Support

**Deployment Issues:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [GitHub Issues](#)

**Project Issues:**
- Check [UI_UX_INDEX.md](./UI_UX_INDEX.md)
- Review [RUNNING_LOCALLY.md](./RUNNING_LOCALLY.md)
- Open GitHub issue

---

**Ready to deploy?** Follow the steps above and your site will be live in minutes! 🎉
