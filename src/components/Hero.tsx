import { Button } from '@/components/ui/button';
import artwork1 from '@/assets/artwork-1.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-tight">
                Elena<br />
                <span className="text-accent">Rodriguez</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Contemporary Artist
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              Exploring the intersection of color, form, and emotion through 
              abstract expressionism and mixed media compositions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Gallery
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={artwork1} 
                alt="Featured artwork by Elena Rodriguez"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;