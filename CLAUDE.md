# Rory Schmitz Website - Project Summary

## What We Built
- Converted Next.js project to plain HTML/CSS website
- Simple hero image site displaying fullscreen image of Rory Schmitz
- Mobile-optimized responsive design

## Current Status ✅
- **Repository:** https://github.com/mixedmediaservice/roryschmitz
- **Vercel URL:** https://roryschmitz-git-main-mixedmediaservices-projects.vercel.app
- **Custom Domain:** www.roryschmitz.com / roryschmitz.com (DNS propagating)

## File Structure
```
/
├── index.html          # Main HTML file
├── styles.css          # CSS with mobile optimizations
├── hero-image.jpg      # Main hero image
├── favicon files       # All favicon variations
└── site.webmanifest   # PWA manifest
```

## Deployment Setup
- **GitHub:** Connected to mixedmediaservice/roryschmitz
- **Vercel:** Auto-deploys from main branch
- **Domain:** Using Vercel nameservers (ns1.vercel-dns.com, ns2.vercel-dns.com)
- **SSL:** Auto-managed by Vercel

## DNS Configuration
- Apex domain (roryschmitz.com): A record → 76.76.19.61
- WWW subdomain: CNAME → cname.vercel-dns.com
- Nameservers managed by Vercel

## Mobile Optimizations
- Dynamic viewport height (100dvh) for mobile browsers
- Centered image positioning
- Full-width coverage without cutoff
- Media queries for screens under 768px

## Commands to Remember
- **Deploy:** `git push` (auto-deploys to Vercel)
- **Local test:** `open index.html`

## Notes
- Site works perfectly on Vercel URL
- Custom domain DNS fully propagated as of deployment
- May need browser cache clearing to see custom domain changes