import { Channel, Family, SubFamily, SportsEvent } from '../types';

export const FAMILIES: Family[] = [
  { id: 'gen', name: 'Sports General', icon: 'Tv', description: 'Major national sports networks' },
  { id: 'league', name: 'Leagues', icon: 'Trophy', description: 'Official league networks' },
  { id: 'soc', name: 'Soccer', icon: 'Activity', description: 'International & Domestic leagues' },
  { id: 'com', name: 'Combat', icon: 'Swords', description: 'MMA, Boxing & Wrestling' },
  { id: 'motor', name: 'Motorsport', icon: 'Gauge', description: 'F1, NASCAR, IndyCar' },
  { id: 'ppv', name: 'Premium / PPV', icon: 'Star', description: 'Exclusive events & Cinema' },
];

export const SUB_FAMILIES: SubFamily[] = [
  { id: 'us-maj', familyId: 'gen', name: 'USA Major' },
  { id: 'ca-maj', familyId: 'gen', name: 'Canada Major' },
  { id: 'nfl', familyId: 'league', name: 'Football' },
  { id: 'nba', familyId: 'league', name: 'Basketball' },
  { id: 'nhl', familyId: 'league', name: 'Hockey' },
  { id: 'mlb', familyId: 'league', name: 'Baseball' },
  { id: 'mma', familyId: 'com', name: 'MMA' },
  { id: 'box', familyId: 'com', name: 'Boxing' },
];

