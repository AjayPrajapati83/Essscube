import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  event_type: string;
  date: string;
  approved: boolean;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
  created_at: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  featured: boolean;
};

export type FounderMessage = {
  id: string;
  founder_name: string;
  message: string;
  date: string;
};
