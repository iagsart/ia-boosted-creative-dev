
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  image: string;
  categories: string[];
  author: {
    name: string;
    avatar?: string;
  };
}
