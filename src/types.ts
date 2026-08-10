export interface Member {
  id: string;
  name: string;
  role: string;
  isExco: boolean;
  image?: string;
  joinDate: string;
  description?: string;
  email?: string;
  phone?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'News' | 'History' | 'Culture';
  imageUrl?: string;
}

export interface AppEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
  linkLabel?: string;
  calendarDate?: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  summary: string;
  description: string;
  link?: string;
  linkLabel?: string;
  imageUrl?: string;
}
