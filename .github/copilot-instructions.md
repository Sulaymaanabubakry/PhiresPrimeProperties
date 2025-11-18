# Copilot Instructions for PHIRE'S PRIME PROPERTIES

This is a static website for PHIRE'S PRIME PROPERTIES, a Nigerian real estate company specializing in affordable land ownership across Lagos and Ibadan. The website is built with pure HTML, CSS, and vanilla JavaScript - no frameworks or build tools required.

## Project Overview

- **Type**: Static website (no backend)
- **Technology Stack**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Dependencies**: None (uses CDN for fonts and icons)
- **Build Process**: None required - ready to deploy as-is
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Code Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Include ARIA attributes for accessibility
- Add descriptive alt text for all images
- Follow the existing structure and patterns

### CSS
- Use CSS custom properties (variables) defined in `:root` for colors and common values
- Follow mobile-first responsive design approach
- Maintain the established breakpoints:
  - Mobile: ≤ 480px
  - Tablet: 481px - 1024px
  - Desktop: ≥ 1025px
- Use CSS Grid and Flexbox for layouts
- Keep card grids following 2/3/4 rule (2 on mobile, 3 on tablet, 4 on desktop)
- Avoid inline styles - all styling should be in `styles.css`

### JavaScript
- Write vanilla JavaScript (ES6+) - no frameworks
- Maintain the modular structure with clear section comments
- Include null checks before accessing DOM elements
- Support keyboard navigation and accessibility
- Respect `prefers-reduced-motion` for animations
- Follow the established patterns for event listeners and interactions

### Brand & Design
- **Company**: PHIRE'S PRIME PROPERTIES
- **Location**: Lagos state, Ibadan, Nigeria
- **Primary Colors**:
  - Red: `#C1272D` (CTAs, highlights)
  - Green: `#006838` (brand base, headings)
  - Gold: `#D4AF37` (premium accents)
  - Dark Charcoal: `#1A1A1A` (text)
  - Off-White: `#F5F5F5` (backgrounds)
- **Typography**:
  - Headings: Playfair Display (Google Fonts)
  - Body: Inter (Google Fonts)
- **Icons**: Remix Icons (CDN)

## Repository Structure

```
PhiresPrimeProperties/
├── index.html              # Main homepage with all sections
├── about.html              # Company information
├── projects.html           # Property listings with filters
├── project-detail.html     # Single project template
├── offers.html             # Pre-launch & special offers
├── blog.html               # Blog listing
├── blog-article.html       # Single article template
├── contact.html            # Contact form with FAQ
├── styles.css              # Single comprehensive stylesheet
├── app.js                  # All JavaScript functionality
├── assets/
│   ├── images/             # SVG placeholders and images
│   ├── icons/              # (Reserved for future use)
│   └── svg/                # (Reserved for future use)
├── .gitignore              # Git ignore configuration
├── README.md               # Project documentation
├── DEPLOYMENT.md           # Deployment instructions
└── PROJECT_SUMMARY.md      # Project status summary
```

## Development Workflow

### Testing
Since this is a static website with no build process:
1. Open `index.html` in a modern web browser to test
2. Test on different screen sizes using browser dev tools
3. Check console for JavaScript errors
4. Verify all links and navigation work correctly
5. Test forms (though backend integration would be needed for actual submission)
6. Test accessibility with keyboard navigation

### No Build or Compilation
- Files can be opened directly in browser
- No package managers (npm, yarn) needed
- No transpilation or bundling required
- Changes are immediately visible on refresh

### Deployment
- Simply upload all files to any static hosting service
- Maintain the folder structure
- Options: GitHub Pages, Netlify, Vercel, or traditional web hosting
- Ensure HTTPS is configured on production

## Key Features to Preserve

### Interactive Elements
- Preloader animation
- Mobile navigation with hamburger menu
- Sticky header on scroll
- Scroll-to-top button
- Testimonials carousel (auto-play + manual controls)
- Project detail modals
- Gallery lightbox with navigation
- Form validation
- FAQ accordion
- Project filters
- Scroll-triggered animations (IntersectionObserver)

### Accessibility
- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Focus trap in modals
- High contrast text
- Reduced motion support
- Alt text for images

## Making Changes

### Adding Projects
1. Update the `projectsData` object in `app.js`
2. Add corresponding HTML card in `index.html` (Featured Projects section)
3. Add project card in `projects.html`

### Adding Blog Posts
1. Add blog card HTML in `blog.html`
2. Create new article page using `blog-article.html` as template

### Updating Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-red: #C1272D;
  --primary-green: #006838;
  --accent-gold: #D4AF37;
  /* ... */
}
```

### Updating Contact Information
Update in all relevant locations:
- Header top bar (all pages)
- Footer (all pages)
- Contact page content
- All `href` links (phone, email, WhatsApp)

## Nigerian Context

This website serves a Nigerian audience and should:
- Use Nigerian English spelling conventions
- Reference Lagos, Ibadan, and other Nigerian locations
- Use Nigerian Naira (₦) for pricing
- Reference local real estate terminology
- Feature Nigeria-relevant content and imagery

## Important Notes

- **No Lorem Ipsum**: All content should be real and relevant
- **No Framework Dependencies**: Keep it vanilla - no React, Vue, jQuery, etc.
- **Single File Architecture**: Keep all CSS in `styles.css` and all JS in `app.js`
- **CDN Only**: External resources should use CDN links (Google Fonts, Remix Icons)
- **Responsive First**: Always consider mobile, tablet, and desktop layouts
- **Performance**: Keep the site fast and lightweight
- **Accessibility**: Maintain WCAG compliance

## Contact Information

- **Company**: PHIRE'S PRIME PROPERTIES
- **Phone**: 0815 113 7842
- **Email**: phiresprimeproperties@gmail.com
- **WhatsApp**: https://wa.me/message/GDBYKY4TBZ4ND1
