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
    content: `Amassoma, nestled along the banks of the Nun River in Southern Ijaw Local Government Area of Bayelsa State, is one of the most historically significant communities in the Niger Delta. The origins of the Amassoma people trace back several centuries, rooted in the broader Ijaw migration and settlement patterns that shaped the region.

According to oral traditions passed down through generations, the founding fathers of Amassoma were pioneering fishermen and farmers who recognized the strategic and fertile nature of the land along the Nun River. The river was not merely a geographical feature — it was the lifeblood of the community, providing sustenance, transportation, and a spiritual connection to the ancestors.

The name "Amassoma" itself carries deep meaning in the Ijaw language, reflecting the community's identity and its relationship with the natural world. Elders recount stories of the first settlers establishing sacred groves, fishing grounds, and communal meeting places that would form the foundation of the town's social structure.

Over the centuries, Amassoma grew into a vibrant community known for its skilled fishermen, traders, and scholars. The town became a center of learning and culture in Southern Ijaw, producing notable figures who contributed to the development of the broader Bayelsa State and Nigeria as a whole.

The colonial era brought significant changes to Amassoma, as it did to many Niger Delta communities. However, the people of Amassoma demonstrated remarkable resilience, preserving their cultural heritage while adapting to new realities. The establishment of schools and churches in the early 20th century opened new avenues for education and development.

Today, Amassoma is perhaps best known as the home of Niger Delta University, one of the premier institutions of higher learning in the region. This university stands as a testament to the community's long-standing commitment to education and intellectual development — a value that has been central to Amassoma's identity since its founding.

The Amassoma Community Development Society (ACDS) continues this legacy, working to document, preserve, and celebrate the rich history of the community while driving sustainable development for future generations.`,
    date: '2026-06-12',
    category: 'History',
    imageUrl: '/assets/img/article/amassoma.jpg'
  },
  {
    id: '2',
    title: 'Annual Seigbein Fishing Festival Announced',
    summary: 'The dates for this year\'s Seigbein festival have been set. Join us for a week of cultural displays, fishing, and community bonding.',
    content: `The Seigbein Fishing Festival is one of the most cherished cultural traditions of the Amassoma people, a vibrant celebration that brings together the entire community in a joyous display of heritage, skill, and unity. This year's festival promises to be the most spectacular yet, with a full week of events planned across the community.

The festival takes its name from the Ijaw word for a traditional fishing technique that has been practiced along the Nun River for generations. More than just a fishing competition, Seigbein is a cultural institution — a time when the community comes together to honor its ancestors, celebrate its identity, and pass down traditions to the younger generation.

This year's schedule includes:

**Day 1 - Opening Ceremony:** The festival kicks off with a traditional libation and prayer led by community elders, invoking the blessings of the ancestors and the river spirits. Cultural dance troupes from across Southern Ijaw will perform, showcasing the rich diversity of Ijaw artistic expression.

**Days 2-4 - The Fishing Competition:** The heart of the festival, where fishermen of all ages demonstrate their skills using both traditional and modern techniques. Categories include traditional net fishing, canoe racing, and the prestigious Seigbein technique competition. Prizes will be awarded to the top performers in each category.

**Day 5 - Cultural Exhibition:** A showcase of Amassoma's arts, crafts, and culinary traditions. Local artisans will display their work, and community members are invited to share traditional recipes and food preparation methods.

**Day 6 - Youth Day:** Dedicated to the next generation, featuring educational programs, youth talent shows, and mentorship sessions with community leaders and professionals.

**Day 7 - Closing Ceremony:** A grand finale featuring a community feast, awards presentation, and a spectacular display of traditional masquerades.

All members of the Amassoma diaspora are warmly invited to return home for this celebration. The ACDS is coordinating accommodation and transportation assistance for those traveling from afar. Contact the events coordinator for more details.`,
    date: '2026-07-01',
    category: 'Culture',
    imageUrl: '/assets/img/article/seigben.jpg'
  },
  {
    id: '3',
    title: 'ACDS Launches New Educational Scholarship for Indigenes',
    summary: 'In line with our development goals, the society has launched a new scholarship fund for brilliant students from Southern Ijaw.',
    content: `The Amassoma Community Development Society (ACDS) is proud to announce the launch of its inaugural Educational Scholarship Fund, a landmark initiative designed to support brilliant and deserving students from Southern Ijaw in pursuing their academic dreams.

The scholarship program reflects the ACDS's core belief that education is the most powerful tool for community development. By investing in the intellectual capital of our youth, we are investing in the future of Amassoma and the broader Southern Ijaw community.

**Scholarship Details:**

The fund will provide financial support to students at various levels of education, from secondary school through university and postgraduate studies. Awards will be based on a combination of academic merit and financial need, ensuring that no deserving student is held back by economic circumstances.

**Eligibility Criteria:**
- Must be an indigene of Amassoma or Southern Ijaw LGA
- Must demonstrate strong academic performance (minimum of B average or equivalent)
- Must show evidence of financial need
- Must be enrolled in or accepted to a recognized educational institution
- Must submit two letters of recommendation from community leaders or educators

**Award Categories:**
- Secondary School Excellence Award: Covers school fees and learning materials
- Undergraduate Scholarship: Covers tuition, accommodation, and a monthly stipend
- Postgraduate Research Grant: Supports advanced studies and research projects that benefit the community

**Application Process:**
Applications are now open and will be accepted through the end of October. Interested candidates should submit their applications through the ACDS website or in person at the society's secretariat. A selection committee comprising educators, community leaders, and ACDS executives will review all applications.

The ACDS extends its heartfelt gratitude to all donors and sponsors who have made this scholarship fund possible. We encourage all members of the Amassoma diaspora to contribute to this fund and help shape the future of our community. Together, we can ensure that every talented young person from our community has the opportunity to reach their full potential.`,
    date: '2026-07-15',
    category: 'News',
    imageUrl: '/assets/img/article/scholarship.jpg'
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
