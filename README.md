# Fortify AI International Website

A modern, responsive, and animated website for Fortify AI International, hosted on GitHub Pages.

## Project Structure


fortify-ai-website/
├── index.html # Home page
├── style.css # Main stylesheet
├── script.js # Main JavaScript
├── products.html # Products page
├── industries.html # Industries hub page
├── automotive.html # Automotive industry page
├── travel.html # Travel industry page
├── big-data.html # Big Data industry page
├── music-entertainment.html # Music & Entertainment page
├── software.html # Software industry page
├── transport.html # Transport industry page
├── agriculture.html # Agriculture industry page
├── contact.html # Contact page
├── images/ # Image directory
│ ├── placeholder-1.jpg # Sample image 1
│ ├── placeholder-2.jpg # Sample image 2
│ ├── hero-bg.jpg # Hero background image
│ ├── industries/ # Industry-specific images
│ │ ├── automotive.jpg
│ │ ├── travel.jpg
│ │ ├── big-data.jpg
│ │ └── ...
│ ├── products/ # Product demo images/thumbnails
│ │ ├── analytics-suite.jpg
│ │ ├── cybershield.jpg
│ │ └── ...
│ └── demos/ # Product demo videos
│ ├── analytics-suite.mp4
│ ├── cybershield.mp4
│ └── ...
└── README.md # This file



## How to Upload Images

### 1. Prepare Your Images

Before uploading, optimize your images:
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Product thumbnails**: 800x600px (4:3 aspect ratio)
- **Industry icons**: 400x400px (square)
- **Background images**: 1920x1080px or larger

Recommended formats:
- **JPEG** for photographs
- **PNG** for logos and graphics with transparency
- **SVG** for icons and simple graphics

### 2. Upload Images to GitHub

#### Option A: Via GitHub Web Interface
1. Navigate to your repository on GitHub
2. Click on the `images` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your image files
5. Add a descriptive commit message
6. Click "Commit changes"

#### Option B: Via Command Line
```bash
# Clone your repository
git clone https://github.com/your-username/fortify-ai-website.git

# Navigate to the project
cd fortify-ai-website

# Create necessary directories if they don't exist
mkdir -p images/industries images/products images/demos

# Copy your images to the appropriate folders
# Example:
cp ~/Downloads/automotive.jpg images/industries/
cp ~/Downloads/analytics-suite.mp4 images/demos/

# Add, commit, and push
git add images/
git commit -m "Add automotive industry image and analytics demo video"
git push origin main
