import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const blogPosts = {
  "sweetener-shift": {
    title: "The Great Sweetener Shift: Why Your Favorite Drinks Are Going Artificial",
    date: "Apr 09, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/beverage/1200/600",
    content: `If you’ve taken a sip of your go-to soda lately and thought, "Wait, does this taste... different?"—you aren’t imagining it. We are currently living through a massive "Great Reformulation." Across the globe, beverage giants are quietly swapping out traditional cane sugar for high-intensity artificial sweeteners and natural alternatives.

What used to be a clear divide between "Regular" and "Diet" has become a blurry spectrum. Here is how the industry is breaking up with sugar and the science behind the new flavors.

### 1. The Economics of the "Sugar Tax"
The biggest driver isn't just health-consciousness; it’s economics. Governments worldwide have implemented Sugar-Sweetened Beverage (SSB) taxes.

*   **The Strategy:** By reducing sugar content below a certain threshold (usually 5g per 100ml), companies can avoid heavy levies.
*   **The Result:** To keep the price point the same without losing the "sweet hit" consumers crave, brands now use a "hybrid" system—blending a small amount of sugar with potent artificial substitutes.

### 2. The Power Couple: Sucralose and Acesulfame K
When you flip over a bottle of "reduced sugar" juice or "zero" soda, you will almost always see two names appearing together: Sucralose and Acesulfame Potassium (Ace-K). In the beverage industry, they are considered the "dynamic duo" of formulation.

#### Why the Synergy Works
Beverage chemists use Sucralose and Ace-K together because they cover each other's weaknesses:

*   **Acesulfame K:** This provides a very fast "onset"—you taste the sweetness the instant it hits your tongue—but it can have a slightly bitter, metallic aftertaste.
*   **Sucralose (Splenda):** This is about 600 times sweeter than sugar. It provides a long-lasting sweetness that lingers, helping to mask the metallic notes of the Ace-K.

Together, they mimic the "full" flavor profile of real sugar more effectively than any single sweetener could alone.

### 3. Industrial Advantages
Beyond taste, there are logistical reasons why these specific chemicals have taken over the market:

*   **Heat Stability:** Unlike older sweeteners like Aspartame, both Sucralose and Ace-K are heat-stable. They can survive the pasteurization process and long shelf lives in warm warehouses without losing their sweetness.
*   **Cost Efficiency:** Because they are hundreds of times sweeter than sugar, a tiny amount replaces a massive volume of syrup. This reduces shipping weight and storage costs significantly.

---

### The Bottom Line
The move toward artificial and alternative sweeteners is a permanent pivot. Whether driven by public health mandates, corporate goals, or the simple desire to lower production costs, the "Sugar Rush" era is cooling down.

Next time you grab a bottle, check the fine print. You might find that your "Regular" drink has a few laboratory-born friends helping it stay sweet.

How do you feel about the change—can you taste the "synergy" of these sweeteners, or do you find yourself missing the old-fashioned sugar hit?`
  },
  "ai-literacy-bangladesh": {
    title: "From Tea Stalls to Tech: Why AI Literacy is the New 'Amar Shonar Bangla'",
    date: "Apr 08, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/tech/1200/600",
    content: `If you walk into any tea stall from Farmgate to a remote village in Kurigram, the conversation is shifting. You’ll see a student hunched over a smartphone, a farmer checking weather apps, or a small business owner trying to figure out "the algorithm."

We’ve always been a nation of survivors and hustlers. But today, the "hustle" is changing. AI literacy isn't about learning to code or becoming a math genius; it’s about making sure the next chapter of Bangladesh belongs to us, not just to Silicon Valley.

### It’s About Our Jobs, Not Just Robots
There’s a lot of fear that AI is coming for our jobs—especially in the RMG sector. But the truth is a bit more nuanced. AI won’t replace the tailor in Gazipur, but a person using AI might.

Being "AI literate" means our workers can move from being the hands that stitch to the minds that manage the smart factories of tomorrow. It’s the difference between being left behind and leading the charge.

### Solving "Bengali" Problems
Let’s be honest: most AI today feels a bit "foreign." It doesn't always understand our slang, our cultural nuances, or the specific way we do business.

*   **Linguistic Pride:** We fought for our language in 1952. In 2026, AI literacy is how we fight for our language in the digital world.
*   **Local Context:** We need AI that knows how to predict a monsoon flood in the Delta, not just a snowstorm in New York. We only get that if we are the ones building and guiding these tools.

### Breaking the "Class" Barrier
For too long, "high tech" has felt like something only the elite in Dhaka can touch. AI literacy is the great equalizer. It gives a bright kid in a village the same "brain power" as a student in a private university.

It's about a teacher using AI to create lesson plans in minutes so they have more time to actually talk to their students. It's about a young girl using AI to learn English or graphic design because she can't afford a tutor.

---

### The Reality Check
We can’t just "wish" this into existence. We still have load-shedding. We still have schools without enough computers. And let's face it, our education system is still very much stuck in the "copy-paste" era.

To make AI literacy human, we have to:
1.  **Stop being afraid of it.** It’s just a tool, like a calculator or a tractor.
2.  **Teach it in Bangla.** If the knowledge is trapped in English, we leave half our population behind.
3.  **Encourage curiosity over memorization.** AI can memorize everything; humans are there to ask the "why."

### The Bottom Line
Bangladesh didn't survive the last 50 years by playing it safe. We survived by being adaptable. AI is the next big wave hitting our shores. We can either build a wall and watch it crumble, or we can learn to surf.

Our people are our greatest resource. Let’s give them the digital literacy they need to turn "Smart Bangladesh" from a slogan into a reality we can all feel.`
  }
};

export function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="bg-bg min-h-screen text-text-primary flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <Link to="/blog" className="text-accent hover:underline">Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen text-text-primary font-body flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-[800px] mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted hover:text-text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-stroke">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-indigo max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
