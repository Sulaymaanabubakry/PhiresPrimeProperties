# PHIRE'S PRIME PROPERTIES Website

A complete, production-ready, fully responsive real estate information website for PHIRE'S PRIME PROPERTIES - a Nigerian real estate company specializing in affordable land ownership across Lagos and Ibadan.

## 🏢 Company Information

- **Company Name:** PHIRE'S PRIME PROPERTIES
- **Location:** Lagos state, Ibadan, Nigeria
- **Phone:** 0815 113 7842
- **Email:** phiresprimeproperties@gmail.com
- **WhatsApp:** https://wa.me/message/GDBYKY4TBZ4ND1

## 🎨 Brand Colors

The website uses a premium color palette extracted from the company logo:

- **Primary Red:** `#C1272D` - Used for CTAs, highlights, and important elements
- **Primary Green:** `#006838` - Brand base color for headings and accents
- **Accent Gold:** `#D4AF37` - Premium touches and highlights
- **Dark Charcoal:** `#1A1A1A` - Text and dark backgrounds
- **Off-White:** `#F5F5F5` - Light backgrounds
- **Pure White:** `#FFFFFF` - Clean backgrounds

## 📁 Project Structure

```
PhiresPrimeProperties/
├── index.html              # Main homepage
├── about.html              # About Us page
├── projects.html           # All projects listing with filters
├── project-detail.html     # Single project detail template
├── offers.html             # Pre-Launch & Special Offers page
├── blog.html               # Blog index page
├── blog-article.html       # Single article template
├── contact.html            # Contact page with FAQ
├── styles.css              # Main stylesheet
├── app.js                  # Main JavaScript file
├── assets/
│   ├── images/             # All images and logo
│   ├── icons/              # SVG icons (if needed)
│   └── svg/                # Section dividers/decorative SVGs
└── .gitignore              # Git ignore file
```

## ✨ Features

### Design & Layout
- ✅ Premium, modern, and professional design
- ✅ Fully responsive (mobile-first approach)
- ✅ Card grids follow 2/3/4 rule (2 on mobile, 3 on tablet, 4 on desktop)
- ✅ Google Fonts: Inter (body) & Playfair Display (headings)
- ✅ Remix Icons for all icons
- ✅ CSS Grid and Flexbox layouts
- ✅ Smooth animations and transitions

### Header & Navigation
- ✅ Top bar with contact information
- ✅ Sticky header with shadow on scroll
- ✅ Desktop navigation menu
- ✅ Mobile hamburger menu
- ✅ Bottom card navigation for mobile
- ✅ Smooth scroll for anchor links

### Home Page Sections
1. **Hero Section** - Full viewport height with trust badges
2. **About Us Preview** - Company overview with statistics
3. **Featured Projects** - 8 estate projects with details
4. **Pre-Launch Offers** - Special deals with discounts
5. **Testimonials** - Auto-playing carousel with controls
6. **Blog Preview** - Latest articles
7. **Instagram Gallery** - Property highlights with lightbox
8. **Contact Form** - With validation

### Interactive Features
- ✅ Preloader animation
- ✅ Scroll-triggered animations (IntersectionObserver)
- ✅ Testimonials carousel (auto-play, manual controls, swipe support)
- ✅ Project detail modals
- ✅ Reserve offer modals with forms
- ✅ Gallery lightbox with navigation
- ✅ Form validation (contact & reserve forms)
- ✅ FAQ accordion
- ✅ Filter controls for projects
- ✅ Scroll-to-top button
- ✅ Mobile menu with overlay

### Accessibility
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy
- ✅ ARIA attributes for modals and interactive elements
- ✅ Keyboard navigation support
- ✅ Focus trap in modals
- ✅ High contrast text
- ✅ Alt text for all images
- ✅ Reduced motion support

### Pages

1. **index.html** - Homepage with all main sections
2. **about.html** - Company story, mission, vision, values, process
3. **projects.html** - All estates with filter options
4. **project-detail.html** - Template for individual estate details
5. **offers.html** - Pre-launch and special offers
6. **blog.html** - Blog listing with load more
7. **blog-article.html** - Single article template
8. **contact.html** - Contact form, info, and FAQ accordion

## 🚀 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Google Fonts** - Inter & Playfair Display
- **Remix Icons** - Icon library via CDN

## 🎯 Key JavaScript Functionality

### Core Features (app.js)
1. Preloader control
2. Mobile navigation toggle
3. Sticky header on scroll
4. Smooth scrolling
5. Scroll-to-top button
6. Intersection Observer animations
7. Testimonials carousel with autoplay
8. Form validation (contact & reserve)
9. Project detail modal system
10. Reserve offer modal
11. Gallery lightbox
12. FAQ accordion toggles
13. Project filters
14. Blog load more
15. Active nav link highlighting
16. Focus trap for accessibility
17. Reduced motion support

## 📱 Responsive Breakpoints

- **Mobile:** ≤ 480px (2 cards per row)
- **Tablet:** 481px - 1024px (3 cards per row)
- **Desktop:** ≥ 1025px (4 cards per row)

## 🖼️ Images

All images use Unsplash URLs with Nigeria-relevant content:
- Real estate properties
- African/Nigerian people for testimonials
- Local architecture and developments
- Professional team photos
- Modern estate developments

## 🛠️ Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-red: #C1272D;
  --primary-green: #006838;
  --accent-gold: #D4AF37;
  /* ... */
}
```

### Adding Projects
Edit the `projectsData` object in `app.js` and add corresponding HTML cards in `index.html` and `projects.html`.

### Adding Blog Posts
Add blog card HTML in `blog.html` and create corresponding article pages using `blog-article.html` as a template.

### Updating Contact Information
Update in all relevant files:
- Header top bar
- Footer
- Contact page
- All href links

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔄 Future Enhancements

Potential backend integration points:
- Contact form submission to email/database
- Reserve form processing
- Blog CMS integration
- Project management system
- User accounts/login
- Payment gateway integration
- Admin panel for content management

## 📄 License

© 2024 PHIRE'S PRIME PROPERTIES. All rights reserved.

## 👨‍💻 Development

This is a front-end only website built with plain HTML, CSS, and JavaScript. No build process required - simply open `index.html` in a browser to view.

For production deployment:
1. Upload all files to web hosting
2. Ensure proper MIME types for file serving
3. Configure SSL certificate for HTTPS
4. Set up contact form backend (if needed)
5. Optimize images if needed
6. Configure caching headers

## 📞 Support

For questions or support regarding the website:
- Email: phiresprimeproperties@gmail.com
- Phone: 0815 113 7842
- WhatsApp: https://wa.me/message/GDBYKY4TBZ4ND1