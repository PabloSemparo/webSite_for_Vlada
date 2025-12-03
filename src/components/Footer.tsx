const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-serif font-medium">Vladusik Pampusik</h3>
          <p className="text-primary-foreground/80">Contemporary Artist</p>
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Vladusik Pampusik. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;