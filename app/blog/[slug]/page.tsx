import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";

type Props = {
  params: { slug: string };
};

// Sample blog posts data
const blogPosts = {
  "perfect-wedding-tips": {
    title: "10 Tips for Planning the Perfect Wedding",
    author: "Shree Pillay",
    date: "2024-02-15",
    category: "Wedding Planning",
    content: `Planning a wedding can be one of the most exciting yet overwhelming experiences of your life. With so many details to consider, it's easy to feel stressed. Here are our top 10 tips to help you plan the perfect wedding while keeping your sanity intact.

## 1. Start Early and Stay Organized

Begin planning at least 12-18 months in advance. Create a detailed checklist and timeline to keep track of all tasks. Use planning apps or spreadsheets to stay organized.

## 2. Set a Realistic Budget

Determine your budget early and stick to it. Allocate funds to different categories (venue, catering, photography, etc.) and leave a 10% buffer for unexpected expenses.

## 3. Choose the Right Venue

Your venue sets the tone for your entire wedding. Consider factors like capacity, location, amenities, and whether it matches your wedding theme. Book early as popular venues fill up quickly.

## 4. Hire Professional Vendors

Invest in experienced vendors - photographers, caterers, decorators, and planners. Check reviews, ask for references, and meet them in person before making decisions.

## 5. Create a Guest List Wisely

Be strategic about your guest list. Consider your budget and venue capacity. Don't feel obligated to invite everyone - this is your special day.

## 6. Focus on What Matters Most

Identify the 3-4 elements that matter most to you (photography, food, music, etc.) and allocate more budget there. Don't stress over minor details that guests won't notice.

## 7. Plan for the Weather

If you're having an outdoor wedding, always have a backup plan. Rent tents or have an indoor alternative ready.

## 8. Take Care of Yourself

Wedding planning can be stressful. Make time for self-care, exercise, and relaxation. Don't let planning consume your entire life.

## 9. Delegate Responsibilities

You don't have to do everything yourself. Assign tasks to trusted family members and friends. Consider hiring a day-of coordinator.

## 10. Remember the Purpose

Amidst all the planning, remember that the wedding is about celebrating your love. Don't lose sight of what truly matters - your commitment to each other.

---

At ESSSqube Events, we specialize in making wedding planning stress-free and enjoyable. Our team handles all the details so you can focus on enjoying your special day. Contact us to learn how we can help make your dream wedding a reality.`,
  },
  "corporate-trends-2024": {
    title: "Corporate Event Trends in 2024",
    author: "Sarvambh Churmure",
    date: "2024-02-10",
    category: "Corporate Events",
    content: `The corporate events landscape is evolving rapidly. Here are the top trends shaping corporate events in 2024 and how your company can leverage them.

## Hybrid Events Are Here to Stay

Post-pandemic, hybrid events combining in-person and virtual elements have become the norm. This format increases accessibility and reach while maintaining personal connections.

## Sustainability First

Companies are prioritizing eco-friendly events. From digital invitations to sustainable catering and zero-waste decorations, green events are no longer optional.

## Experience Over Everything

Modern corporate events focus on creating memorable experiences rather than just information sharing. Interactive elements, gamification, and immersive activities are key.

## Technology Integration

AR/VR experiences, event apps, live polling, and social media walls are enhancing engagement and creating buzz around corporate events.

## Wellness-Focused Activities

Corporate events now include wellness components - yoga sessions, meditation breaks, healthy catering options, and mental health awareness activities.

## Smaller, More Frequent Events

Instead of one large annual event, companies are hosting smaller, more frequent gatherings to maintain team connection and engagement throughout the year.

## Personalization

Using data and technology to personalize event experiences for attendees - from customized agendas to tailored networking opportunities.

## Local and Cultural Experiences

Incorporating local culture, cuisine, and entertainment to create authentic and memorable experiences, especially for team-building events.

---

ESSSqube Events stays ahead of these trends to deliver cutting-edge corporate events. Whether it's a team-building activity, annual conference, or product launch, we bring innovation and creativity to every event.`,
  },
  "budget-birthday-ideas": {
    title: "Budget-Friendly Birthday Party Ideas",
    author: "Sachin Tiwari",
    date: "2024-02-05",
    category: "Social Events",
    content: `You don't need to spend a fortune to throw an amazing birthday party. Here are creative, budget-friendly ideas that will make your celebration memorable without breaking the bank.

## 1. Choose the Right Venue

Skip expensive venues and consider these alternatives:
- Host at home or in your backyard
- Use a public park (many are free or low-cost)
- Community centers often have affordable rental rates
- A friend's spacious home

## 2. DIY Decorations

Create beautiful decorations yourself:
- Paper streamers and balloons are inexpensive and impactful
- Print and cut out themed decorations
- Use fairy lights for ambiance
- Create a photo booth with a simple backdrop and props

## 3. Smart Food Planning

Food doesn't have to be expensive:
- Potluck style - ask guests to bring a dish
- Make your own pizza bar
- Taco or burger stations are budget-friendly
- Bake your own cake or cupcakes

## 4. Entertainment on a Budget

Keep guests entertained without expensive performers:
- Create a playlist instead of hiring a DJ
- Organize classic party games
- Set up outdoor games like cricket or badminton
- Movie screening with a projector

## 5. Digital Invitations

Save on printing and postage:
- Use free digital invitation platforms
- Create a WhatsApp group for the event
- Design invitations using free tools like Canva

## 6. Timing Matters

Choose your party time strategically:
- Afternoon parties can skip dinner costs
- Morning brunches are often cheaper than evening events
- Weekday parties may get better venue rates

## 7. Limit the Guest List

A smaller, intimate gathering:
- Reduces overall costs significantly
- Creates a more personal atmosphere
- Makes planning and execution easier

## 8. Reusable and Eco-Friendly

Invest in reusable items:
- Use real plates and cutlery instead of disposables
- Cloth napkins and tablecloths
- These save money long-term and are better for the environment

## 9. Theme It Up

A strong theme makes everything cohesive:
- Choose a simple theme that's easy to execute
- Coordinate colors throughout
- Themed activities don't have to be expensive

## 10. Focus on Memories

The best parties are about connection:
- Create a memory jar where guests write wishes
- Set up a photo corner with props
- Plan activities that encourage interaction

---

At ESSSqube Events, we specialize in creating magical celebrations at every budget level. Our "pocket-friendly sophistication" approach means you get professional event management without the premium price tag. Contact us to discuss your next birthday celebration!`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - ESSSqube Events Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPost post={{ ...post, slug: params.slug }} />;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
