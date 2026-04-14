# Photo Gallery Instructions

## How to Add Photos to Your Site

### 1. **Photo Requirements**
- **Format**: JPG, PNG, or WebP
- **Size**: 1920x1080px or larger (4:3 aspect ratio recommended)
- **Quality**: High resolution for best results
- **File size**: Under 2MB per image for optimal loading

### 2. **Photo Organization**
Place your photos in this directory (`static/photos/`) with descriptive names:

```
static/photos/
├── exterior-1.jpg
├── exterior-1-thumb.jpg (thumbnail version)
├── living-room-1.jpg
├── living-room-1-thumb.jpg
├── kitchen-1.jpg
├── kitchen-1-thumb.jpg
├── master-bedroom-1.jpg
├── master-bedroom-1-thumb.jpg
├── community-1.jpg
├── community-1-thumb.jpg
└── neighborhood-1.jpg
```

### 3. **Creating Thumbnails**
For each main photo, create a thumbnail version:
- **Size**: 400x300px (4:3 aspect ratio)
- **Naming**: Add `-thumb` to the filename
- **Example**: `exterior-1.jpg` → `exterior-1-thumb.jpg`

### 4. **Updating the Photo Gallery**
Edit `src/routes/photos/+page.svelte` and update the `photos` array:

```javascript
const photos = [
  {
    src: '/photos/your-photo.jpg',
    thumbnail: '/photos/your-photo-thumb.jpg',
    title: 'Your Photo Title',
    description: 'Description of the photo',
    alt: 'Alt text for accessibility'
  },
  // Add more photos...
];
```

### 5. **Photo Categories**
Consider organizing photos by:
- **Exterior views** (front, back, side views)
- **Interior spaces** (living room, kitchen, bedrooms)
- **Community amenities** (pool, clubhouse, playground)
- **Neighborhood** (location, nearby attractions)

### 6. **Optimization Tips**
- Use WebP format for better compression
- Compress images before uploading
- Use descriptive filenames
- Include alt text for accessibility

### 7. **Sample Photos**
The gallery currently shows placeholder images. Replace them with your actual property photos for the best results.

## Quick Start
1. Add your photos to `static/photos/`
2. Create thumbnail versions
3. Update the photos array in `src/routes/photos/+page.svelte`
4. Deploy your changes

Your photos will automatically be optimized and displayed in a beautiful, responsive gallery!
