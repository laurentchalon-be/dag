
export interface BreakfastItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Classic' | 'Healthy' | 'Indulgent' | 'Drinks';
  image: string;
  rating: number;
  calories: number;
}

export interface CartItem extends BreakfastItem {
  quantity: number;
}

export interface AIRecommendation {
  reasoning: string;
  suggestedItems: string[];
}
