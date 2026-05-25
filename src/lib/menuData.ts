// ─────────────────────────────────────────────────────────────
// FROZEN WOODS MENU DATA
// Edit prices, descriptions, and tags here.
// Add/remove items by modifying the arrays below.
// Add a new section by adding a new object to MENU_SECTIONS.
// ─────────────────────────────────────────────────────────────

export type Tag = 'seasonal' | "chef's choice" | 'slow favorite' | 'house special';

export interface MenuItem {
  name: string;
  desc?: string | null;
  price?: number;
  note?: string;          // e.g. "2 pcs", "6 pcs"
  tags?: Tag[];
}

export interface VariantItem {
  name: string;
  prices: (number | string)[];  // matches variant.cols length
}

export interface Subsection {
  label?: string | null;
  variant?: { cols: string[] };   // triggers variant layout (pizza, pasta)
  items: (MenuItem | VariantItem)[];
}

export interface BuffetBlock {
  title: string;
  includes: string;
  prices: { label: string; value: string }[];
}

export interface Timing {
  meal: string;
  hours: string;
}

export interface MenuSection {
  id: string;
  eyebrow: string;
  title: string;
  note?: string | null;
  type?: 'buffet';
  subsections?: Subsection[];
  buffets?: BuffetBlock[];
  timings?: Timing[];
}

