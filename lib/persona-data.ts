export interface Persona {
  id: string
  name: string
  subtitle: string
  age: number
  description: string
  loopSteps: Array<{ stage: string; text: string }>
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
      { stage: "trigger", text: "Sees targeted ad while feeling uninformed about upcoming election" },
      { stage: "create", text: "Creates personalized ballot to understand candidates and issues" },
      { stage: "reward", text: "Gains confidence and becomes go-to resource at PTA meetings" },
      { stage: "share", text: "Distributes voter guides through community networks" },
      { stage: "amplify", text: "Receives ambassador toolkit with referral tracking and exclusive content" },
    ],
    features: [
      "Lawn signage with QR codes linking to personalized ballots",
      "Instagram story templates for easy social sharing",
      "Facebook profile rings signaling civic engagement",
      "Print-ready brochures for community meetings and events",
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
      { stage: "trigger", text: "Wants to amplify advocacy content with data-driven recommendations" },
      { stage: "create", text: "Generates location-based voter guides using API tools with auto-populated hashtags" },
      { stage: "reward", text: "Joins verified creator program with blue badge and featured placement" },
      { stage: "share", text: "Discovers and connects with like-minded creators through hashtag tribes" },
      { stage: "amplify", text: "Mobilizes community to create petitions, support candidates, and drive policy change" },
    ],
    features: [
      "Verified civic creator profiles with credibility badges",
      "API-powered social post generators with smart hashtags and mentions",
      "Policy change tracking dashboard showing real-world impact",
      "Community mobilization tools for petitions and candidate support",
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
      "Small business owner focused on one specific issue. Uses Facebook, email, and texts but doesn't usually post about politics—becomes relentless when core issue is threatened.",
    loopSteps: [
      { stage: "trigger", text: "Sees targeted petition ad addressing her core policy concern" },
      { stage: "create", text: "Signs petition and creates mini voter guide in single streamlined flow" },
      { stage: "reward", text: "Receives immediate validation through likes, endorsements, and community support" },
      { stage: "share", text: "Gets multi-channel prompts to share via Facebook, SMS, and WhatsApp" },
      { stage: "amplify", text: "Her popular guide inspires others to create guides, driving viral adoption" },
    ],
    features: [
      "Seamless petition-to-voter-guide creation flow (zero friction)",
      "Multi-channel sharing prompts optimized for Facebook, SMS, and WhatsApp",
      "Social validation system with likes and public endorsements",
      "Viral feedback loop: popular guides resurface in petitions to drive new creators",
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
      { stage: "trigger", text: "Discovers low-stakes Change.vote meme on Reddit" },
      { stage: "create", text: "Reposts meme to Instagram stories with minimal effort" },
      { stage: "reward", text: "Receives positive social validation (likes, emoji reactions, positive comments)" },
      { stage: "share", text: "Shares to multiple group chats based on social momentum" },
      { stage: "amplify", text: "Curiosity grows—explores platform after successful low-risk engagement" },
    ],
    features: [
      "Shareable meme library designed for viral spread and low political risk",
      "Cross-platform optimization (Reddit, Instagram, TikTok, group chats)",
      "Low-stakes engagement that doesn't alienate followers or friends",
      "Soft conversion funnel from meme consumer to platform user",
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
      "All personas seek recognition—likes, community respect, follower growth, or policy wins",
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