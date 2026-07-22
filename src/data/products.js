// Product catalog for the Fertilizer store (data modeled on the reference site)

export const products = [
  {
    id: 1,
    name: "Natural Feed",
    price: 135,
    priceMax: 160,
    category: "Plant Based",
    image:
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    variants: true,
  },
  {
    id: 2,
    name: "Plant Power",
    price: 165,
    category: "Plant Based",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Root Enhancer",
    price: 131,
    category: "Mineral Based",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Bone Meal",
    price: 165,
    priceMax: 189,
    category: "Animal-Based",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80",
    variants: true,
    sale: true,
  },
  {
    id: 5,
    name: "Eco Grow",
    price: 179,
    category: "Compost Based",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Soil Builder",
    price: 125,
    oldPrice: 137,
    category: "Compost Based",
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
    sale: true,
  },
  {
    id: 7,
    name: "Alfalfa Grow",
    price: 189,
    category: "Plant Based",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Soil Softener",
    price: 141,
    category: "Mineral Based",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Sea Green",
    price: 129,
    category: "Liquid Organic",
    image:
      "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Neem Rich",
    price: 149,
    category: "Plant Based",
    image:
      "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Manure Max",
    price: 109,
    oldPrice: 129,
    category: "Animal-Based",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    sale: true,
  },
  {
    id: 12,
    name: "SoilMate Garden",
    price: 139,
    category: "Compost Based",
    image:
      "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Nature Boost",
    price: 120,
    category: "Vermi compost",
    image:
      "https://images.unsplash.com/photo-1621460248083-6271cc4437a8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Green Gold",
    price: 99,
    category: "Liquid Organic",
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=600&q=80",
  },
];

export const categories = [
  {
    title: "Compost-Based Fertilizers",
    filter: "Compost Based",
    text: "Enrich your soil, nourish your plants",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Animal-Based Fertilizers",
    filter: "Animal-Based",
    text: "Grow stronger with organic power",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Plant-Based Fertilizers",
    filter: "Plant Based",
    text: "Natural solutions for every garden & farm space",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mineral-Based Fertilizers",
    filter: "Mineral Based",
    text: "From compost blends to specialty boosters",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
  },
];

export const testimonials = [
  {
    name: "Sam",
    role: "Home Gardener",
    text: "Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit. Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Billy",
    role: "Organic Farmer",
    text: "Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Smith",
    role: "Nursery Owner",
    text: "Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus.",
    avatar: "https://i.pravatar.cc/120?img=52",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/#about" },
  { label: "Contact Us", to: "/#contact" },
];

export const productCategories = [
  "All",
  "Compost Based",
  "Animal-Based",
  "Plant Based",
  "Mineral Based",
  "Liquid Organic",
  "Vermi compost",
];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}
