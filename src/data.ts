import { Article, Member, AppEvent, Project } from './types';

export const MOCK_MEMBERS: Member[] = [
  {
    id: '1', name: 'Mr. Akpoebi Okorowanta', role: 'Chairman', isExco: true, joinDate: '2020-01-15',
    image: '',
    description: 'A visionary community leader with over two decades of experience in cultural advocacy and grassroots development across the Niger Delta.',
    email: 'akpoebiokorowanta@acds.org', phone: '+234 803 456 7890'
  },
  {
    id: '2', name: 'High Chief. Eric Ricky Avi', role: 'Vice Chairman', isExco: true, joinDate: '2020-03-20',
    image: '',
    description: 'An academic and peace-building expert dedicated to bridging education and community empowerment in Southern Ijaw.',
    email: 'ericrickyavi@acds.org', phone: '+234 805 123 4567'
  },
  {
    id: '3', name: 'Ms. Ebi Owoubiri', role: 'Secretary', isExco: true, joinDate: '2021-05-10',
    image: '',
    description: 'An accomplished administrator who ensures the society\'s operations run smoothly and all members stay informed and connected.',
    email: 'ebiowoubiri@acds.org', phone: '+234 807 234 5678'
  },
  {
    id: '4', name: 'Mr. Ebibo Ford', role: 'Treasurer', isExco: true, joinDate: '2021-05-10',
    image: '',
    description: 'A financial expert with a proven track record of managing funds and ensuring the society\'s financial stability.',
    email: 'ebiboford@acds.org', phone: '+234 807 234 5678'
  },
  {
    id: '5', name: 'Engr. Ebimobowei Thomas Akiou', role: 'Assistant Secretary/Communication and Technology Coordinator', isExco: true, joinDate: '2021-02-11',
    image: '/assets/img/exco/thomas.jpeg',
    description: 'A computer engineer and technology enthusiast committed to enhancing the society\'s digital presence and communication infrastructure.',
    email: 'ebimobowei.thomas@acds.org', phone: '+234 809 345 6789'
  },
  {
    id: '6', name: 'Mr. Andrew Okorowanta', role: 'Membership Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic membership coordinator who ensures the society\'s membership grows and stays connected.',
    email: 'andrew.okorowanta@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '7', name: 'Mr. Adoewori Fredrick', role: 'Public Relations Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic public relations coordinator who ensures the society\'s public relations grows and stays connected.',
    email: 'adoewori.fredrick@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '8', name: 'Mr. Waibodei Peter Yeri', role: 'Community Research & Documentation Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic community research & documentation coordinator who ensures the society\'s community research & documentation grows and stays connected.',
    email: 'waibodei.peter@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '9', name: 'Mr. Ebidiepere Jasper Akpama', role: 'ACDS Gallery & Social Media Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic ACDS gallery & social media coordinator who ensures the society\'s ACDS gallery & social media grows and stays connected.',
    email: 'ebidiepere.jasper@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '10', name: 'Mr. Segu Hausa-Ebi Ambaiowei', role: 'Sponsorships Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic Sponsorships coordinator who ensures the society\'s Sponsorships grows and stays connected.',
    email: 'segu.ambaiowei@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '11', name: 'Mrs. Charity Charles Awortu', role: 'Events Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic Events coordinator who ensures the society\'s Events grows and stays connected.',
    email: 'charity.awortu@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '12', name: 'Mr. Tuperekeyi Sobai', role: 'Social Media Coordinator', isExco: true, joinDate: '2022-08-05',
    image: '',
    description: 'A dynamic Social Media coordinator who ensures the society\'s Social Media grows and stays connected.',
    email: 'tuperekeyi.sobai@acds.org', phone: '+234 802 456 7890'
  },
  {
    id: '13', name: 'Mr. Ebitonghabofa Natco', role: 'Associate Member', isExco: false, joinDate: '2023-01-12',
    image: '',
    description: 'An active community volunteer passionate about youth mentorship and environmental sustainability.',
    email: 'ebitonghabofa.natco@acds.org', phone: '+234 806 567 8901'
  },
  {
    id: '14', name: 'Mr. Oyeindoubra Nelson Mutu', role: 'Associate Member', isExco: false, joinDate: '2023-04-18',
    image: '',
    description: 'A cultural enthusiast with a deep knowledge of Ijaw traditions and a flair for organizing heritage events.',
    email: 'oyeindoubra.nelson@acds.org', phone: '+234 808 678 9012'
  },
  {
    id: '15', name: 'Mr. Timiyerimene Ayogoi', role: 'Associate Member', isExco: false, joinDate: '2023-06-22',
    image: '',
    description: 'A skilled educator contributing to literacy programs and academic excellence initiatives within the community.',
    email: 'timiyerimene.ayogo@acds.org', phone: '+234 701 789 0123'
  },
  {
    id: '16', name: 'Chief. Eunice Apreala', role: 'Associate Member', isExco: false, joinDate: '2023-09-30',
    image: '',
    description: 'A healthcare advocate working to improve access to medical services across underserved areas of Bayelsa.',
    email: 'eunice.apreala@acds.org', phone: '+234 703 890 1234'
  },
  {
    id: '17', name: 'Mr. Zozonaebi Fredrick', role: 'Associate Member', isExco: false, joinDate: '2024-01-05',
    image: '',
    description: 'An entrepreneur and tech enthusiast driving digital literacy and innovation among the youth.',
    email: 'zozonaebi.fredrick@acds.org', phone: '+234 705 901 2345'
  },
  {
    id: '18', name: 'Mr. Pere-Ebi Mark', role: 'Associate Member', isExco: false, joinDate: '2024-01-05',
    image: '',
    description: 'An entrepreneur and tech enthusiast driving digital literacy and innovation among the youth.',
    email: 'pere-ebi.mark@acds.org', phone: '+234 705 901 2345'
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Origin of Amassoma: A Historical Retrospective',
    summary: 'Discover the roots of the Amassoma people and the founding fathers who established our great community along the Nun River.',
    content: 'Long ago...',
    date: '2024-05-12',
    category: 'History',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cb2a65492d5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Annual Seigbein Fishing Festival Announced',
    summary: 'The dates for this year\'s Seigbein festival have been set. Join us for a week of cultural displays, fishing, and community bonding.',
    content: 'The festival will feature...',
    date: '2024-08-01',
    category: 'Culture',
    imageUrl: 'https://images.unsplash.com/photo-1534358284523-edbd1ce48375?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'ACDS Launches New Educational Scholarship for Indigenes',
    summary: 'In line with our development goals, the society has launched a new scholarship fund for brilliant students from Southern Ijaw.',
    content: 'The society believes...',
    date: '2024-09-15',
    category: 'News',
    imageUrl: 'https://images.unsplash.com/photo-1534358284523-edbd1ce48375?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_EVENTS: AppEvent[] = [
  {
    id: '1',
    title: 'Amasomo Pọọn Tolumọ Sukulu (Amassoma Language Class)',
    date: 'Every Wednesday 4:00 to 5:30 p.m. Nigerian Time.',
    location: 'ACDS Amasomo Pọọn Fie Ogbo Whatsapp group',
    description: 'Our regular weekly gathering to learn and speak the Amassoma language.',
    link: 'https://chat.whatsapp.com/EvgrPWRHCusLNxHa6BsQdR',
    linkLabel: 'Join Group'
  },
  {
    id: '2',
    title: 'Tomubọlọu-Efiẹ (Community Town Hall)',
    date: 'Every 3rd Friday of the month by 7pm Nigerian Time',
    location: 'ACDS Tomubọlọu-Efiẹ Whatsapp group',
    description: 'Our regular monthly town hall meeting to discuss issues affecting the Amassoma community.',
    link: 'https://chat.whatsapp.com/EvgrPWRHCusLNxHa6BsQdR',
    linkLabel: 'Join Group'
  },
  {
    id: '3',
    title: 'Ama Pọọn Fie Bai (International Mother Language Day)',
    date: 'Once every year',
    location: 'Amassoma community, Southern Ijaw LGA, Bayelsa State',
    description: 'Annual symposium discussing the future of our heritage and language preservation.'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Amassoma Hub Platform',
    status: 'Active',
    summary: 'Centralized digital platform for learning the Amassoma language.',
    description: 'An interactive web portal dedicated to preserving and teaching the Amassoma dialect of the Ijaw language. The platform features lessons, an audio dictionary, history archives, and community forums designed for both native speakers and those looking to reconnect with their roots.',
    link: 'https://amassomahub.com',
    linkLabel: 'Visit Amassoma Hub'
  }
];
