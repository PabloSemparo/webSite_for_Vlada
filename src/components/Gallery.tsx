import { useState } from 'react';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks = [
    {
      id: 1,
      title: "Flowing Emotions",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "40\" × 50\"",
      image: artwork1,
      description: "An exploration of fluid movement and vibrant color relationships."
    },
    {
      id: 2,
      title: "Urban Rhythms",
      year: "2024",
      medium: "Mixed Media",
      dimensions: "36\" × 48\"",
      image: artwork2,
      description: "Geometric forms inspired by the energy of city life."
    },
    {
      id: 3,
      title: "Quiet Moments",
      year: "2023",
      medium: "Oil and Charcoal",
      dimensions: "30\" × 40\"",
      image: artwork3,
      description: "A meditation on minimalism and the beauty of simplicity."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-4">
            Recent Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of paintings from my latest series exploring contemporary themes 
            through abstract expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(artwork.image)}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 shadow-lg">
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-medium text-foreground">
                  {artwork.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {artwork.year} • {artwork.medium}
                </p>
                <p className="text-sm text-muted-foreground">
                  {artwork.dimensions}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage}
                alt="Enlarged artwork"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;