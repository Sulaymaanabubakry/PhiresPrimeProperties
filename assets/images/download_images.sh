#!/bin/bash
# Script to download real estate images from Unsplash

# Hero background
curl -L "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80" -o hero-estate.jpg

# Estate/Project images
curl -L "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" -o estate-lagoon-park.jpg
curl -L "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" -o estate-garden-city.jpg
curl -L "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80" -o estate-ivory-gates.jpg
curl -L "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80" -o estate-green-valley.jpg
curl -L "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80" -o estate-royal-palm.jpg
curl -L "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80" -o estate-meridian-heights.jpg
curl -L "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" -o estate-crystal-bay.jpg
curl -L "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" -o estate-emerald-springs.jpg

# Team/agents
curl -L "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" -o team-office.jpg

# Testimonials
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" -o client-testimonial-1.jpg
curl -L "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" -o client-testimonial-2.jpg
curl -L "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" -o client-testimonial-3.jpg

# Blog images
curl -L "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80" -o blog-investing-land.jpg
curl -L "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80" -o blog-real-estate-tips.jpg
curl -L "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80" -o blog-land-banking.jpg
curl -L "https://images.unsplash.com/photo-1554224311-beee4c553c8b?w=800&q=80" -o blog-buying-guide.jpg

# Instagram/Gallery images
curl -L "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" -o gallery-1.jpg
curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" -o gallery-2.jpg
curl -L "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" -o gallery-3.jpg
curl -L "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80" -o gallery-4.jpg
curl -L "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?w=600&q=80" -o gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" -o gallery-6.jpg

# Contact/Map background
curl -L "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&q=80" -o contact-map-bg.jpg

echo "Image download complete!"
