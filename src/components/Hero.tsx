import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="text-foreground">A to Z</span>
            <br />
            <span className="text-primary">Pitch deck Creation</span>
          </h1>

          {/* Features list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 animate-slide-up">
            {[
              "First deck in 7 days",
              "Content + Design", 
              "Dedicated project manager",
              "Truly unique design",
              "Custom Infographie"
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-sm font-medium text-foreground">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-scale-in">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
            >
              Get Started - Book a Call
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+124</div>
              <div className="text-muted-foreground">deck Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+$120M</div>
              <div className="text-muted-foreground">raised with our decks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+16</div>
              <div className="text-muted-foreground">Worked in Industries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;