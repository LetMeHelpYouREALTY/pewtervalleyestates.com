export type RelatedLink = { href: string; label: string; description: string }

export const pageRelationships: Record<string, { related: RelatedLink[] }> = {
  "/": {
    related: [
      {
        href: "/buyer-seller-services",
        label: "Buyer & Seller Services",
        description: "Dedicated strategy and process page",
      },
      {
        href: "/neighborhood-insights",
        label: "Neighborhood Insights (89183)",
        description: "Quick local facts and FAQs",
      },
      {
        href: "/homes-for-sale",
        label: "Browse Homes for Sale in Pewter Valley",
        description: "View all available properties",
      },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch (Henderson area)",
        description: "Suburban focus: 89123 & 89183",
      },
      {
        href: "/sell-your-home",
        label: "Sell Your Las Vegas Home",
        description: "Get expert selling assistance",
      },
      {
        href: "/about",
        label: "About Dr. Jan Duffy",
        description: "Meet your local real estate expert",
      },
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates (in Silverado Ranch)",
        description: "Richmond American resale community",
      },
    ],
  },
  "/homes-for-sale": {
    related: [
      {
        href: "/buy-a-home",
        label: "Home Buying Guide",
        description: "Tips for Las Vegas home buyers",
      },
      {
        href: "/listings",
        label: "View All Active Listings",
        description: "Browse our full inventory",
      },
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates Community",
        description: "Learn about the neighborhood",
      },
      {
        href: "/home-valuation",
        label: "What's Your Home Worth?",
        description: "Free instant valuation",
      },
    ],
  },
  "/buy-a-home": {
    related: [
      {
        href: "/homes-for-sale",
        label: "Homes for Sale in Pewter Valley",
        description: "Start your search",
      },
      {
        href: "/investment-properties",
        label: "Las Vegas Investment Properties",
        description: "Build your portfolio",
      },
      {
        href: "/neighborhood-guide",
        label: "Las Vegas Neighborhood Guide",
        description: "Find the right area",
      },
      { href: "/contact", label: "Schedule a Consultation", description: "Talk to Dr. Jan Duffy" },
    ],
  },
  "/sell-your-home": {
    related: [
      {
        href: "/home-valuation",
        label: "Free Home Valuation",
        description: "Know your home's value",
      },
      {
        href: "/market-analysis",
        label: "Las Vegas Market Analysis",
        description: "Current market trends",
      },
      {
        href: "/about",
        label: "Why Choose Dr. Jan Duffy",
        description: "Expert selling strategies",
      },
      { href: "/contact", label: "Get Started Selling", description: "Schedule your consultation" },
    ],
  },
  "/home-valuation": {
    related: [
      { href: "/sell-your-home", label: "Ready to Sell?", description: "Expert selling services" },
      {
        href: "/market-analysis",
        label: "Market Analysis Report",
        description: "Understand local trends",
      },
      {
        href: "/homes-for-sale",
        label: "Compare Similar Homes",
        description: "See what's selling",
      },
      { href: "/contact", label: "Discuss Your Valuation", description: "Talk to an expert" },
    ],
  },
  "/neighborhood": {
    related: [
      {
        href: "/pewter-valley-estates/amenities",
        label: "Nearby shopping & parks",
        description: "Amenities guide (split URL)",
      },
      {
        href: "/silverado-ranch/getting-around",
        label: "Commute & transportation",
        description: "Freeways, airport, transit",
      },
      {
        href: "/homes-for-sale",
        label: "Homes for Sale in Pewter Valley",
        description: "Browse available properties",
      },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch area",
        description: "Broader neighborhood; Pewter Valley sits inside",
      },
      {
        href: "/southwest-las-vegas",
        label: "Southwest Las Vegas Overview",
        description: "Explore the region",
      },
    ],
  },
  "/southwest-las-vegas": {
    related: [
      { href: "/neighborhood", label: "Pewter Valley Estates", description: "Premier community" },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch",
        description: "Henderson & Clark County 89123/89183",
      },
      {
        href: "/homes-for-sale",
        label: "Southwest Las Vegas Homes",
        description: "Browse listings",
      },
      {
        href: "/neighborhood-guide",
        label: "All Las Vegas Neighborhoods",
        description: "Explore more areas",
      },
      {
        href: "/market-analysis",
        label: "Southwest Market Trends",
        description: "Local market data",
      },
    ],
  },
  "/silverado-ranch": {
    related: [
      {
        href: "/pewter-valley-estates/amenities",
        label: "Nearby amenities (Pewter)",
        description: "Shopping, parks, schools",
      },
      {
        href: "/silverado-ranch/getting-around",
        label: "Commute & transport",
        description: "I-15, I-215, airport",
      },
      {
        href: "/silverado-ranch/attractions",
        label: "Attractions & day trips",
        description: "Strip, Hoover Dam, Valley of Fire",
      },
      {
        href: "/silverado-ranch/history",
        label: "Silverado Ranch history",
        description: "Ranch roots to today",
      },
      { href: "/homes-for-sale", label: "Homes for Sale", description: "Browse current listings" },
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates",
        description: "Community within Silverado Ranch (89183)",
      },
    ],
  },
  "/pewter-valley-estates/amenities": {
    related: [
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates hub",
        description: "Community overview & map",
      },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch real estate",
        description: "89123 & 89183 focus",
      },
      {
        href: "/silverado-ranch/getting-around",
        label: "Commute & transport",
        description: "Freeways and airport",
      },
      { href: "/homes-for-sale", label: "Homes for sale", description: "Search listings" },
    ],
  },
  "/silverado-ranch/history": {
    related: [
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch overview",
        description: "Market & lifestyle context",
      },
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates",
        description: "Richmond American pocket",
      },
      {
        href: "/silverado-ranch/attractions",
        label: "Attractions near the area",
        description: "Lifestyle orientation",
      },
      { href: "/contact", label: "Ask Dr. Jan Duffy", description: "Tour & timing questions" },
    ],
  },
  "/silverado-ranch/getting-around": {
    related: [
      { href: "/silverado-ranch", label: "Silverado Ranch", description: "Area overview" },
      {
        href: "/pewter-valley-estates/amenities",
        label: "Nearby amenities",
        description: "Daily shopping & parks",
      },
      {
        href: "/silverado-ranch/attractions",
        label: "Attractions & day trips",
        description: "Strip & beyond",
      },
      {
        href: "/las-vegas-relocation-guide",
        label: "Relocation guide",
        description: "Move planning",
      },
    ],
  },
  "/silverado-ranch/attractions": {
    related: [
      {
        href: "/silverado-ranch/getting-around",
        label: "Commute & transport",
        description: "How far is the Strip?",
      },
      {
        href: "/neighborhood-guide",
        label: "Las Vegas neighborhoods",
        description: "Broader area compare",
      },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch homes",
        description: "Buy or sell locally",
      },
      { href: "/photos", label: "Community photos", description: "Visual context" },
    ],
  },
  "/about": {
    related: [
      { href: "/dr-jan-duffy", label: "Meet Dr. Jan Duffy", description: "Your realtor profile" },
      { href: "/contact", label: "Contact Dr. Jan Duffy", description: "Get in touch today" },
      {
        href: "/homes-for-sale",
        label: "View Current Listings",
        description: "Properties for sale",
      },
      {
        href: "/faq",
        label: "Frequently Asked Questions",
        description: "Common questions answered",
      },
    ],
  },
  "/contact": {
    related: [
      {
        href: "/buyer-seller-services",
        label: "Buyer & Seller Services",
        description: "Service options by goal",
      },
      {
        href: "/neighborhood-insights",
        label: "Neighborhood Insights",
        description: "Local area context before you call",
      },
      { href: "/about", label: "About Dr. Jan Duffy", description: "Learn about your agent" },
      { href: "/homes-for-sale", label: "Browse Homes First", description: "Find properties" },
      {
        href: "/home-valuation",
        label: "Get a Free Valuation",
        description: "Know your home's worth",
      },
      { href: "/faq", label: "FAQ", description: "Quick answers" },
    ],
  },
  "/buyer-seller-services": {
    related: [
      {
        href: "/buy-a-home",
        label: "Buyer Guide",
        description: "Search, tours, and offer strategy",
      },
      {
        href: "/sell-your-home",
        label: "Seller Guide",
        description: "Pricing and marketing strategy",
      },
      { href: "/home-valuation", label: "Home Valuation", description: "Get a pricing baseline" },
      {
        href: "/contact",
        label: "Talk to Dr. Jan Duffy",
        description: "Schedule your strategy call",
      },
    ],
  },
  "/neighborhood-insights": {
    related: [
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates overview",
        description: "Community-level guide",
      },
      {
        href: "/silverado-ranch",
        label: "Silverado Ranch area guide",
        description: "Broader area context",
      },
      {
        href: "/southwest-las-vegas",
        label: "Southwest Las Vegas",
        description: "Compare nearby areas",
      },
      {
        href: "/neighborhood-guide",
        label: "Neighborhood Guide",
        description: "Explore other local options",
      },
    ],
  },
  "/investment-properties": {
    related: [
      {
        href: "/homes-for-sale",
        label: "All Properties for Sale",
        description: "Browse inventory",
      },
      {
        href: "/market-analysis",
        label: "Investment Market Analysis",
        description: "ROI insights",
      },
      { href: "/buy-a-home", label: "Buying Guide", description: "Investment tips" },
      {
        href: "/contact",
        label: "Discuss Investment Strategy",
        description: "Expert consultation",
      },
    ],
  },
  "/market-analysis": {
    related: [
      { href: "/home-valuation", label: "Get Your Home Valued", description: "Free valuation" },
      { href: "/sell-your-home", label: "Selling Strategies", description: "Maximize your sale" },
      {
        href: "/investment-properties",
        label: "Investment Opportunities",
        description: "Market insights",
      },
      { href: "/neighborhood", label: "Pewter Valley Market", description: "Local focus" },
    ],
  },
  "/faq": {
    related: [
      { href: "/buy-a-home", label: "Home Buying Process", description: "Step-by-step guide" },
      { href: "/sell-your-home", label: "Home Selling Process", description: "What to expect" },
      { href: "/contact", label: "Ask a Question", description: "Get personal help" },
      { href: "/about", label: "About Dr. Jan Duffy", description: "Your expert agent" },
    ],
  },
  "/las-vegas-relocation-guide": {
    related: [
      {
        href: "/neighborhood",
        label: "Pewter Valley Estates Neighborhood",
        description: "Learn about the community",
      },
      {
        href: "/southwest-las-vegas",
        label: "Southwest Las Vegas Overview",
        description: "Explore nearby areas",
      },
      {
        href: "/homes-for-sale",
        label: "Homes for Sale in Pewter Valley Estates",
        description: "View current listings",
      },
      {
        href: "/contact",
        label: "Relocation Consultation",
        description: "Plan your move with Dr. Jan Duffy",
      },
    ],
  },
  "/buyer-checklist": {
    related: [
      {
        href: "/buy-a-home",
        label: "Buyer Services in Pewter Valley Estates",
        description: "Full buyer representation",
      },
      {
        href: "/homes-for-sale",
        label: "Browse Available Homes",
        description: "Current properties for sale",
      },
      {
        href: "/listings",
        label: "Active Las Vegas Listings",
        description: "Wider Las Vegas inventory",
      },
      {
        href: "/contact",
        label: "Ask Buying Questions",
        description: "Talk directly with Dr. Jan Duffy",
      },
    ],
  },
  "/selling-checklist": {
    related: [
      {
        href: "/sell-your-home",
        label: "Seller Services in Pewter Valley Estates",
        description: "Expert listing strategy",
      },
      {
        href: "/home-valuation",
        label: "Free Home Valuation",
        description: "Understand your home's value",
      },
      {
        href: "/market-analysis",
        label: "Market Analysis & Trends",
        description: "Track pricing and demand",
      },
      {
        href: "/contact",
        label: "Schedule Listing Consultation",
        description: "Plan your sale with Dr. Jan Duffy",
      },
    ],
  },
  "/google-reviews": {
    related: [
      { href: "/about", label: "About Dr. Jan Duffy", description: "Background and approach" },
      { href: "/buy-a-home", label: "Buyer Services", description: "How buyers are represented" },
      {
        href: "/sell-your-home",
        label: "Seller Services",
        description: "How sellers are represented",
      },
      { href: "/contact", label: "Contact Dr. Jan Duffy", description: "Get in touch today" },
    ],
  },
}
