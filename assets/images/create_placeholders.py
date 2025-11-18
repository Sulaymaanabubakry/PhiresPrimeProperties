#!/usr/bin/env python3
import os

def create_hero_image():
    svg = '''<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E0F6FF;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#228B22;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Sky -->
  <rect width="1920" height="600" fill="url(#skyGrad)"/>
  <!-- Ground -->
  <rect y="600" width="1920" height="480" fill="url(#groundGrad)"/>
  <!-- Houses -->
  <g transform="translate(400, 400)">
    <polygon points="0,100 100,0 200,100" fill="#8B4513"/>
    <rect y="100" width="200" height="200" fill="#D2691E"/>
    <rect x="50" y="150" width="40" height="60" fill="#654321"/>
    <rect x="120" y="150" width="40" height="40" fill="#87CEEB"/>
  </g>
  <g transform="translate(700, 450)">
    <polygon points="0,80 80,0 160,80" fill="#8B4513"/>
    <rect y="80" width="160" height="180" fill="#CD853F"/>
    <rect x="40" y="130" width="35" height="50" fill="#654321"/>
    <rect x="100" y="130" width="35" height="35" fill="#87CEEB"/>
  </g>
  <g transform="translate(1100, 420)">
    <polygon points="0,90 90,0 180,90" fill="#8B4513"/>
    <rect y="90" width="180" height="190" fill="#DEB887"/>
    <rect x="45" y="140" width="38" height="55" fill="#654321"/>
    <rect x="105" y="140" width="38" height="38" fill="#87CEEB"/>
  </g>
  <!-- Text overlay -->
  <text x="960" y="900" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" opacity="0.9">Premium Real Estate</text>
</svg>'''
    with open('hero-estate.svg', 'w') as f:
        f.write(svg)

def create_estate_image(filename, color="#CD853F", title="Estate"):
    svg = f'''<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky{filename}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E0F6FF;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sky{filename})"/>
  <rect y="400" width="800" height="200" fill="#228B22"/>
  <!-- Main building -->
  <polygon points="200,250 400,150 600,250" fill="#8B4513"/>
  <rect x="200" y="250" width="400" height="300" fill="{color}"/>
  <rect x="280" y="350" width="60" height="80" fill="#654321"/>
  <rect x="380" y="300" width="80" height="80" fill="#87CEEB"/>
  <rect x="500" y="300" width="60" height="60" fill="#87CEEB"/>
  <text x="400" y="580" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">{title}</text>
</svg>'''
    with open(filename, 'w') as f:
        f.write(svg)

def create_person_image(filename, bgcolor="#4A90E2"):
    svg = f'''<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="{bgcolor}"/>
  <circle cx="200" cy="150" r="60" fill="#FFE0BD"/>
  <ellipse cx="200" cy="280" rx="80" ry="100" fill="#2C3E50"/>
  <text x="200" y="380" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Client Testimonial</text>
</svg>'''
    with open(filename, 'w') as f:
        f.write(svg)

def create_blog_image(filename, title="Real Estate Insights"):
    svg = f'''<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg{filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#006838;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00A854;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg{filename})"/>
  <rect x="100" y="100" width="600" height="400" fill="white" opacity="0.9" rx="10"/>
  <line x1="150" y1="200" x2="650" y2="200" stroke="#C1272D" stroke-width="4"/>
  <line x1="150" y1="250" x2="650" y2="250" stroke="#1A1A1A" stroke-width="2"/>
  <line x1="150" y1="300" x2="600" y2="300" stroke="#1A1A1A" stroke-width="2"/>
  <line x1="150" y1="350" x2="620" y2="350" stroke="#1A1A1A" stroke-width="2"/>
  <text x="400" y="450" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#006838" text-anchor="middle">{title}</text>
</svg>'''
    with open(filename, 'w') as f:
        f.write(svg)

def create_gallery_image(filename, pattern="1"):
    colors = ["#C1272D", "#006838", "#D4AF37", "#4A90E2", "#8B4513", "#228B22"]
    color = colors[int(pattern) % len(colors)]
    svg = f'''<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="600" fill="{color}"/>
  <polygon points="100,300 300,100 500,300" fill="white" opacity="0.3"/>
  <polygon points="100,500 300,300 500,500" fill="white" opacity="0.2"/>
  <rect x="200" y="200" width="200" height="300" fill="white" opacity="0.4"/>
  <text x="300" y="320" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle" opacity="0.7">🏠</text>
</svg>'''
    with open(filename, 'w') as f:
        f.write(svg)

