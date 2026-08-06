export interface Member {
  id: string;
  name: string;
  role: string;
  isExco: boolean;
  image?: string;
  joinDate: string;
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
}
