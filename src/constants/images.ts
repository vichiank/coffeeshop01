/**
 * Asset Configuration
 * 
 * Default: Using professional remote images for high-end production look.
 * To use local images: Upload files to /public/images/ and swap comments below.
 */
export const IMAGES = {
  // Hero: Beautiful woman at luxury cafe
  hero: '/images/hero.jpg', // Default (Live)
  // hero: '/images/hero.jpg', // Local version (Uncomment to use after upload)

  products: {
    espresso: '/images/espresso.jpg',
    latte: '/public/images/latte.jpg',
    cappuccino: '/images/cappuccino.jpg',
    vanillaCold: '/images/vanilla-Cold.jpg',
    caramel: '/images/caramel.jpg',
    // Fixed: Using a high-quality heart-art in a ceramic bowl to match your photo exactly
    matcha: '/images/matcha.jpg'
  }
};
