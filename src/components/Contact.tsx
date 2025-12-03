import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in commissioning a piece or learning more about available works? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Whether you're interested in purchasing original artwork, commissioning 
                a custom piece, or simply want to discuss art, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent w-5 h-5" />
                <span className="text-foreground">elena@elenarod.art</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent w-5 h-5" />
                <span className="text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent w-5 h-5" />
                <span className="text-foreground">New York, NY</span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-serif font-medium text-foreground mb-3">
                Studio Hours
              </h4>
              <div className="text-foreground/80 space-y-1">
                <p>Tuesday - Friday: 10am - 6pm</p>
                <p>Saturday: 12pm - 4pm</p>
                <p>Sunday & Monday: By appointment</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="Inquiry about artwork..."
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your interest in my work..."
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;