def create_team_image():
    svg = '''<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="officeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34495E;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#officeBg)"/>
  <!-- People silhouettes -->
  <g transform="translate(150, 200)">
    <circle cx="50" cy="50" r="40" fill="#FFE0BD"/>
    <ellipse cx="50" cy="130" rx="50" ry="70" fill="#006838"/>
  </g>
  <g transform="translate(350, 180)">
    <circle cx="50" cy="50" r="45" fill="#FFE0BD"/>
    <ellipse cx="50" cy="135" rx="55" ry="75" fill="#C1272D"/>
  </g>
  <g transform="translate(580, 200)">
    <circle cx="50" cy="50" r="40" fill="#FFE0BD"/>
    <ellipse cx="50" cy="130" rx="50" ry="70" fill="#006838"/>
  </g>
  <text x="400" y="500" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle">Our Professional Team</text>
</svg>'''
    with open('team-office.svg', 'w') as f:
        f.write(svg)

def create_contact_bg():
    svg = '''<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#E8F5E9"/>
  <!-- Map-like grid -->
  <line x1="0" y1="200" x2="1200" y2="200" stroke="#CCCCCC" stroke-width="2"/>
  <line x1="0" y1="400" x2="1200" y2="400" stroke="#CCCCCC" stroke-width="2"/>
  <line x1="0" y1="600" x2="1200" y2="600" stroke="#CCCCCC" stroke-width="2"/>
  <line x1="300" y1="0" x2="300" y2="800" stroke="#CCCCCC" stroke-width="2"/>
  <line x1="600" y1="0" x2="600" y2="800" stroke="#CCCCCC" stroke-width="2"/>
  <line x1="900" y1="0" x2="900" y2="800" stroke="#CCCCCC" stroke-width="2"/>
  <!-- Location pin -->
  <circle cx="600" cy="400" r="30" fill="#C1272D"/>
  <circle cx="600" cy="400" r="15" fill="white"/>
  <text x="600" y="500" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#006838" text-anchor="middle">Lagos / Ibadan</text>
</svg>'''
    with open('contact-map-bg.svg', 'w') as f:
        f.write(svg)

# Create all placeholder images
print("Creating placeholder images...")
create_hero_image()
create_estate_image('estate-lagoon-park.svg', '#D2691E', 'Lagoon Park')
create_estate_image('estate-garden-city.svg', '#CD853F', 'Garden City')
create_estate_image('estate-ivory-gates.svg', '#DEB887', 'Ivory Gates')
create_estate_image('estate-green-valley.svg', '#C19A6B', 'Green Valley')
create_estate_image('estate-royal-palm.svg', '#D2B48C', 'Royal Palm')
create_estate_image('estate-meridian-heights.svg', '#BC8F8F', 'Meridian Heights')
create_estate_image('estate-crystal-bay.svg', '#DAA520', 'Crystal Bay')
create_estate_image('estate-emerald-springs.svg', '#B8860B', 'Emerald Springs')

create_person_image('client-testimonial-1.svg', '#4A90E2')
create_person_image('client-testimonial-2.svg', '#E94B3C')
create_person_image('client-testimonial-3.svg', '#6AB04C')

create_blog_image('blog-investing-land.svg', 'Land Investment Guide')
create_blog_image('blog-real-estate-tips.svg', 'Real Estate Tips')
create_blog_image('blog-land-banking.svg', 'Land Banking 101')
create_blog_image('blog-buying-guide.svg', 'Property Buying Guide')

create_gallery_image('gallery-1.svg', '1')
create_gallery_image('gallery-2.svg', '2')
create_gallery_image('gallery-3.svg', '3')
create_gallery_image('gallery-4.svg', '4')
create_gallery_image('gallery-5.svg', '5')
create_gallery_image('gallery-6.svg', '6')

create_team_image()
create_contact_bg()

print("All placeholder images created successfully!")
