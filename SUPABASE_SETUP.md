# Supabase Setup Guide for ESSSqube Events

## Quick Setup Checklist

- [ ] Create Supabase account
- [ ] Create new project
- [ ] Copy API credentials
- [ ] Create `.env.local` file
- [ ] Run database schema
- [ ] Verify tables created
- [ ] Add sample data (optional)
- [ ] Test connection

## Detailed Steps

### 1. Create Supabase Account
- Visit: https://supabase.com
- Sign up with GitHub, Google, or Email
- Verify your email

### 2. Create New Project
- Click "New Project"
- Project Name: `esssqube-events`
- Database Password: (create strong password - SAVE THIS!)
- Region: `ap-south-1` (Mumbai) or closest to you
- Plan: Free tier
- Click "Create new project"
- Wait 2-3 minutes

### 3. Get API Credentials
- Go to Settings (gear icon) → API
- Copy these values:
  - **Project URL**: `https://xxxxx.supabase.co`
  - **anon public key**: Long string under "Project API keys"

### 4. Create Environment File
Create `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run Database Schema
- Go to SQL Editor in Supabase dashboard
- Click "New query"
- Copy entire content from `supabase-schema.sql`
- Paste and click "Run"
- Should see "Success. No rows returned"

### 6. Verify Tables
Go to Table Editor and verify these tables exist:
- `reviews` - Customer testimonials
- `contact_submissions` - Contact form data
- `gallery` - Event photos
- `founders_messages` - Founder statements

### 7. Add Sample Data (Optional)

Run this in SQL Editor to add test reviews:

```sql
INSERT INTO reviews (name, rating, comment, event_type, approved) VALUES
('Priya Sharma', 5, 'Amazing service! Our wedding was perfect.', 'Wedding', true),
('Rajesh Kumar', 5, 'Very professional team. Highly recommended!', 'Corporate', true),
('Anita Desai', 5, 'Best birthday party ever! Thank you ESSSqube.', 'Birthday', true);
```

Add sample gallery items:

```sql
INSERT INTO gallery (title, category, image_url, featured) VALUES
('Dream Wedding', 'wedding', 'https://images.unsplash.com/photo-1519741497674-611481863552', true),
('Corporate Gala', 'corporate', 'https://images.unsplash.com/photo-1511578314322-379afb476865', true),
('Birthday Bash', 'social', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', false);
```

### 8. Set Up Storage for Images (Optional)

For uploading event photos:

1. Go to Storage in Supabase
2. Click "Create a new bucket"
3. Name: `event-images`
4. Make it **Public**
5. Click "Create bucket"

Add policy for public access:
- Go to bucket → Policies
- Click "New Policy"
- Use template: "Allow public read access"
- Save policy

### 9. Test Connection

```bash
# Restart dev server
npm run dev
```

Visit http://localhost:3000 and:
- Fill out contact form - should save to database
- Check Supabase Table Editor → contact_submissions

### 10. View Your Data

In Supabase dashboard:
- **Table Editor**: View/edit data manually
- **SQL Editor**: Run custom queries
- **Storage**: Manage uploaded images
- **Authentication**: (Future) Add user login

## Troubleshooting

### Connection Error
- Check `.env.local` file exists and has correct values
- Restart dev server after creating `.env.local`
- Verify URL and key are correct (no extra spaces)

### Tables Not Created
- Make sure you ran the entire `supabase-schema.sql` file
- Check for error messages in SQL Editor
- Try running each CREATE TABLE statement separately

### Form Not Submitting
- Open browser console (F12) to see errors
- Check Supabase project is active (not paused)
- Verify RLS policies are set correctly

### Images Not Loading
- Make sure storage bucket is set to **Public**
- Check bucket policies allow SELECT operation
- Verify image URLs are correct

## Next Steps

1. **Add Real Content**: Replace placeholder data with actual events
2. **Upload Images**: Use Storage to upload event photos
3. **Admin Panel**: Create admin page to manage content
4. **Email Notifications**: Set up email alerts for new contacts
5. **Analytics**: Add tracking to monitor form submissions

## Useful Supabase Features

- **Real-time subscriptions**: Get live updates when data changes
- **Row Level Security**: Control who can access what data
- **Edge Functions**: Run serverless functions
- **Authentication**: Add user login (for admin panel)

## Support

- Supabase Docs: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions
- Discord: https://discord.supabase.com
