import { Article, Member, AppEvent } from './types';

export const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'Chief Tariye Owei', role: 'President', isExco: true, joinDate: '2020-01-15' },
  { id: '2', name: 'Dr. Ebimieowei Ekiyor', role: 'Vice President', isExco: true, joinDate: '2020-03-20' },
  { id: '3', name: 'Mrs. Ebiere Alawei', role: 'Secretary', isExco: true, joinDate: '2021-05-10' },
  { id: '4', name: 'Mr. Bomo Diri', role: 'Treasurer', isExco: true, joinDate: '2021-02-11' },
  { id: '5', name: 'Preye Keme', role: 'PRO', isExco: true, joinDate: '2022-08-05' },
  { id: '6', name: 'Timipre Sylva', role: 'Member', isExco: false, joinDate: '2023-01-12' },
  { id: '7', name: 'Ayebatarionye Goodluck', role: 'Member', isExco: false, joinDate: '2023-04-18' },
  { id: '8', name: 'Enebi Jonathan', role: 'Member', isExco: false, joinDate: '2023-06-22' },
  { id: '9', name: 'Woyengikuro Pere', role: 'Member', isExco: false, joinDate: '2023-09-30' },
  { id: '10', name: 'Tombra Ebimo', role: 'Member', isExco: false, joinDate: '2024-01-05' },
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
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_EVENTS: AppEvent[] = [
  {
    id: '1',
    title: 'Monthly General Meeting',
    date: '2026-08-15T10:00:00Z',
    location: 'Amassoma Town Hall',
    description: 'Our regular monthly gathering to discuss community development projects and societal updates.'
  },
  {
    id: '2',
    title: 'Cultural Dance Exhibition',
    date: '2026-08-22T14:00:00Z',
    location: 'Community Square',
    description: 'A showcase of traditional Ijaw dances and musical performances by our youth groups.'
  },
  {
    id: '3',
    title: 'End of Year Symposium',
    date: '2026-12-10T09:00:00Z',
    location: 'Niger Delta University Auditorium, Amassoma',
    description: 'Annual symposium discussing the future of our heritage and language preservation.'
  }
];
