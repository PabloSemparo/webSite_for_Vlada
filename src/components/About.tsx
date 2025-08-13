import artistPhoto from '@/assets/artist-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-6">
              About the Artist
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Elena Rodriguez is a contemporary artist based in New York, working primarily 
                in abstract expressionism and mixed media. Her work explores the relationship 
                between color, texture, and emotional narrative.
              </p>
              
              <p>
                With over a decade of professional practice, Elena's paintings have been 
                featured in galleries across the United States and Europe. Her distinctive 
                style combines traditional painting techniques with modern conceptual approaches.
              </p>
              
              <p>
                She holds an MFA from the Rhode Island School of Design and has been the 
                recipient of several prestigious awards, including the Contemporary Art 
                Foundation Grant in 2022.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                Recent Exhibitions
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>• "Urban Abstractions" - Gallery Modern, NYC (2024)</p>
                <p>• "Color & Form" - Art Basel Miami (2023)</p>
                <p>• "Emerging Voices" - Whitney Biennial (2023)</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <img 
                src={artistPhoto}
                alt="Elena Rodriguez in her studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;