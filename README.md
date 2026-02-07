# 🌅 Morning Glow - Premium Breakfast Delivery

<div align="center">
  <img width="1200" height="475" alt="Morning Glow Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">

[![UI/UX Score](https://img.shields.io/badge/UI%2FUX%20Score-8.75%2F10-brightgreen)](./UI_UX_AUDIT.md)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%20AA-blue)](./UI_UX_IMPROVEMENTS.md)
[![React](https://img.shields.io/badge/React-19.2.4-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)

</div>

## ✨ Features

- 🎨 **Premium UI/UX** - Glassmorphism design with smooth animations
- ♿ **WCAG AA Accessible** - Screen reader friendly, keyboard navigable
- 🛒 **Functional Shopping Cart** - Add, remove, and update quantities
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Zero Configuration** - No API keys or environment variables needed

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Local: http://localhost:3000/
   - Network: http://192.168.0.46:3000/

## 📦 Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory.

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📚 Documentation

### UI/UX Documentation
- **[UI_UX_INDEX.md](./UI_UX_INDEX.md)** - Navigation hub for all documentation
- **[README_UI_UX.md](./README_UI_UX.md)** - Executive summary of improvements
- **[UI_UX_AUDIT.md](./UI_UX_AUDIT.md)** - Detailed audit report
- **[UI_UX_CHECKLIST.md](./UI_UX_CHECKLIST.md)** - Pre-deployment checklist
- **[BEFORE_AFTER.md](./BEFORE_AFTER.md)** - Visual comparison of improvements
- **[RUNNING_LOCALLY.md](./RUNNING_LOCALLY.md)** - Local testing guide

### Design System
- **[design-system/morning-glow/MASTER.md](./design-system/morning-glow/MASTER.md)** - Complete design system

## 🎯 UI/UX Improvements

This project has undergone a comprehensive UI/UX audit and improvement process:

### Score Improvement
- **Before:** 6.25/10 ⚠️
- **After:** 8.75/10 ✅
- **Improvement:** +2.5 points 🎉

### Key Improvements
- ✅ Replaced emoji icons with professional SVG icons
- ✅ Added `cursor-pointer` to all interactive elements
- ✅ Implemented `prefers-reduced-motion` support
- ✅ Added proper form labels and ARIA attributes
- ✅ Fixed cart functionality (increment/decrement)
- ✅ Optimized animation timings (150-300ms)
- ✅ Added visible focus states for keyboard navigation
- ✅ Improved alt text descriptions

See [UI_UX_IMPROVEMENTS.md](./UI_UX_IMPROVEMENTS.md) for complete details.

## 🛠️ Tech Stack

- **Frontend:** React 19.2.4 + TypeScript
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS (via CDN)
- **AI:** Google Gemini API
- **Fonts:** Playfair Display + Plus Jakarta Sans

## 📁 Project Structure

```
dag/
├── components/          # React components
│   ├── AIAssistant.tsx  # AI-powered assistant
│   ├── FloatingBlobs.tsx # Background animations
│   ├── Hero.tsx         # Hero section
│   ├── Menu.tsx         # Menu items display
│   ├── Navbar.tsx       # Navigation bar
│   └── VibeSwitcher.tsx # Vibe selection
├── design-system/       # Design system documentation
├── constants.ts         # App constants
├── types.ts            # TypeScript types
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## ⌨️ Keyboard Navigation

This site is fully keyboard accessible:

1. Press **Tab** to navigate between elements
2. Press **Enter** or **Space** to activate buttons
3. Press **Esc** to close modals
4. All interactive elements have visible focus states

## ♿ Accessibility

- ✅ **WCAG AA Compliant**
- ✅ **Screen Reader Friendly** - Proper ARIA labels
- ✅ **Keyboard Navigable** - All features accessible via keyboard
- ✅ **Motion Preferences** - Respects `prefers-reduced-motion`
- ✅ **Color Contrast** - 4.5:1 minimum ratio
- ✅ **Focus States** - Visible focus indicators

## 🧪 Testing

### Manual Testing
```bash
# Run the dev server
npm run dev

# Open http://localhost:3000/
# Follow the checklist in UI_UX_CHECKLIST.md
```

### Lighthouse Audit
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for Performance, Accessibility, Best Practices, SEO

**Target Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /F /PID <PID>

# Then restart
npm run dev
```

### Changes Not Showing
1. Hard refresh: `Ctrl + Shift + R` (Chrome/Edge)
2. Clear cache and reload
3. Restart dev server

### AI Assistant Not Working
- Ensure `GEMINI_API_KEY` is set in `.env`
- Restart the dev server after adding the key

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **UI/UX Pro Max Skill** - For comprehensive design system and audit
- **Google Gemini** - For AI-powered assistant
- **Unsplash** - For beautiful food imagery
- **Heroicons** - For professional SVG icons

## 📞 Support

For issues or questions:
1. Check the [documentation](./UI_UX_INDEX.md)
2. Review the [troubleshooting guide](./RUNNING_LOCALLY.md#troubleshooting)
3. Open an issue on GitHub

---

<div align="center">

**Made with ❤️ and ☕**

[View Live Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>
