interface Recipe {
    reviewCount: number;
    id: number;
    name: string;
    instructions: string;
    ingredients: string[];
    tags: string[];
    rating: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    mealType: string;
    image: string;
  }

  export default Recipe;