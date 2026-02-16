export interface Persona {
  id: string
  name: string
  subtitle: string
  age: number
  description: string
  loopSteps: string[]
  features: string[]
  featureLabel: string
  avatarUrl: string
}

export const personas: Persona[] = [
  {
    id: "sarah",
    avatarUrl: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535858f5fa1a45cdfa3a07_peep-57.svg",
    name: "Sarah",
    subtitle: "The Local Organizer",
    age: 34,
    description:
      "Suburban parent and PTA member who organizes through Facebook groups and WhatsApp chains. Motivated by community respect and tangible local wins on education and development.",
    loopSteps: [
      "Discovers through ads when uninformed",
      "Creates personal ballot",
      "Shares at PTA meetings",
      "Becomes trusted voice",
      "Receives ambassador status",
    ],
    features: [
      "Lawn signage with QR codes",
      "Instagram story templates",
      "Facebook profile rings",
      "Brochures for community meetings",
    ],
    featureLabel: "Marketing Channels",
  },
  {
    id: "marcus",
    avatarUrl: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a83d3992372c25556b9_peep-76.svg",
    name: "Marcus",
    subtitle: "The Online Activist",
    age: 26,
    description:
      "Tech worker with 5k+ followers who creates political content daily across multiple platforms.",
    loopSteps: [
      "Creates a social post supporting a cause with our tool that auto generates hashtags and @mentions for a DM",
      "Gets traction online, makes voting recommendations to support cause",
      "Joins our creator program to become verified creator to get featured",
      "Finds others through our feature who posted the same hashtag or mentioned the DM",
      "Evangelizes content, forms a tribe of like-minded people. Gets a \"blue badge\" as a verified creator.",
      "Mobilizes community to create petitions, support candidates, etc.",
    ],
    features: [
      "Verified civic creator profiles",
      "Social post generators (hashtags and mentions)",
      "Online social mobilization",
    ],
    featureLabel: "Key Features",
  },
  {
    id: "linda",
    avatarUrl: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535d808becbf7162555033_peep-102.svg",
    name: "Linda",
    subtitle: "The Single-Issue Advocate",
    age: 52,
    description:
      "Small business owner focused on one specific issue. Uses Facebook, email, and texts but doesn't usually post about politics\u2014becomes relentless when core issue is threatened.",
    loopSteps: [
      "Sees petition ad",
      "Signs + creates guide",
      "Gets sharing prompts",
      "Receives validation",
      "Inspires others to create",
    ],
    features: [
      "One-flow petition + guide creation",
      "Multi-channel sharing prompts",
      "Like/endorsement system",
      "Viral feedback loop",
    ],
    featureLabel: "Key Mechanics",
  },
  {
    id: "jason",
    avatarUrl: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535c5dc67e79290b963f98_peep-92.svg",
    name: "Jason",
    subtitle: "The Casual Sharer",
    age: 29,
    description:
      "Marketing professional who votes casually but avoids intense political content. Prefers 'safe' shareable content that won't make them look too political.",
    loopSteps: [
      "Finds meme on Reddit",
      "Reposts to Instagram",
      "Gets social validation",
      "Considers platform",
    ],
    features: [
      "Shareable meme content",
      "Cross-platform friendly",
      "Low-stakes engagement",
      "Soft conversion path",
    ],
    featureLabel: "Growth Strategy",
  },
]

export const motivations = [
  {
    title: "Personal Validation",
    description:
      "Desire to be seen as credible, informed, and part of important conversations",
  },
  {
    title: "Social Influence",
    description:
      "Building coalitions, demonstrating values, and leveraging community belonging",
  },
  {
    title: "Political Impact",
    description:
      "Driving policy change, supporting candidates, and creating tangible outcomes",
  },
  {
    title: "Platform Benefits",
    description:
      "Growing personal brand, gamification rewards, and network effects",
  },
]

export const patterns = [
  {
    title: "Entry Points Vary",
    description:
      "Memes and lawn signs for casual users, petitions for passionate advocates, community meetings for organizers",
  },
  {
    title: "Social Validation is Critical",
    description:
      "All personas seek recognition\u2014likes, community respect, follower growth, or policy wins",
  },
  {
    title: "Low-Risk Sharing",
    description:
      "Users share when content feels personally relevant but socially acceptable within their networks",
  },
  {
    title: "Clear Next Steps",
    description:
      "Ambassador programs, referral tracking, and creator tools turn users into distribution channels",
  },
]
