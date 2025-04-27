import { FeatureType, StatType, TestimonialType } from '../types';

export const features: FeatureType[] = [
  {
    id: 1,
    title: "Direct Club-to-Club Transfers",
    description: "Connect directly with clubs worldwide to streamline the transfer process and eliminate intermediaries.",
    icon: "Shuffle",
  },
  {
    id: 2,
    title: "Real-time Player Availability",
    description: "Access live data on available players across leagues and divisions worldwide.",
    icon: "Clock",
  },
  {
    id: 3,
    title: "Secure Communication Platform",
    description: "Negotiate and communicate with confidence on our secure, private messaging system.",
    icon: "Shield",
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description: "Make informed decisions with comprehensive player statistics and performance metrics.",
    icon: "BarChart2",
  },
  {
    id: 5,
    title: "Global Scouting Network",
    description: "Access scouts and recruitment professionals from around the world in one platform.",
    icon: "Globe",
  },
  {
    id: 6,
    title: "Streamlined Negotiations",
    description: "Simplify complex transfer negotiations with our structured workflow tools.",
    icon: "Handshake",
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Marco Silva",
    role: "Sporting Director",
    company: "FC Valencia",
    content: "futbol Connect has transformed how we approach the transfer market. We've completed three significant signings that wouldn't have been possible through traditional channels.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Recruitment",
    company: "AFC Bournemouth",
    content: "The platform gives us unprecedented access to player availability across leagues we previously couldn't efficiently scout. It's extended our recruitment reach significantly.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Jean-Pierre Dumont",
    role: "Technical Director",
    company: "AS Monaco",
    content: "futbol Connect has become an essential tool for our technical department. The analytics and direct communication channels have streamlined our entire transfer process.",
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const stats: StatType[] = [
  {
    id: 1,
    value: "800+",
    label: "Clubs Worldwide"
  },
  {
    id: 2,
    value: "35K+",
    label: "Player Profiles"
  },
  {
    id: 3,
    value: "£1.2B+",
    label: "Transfer Value"
  },
  {
    id: 4,
    value: "180+",
    label: "Countries"
  }
];