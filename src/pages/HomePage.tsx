import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Wand2, Image as ImageIcon, Blend, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PRICING_TIERS } from '@/constants';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cinema-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-violet/10 via-transparent to-transparent opacity-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cinema-violet/30">
              <Sparkles className="w-4 h-4 text-cinema-violet" />
              <span className="text-sm font-medium">Powered by Veo 3</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              InstaGen Studio
            </h1>

            <p className="text-xl md:text-2xl text-cinema-silver font-light max-w-3xl mx-auto leading-relaxed">
              Create Video at the Speed of Imagination
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform text, images, or both into cinematic AI-generated videos. Professional tools for creators, filmmakers, and marketers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-cinema-violet hover:bg-cinema-violet-muted text-white h-12 px-8 text-base font-semibold group">
                <Link to="/studio">
                  Generate Video
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <a href="#showcase">View Examples</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-cinema-charcoal/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Ways to Create</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade video generation with full creative control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-panel border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cinema-violet/10 flex items-center justify-center mb-6 group-hover:bg-cinema-violet/20 transition-colors">
                  <Wand2 className="w-6 h-6 text-cinema-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Text → Video</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Describe your vision. AI transforms words into cinematic footage with Veo 3's advanced understanding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    AI prompt enhancement
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Style & mood controls
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Camera motion presets
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-panel border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cinema-violet/10 flex items-center justify-center mb-6 group-hover:bg-cinema-violet/20 transition-colors">
                  <ImageIcon className="w-6 h-6 text-cinema-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Image → Video</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bring still images to life. Add cinematic motion, depth, and atmosphere to any photo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Motion presets (pan, dolly, orbit)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Parallax depth effects
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Multiple aspect ratios
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-panel border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cinema-violet/10 flex items-center justify-center mb-6 group-hover:bg-cinema-violet/20 transition-colors">
                  <Blend className="w-6 h-6 text-cinema-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hybrid Mode</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Combine images with text prompts for precise creative control over composition and narrative.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Image fidelity control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Text-guided animation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cinema-violet" />
                    Creative freedom slider
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section id="showcase" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcase Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Explore what creators are making with InstaGen Studio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop&q=80',
                prompt: 'Lone astronaut on red desert at sunset',
                ratio: '16:9',
              },
              {
                url: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=600&h=800&fit=crop&q=80',
                prompt: 'Portrait with natural lighting',
                ratio: '9:16',
              },
              {
                url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&q=80',
                prompt: 'Magical particles swirling',
                ratio: '1:1',
              },
              {
                url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&q=80',
                prompt: 'Futuristic cityscape at night',
                ratio: '16:9',
              },
              {
                url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&q=80',
                prompt: 'Cinematic portrait with moody lighting',
                ratio: '9:16',
              },
              {
                url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop&q=80',
                prompt: 'Abstract cinematic motion',
                ratio: '1:1',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden glass-panel border border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all cursor-pointer"
              >
                <div className="aspect-video relative">
                  <img src={item.url} alt={item.prompt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium mb-1">{item.prompt}</p>
                      <p className="text-xs text-muted-foreground">{item.ratio}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-cinema-black/80 text-xs font-medium">
                    {item.ratio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-cinema-charcoal/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your creative workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <Card
                key={tier.name}
                className={`glass-panel border-cinema-mid-gray/50 hover:border-cinema-violet/50 transition-all ${
                  index === 1 ? 'md:scale-105 border-cinema-violet/50' : ''
                }`}
              >
                <CardContent className="p-8">
                  {index === 1 && (
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-cinema-violet/20 text-cinema-violet text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-cinema-violet shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      index === 1
                        ? 'bg-cinema-violet hover:bg-cinema-violet-muted'
                        : 'bg-cinema-mid-gray hover:bg-cinema-mid-gray/80'
                    }`}
                  >
                    {tier.price === 0 ? 'Start Free' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
