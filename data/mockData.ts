import { Channel, Family, SubFamily, SportsEvent } from '../types';

// Updated Families with empty images as requested. 
// The UI will fall back to using the 'icon' and 'bgColor'.
export const FAMILIES: Family[] = [
  { 
    id: 'nfl', 
    name: 'NFL', 
    icon: 'Trophy', 
    description: 'Sunday Night Football',
    image: '', // Image placeholder
    bgColor: '#013369' // NFL Blue
  },
  { 
    id: 'nba', 
    name: 'NBA', 
    icon: 'Dribbble', 
    description: 'League Pass & Playoffs',
    image: '', 
    bgColor: '#C9082A' // NBA Red
  },
  { 
    id: 'nhl', 
    name: 'NHL', 
    icon: 'ThermometerSnowflake', 
    description: 'Center Ice Action',
    image: '', 
    bgColor: '#111111' // Black/Silver
  },
  { 
    id: 'mlb', 
    name: 'MLB', 
    icon: 'Target', 
    description: 'Home Run Derby',
    image: '', 
    bgColor: '#002D62' // MLB Blue
  },
  { 
    id: 'soc', 
    name: 'Soccer', 
    icon: 'Activity', 
    description: 'EPL, La Liga, UCL',
    image: '', 
    bgColor: '#1e1b4b' // Dark Navy/Purple
  },
  { 
    id: 'ncaa', 
    name: 'NCAA', 
    icon: 'GraduationCap', 
    description: 'College Football',
    image: '',
    bgColor: '#0065A8' // NCAA Blue
  },
  { 
    id: 'com', 
    name: 'Combat', 
    icon: 'Swords', 
    description: 'UFC & Boxing',
    image: '',
    bgColor: '#D20A0A' // UFC Red
  },
  { 
    id: 'golf', 
    name: 'Golf', 
    icon: 'Flag', 
    description: 'PGA Tour',
    image: '',
    bgColor: '#00652E' // PGA Green
  },
  { 
    id: 'ten', 
    name: 'Tennis', 
    icon: 'Award', 
    description: 'Grand Slams',
    image: '',
    bgColor: '#002865' // ATP Blue
  },
  { 
    id: 'motor', 
    name: 'Motorsport', 
    icon: 'Gauge', 
    description: 'F1 & NASCAR',
    image: '',
    bgColor: '#FF1801' // F1 Red
  },
  { 
    id: 'out', 
    name: 'Outdoor', 
    icon: 'Mountain', 
    description: 'Hunting & Fishing',
    image: '',
    bgColor: '#593110' // Earthy Brown
  },
  { 
    id: 'ott', 
    name: 'Streaming', 
    icon: 'Wifi', 
    description: 'Live Events',
    image: '',
    bgColor: '#000000' // Black/White
  },
];

export const SUB_FAMILIES: SubFamily[] = [
  { id: 'us', familyId: 'gen', name: 'USA' },
  { id: 'ca', familyId: 'gen', name: 'Canada' },
];

