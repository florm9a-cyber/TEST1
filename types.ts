export interface Family {
  id: string;
  name: string;
  icon: string; // Lucide icon name or image path
  description: string;
  image: string; // Background image for the card
}

export interface SubFamily {
  id: string;
  familyId: string;
  name: string;
}

export type ChannelQuality = 'SD' | 'HD' | 'FHD' | '4K';
export type Country = 'USA' | 'Canada' | 'International';
export type Language = 'EN' | 'FR' | 'ES';
export type ChannelTag = 'LIVE' | 'PPV' | 'EVENT' | 'NEWS';

export interface Channel {
  id: string;
  name: string;
  logo: string; // URL
  familyId: string;
  subFamilyId: string;
  country: Country;
  language: Language;
  quality: ChannelQuality[];
  tags: ChannelTag[];
  currentProgram?: string; // Mock EPG data
  progress?: number; // Mock EPG progress
}

export interface SportsEvent {
  id: string;
  familyId: string; // New field for filtering
  league: string; // NHL, NFL, NBA, etc.
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  startTime: string; // ISO String or display string
  date: string; // YYYY-MM-DD for grouping
  displayDate: string; // "Sun 28 Dec"
  image: string; // Thumbnail
  channelName: string;
  isLocked: boolean;
}