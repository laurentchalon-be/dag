# Quick UI/UX Checklist - Morning Glow

Based on UI/UX Pro Max Skill guidelines. Use this checklist before every deployment.

---

## ✅ Visual Quality

- [x] **No emoji icons** - Use SVG from Heroicons/Lucide instead
- [x] **Consistent icon set** - All icons from same library
- [x] **Correct brand logos** - Verified from official sources
- [x] **No layout shift on hover** - Hover states don't move content
- [x] **Direct theme colors** - Use Tailwind classes, not CSS variables

---

## ✅ Interaction

- [x] **cursor-pointer on clickables** - All interactive elements show pointer
- [x] **Clear hover feedback** - Visual change on hover (color/shadow/border)
- [x] **Smooth transitions** - 150-300ms for micro-interactions
- [x] **Visible focus states** - Keyboard users can see focus

---

## ⚠️ Light/Dark Mode (TODO)

- [ ] **Light mode contrast** - Text 4.5:1 minimum
- [ ] **Glass elements visible** - Transparent elements work in light mode
- [ ] **Borders visible** - Both modes show borders
- [ ] **Test both modes** - Verify before deployment

---

## ✅ Layout

- [x] **Floating element spacing** - Proper margins from edges
- [x] **No hidden content** - Nothing behind fixed navbars
- [x] **Responsive breakpoints** - 375px, 768px, 1024px, 1440px
- [x] **No horizontal scroll** - Mobile doesn't scroll sideways

---

## ✅ Accessibility

- [x] **Descriptive alt text** - Images have meaningful descriptions
- [x] **Form labels** - All inputs have associated labels
- [x] **Not color-only** - Don't rely solely on color for meaning
- [x] **prefers-reduced-motion** - Respect user motion preferences
- [x] **ARIA labels** - Buttons describe their purpose
- [x] **aria-hidden on decorative** - Decorative SVGs hidden from screen readers

---

## 🎯 Animation Guidelines

- [x] **Micro-interactions: 150-300ms** - Buttons, hovers, transitions
- [x] **Page transitions: 300-500ms** - Route changes, modals
- [x] **Decorative: 2-4s** - Background animations, floating elements
- [x] **Loading indicators only** - Infinite animations only for loading
- [x] **Ease-out for entering** - Elements appearing
- [x] **Ease-in for exiting** - Elements disappearing

---

## 📱 Mobile-Specific

- [ ] **Touch targets 44x44px** - Minimum size for fingers
- [ ] **No hover-only features** - Mobile has no hover
- [ ] **Swipe gestures** - Consider adding for mobile
- [ ] **Viewport meta tag** - Proper mobile scaling

---

## 🚀 Performance

- [ ] **Lazy load images** - Load images as needed
- [ ] **Optimize images** - WebP format, proper sizing
- [ ] **Code splitting** - Separate bundles for routes
- [ ] **Remove unused CSS** - Purge unused Tailwind classes

---

## 🔍 SEO

- [ ] **Title tags** - Unique, descriptive titles
- [ ] **Meta descriptions** - Compelling summaries
- [ ] **Heading hierarchy** - Single h1, proper h2-h6
- [ ] **Semantic HTML** - Use proper HTML5 elements

---

## 🎨 Design System Alignment

### Current Implementation
- **Pattern:** Hero-Centric ✅
- **Style:** Glassmorphism with dark mode ✅
- **Colors:** Purple/Orange gradient ⚠️
- **Typography:** Playfair Display + Plus Jakarta Sans ⚠️

### Recommended (Optional)
- **Pattern:** Hero-Centric + Conversion
- **Style:** Vibrant & Block-based
- **Colors:** Premium black (#1C1917) + Gold (#CA8A04)
- **Typography:** Bodoni Moda + Jost

---

## 🐛 Common Anti-Patterns to Avoid

### Icons
- ❌ Using emojis as UI icons (🎨 🚀 ⚙️)
- ✅ Use SVG from Heroicons/Lucide

### Cursor
- ❌ No cursor change on interactive elements
- ✅ Add `cursor-pointer` to all clickables

### Animations
- ❌ Animations longer than 500ms for UI
- ✅ Keep micro-interactions 150-300ms

### Forms
- ❌ Inputs without labels
- ✅ Every input has a label (visible or sr-only)

### Accessibility
- ❌ Ignoring `prefers-reduced-motion`
- ✅ Respect user motion preferences

### Alt Text
- ❌ Generic alt text ("image", "photo")
- ✅ Descriptive alt text explaining content

---

## 📊 Current Score: 8.75/10

| Category | Score |
|----------|-------|
| Visual Design | 9/10 ✅ |
| Accessibility | 9/10 ✅ |
| Performance | 8/10 ⚠️ |
| UX Best Practices | 9/10 ✅ |

---

## 🎯 Next Deployment Checklist

Before pushing to production:

1. [ ] Run through this entire checklist
2. [ ] Test on Chrome, Firefox, Safari
3. [ ] Test on mobile (iOS + Android)
4. [ ] Run Lighthouse audit (aim for 90+ accessibility)
5. [ ] Test keyboard navigation
6. [ ] Test with screen reader (NVDA/VoiceOver)
7. [ ] Verify all links work
8. [ ] Check console for errors
9. [ ] Test form submissions
10. [ ] Verify cart functionality

---

## 📚 Resources

- **UI/UX Pro Max Skill:** `.agent/skills/ui-ux-pro-max/SKILL.md`
- **Audit Report:** `UI_UX_AUDIT.md`
- **Improvements Log:** `UI_UX_IMPROVEMENTS.md`
- **Heroicons:** https://heroicons.com/
- **Lucide Icons:** https://lucide.dev/
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** 2026-02-07  
**Maintained by:** UI/UX Pro Max Skill v2.0