// Helper to generate a placeholder logo
const getLogo = (text: string, bg: string = '1e293b', color: string = 'fff') => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(text)}&background=${bg}&color=${color}&size=200&font-size=0.35&length=3&bold=true`;

export const CHANNELS: Channel[] = [
  // --- SPORTS | GÉNÉRAL (CANADA) -> Moved to Streaming (ott) ---
  {
    id: 'tsn-1',
    name: 'TSN 1',
    logo: getLogo('TSN1', 'c22026'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'SportsCentre'
  },
  {
    id: 'tsn-2',
    name: 'TSN 2',
    logo: getLogo('TSN2', 'c22026'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NBA Basketball'
  },
  {
    id: 'tsn-3',
    name: 'TSN 3',
    logo: getLogo('TSN3', 'c22026'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Jets Hockey'
  },
  {
    id: 'tsn-4',
    name: 'TSN 4',
    logo: getLogo('TSN4', 'c22026'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Leafs Forever'
  },
  {
    id: 'tsn-5',
    name: 'TSN 5',
    logo: getLogo('TSN5', 'c22026'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Sens Tonight'
  },
  {
    id: 'sn-ont',
    name: 'Sportsnet Ontario',
    logo: getLogo('SN', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'Blue Jays Central'
  },
  {
    id: 'sn-west',
    name: 'Sportsnet West',
    logo: getLogo('SNW', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Oilers Hockey'
  },
  {
    id: 'sn-east',
    name: 'Sportsnet East',
    logo: getLogo('SNE', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NHL Classics'
  },
  {
    id: 'sn-pac',
    name: 'Sportsnet Pacific',
    logo: getLogo('SNP', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Canucks Pre-Game'
  },
  {
    id: 'sn-one',
    name: 'Sportsnet One',
    logo: getLogo('SNO', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Raptors Basketball'
  },
  {
    id: 'sn-360',
    name: 'Sportsnet 360',
    logo: getLogo('360', '004685'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'WWE Smackdown'
  },
  {
    id: 'rds-1',
    name: 'RDS',
    logo: getLogo('RDS', '005595'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'FR',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Le 5 à 7'
  },
  {
    id: 'rds-2',
    name: 'RDS 2',
    logo: getLogo('RDS2', '005595'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'FR',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Tennis ATP'
  },
  {
    id: 'cbc-sports',
    name: 'CBC Sports',
    logo: getLogo('CBC', 'd60019'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Hockey Night in Canada'
  },
  {
    id: 'ctv-sports',
    name: 'CTV Sports',
    logo: getLogo('CTV', '006dff'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'NFL on CTV'
  },
  {
    id: 'citytv-sports',
    name: 'Citytv Sports',
    logo: getLogo('City', 'f4ce14'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Local Sports'
  },
  {
    id: 'score',
    name: 'The Score',
    logo: getLogo('SCR', '000000'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Betting Odds'
  },
  {
    id: 'gametv',
    name: 'GameTV',
    logo: getLogo('GTV', '990000'),
    familyId: 'ott',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Classic Sports'
  },

  // --- SPORTS | GÉNÉRAL (USA) -> Moved to Streaming (ott) ---
  {
    id: 'espn-1',
    name: 'ESPN',
    logo: getLogo('ESPN', 'cc0000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'SportsCenter'
  },
  {
    id: 'espn-2',
    name: 'ESPN 2',
    logo: getLogo('ESPN2', 'cc0000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'First Take'
  },
  {
    id: 'espnews',
    name: 'ESPNews',
    logo: getLogo('NEWS', 'cc0000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Highlight Reel'
  },
  {
    id: 'abc-sports',
    name: 'ABC Sports',
    logo: getLogo('ABC', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NBA on ABC'
  },
  {
    id: 'fs1',
    name: 'FOX Sports 1',
    logo: getLogo('FS1', '0033a0'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'The Herd'
  },
  {
    id: 'fs2',
    name: 'FOX Sports 2',
    logo: getLogo('FS2', '0033a0'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'Live Racing'
  },
  {
    id: 'nbc-sports',
    name: 'NBC Sports',
    logo: getLogo('NBC', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'Premier League'
  },
  {
    id: 'usa-net',
    name: 'USA Network',
    logo: getLogo('USA', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: [],
    currentProgram: 'WWE Raw'
  },
  {
    id: 'cbs-sports',
    name: 'CBS Sports Network',
    logo: getLogo('CBS', '0097d7'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NCAA Football'
  },
  {
    id: 'tnt-sports',
    name: 'TNT Sports',
    logo: getLogo('TNT', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NBA on TNT'
  },
  {
    id: 'tbs-sports',
    name: 'TBS Sports',
    logo: getLogo('TBS', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'MLB on TBS'
  },
  {
    id: 'oly-ch',
    name: 'Olympic Channel',
    logo: getLogo('OLY', 'ffffff', '000000'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'International',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Classic Games'
  },
  {
    id: 'flosports',
    name: 'FloSports',
    logo: getLogo('FLO', 'c8102e'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Live Event'
  },

  // --- SPORTS | NFL ---
  {
    id: 'nfl-net-us',
    name: 'NFL Network',
    logo: getLogo('NFL', '013369'),
    familyId: 'nfl',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE'],
    currentProgram: 'Good Morning Football'
  },
  {
    id: 'nfl-net-ca',
    name: 'NFL Network Canada',
    logo: getLogo('NFL-CA', '013369'),
    familyId: 'nfl',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NFL Total Access'
  },
  {
    id: 'nfl-rz',
    name: 'NFL RedZone',
    logo: getLogo('RZ', 'cc0000'),
    familyId: 'nfl',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE', 'EVENT'],
    currentProgram: '7 Hours of Commercial Free Football'
  },

  // --- SPORTS | NBA ---
  {
    id: 'nba-tv',
    name: 'NBA TV',
    logo: getLogo('NBA', 'da1f3e'),
    familyId: 'nba',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Gametime'
  },
  {
    id: 'nba-tv-ca',
    name: 'NBA TV Canada',
    logo: getLogo('NBA-CA', 'da1f3e'),
    familyId: 'nba',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Raptors Post-Game'
  },
  {
    id: 'wnba',
    name: 'WNBA League Pass',
    logo: getLogo('WNBA', 'fa4616'),
    familyId: 'nba',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: ['LIVE'],
    currentProgram: 'Live WNBA Action'
  },

  // --- SPORTS | NHL ---
  {
    id: 'nhl-net',
    name: 'NHL Network',
    logo: getLogo('NHL', '000000'),
    familyId: 'nhl',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NHL Tonight'
  },
  {
    id: 'nhl-net-ca',
    name: 'NHL Network Canada',
    logo: getLogo('NHL-CA', '000000'),
    familyId: 'nhl',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'NHL Now'
  },

  // --- SPORTS | MLB ---
  {
    id: 'mlb-net',
    name: 'MLB Network',
    logo: getLogo('MLB', '002d62'),
    familyId: 'mlb',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'MLB Central'
  },

  // --- SPORTS | SOCCER ---
  {
    id: 'bein',
    name: 'beIN Sports USA',
    logo: getLogo('beIN', '8b4513'),
    familyId: 'soc',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'La Liga Live'
  },
  {
    id: 'espn-dep',
    name: 'ESPN Deportes',
    logo: getLogo('ESP-D', 'cc0000'),
    familyId: 'soc',
    subFamilyId: 'us',
    country: 'USA',
    language: 'ES',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Futbol Picante'
  },
  {
    id: 'fubo-sports',
    name: 'Fubo Sports Network',
    logo: getLogo('FUBO', 'fa4616'),
    familyId: 'soc',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: ['LIVE'],
    currentProgram: 'Live Soccer'
  },

  // --- SPORTS | NCAA ---
  {
    id: 'espn-u',
    name: 'ESPNU',
    logo: getLogo('ESPNU', 'cc0000'),
    familyId: 'ncaa',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'College Football'
  },
  {
    id: 'btn',
    name: 'Big Ten Network',
    logo: getLogo('BTN', '0088ce'),
    familyId: 'ncaa',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'The Journey'
  },
  {
    id: 'sec',
    name: 'SEC Network',
    logo: getLogo('SEC', 'ffd000', '000000'),
    familyId: 'ncaa',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'SEC Now'
  },
  {
    id: 'acc',
    name: 'ACC Network',
    logo: getLogo('ACC', '003da5'),
    familyId: 'ncaa',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'ACC Huddle'
  },
  {
    id: 'pac12',
    name: 'Pac-12 Network',
    logo: getLogo('P12', '000000'),
    familyId: 'ncaa',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: ['LIVE'],
    currentProgram: 'Conference Live'
  },

  // --- SPORTS | COMBAT ---
  {
    id: 'ufc-pass',
    name: 'UFC Fight Pass',
    logo: getLogo('UFC', 'd20a0a'),
    familyId: 'com',
    subFamilyId: 'us',
    country: 'International',
    language: 'EN',
    quality: ['FHD', '4K'],
    tags: ['LIVE', 'PPV'],
    currentProgram: 'Prelims'
  },
  {
    id: 'fight-net',
    name: 'Fight Network',
    logo: getLogo('FN', '000000'),
    familyId: 'com',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'TNA Wrestling'
  },
  {
    id: 'dazn-us',
    name: 'DAZN USA',
    logo: getLogo('DAZN', '000000', 'ffffff'),
    familyId: 'com',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Boxing Night'
  },

  // --- SPORTS | GOLF ---
  {
    id: 'golf-ch',
    name: 'Golf Channel',
    logo: getLogo('GOLF', '00652e'),
    familyId: 'golf',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'PGA Tour Live'
  },

  // --- SPORTS | TENNIS ---
  {
    id: 'tennis-ch',
    name: 'Tennis Channel',
    logo: getLogo('TC', '0033a0'),
    familyId: 'ten',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Roland Garros'
  },

  // --- SPORTS | MOTORSPORT ---
  {
    id: 'motortrend',
    name: 'MotorTrend TV',
    logo: getLogo('MT', '000000'),
    familyId: 'motor',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: [],
    currentProgram: 'Roadkill'
  },
  {
    id: 'fox-racing',
    name: 'FOX Sports Racing',
    logo: getLogo('FSR', '0033a0'),
    familyId: 'motor',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: ['LIVE'],
    currentProgram: 'NASCAR Hub'
  },

  // --- SPORTS | OUTDOOR ---
  {
    id: 'oln',
    name: 'OLN Canada',
    logo: getLogo('OLN', '005595'),
    familyId: 'out',
    subFamilyId: 'ca',
    country: 'Canada',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Storage Wars'
  },
  {
    id: 'outdoor',
    name: 'Outdoor Channel',
    logo: getLogo('OUT', '593110'),
    familyId: 'out',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Hunting Season'
  },
  {
    id: 'sportsman',
    name: 'Sportsman Channel',
    logo: getLogo('SC', '004e37'),
    familyId: 'out',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['HD'],
    tags: [],
    currentProgram: 'Fishing Tech'
  },

  // --- SPORTS | STREAMING ---
  {
    id: 'espn-plus',
    name: 'ESPN+',
    logo: getLogo('E+', '000000', 'd7a900'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE', 'EVENT'],
    currentProgram: 'Exclusive Event'
  },
  {
    id: 'apple-mls',
    name: 'Apple TV - MLS Pass',
    logo: getLogo('MLS', '000000', 'ffffff'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'International',
    language: 'EN',
    quality: ['4K'],
    tags: ['LIVE'],
    currentProgram: 'MLS Live'
  },
  {
    id: 'peacock',
    name: 'Peacock Sports',
    logo: getLogo('PEA', '000000', 'ffffff'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'WWE PLE'
  },
  {
    id: 'paramount',
    name: 'Paramount+ Sports',
    logo: getLogo('PARA', '0064ff'),
    familyId: 'ott',
    subFamilyId: 'us',
    country: 'USA',
    language: 'EN',
    quality: ['FHD'],
    tags: ['LIVE'],
    currentProgram: 'Champions League'
  },
];

export const SCHEDULE_EVENTS: SportsEvent[] = [
  // Updated schedule to use new familyIds
  // SUNDAY DEC 28
  {
    id: 'nhl-1',
    familyId: 'nhl',
    league: 'NHL',
    homeTeam: 'Islanders',
    awayTeam: 'Rangers',
    homeLogo: 'NYI',
    awayLogo: 'NYR',
    startTime: '7:00 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1515703403366-265cf3e2a09a?auto=format&fit=crop&q=80&w=600',
    channelName: 'NHL Network',
    isLocked: true
  },
  {
    id: 'nhl-2',
    familyId: 'nhl',
    league: 'NHL',
    homeTeam: 'Sabres',
    awayTeam: 'Bruins',
    homeLogo: 'BUF',
    awayLogo: 'BOS',
    startTime: '7:30 PM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&q=80&w=600',
    channelName: 'NESN / NHL Net',
    isLocked: true
  },
  {
    id: 'soc-1',
    familyId: 'soc',
    league: 'Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeLogo: 'ARS',
    awayLogo: 'LIV',
    startTime: '11:30 AM',
    date: '2024-12-28',
    displayDate: 'SUN 28 DEC',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600',
    channelName: 'NBC Sports',
    isLocked: true
  },
  {
    id: 'nfl-1',
    familyId: 'nfl',
    league: 'NFL',
    homeTeam: 'Chiefs',
    awayTeam: 'Raiders',
    homeLogo: 'KC',
    awayLogo: 'LV',
    startTime: '1:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1627627256672-027955355130?auto=format&fit=crop&q=80&w=600',
    channelName: 'CBS Sports',
    isLocked: true
  },
  {
    id: 'ufc-1',
    familyId: 'com',
    league: 'UFC Fight Night',
    homeTeam: 'McGregor',
    awayTeam: 'Chandler',
    homeLogo: 'McG',
    awayLogo: 'CHA',
    startTime: '10:00 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=600',
    channelName: 'ESPN+ PPV',
    isLocked: true
  },
  {
    id: 'nba-1',
    familyId: 'nba',
    league: 'NBA',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    homeLogo: 'LAL',
    awayLogo: 'GSW',
    startTime: '8:30 PM',
    date: '2024-12-29',
    displayDate: 'MON 29 DEC',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600',
    channelName: 'TNT Sports',
    isLocked: true
  }
];