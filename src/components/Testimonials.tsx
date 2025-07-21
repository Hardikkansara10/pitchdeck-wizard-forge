import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rob Blatt",
      role: "Co-Founder",
      company: "envoyatHome",
      content: "Impressed us working with Benjamin and his team. The first was the ability to really understand our business and to help us simplify our message to come to create a compelling narrative.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Manni Sidhu", 
      role: "CEO",
      company: "Modoru",
      content: "The team is fantastic and they have a great proposition. I will certainly be using Ben and the team again.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Glauber Costa",
      role: "CEO", 
      company: "Turso",
      content: "Ben was responsive the whole time, and worked with us through the many revisions - And the best of all: the end result was gorgeous!",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Darren Webb",
      role: "Co-Founder CEO",
      company: "Mindset", 
      content: "Truly - you and your team are so talented. I'm super happy with the way this turned out!! I'm finishing up the rest of the deck content now and will share it when it is done.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Katherine Galvin",
      role: "Co-Founder CEO",
      company: "AIFluence",
      content: "Also I forgot to mention - this deck is AMAZING!!!!!!",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Abraham Micael",
      role: "Product Strategy & Operations",
      company: "LaunchXR",
      content: "The quality of Ben's team surpassed our expectations. After interviewing over ten candidates, Ben stood out due to his curiosity and dedication.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
            Client Reviews
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Don't take our word for it.
          </h3>
          
          {/* Trustpilot badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-lg px-6 py-3">
            <span className="font-semibold text-foreground">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">Trustscore 4.8 | 54 reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;