export interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle: string | null
  excerpt: string | null
  content: string | null
  image_url: string | null
  date: string | null
  read_time: string | null
  category: string | null
  published: boolean
  author_name: string | null
  author_title: string | null
  meta_description: string | null
  focus_keyword: string | null
  tags: string[] | null
  faq: Array<{ question: string; answer: string }> | null
}
