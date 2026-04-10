import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://lwparxjwqkndeixigrll.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGFyeGp3cWtuZGVpeGlncmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3Mzc4NzEsImV4cCI6MjA2NTMxMzg3MX0.CAKuNIt-kNfAf5ansF3Vpybf-NAkA2V6yX52KBHGxRw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const STORAGE_URL = SUPABASE_URL + '/storage/v1/object/public/blog-images/'

export function resolveImageUrl(imageUrl: string | null): string {
  if (!imageUrl) return ''
  return imageUrl.startsWith('http') ? imageUrl : STORAGE_URL + imageUrl
}