// ─────────────────────────────────────────────────────────────
export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'beverages',
    eyebrow: 'Warm & Cold',
    title: 'Beverages',
    note: 'Unhurried sips. The kind you return to.',
    subsections: [
      {
        label: 'Teas',
        items: [
          { name: 'Morning Tea', desc: 'Classic chai brewed slow, the way mountains prefer it.', price: 45 },
          { name: 'Black Tea', price: 25 },
          { name: 'Green Tea', desc: 'Pale, grassy, calming.', price: 45 },
          { name: 'Thyme Tea', desc: 'Foraged thyme, steeped quietly in hot water.', price: 70, tags: ['house special'] },
          { name: 'Rosemary Tea', desc: 'Aromatic and gently warming.', price: 70, tags: ['slow favorite'] },
        ] as MenuItem[],
      },
      {
        label: 'Coffee & Warm Drinks',
        items: [
          { name: 'Coffee', desc: 'Brewed to order.', price: 65 },
          { name: 'Black Coffee', desc: 'Clean, honest, dark.', price: 45 },
          { name: 'Cold Coffee', desc: 'Chilled, slightly sweet.', price: 125 },
          { name: 'Dark Mountain Cocoa', desc: 'Slow-whisked hot chocolate, finished with warmth.', price: 125, tags: ['slow favorite'] },
          { name: 'Bournvita Milk', price: 115 },
          { name: 'Milk', price: 55 },
        ] as MenuItem[],
      },
      {
        label: 'Cold & Sparkling',
        items: [
          { name: 'Mineral Water', price: 30 },
          { name: 'Soda', price: 30 },
          { name: 'Fresh Lime Soda', desc: 'Squeezed, salted or sweet.', price: 75 },
          { name: 'Seasonal Juice', desc: 'Whatever the valley offers today.', price: 85 },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'shakes',
    eyebrow: 'Cold & Creamy',
    title: 'Shakes',
    subsections: [
      {
        label: null,
        items: [
          { name: 'Milk Shake', price: 145 },
          { name: 'Oreo Shake', price: 145 },
          { name: 'Vanilla Shake', price: 145 },
          { name: 'Chocolate Shake', price: 145 },
          { name: 'Banana Shake', price: 145 },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'breakfast',
    eyebrow: '7:00 — 10:00 AM',
    title: 'Breakfast',
    note: 'The first meal at altitude. Begin slowly.',
    subsections: [
      {
        label: null,
        items: [
          { name: 'Paratha with Curd & Pickles', desc: 'Two parathas, tangy curd, house pickles.', price: 160, note: '2 pcs' },
          { name: 'Paneer Paratha', desc: 'Stuffed, pan-fried, served warm.', price: 180, note: '2 pcs' },
          { name: 'Puri Bhaji', desc: 'Four puris, spiced potato bhaji.', price: 175, note: '4 pcs' },
          { name: 'Bread Omelette', desc: 'Eggs folded simply. Toast on the side.', price: 175 },
          { name: 'Poha', desc: 'Flattened rice, mustard, curry leaf. A quiet morning ritual.', price: 225, tags: ['slow favorite'] },
          { name: 'Upma', desc: 'Semolina, tempered with spice.', price: 175 },
          { name: 'Chillas', desc: 'Besan or Suji — both worth the wait.', price: 155 },
          { name: 'Cornflakes with Milk', price: 155 },
          { name: 'Bread with Butter & Jam', price: 125 },
          { name: 'Salted Daliya', desc: 'Broken wheat, slow cooked.', price: 255 },
          { name: 'Sweet Daliya', desc: 'Broken wheat with milk and sweetness.', price: 255 },
          { name: 'Dal Paratha', price: 255, note: '4 pcs' },
          { name: 'Chole Bhature', desc: 'Chickpea curry, deep-fried bread. A full morning.', price: 425, note: '4 pcs', tags: ['house special'] },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'snacks',
    eyebrow: 'Between meals',
    title: 'Snacks',
    note: 'For hunger that arrives quietly, between the walks.',
    subsections: [
      {
        label: null,
        items: [
          { name: 'French Fries', desc: 'With periperi mayo.', price: 235 },
          { name: 'Potato Wedges', price: 225 },
          { name: 'Veg Pakora', desc: 'Battered and fried. Best with chai.', price: 175, tags: ['slow favorite'] },
          { name: 'Spanish Omelette', price: 195 },
          { name: 'Pita Bread — Veg', price: 195 },
          { name: 'Pita Bread — Non-Veg', price: 345 },
          { name: 'Paneer Pakora', desc: 'Cottage cheese, golden batter.', price: 265 },
          { name: 'Chicken Pakora', price: 455 },
          { name: 'Bread Pakora', price: 185 },
          { name: 'Bread Rolls', price: 185 },
          { name: 'Peanut Masala', price: 195 },
          { name: 'Egg Bhurji', desc: 'Scrambled eggs, spiced with care.', price: 175 },
          { name: 'Boiled Eggs', price: 155, note: '4 pcs' },
          { name: 'Plain Omelette', price: 95 },
          { name: 'Masala Omelette', price: 145 },
          { name: 'Paneer Bhurji', price: 265 },
          { name: 'Roasted Papad', price: 95 },
          { name: 'Masala Papad', price: 125 },
          { name: 'Maggie', desc: 'The original mountain comfort.', price: 105, tags: ['slow favorite'] },
          { name: 'Veg Maggie', price: 145 },
          { name: 'Spring Rolls — Veg', price: 255 },
          { name: 'Spring Rolls — Non-Veg', price: 395 },
          { name: 'Pop Corn', price: 125 },
          { name: 'Chicken Pop Corn', price: 295 },
          { name: 'Veg Momos', desc: 'Steamed dumplings from the hills.', price: 205, note: '8 pcs', tags: ['slow favorite'] },
          { name: 'Chicken Momos', price: 265, note: '8 pcs' },
          { name: 'Kurkurey Veg Momos', desc: 'Crispy fried.', price: 325, note: '8 pcs' },
          { name: 'Kurkurey Chicken Momos', price: 355, note: '8 pcs' },
          { name: 'Raagi Veg Momos', desc: 'Ragi flour — earthy, wholesome.', price: 325, note: '8 pcs' },
          { name: 'Raagi Chicken Momos', price: 355, note: '8 pcs' },
          { name: 'Veg Saute', price: 225 },
          { name: 'Chicken Sautey', price: 355 },
          { name: 'Fish Pakora', price: 425 },
          { name: 'Trout Fish', desc: 'From mountain streams. Worth every rupee.', price: 950, tags: ["chef's choice"] },
          { name: 'Cheese & Cheese Stick', price: 395 },
          { name: 'Veg Cutlet', price: 295 },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'bbq',
    eyebrow: 'Over flame',
    title: 'Bar-be-Que',
    note: 'Slow cooked over charcoal. Six pieces each.',
    subsections: [
      {
        label: null,
        items: [
          { name: 'Chicken Tikka', price: 495, note: '6 pcs' },
          { name: 'Chicken Malai Tikka', desc: 'Cream-marinated, charcoal kissed.', price: 555, note: '6 pcs', tags: ["chef's choice"] },
          { name: 'Paneer Tikka', price: 425, note: '6 pcs' },
          { name: 'Mushroom Tikka', price: 395, note: '6 pcs' },
          { name: 'Roasted Potatoes', price: 325, note: '6 pcs' },
          { name: 'Roasted Gobi', desc: 'Cauliflower, simply charred.', price: 325, note: '6 pcs' },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'sandwiches',
    eyebrow: 'Handheld',
    title: 'Sandwiches & Salads',
    subsections: [
      {
        label: 'Sandwiches',
        items: [
          { name: 'Fresh Green Sandwich', price: 245 },
          { name: 'Egg Sandwich', price: 245 },
          { name: 'Chicken Sandwich', price: 295 },
          { name: 'Paneer Sandwich', price: 295 },
          { name: 'Veg Cheese Sandwich', price: 315 },
        ] as MenuItem[],
      },
      {
        label: 'Salads & Sides',
        items: [
          { name: 'Fresh Green Salad', price: 95 },
          { name: 'Cucumber Salad', price: 125 },
          { name: 'Kumaoni Salad', desc: 'Seasonal, from the local valley.', price: 125, tags: ['seasonal'] },
          { name: 'Plain Curd', price: 135 },
          { name: 'Raita Mix', price: 185 },
          { name: 'Kumaoni Raita', desc: 'House style, mildly spiced.', price: 225, tags: ['house special'] },
          { name: 'Bhaang Chatni', desc: 'Hemp seed chutney. Distinctly Kumaoni.', price: 125, tags: ['house special'] },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'chinese',
    eyebrow: 'Indo-Chinese',
    title: 'Chinese',
    note: 'Mountain-style Indo-Chinese. Warm and generous.',
    subsections: [
      {
        label: 'Rice & Noodles',
        items: [
          { name: 'Fried Rice — Veg', price: 375 },
          { name: 'Fried Rice — Non-Veg', price: 445 },
          { name: 'Hakka Noodles — Veg', price: 275 },
          { name: 'Hakka Noodles — Non-Veg', price: 345 },
          { name: 'Chilli Garlic Noodles — Veg', price: 295 },
          { name: 'Chilli Garlic Noodles — Non-Veg', price: 355 },
        ] as MenuItem[],
      },
      {
        label: 'Soups',
        items: [
          { name: 'Tomato', price: 155 },
          { name: 'Chicken Egg Soup', price: 185 },
          { name: 'Sweet Corn — Veg', price: 155 },
          { name: 'Sweet Corn — Non-Veg', price: 185 },
          { name: 'Hot & Sour — Veg', price: 155 },
          { name: 'Hot & Sour — Non-Veg', price: 185 },
          { name: 'Clear — Veg', price: 155 },
          { name: 'Clear — Non-Veg', price: 175 },
          { name: 'Mushroom Veg', price: 175 },
          { name: 'Manchow — Veg', price: 175 },
          { name: 'Manchow — Non-Veg', price: 185 },
        ] as MenuItem[],
      },
      {
        label: 'Main Course',
        items: [
          { name: 'Chilli Chicken', price: 495 },
          { name: 'Chilli Paneer', price: 395 },
          { name: 'Chilli Mushroom', price: 395 },
          { name: 'Crispy Veg Assorted', price: 395 },
          { name: 'Chicken Manchurian', price: 495 },
          { name: 'Veg Manchurian', price: 325 },
          { name: 'Crispy Veg Salt & Pepper', price: 325 },
          { name: 'Chicken Salt & Pepper', price: 495 },
          { name: 'Honey Chilli Potato', price: 315 },
          { name: 'Chilli Potato', price: 295 },
          { name: 'Crispy Sweet Corn', price: 325 },
          { name: 'Shanghai Chilli Chicken', price: 495 },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'continental',
    eyebrow: 'From afar',
    title: 'Continental',
    subsections: [
      {
        label: 'Pizza',
        variant: { cols: ['8"', '12"'] },
        items: [
          { name: 'Margherita', prices: [455, 655] },
          { name: 'Farm Fresh', prices: [455, 655] },
          { name: 'Thin Crust', prices: [425, 600] },
          { name: 'Butter Chicken / Paneer', prices: [455, 655] },
          { name: 'Chicken Pizza', prices: [455, 655] },
        ] as VariantItem[],
      },
      {
        label: 'Pasta',
        variant: { cols: ['Veg', 'Non-Veg'] },
        items: [
          { name: 'White Sauce Pasta', prices: [425, 525] },
          { name: 'Red Sauce Pasta', prices: [425, 525] },
          { name: 'Mix Sauce Pasta', prices: [425, 525] },
          { name: 'Garlic Bread', prices: [325, 425] },
          { name: 'Stuffed Garlic Bread', prices: [395, 455] },
        ] as VariantItem[],
      },
      {
        label: 'Mexican',
        items: [
          { name: 'Quesadilla — Veg', price: 395 },
          { name: 'Quesadilla — Non-Veg', price: 495 },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'indian',
    eyebrow: 'From the kitchen',
    title: 'Indian',
    note: 'Slow-cooked. Made the way it was meant to be.',
    subsections: [
      {
        label: 'Vegetables',
        items: [
          { name: 'Jira Aloo', price: 225 },
          { name: 'Alloo Gobi', price: 255 },
          { name: 'Alloo Shimla Mirch', price: 225 },
          { name: 'Alloo Mutter', price: 255 },
          { name: 'Malai Kofta', price: 425 },
          { name: 'Kashmiri Dum Aloo', desc: 'Slow braised in a rich yogurt gravy.', price: 425, tags: ['slow favorite'] },
          { name: 'Mix Seasonal Veg', price: 325 },
          { name: 'Mutter Mushroom', price: 325 },
          { name: 'Mutter Paneer', price: 425 },
          { name: 'Kadhai Paneer', price: 425 },
          { name: 'Shahi Paneer', price: 425 },
          { name: 'Paneer Masala Butter', price: 425 },
          { name: 'Paneer Adaraki', price: 425 },
          { name: 'Paneer Do Pyazza', price: 425 },
          { name: 'Paneer Khurchan', price: 425 },
          { name: 'Paneer Lababdar', price: 425 },
          { name: 'Palak Paneer', price: 425 },
        ] as MenuItem[],
      },
      {
        label: 'Dal',
        items: [
          { name: 'Yellow Dal Tadka', price: 255 },
          { name: 'Chana Dal Tadka', price: 255 },
          { name: 'Moong Dal', price: 275 },
          { name: 'Rajma', desc: 'Kidney beans, slow simmered.', price: 275, tags: ['slow favorite'] },
          { name: 'Chhole Masala', price: 275 },
          { name: 'Kadi Pakoda', price: 355 },
          { name: 'Dal Makhni', desc: 'Overnight lentils. The real kind.', price: 325, tags: ["chef's choice"] },
        ] as MenuItem[],
      },
      {
        label: 'Non-Veg',
        variant: { cols: ['Half · 4 pcs', 'Full · 8 pcs'] },
        items: [
          { name: 'Chicken Curry', prices: [455, 600] },
          { name: 'Chicken Masala', prices: [455, 600] },
          { name: 'Butter Chicken', prices: [475, 650] },
          { name: 'Kadhai Chicken', prices: [455, 600] },
          { name: 'Chicken Pahadi', prices: [455, 600] },
          { name: 'Chicken Khurchan', prices: [455, 600] },
          { name: 'Chicken Do Pyazza', prices: [455, 600] },
          { name: 'Pahadi Mutton Curry', prices: [595, 950] },
          { name: 'Mutton Rogan Josh', prices: [595, 850] },
          { name: 'Bhuna Onion Ghost', prices: [595, 850] },
          { name: 'Egg Curry', prices: [325, '—'] },
          { name: 'Fish Curry', prices: [455, 650] },
        ] as VariantItem[],
      },
    ],
  },

  {
    id: 'rice-roti',
    eyebrow: 'Accompaniments',
    title: 'Rice & Roti',
    subsections: [
      {
        label: 'Rice',
        items: [
          { name: 'Steam Rice', price: 235 },
          { name: 'Jeera / Peas Rice', price: 275 },
          { name: 'Veg Biryani', price: 495 },
          { name: 'Chicken Biryani', price: 595 },
          { name: 'Khichadi', desc: 'Lentil rice, comfort in a bowl.', price: 255 },
        ] as MenuItem[],
      },
      {
        label: 'Roti & Bread',
        items: [
          { name: 'Tawa Roti', price: 30 },
          { name: 'Butter Roti', price: 35 },
          { name: 'Plain Paratha', price: 45 },
          { name: 'Lachha Paratha', price: 65 },
          { name: 'Chilli Garlic Lachha Paratha', price: 70 },
          { name: 'Ragi Roti', desc: 'Finger millet. Mountain grain.', price: 40 },
        ] as MenuItem[],
      },
      {
        label: 'Dessert',
        items: [
          { name: 'Kheer / Sewain', desc: 'Rice pudding or vermicelli. A sweet close.', price: 125 },
          { name: 'Shahi Tukda', price: 125 },
          { name: 'Custard', price: 125 },
          { name: 'Gulab Jamun', price: 125 },
          { name: 'Ice Cream', price: 125 },
          { name: 'Raagi Halwa', desc: 'Finger millet halwa. Wholesome and warm.', price: 125 },
          { name: 'Brownie', price: 155 },
          { name: 'Brownie with Ice Cream', desc: 'The one worth waiting for.', price: 255, tags: ['slow favorite'] },
        ] as MenuItem[],
      },
    ],
  },

  {
    id: 'buffet',
    eyebrow: 'Shared table',
    title: 'Buffet & Thali',
    type: 'buffet',
    buffets: [
      {
        title: 'Buffet Meal — Vegetarian',
        includes: 'Soup · Paneer · Vegetable Dry · Dal · Rice · Chapatties · Raita · Salads · Papad · Pickles · Desserts',
        prices: [{ label: 'Per person', value: '₹750' }, { label: 'Per child', value: '₹350' }],
      },
      {
        title: 'Buffet Meal — Non-Vegetarian',
        includes: 'Soup · Chicken or Mutton · Vegetable Dry · Dal · Rice · Chapatties · Raita · Salads · Papad · Pickles · Desserts',
        prices: [{ label: 'Per person', value: '₹750' }, { label: 'Per child', value: '₹350' }],
      },
      {
        title: 'Kumaoni Thali — Vegetarian',
        includes: 'A complete Kumaoni meal.',
        prices: [{ label: 'Per person', value: '₹550' }, { label: 'Per child', value: '₹325' }],
      },
      {
        title: 'Kumaoni Thali — Non-Vegetarian',
        includes: 'A complete Kumaoni meal.',
        prices: [{ label: 'Per person', value: '₹700' }, { label: 'Per child', value: '₹350' }],
      },
    ],
    timings: [
      { meal: 'Breakfast', hours: '7:00 – 10:00 AM' },
      { meal: 'Lunch', hours: '12:30 – 3:00 PM' },
      { meal: 'Dinner', hours: '7:30 – 10:30 PM' },
    ],
  },
];
