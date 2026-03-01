-- Reviews Table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  event_type VARCHAR(100),
  date TIMESTAMP DEFAULT NOW(),
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  event_date DATE NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery Table
CREATE TABLE gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Founders Messages Table
CREATE TABLE founders_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  founder_name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  date TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_reviews_approved ON reviews(approved);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_gallery_featured ON gallery(featured);

-- Enable Row Level Security (RLS)
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE founders_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view approved reviews" ON reviews
  FOR SELECT USING (approved = true);

CREATE POLICY "Public can view gallery" ON gallery
  FOR SELECT USING (true);

CREATE POLICY "Public can view founders messages" ON founders_messages
  FOR SELECT USING (true);

-- Create policies for public insert (contact form)
CREATE POLICY "Public can submit contact forms" ON contact_submissions
  FOR INSERT WITH CHECK (true);
