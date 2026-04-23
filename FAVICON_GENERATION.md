# Favicon Generation Instructions

The project includes `favicon.svg` which works in modern browsers. To generate the PNG and ICO versions:

## Option 1: Use an online tool

Visit [RealFaviconGenerator](https://realfavicongenerator.net/):
1. Upload `favicon.svg`
2. Generate all formats
3. Download and replace the placeholder files

## Option 2: Use ImageMagick (command line)

```bash
# Create 32x32 PNG
convert -background "#0a0a0a" -fill "#00ff41" -font "JetBrains-Mono-Bold" \
  -pointsize 12 -gravity center label:"<LBV/>" \
  -resize 32x32 favicon.png

# Create apple-touch-icon (180x180, use "LBV" without brackets for clarity)
convert -background "#0a0a0a" -fill "#00ff41" -font "JetBrains-Mono-Bold" \
  -pointsize 72 -gravity center label:"LBV" \
  -resize 180x180 apple-touch-icon.png

# Create ICO (16x16 and 32x32 combined)
convert favicon.png \
  \( -clone 0 -resize 16x16 \) \
  -delete 0 -colors 256 favicon.ico
```

## Option 3: Manual design

Use Figma, Photoshop, or GIMP:
- **Background**: #0a0a0a
- **Text**: #00ff41 (matrix green)
- **Font**: JetBrains Mono Bold
- **Sizes needed**:
  - favicon.png: 32x32px
  - apple-touch-icon.png: 180x180px
  - favicon.ico: 16x16 and 32x32 (multi-size)

For small sizes (16x16, 32x32), use "LBV" text without angle brackets for better legibility.
For larger sizes (180x180), you can use "<LBV/>" with proper spacing.