// Helper to generate a placeholder logo
const getLogo = (text: string, bg: string = '1e293b') => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(text)}&background=${bg}&color=fff&size=200&font-size=0.35&length=3&bold=true`;

export const CHANNELS: Channel[] = [
  // GENERAL USA
  {
    id: 'espn-1',
    name: 'ESPN',
    logo: getLogo('ESPN', 'c02b2b'),
    familyId: 'gen',
    subFamilyId: 'us-maj',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'SportsCenter',
    progress: 45
  },
  {
    id: 'fox-sports-1',
    name: 'FOX Sports 1',
    logo: getLogo('FS1', '0033cc'),
    familyId: 'gen',
    subFamilyId: 'us-maj',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'The Herd with Colin Cowherd',
    progress: 10
  },
  // GENERAL CANADA
  {
    id: 'tsn-1',
    name: 'TSN 1',
    logo: getLogo('TSN', 'c22026'),
    familyId: 'gen',
    subFamilyId: 'ca-maj',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'SportsCentre',
    progress: 80
  },
  {
    id: 'rds',
    name: 'RDS',
    logo: getLogo('RDS', '005595'),
    familyId: 'gen',
    subFamilyId: 'ca-maj',
    country: 'Canada',
    language: 'FR',
    quality: ['HD', 'FHD'],
    tags: ['LIVE'],
    currentProgram: 'Le 5 à 7',
    progress: 30
  },
  {
    id: 'sportsnet-ont',
    name: 'Sportsnet Ontario',
    logo: getLogo('SN', '004685'),
    familyId: 'gen',
    subFamilyId: 'ca-maj',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Blue Jays Central',
    progress: 60
  },
  // LEAGUES
  {
    id: 'nfl-net',
    name: 'NFL Network',
    logo: getLogo('NFL', '013369'),
    familyId: 'league',
    subFamilyId: 'nfl',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'Good Morning Football',
    progress: 90
  },
  {
    id: 'nba-tv',
    name: 'NBA TV',
    logo: getLogo('NBA', 'da1f3e'),
    familyId: 'league',
    subFamilyId: 'nba',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NBA TV Gametime',
    progress: 15
  },
  {
    id: 'nhl-net',
    name: 'NHL Network',
    logo: getLogo('NHL', '000000'),
    familyId: 'league',
    subFamilyId: 'nhl',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NHL Now',
    progress: 50
  },
  {
    id: 'mlb-net',
    name: 'MLB Network',
    logo: getLogo('MLB', '002d62'),
    familyId: 'league',
    subFamilyId: 'mlb',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'MLB Central',
    progress: 20
  },
  // SOCCER
  {
    id: 'bein-sports',
    name: 'beIN Sports',
    logo: getLogo('beIN', '8b4513'),
    familyId: 'soc',
    subFamilyId: 'us-maj', // reusing generic id for simplicity
    country: 'International',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'La Liga: Real Madrid vs Barca',
    progress: 88
  },
  {
    id: 'espn-dep',
    name: 'ESPN Deportes',
    logo: getLogo('ESP', 'c02b2b'),
    familyId: 'soc',
    subFamilyId: 'us-maj',
    country: 'USA',
    language: 'ES',
    quality: ['HD', 'FHD'],
    tags: ['LIVE'],
    currentProgram: 'Fuera de Juego',
    progress: 40
  },
  // COMBAT
  {
    id: 'ufc-fight-pass',
    name: 'UFC Fight Pass',
    logo: getLogo('UFC', 'd20a0a'),
    familyId: 'com',
    subFamilyId: 'mma',
    country: 'USA',
    language: 'EN',
    quality: ['4K'],
    tags: ['LIVE'],
    currentProgram: 'UFC Archives',
    progress: 10
  },
  {
    id: 'fight-net',
    name: 'Fight Network',
    logo: getLogo('FN', '000000'),
    familyId: 'com',
    subFamilyId: 'box',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Impact Wrestling',
    progress: 75
  },
  // MOTOR
  {
    id: 'motortrend',
    name: 'MotorTrend',
    logo: getLogo('MT', '121212'),
    familyId: 'motor',
    subFamilyId: 'us-maj',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: [],
    currentProgram: 'Roadkill',
    progress: 25
  },
  // PPV
  {
    id: 'ufc-ppv-main',
    name: 'UFC 300 LIVE',
    logo: getLogo('PPV', 'ffd700'),
    familyId: 'ppv',
    subFamilyId: 'mma',
    country: 'USA',
    language: 'EN',
    quality: ['4K'],
    tags: ['PPV', 'LIVE', 'EVENT'],
    currentProgram: 'MAIN EVENT STARTING SOON',
    progress: 100
  },
];

export const SCHEDULE_EVENTS: SportsEvent[] = [
  // SUNDAY DEC 28
  {
    id: 'nhl-1',
    league: 'NHL',
    homeTeam: 'Islanders',
    awayTeam: 'Rangers',
    homeLogo: 'NYI',
    awayLogo: 'NYR',
    startTime: '7:00 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1515703403366-265cf3e2a09a?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  {
    id: 'nhl-2',
    league: 'NHL',
    homeTeam: 'Sabres',
    awayTeam: 'Bruins',
    homeLogo: 'BUF',
    awayLogo: 'BOS',
    startTime: '7:30 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  {
    id: 'nhl-3',
    league: 'NHL',
    homeTeam: 'Maple Leafs',
    awayTeam: 'Senators',
    homeLogo: 'TOR',
    awayLogo: 'OTT',
    startTime: '8:00 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1606734157777-6262d2243d4c?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  {
    id: 'nhl-4',
    league: 'NHL',
    homeTeam: 'Panthers',
    awayTeam: 'Lightning',
    homeLogo: 'FLA',
    awayLogo: 'TBL',
    startTime: '8:30 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  
  // MONDAY DEC 29
  {
    id: 'nfl-1',
    league: 'NFL',
    homeTeam: 'Chiefs',
    awayTeam: 'Raiders',
    homeLogo: 'KC',
    awayLogo: 'LV',
    startTime: '1:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1627627256672-027955355130?auto=format&fit=crop&q=80&w=600',
    channelName: 'NFL Game Pass',
    isLocked: true
  },
  {
    id: 'nhl-5',
    league: 'NHL',
    homeTeam: 'Red Wings',
    awayTeam: 'Maple Leafs',
    homeLogo: 'DET',
    awayLogo: 'TOR',
    startTime: '7:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1515703403366-265cf3e2a09a?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  {
    id: 'nhl-6',
    league: 'NHL',
    homeTeam: 'Blackhawks',
    awayTeam: 'Penguins',
    homeLogo: 'CHI',
    awayLogo: 'PIT',
    startTime: '8:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  },
  {
    id: 'nhl-7',
    league: 'NHL',
    homeTeam: 'Kraken',
    awayTeam: 'Flyers',
    homeLogo: 'SEA',
    awayLogo: 'PHI',
    startTime: '10:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1606734157777-6262d2243d4c?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL.TV',
    isLocked: true
  }
];