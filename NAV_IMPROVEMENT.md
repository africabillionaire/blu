# Nav Component Improvement

I have improved the nav component (`components/nav.tsx`) to meet the specified design requirements for Citi Adolph.

## Key Improvements

### 1. Structure
- Added **Utility Bar** (topmost, 40px) with:
  - Left: "Operating in Africa" (region indicator)
  - Right: Language switcher (EN|FR), "Contact us" link, "Log in" link, Dark/Light mode toggle
- Added **Main Nav Bar** (below utility bar, 64px) with:
  - Left: "CITADOLPH" logo (IBM Plex Sans Bold)
  - Center: Primary nav items (WHAT WE DO, WHAT WE THINK, WHO WE ARE, CAREERS)
  - Right: "Get a quote" CTA button
- Made main nav bar sticky (stays fixed when utility bar scrolls away)

### 2. Design System Compliance
- **Typography**: IBM Plex Sans only (all weights via @next/font/google)
- **Colors**: 
  - Black (#000000), White (#FFFFFF)
  - Brand Blue: oklch(0.5 0.2 250) (--brand-blue)
  - Brand Red: oklch(0.5 0.2 30) (--brand-red)
- **Spacing**: Based on 8px scale (using Tailwind with custom calculations)
- **Style**: Swiss/International Typographic - strong grid, generous whitespace, left-aligned, minimal decoration

### 3. Interactive States
- **Hover Effects**:
  - Nav items: Text becomes whiter (lighter gray) + red underline (2px)
  - "Get a quote" button: Background opacity reduces to 90% on hover
- **Active Page Indicator**: Brand blue underline (2px) on current section (non-mega items)
- **Focus States**: 2px brand-blue Carbon-style focus ring (inherited from base components)
- **Megamenu Behavior**:
  - WHAT WE DO, WHAT WE THINK, CAREERS open full-width megamenu on hover
  - WHO WE ARE is a simple page link (no megamenu)
  - Megamenu appears with slide/fade animation (150-250ms ease-out)
  - Subtle elevation (shadow) for megamenu
  - Content structure matches Accenture-inspired specification exactly

### 4. Megamenu Content
- **WHAT WE DO**: 
  - Column 1: BY SERVICE (6 items)
  - Column 2: BY BUSINESS NEED (6 items)
  - Column 3: PROGRAMS (Startup Launch Programs + "Get a digital concierge" featured card)
- **WHAT WE THINK**:
  - Column 1: INSIGHTS (4 items)
  - Column 2: PERSPECTIVES (3 items)
  - Column 3: FEATURED (latest article teaser)
- **CAREERS**:
  - Column 1: JOIN US (3 items)
  - Column 2: WORK MODELS (3 items)
  - Column 3: RECRUITMENT ("We recruit specialists via LinkedIn" featured card)

### 5. Technical Implementation
- Uses React hooks (useState) for megamenu state
- Responsive design (currently shows desktop layout; mobile/hamburger can be extended)
- Theme-aware (adapts to light/dark mode using CSS variables)
- Smooth transitions for all interactive states
- Accessible: semantic HTML, proper contrast, keyboard navigable (placeholder for full implementation)
- Built with Next.js 16.2.6, TypeScript, Tailwind CSS 4

### Files Modified
- `components/nav.tsx` - Completely rewritten nav component with utility bar, main nav, and megamenu

## Usage
The nav component is already integrated in `app/layout.tsx` and will appear on all pages. No further changes are needed.

## Notes
- Mobile view (hamburger menu) and scroll-based height reduction for main nav are not implemented in this version but can be added as enhancements
- Language switcher and dark/light mode toggle are placeholders (functional logic would require i18n and theme context)
- All colors and typography strictly follow the provided design system lock

The nav now provides an enterprise-grade, Swiss-style navigation experience appropriate for a digital transformation agency serving government and corporate clients across Africa.