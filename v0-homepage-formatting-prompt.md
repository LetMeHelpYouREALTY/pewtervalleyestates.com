# v0 Prompt — Homepage Formatting Recovery

Design a clean, premium, mobile-first real estate homepage for **Pewter Valley Estates** in **Silverado Ranch (Las Vegas/Henderson)**.

## Goals
- Fix visual hierarchy and spacing so content never appears as raw/unformatted blocks.
- Keep lead-generation CTAs prominent.
- Preserve hyper-local trust signals (NAP, map, reviews, service area).

## Required sections (top to bottom)
1. **Sticky Header**
   - Brand: "Silverado Ranch | Homes by Dr. Jan Duffy"
   - Nav: Home, Buy, Sell, Areas, About, Contact
   - Primary CTA: `Call 702 500-1955`
2. **Hero**
   - H1: "Pewter Valley Estates Real Estate in Silverado Ranch"
   - Supporting text: mention 89183, Las Vegas/Henderson, buyer/seller support
   - CTAs: "View Homes for Sale", "Get Home Value"
3. **Two-Card Lead Capture**
   - Buyer lead card + Seller valuation card
4. **Trust / Social Proof**
   - Reviews summary and local credibility bullets
5. **Feature Grid**
   - 6 cards: location, schools access, amenities, resale expertise, market analysis, negotiation
6. **Map + NAP**
   - Address, phone, email, hours, directions/reviews buttons
7. **Listings / Search CTA band**
8. **Footer**
   - Deep links, compliance line, brokerage mention

## Visual style
- Professional luxury-residential tone
- Palette: navy, slate, white, gold accent
- Card-based layout, clear spacing, rounded corners
- Strong contrast and readable typography
- Icons should be consistent size (no oversized raw SVG look)

## Accessibility + responsiveness
- Mobile-first layout, then tablet/desktop breakpoints
- Buttons at least 44px tall
- Semantic headings and landmarks
- Keyboard focus states visible

## Output
- Generate React + Tailwind-compatible structure for Next.js App Router
- Include reusable section components and clear class naming
- Keep copy concise and conversion-focused
