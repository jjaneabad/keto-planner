// ============================================================
// KETO PLANNER — DATA LAYER
// Nutrition DB + all 30 recipes embedded
// ============================================================

const NUTRITION_DB = {
  eggs:               { fat: 9.5,   protein: 12.6, net_carbs: 0.7,  calories: 143 },
  bacon:              { fat: 42.0,  protein: 37.0, net_carbs: 1.4,  calories: 541 },
  chicken_breast:     { fat: 3.6,   protein: 31.0, net_carbs: 0.0,  calories: 165 },
  chicken_thigh:      { fat: 15.5,  protein: 26.0, net_carbs: 0.0,  calories: 247 },
  ground_beef:        { fat: 17.1,  protein: 25.9, net_carbs: 0.0,  calories: 254 },
  steak_ribeye:       { fat: 18.9,  protein: 24.8, net_carbs: 0.0,  calories: 271 },
  pork_chop:          { fat: 7.1,   protein: 27.3, net_carbs: 0.0,  calories: 182 },
  pork_sausage:       { fat: 28.4,  protein: 19.4, net_carbs: 0.0,  calories: 339 },
  lamb:               { fat: 14.4,  protein: 25.5, net_carbs: 0.0,  calories: 234 },
  salmon:             { fat: 13.4,  protein: 25.4, net_carbs: 0.0,  calories: 208 },
  cod:                { fat: 0.9,   protein: 23.0, net_carbs: 0.0,  calories: 105 },
  shrimp:             { fat: 1.0,   protein: 24.0, net_carbs: 0.0,  calories: 99  },
  tuna_canned:        { fat: 0.8,   protein: 25.5, net_carbs: 0.0,  calories: 116 },
  turkey_breast:      { fat: 1.0,   protein: 30.0, net_carbs: 0.0,  calories: 135 },
  avocado:            { fat: 14.7,  protein: 2.0,  net_carbs: 1.8,  calories: 160 },
  spinach:            { fat: 0.4,   protein: 2.9,  net_carbs: 1.4,  calories: 23  },
  broccoli:           { fat: 0.4,   protein: 2.8,  net_carbs: 4.0,  calories: 34  },
  cauliflower:        { fat: 0.3,   protein: 1.9,  net_carbs: 3.0,  calories: 25  },
  zucchini:           { fat: 0.3,   protein: 1.2,  net_carbs: 2.1,  calories: 17  },
  kale:               { fat: 0.9,   protein: 4.3,  net_carbs: 5.2,  calories: 49  },
  asparagus:          { fat: 0.1,   protein: 2.2,  net_carbs: 2.0,  calories: 20  },
  bell_pepper:        { fat: 0.3,   protein: 1.0,  net_carbs: 4.6,  calories: 26  },
  mushrooms:          { fat: 0.3,   protein: 3.1,  net_carbs: 2.3,  calories: 22  },
  cucumber:           { fat: 0.1,   protein: 0.7,  net_carbs: 3.1,  calories: 15  },
  lettuce_romaine:    { fat: 0.3,   protein: 1.2,  net_carbs: 1.2,  calories: 17  },
  cabbage:            { fat: 0.1,   protein: 1.3,  net_carbs: 3.3,  calories: 25  },
  green_beans:        { fat: 0.2,   protein: 1.8,  net_carbs: 3.6,  calories: 31  },
  celery:             { fat: 0.2,   protein: 0.7,  net_carbs: 1.4,  calories: 14  },
  brussels_sprouts:   { fat: 0.3,   protein: 3.4,  net_carbs: 5.2,  calories: 43  },
  arugula:            { fat: 0.7,   protein: 2.6,  net_carbs: 2.1,  calories: 25  },
  tomato:             { fat: 0.2,   protein: 0.9,  net_carbs: 2.6,  calories: 18  },
  onion:              { fat: 0.1,   protein: 1.1,  net_carbs: 7.6,  calories: 40  },
  garlic:             { fat: 0.5,   protein: 6.4,  net_carbs: 29.0, calories: 149 },
  olives_black:       { fat: 10.7,  protein: 0.8,  net_carbs: 3.1,  calories: 115 },
  butter:             { fat: 81.1,  protein: 0.9,  net_carbs: 0.1,  calories: 717 },
  heavy_cream:        { fat: 37.0,  protein: 2.1,  net_carbs: 2.8,  calories: 340 },
  cream_cheese:       { fat: 34.2,  protein: 5.9,  net_carbs: 4.1,  calories: 342 },
  cheddar:            { fat: 33.1,  protein: 24.9, net_carbs: 1.3,  calories: 403 },
  parmesan:           { fat: 28.6,  protein: 35.8, net_carbs: 3.2,  calories: 431 },
  feta:               { fat: 21.3,  protein: 14.2, net_carbs: 4.1,  calories: 264 },
  olive_oil:          { fat: 100.0, protein: 0.0,  net_carbs: 0.0,  calories: 884 },
  coconut_milk:       { fat: 23.8,  protein: 2.3,  net_carbs: 2.7,  calories: 230 },
  mayonnaise:         { fat: 74.9,  protein: 1.1,  net_carbs: 0.6,  calories: 680 },
  mustard_dijon:      { fat: 3.6,   protein: 3.7,  net_carbs: 5.6,  calories: 66  },
  almond_flour:       { fat: 52.5,  protein: 21.0, net_carbs: 9.6,  calories: 571 },
  chia_seeds:         { fat: 30.7,  protein: 16.5, net_carbs: 0.7,  calories: 486 },
  macadamia_nuts:     { fat: 75.8,  protein: 7.9,  net_carbs: 5.2,  calories: 718 },
  lemon_juice:        { fat: 0.2,   protein: 0.4,  net_carbs: 6.9,  calories: 22  },
};

const RECIPES = {
  breakfast: [
    {
      id: "eggs_bacon_avocado", name: "Eggs, Bacon & Avocado", meal: "breakfast", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "eggs", qty_g: 150, category: "protein", note: "3 large" },
        { item: "bacon", qty_g: 60, category: "protein", note: "3 slices" },
        { item: "avocado", qty_g: 80, category: "vegetable", note: "half medium" }
      ]
    },
    {
      id: "almond_pancakes", name: "Almond Flour Pancakes", meal: "breakfast", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "almond_flour", qty_g: 60, category: "other" },
        { item: "eggs", qty_g: 100, category: "protein", note: "2 large" },
        { item: "cream_cheese", qty_g: 30, category: "dairy" },
        { item: "butter", qty_g: 15, category: "fats_oils", note: "for cooking" }
      ]
    },
    {
      id: "bacon_mushroom_scramble", name: "Bacon & Mushroom Scramble", meal: "breakfast", servings: 1, prep_minutes: 12,
      ingredients: [
        { item: "eggs", qty_g: 150, category: "protein", note: "3 large" },
        { item: "bacon", qty_g: 40, category: "protein", note: "2 slices" },
        { item: "mushrooms", qty_g: 80, category: "vegetable", note: "sliced" },
        { item: "butter", qty_g: 10, category: "fats_oils" }
      ]
    },
    {
      id: "baked_avocado_eggs", name: "Baked Avocado Eggs", meal: "breakfast", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "avocado", qty_g: 160, category: "vegetable", note: "1 whole" },
        { item: "eggs", qty_g: 100, category: "protein", note: "2 large" },
        { item: "cheddar", qty_g: 20, category: "dairy", note: "grated on top" }
      ]
    },
    {
      id: "broccoli_cheddar_egg_muffins", name: "Broccoli Cheddar Egg Muffins", meal: "breakfast", servings: 1, prep_minutes: 25,
      ingredients: [
        { item: "eggs", qty_g: 150, category: "protein", note: "3 large" },
        { item: "broccoli", qty_g: 60, category: "vegetable", note: "finely chopped" },
        { item: "cheddar", qty_g: 40, category: "dairy", note: "grated" },
        { item: "heavy_cream", qty_g: 20, category: "dairy" }
      ]
    },
    {
      id: "chia_coconut_pudding", name: "Chia Coconut Pudding", meal: "breakfast", servings: 1, prep_minutes: 5,
      ingredients: [
        { item: "chia_seeds", qty_g: 30, category: "other" },
        { item: "coconut_milk", qty_g: 150, category: "dairy", note: "canned, full fat" },
        { item: "macadamia_nuts", qty_g: 20, category: "other", note: "chopped, topping" }
      ]
    },
    {
      id: "salmon_cream_cheese_rolls", name: "Smoked Salmon & Cream Cheese Rolls", meal: "breakfast", servings: 1, prep_minutes: 5,
      ingredients: [
        { item: "salmon", qty_g: 100, category: "protein", note: "smoked slices" },
        { item: "cream_cheese", qty_g: 50, category: "dairy" },
        { item: "cucumber", qty_g: 60, category: "vegetable", note: "sliced" }
      ]
    },
    {
      id: "sausage_pepper_skillet", name: "Sausage & Bell Pepper Skillet", meal: "breakfast", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "pork_sausage", qty_g: 120, category: "protein" },
        { item: "bell_pepper", qty_g: 80, category: "vegetable", note: "diced" },
        { item: "olive_oil", qty_g: 10, category: "fats_oils" },
        { item: "eggs", qty_g: 100, category: "protein", note: "2 large, on top" }
      ]
    },
    {
      id: "scrambled_eggs_cream", name: "Buttery Scrambled Eggs with Cream", meal: "breakfast", servings: 1, prep_minutes: 8,
      ingredients: [
        { item: "eggs", qty_g: 200, category: "protein", note: "4 large" },
        { item: "butter", qty_g: 20, category: "fats_oils" },
        { item: "heavy_cream", qty_g: 30, category: "dairy" }
      ]
    },
    {
      id: "spinach_cheese_omelette", name: "Spinach & Cheese Omelette", meal: "breakfast", servings: 1, prep_minutes: 10,
      ingredients: [
        { item: "eggs", qty_g: 150, category: "protein", note: "3 large" },
        { item: "spinach", qty_g: 60, category: "vegetable" },
        { item: "cheddar", qty_g: 30, category: "dairy", note: "grated" },
        { item: "butter", qty_g: 15, category: "fats_oils" }
      ]
    },
  ],
  lunch: [
    {
      id: "bacon_cheeseburger_bowl", name: "Bacon Cheeseburger Bowl", meal: "lunch", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "ground_beef", qty_g: 150, category: "protein" },
        { item: "bacon", qty_g: 40, category: "protein", note: "2 slices, crumbled" },
        { item: "cheddar", qty_g: 30, category: "dairy" },
        { item: "lettuce_romaine", qty_g: 60, category: "vegetable", note: "shredded" },
        { item: "mustard_dijon", qty_g: 10, category: "other" }
      ]
    },
    {
      id: "cauliflower_cheese_soup", name: "Cauliflower Cheese Soup", meal: "lunch", servings: 1, prep_minutes: 25,
      ingredients: [
        { item: "cauliflower", qty_g: 200, category: "vegetable" },
        { item: "cheddar", qty_g: 40, category: "dairy", note: "grated, stirred in" },
        { item: "heavy_cream", qty_g: 50, category: "dairy" },
        { item: "butter", qty_g: 15, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" }
      ]
    },
    {
      id: "chicken_broccoli_cheese", name: "Chicken Broccoli Cheese Bowl", meal: "lunch", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "chicken_breast", qty_g: 150, category: "protein", note: "cooked, diced" },
        { item: "broccoli", qty_g: 100, category: "vegetable", note: "steamed" },
        { item: "cheddar", qty_g: 40, category: "dairy", note: "melted on top" },
        { item: "butter", qty_g: 15, category: "fats_oils" }
      ]
    },
    {
      id: "chicken_caesar_wraps", name: "Chicken Caesar Lettuce Wraps", meal: "lunch", servings: 1, prep_minutes: 10,
      ingredients: [
        { item: "chicken_breast", qty_g: 150, category: "protein", note: "cooked, sliced" },
        { item: "lettuce_romaine", qty_g: 100, category: "vegetable", note: "whole leaves as wraps" },
        { item: "parmesan", qty_g: 20, category: "dairy", note: "shaved" },
        { item: "olive_oil", qty_g: 15, category: "fats_oils", note: "as dressing" },
        { item: "lemon_juice", qty_g: 10, category: "other" }
      ]
    },
    {
      id: "egg_salad_lettuce_cups", name: "Egg Salad Lettuce Cups", meal: "lunch", servings: 1, prep_minutes: 10,
      ingredients: [
        { item: "eggs", qty_g: 200, category: "protein", note: "4 large, hard-boiled" },
        { item: "mayonnaise", qty_g: 30, category: "fats_oils" },
        { item: "mustard_dijon", qty_g: 5, category: "other" },
        { item: "lettuce_romaine", qty_g: 80, category: "vegetable", note: "as cups" }
      ]
    },
    {
      id: "garlic_butter_shrimp_zucchini", name: "Garlic Butter Shrimp & Zucchini", meal: "lunch", servings: 1, prep_minutes: 12,
      ingredients: [
        { item: "shrimp", qty_g: 150, category: "protein" },
        { item: "zucchini", qty_g: 150, category: "vegetable", note: "spiralized or sliced" },
        { item: "butter", qty_g: 20, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove, minced" }
      ]
    },
    {
      id: "greek_salad_feta", name: "Greek Salad with Feta", meal: "lunch", servings: 1, prep_minutes: 10,
      ingredients: [
        { item: "cucumber", qty_g: 100, category: "vegetable" },
        { item: "tomato", qty_g: 80, category: "vegetable" },
        { item: "feta", qty_g: 60, category: "dairy", note: "crumbled" },
        { item: "olives_black", qty_g: 30, category: "vegetable" },
        { item: "olive_oil", qty_g: 20, category: "fats_oils" },
        { item: "onion", qty_g: 20, category: "vegetable", note: "red, sliced thin" }
      ]
    },
    {
      id: "salmon_arugula_salad", name: "Salmon & Arugula Salad", meal: "lunch", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "salmon", qty_g: 130, category: "protein", note: "cooked fillet" },
        { item: "arugula", qty_g: 80, category: "vegetable" },
        { item: "avocado", qty_g: 80, category: "vegetable", note: "half, sliced" },
        { item: "olive_oil", qty_g: 15, category: "fats_oils" },
        { item: "lemon_juice", qty_g: 10, category: "other" }
      ]
    },
    {
      id: "tuna_avocado_salad", name: "Tuna & Avocado Salad", meal: "lunch", servings: 1, prep_minutes: 8,
      ingredients: [
        { item: "tuna_canned", qty_g: 130, category: "protein", note: "1 can, drained" },
        { item: "avocado", qty_g: 80, category: "vegetable", note: "half, diced" },
        { item: "mayonnaise", qty_g: 20, category: "fats_oils" },
        { item: "celery", qty_g: 40, category: "vegetable", note: "diced" }
      ]
    },
    {
      id: "turkey_avocado_lettuce_roll", name: "Turkey & Avocado Lettuce Roll", meal: "lunch", servings: 1, prep_minutes: 5,
      ingredients: [
        { item: "turkey_breast", qty_g: 120, category: "protein", note: "sliced" },
        { item: "avocado", qty_g: 80, category: "vegetable", note: "half, sliced" },
        { item: "lettuce_romaine", qty_g: 80, category: "vegetable", note: "as wraps" },
        { item: "mayonnaise", qty_g: 15, category: "fats_oils" }
      ]
    },
  ],
  dinner: [
    {
      id: "chicken_thigh_creamed_spinach", name: "Chicken Thigh & Creamed Spinach", meal: "dinner", servings: 1, prep_minutes: 25,
      ingredients: [
        { item: "chicken_thigh", qty_g: 200, category: "protein", note: "bone-in, skin-on" },
        { item: "spinach", qty_g: 120, category: "vegetable" },
        { item: "heavy_cream", qty_g: 40, category: "dairy" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" },
        { item: "olive_oil", qty_g: 10, category: "fats_oils" }
      ]
    },
    {
      id: "cod_tomato_olives", name: "Cod with Tomato & Olives", meal: "dinner", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "cod", qty_g: 180, category: "protein" },
        { item: "tomato", qty_g: 100, category: "vegetable", note: "diced" },
        { item: "olives_black", qty_g: 40, category: "vegetable" },
        { item: "olive_oil", qty_g: 15, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" }
      ]
    },
    {
      id: "garlic_chicken_zucchini", name: "Garlic Chicken with Zucchini", meal: "dinner", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "chicken_breast", qty_g: 180, category: "protein" },
        { item: "zucchini", qty_g: 150, category: "vegetable", note: "sliced" },
        { item: "butter", qty_g: 15, category: "fats_oils" },
        { item: "garlic", qty_g: 8, category: "vegetable", note: "2 cloves" }
      ]
    },
    {
      id: "ground_beef_cabbage_stirfry", name: "Ground Beef & Cabbage Stir Fry", meal: "dinner", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "ground_beef", qty_g: 180, category: "protein" },
        { item: "cabbage", qty_g: 150, category: "vegetable", note: "shredded" },
        { item: "olive_oil", qty_g: 10, category: "fats_oils" },
        { item: "onion", qty_g: 30, category: "vegetable", note: "sliced" }
      ]
    },
    {
      id: "lamb_brussels_sprouts", name: "Lamb with Roasted Brussels Sprouts", meal: "dinner", servings: 1, prep_minutes: 30,
      ingredients: [
        { item: "lamb", qty_g: 180, category: "protein" },
        { item: "brussels_sprouts", qty_g: 150, category: "vegetable", note: "halved" },
        { item: "olive_oil", qty_g: 15, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" }
      ]
    },
    {
      id: "pork_chop_green_beans", name: "Pork Chop & Buttered Green Beans", meal: "dinner", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "pork_chop", qty_g: 200, category: "protein" },
        { item: "green_beans", qty_g: 150, category: "vegetable" },
        { item: "butter", qty_g: 20, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" }
      ]
    },
    {
      id: "salmon_asparagus_butter", name: "Salmon with Asparagus & Butter", meal: "dinner", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "salmon", qty_g: 180, category: "protein", note: "fillet" },
        { item: "asparagus", qty_g: 150, category: "vegetable" },
        { item: "butter", qty_g: 20, category: "fats_oils" },
        { item: "lemon_juice", qty_g: 10, category: "other" }
      ]
    },
    {
      id: "sausage_kale_soup", name: "Sausage & Kale Soup", meal: "dinner", servings: 1, prep_minutes: 25,
      ingredients: [
        { item: "pork_sausage", qty_g: 120, category: "protein" },
        { item: "kale", qty_g: 80, category: "vegetable", note: "chopped" },
        { item: "heavy_cream", qty_g: 40, category: "dairy" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" },
        { item: "olive_oil", qty_g: 10, category: "fats_oils" }
      ]
    },
    {
      id: "shrimp_cauliflower_rice", name: "Shrimp Cauliflower Fried Rice", meal: "dinner", servings: 1, prep_minutes: 15,
      ingredients: [
        { item: "shrimp", qty_g: 150, category: "protein" },
        { item: "cauliflower", qty_g: 200, category: "vegetable", note: "riced" },
        { item: "eggs", qty_g: 50, category: "protein", note: "1 large, scrambled in" },
        { item: "olive_oil", qty_g: 15, category: "fats_oils" },
        { item: "onion", qty_g: 20, category: "vegetable", note: "diced" }
      ]
    },
    {
      id: "steak_mushroom_cream", name: "Steak with Mushroom Cream Sauce", meal: "dinner", servings: 1, prep_minutes: 20,
      ingredients: [
        { item: "steak_ribeye", qty_g: 200, category: "protein" },
        { item: "mushrooms", qty_g: 100, category: "vegetable", note: "sliced" },
        { item: "heavy_cream", qty_g: 40, category: "dairy" },
        { item: "butter", qty_g: 15, category: "fats_oils" },
        { item: "garlic", qty_g: 5, category: "vegetable", note: "1 clove" }
      ]
    },
  ]
};

// ── Macro computation ─────────────────────────────────────────
function computeMacros(recipe) {
  const totals = { fat: 0, protein: 0, net_carbs: 0, calories: 0 };
  for (const ing of recipe.ingredients) {
    const db = NUTRITION_DB[ing.item];
    if (!db) continue;
    const factor = ing.qty_g / 100;
    totals.fat      += db.fat      * factor;
    totals.protein  += db.protein  * factor;
    totals.net_carbs+= db.net_carbs* factor;
    totals.calories += db.calories * factor;
  }
  return {
    fat:       Math.round(totals.fat),
    protein:   Math.round(totals.protein),
    net_carbs: Math.round(totals.net_carbs),
    calories:  Math.round(totals.calories),
  };
}

function computeDayMacros(dayPlan) {
  const totals = { fat: 0, protein: 0, net_carbs: 0, calories: 0 };
  for (const meal of ['breakfast', 'lunch', 'dinner']) {
    if (dayPlan[meal]) {
      const m = computeMacros(dayPlan[meal]);
      totals.fat       += m.fat;
      totals.protein   += m.protein;
      totals.net_carbs += m.net_carbs;
      totals.calories  += m.calories;
    }
  }
  return totals;
}

// ── Plan generation ──────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Scale a recipe's ingredient quantities by a factor, returning a new recipe object.
// Quantities are rounded to nearest 5g for readability.
function scaleRecipe(recipe, factor) {
  const f = Math.max(0.4, Math.min(2.5, factor)); // clamp: 0.4x – 2.5x
  return {
    ...recipe,
    _scale: Math.round(f * 100) / 100,
    ingredients: recipe.ingredients.map(ing => ({
      ...ing,
      qty_g: Math.max(5, Math.round((ing.qty_g * f) / 5) * 5),
    })),
  };
}

// Given a set of three chosen recipes, compute scale factors so the day's
// combined macros match the targets as closely as possible.
// Strategy:
//   1. Use calorie target ÷ 3 per meal as the primary scale driver.
//   2. After scaling, if net_carbs still exceeds target, scale down the
//      highest-carb meal further.
function scaleDayToTargets(b, l, d, targets) {
  const perMealCal = targets.calories / 3;

  function scaledForCal(recipe) {
    const raw = computeMacros(recipe);
    if (raw.calories === 0) return scaleRecipe(recipe, 1);
    return scaleRecipe(recipe, perMealCal / raw.calories);
  }

  let sb = scaledForCal(b);
  let sl = scaledForCal(l);
  let sd = scaledForCal(d);

  // Check carb overage and nudge down if needed (up to 2 passes)
  for (let pass = 0; pass < 2; pass++) {
    const totalCarbs = computeMacros(sb).net_carbs + computeMacros(sl).net_carbs + computeMacros(sd).net_carbs;
    if (totalCarbs <= targets.net_carbs * 1.05) break; // within 5% — good enough
    const carbRatio = targets.net_carbs / totalCarbs;
    sb = scaleRecipe(sb, (sb._scale || 1) * carbRatio);
    sl = scaleRecipe(sl, (sl._scale || 1) * carbRatio);
    sd = scaleRecipe(sd, (sd._scale || 1) * carbRatio);
  }

  return { b: sb, l: sl, d: sd };
}

function generatePlan() {
  const targets = window.KETO_TARGETS || { fat: 130, protein: 100, net_carbs: 20, calories: 1700 };
  const plan = {};
  const usedIds = { breakfast: new Set(), lunch: new Set(), dinner: new Set() };

  for (const day of DAYS) {
    function pool(mealType) {
      const all = shuffle(RECIPES[mealType]);
      const unused = all.filter(r => !usedIds[mealType].has(r.id));
      return unused.length > 0 ? unused : all;
    }

    const b = pool('breakfast')[0];
    const l = pool('lunch')[0];
    const d = pool('dinner')[0];

    const scaled = scaleDayToTargets(b, l, d, targets);

    plan[day] = {
      breakfast: scaled.b,
      lunch:     scaled.l,
      dinner:    scaled.d,
    };

    usedIds.breakfast.add(b.id);
    usedIds.lunch.add(l.id);
    usedIds.dinner.add(d.id);
  }

  return plan;
}

// ── Shopping list ────────────────────────────────────────────
const CATEGORY_ORDER = ['protein', 'vegetable', 'dairy', 'fats_oils', 'other'];
const CATEGORY_LABELS = {
  protein:   'Proteins',
  vegetable: 'Vegetables',
  dairy:     'Dairy',
  fats_oils: 'Fats & Oils',
  other:     'Pantry & Other',
};

function generateShoppingList(plan) {
  const items = {};
  for (const day of Object.values(plan)) {
    for (const meal of Object.values(day)) {
      if (!meal) continue;
      for (const ing of meal.ingredients) {
        const key = ing.item;
        if (!items[key]) {
          items[key] = { item: key, qty_g: 0, category: ing.category };
        }
        items[key].qty_g += ing.qty_g;
      }
    }
  }
  // Group by category
  const grouped = {};
  for (const cat of CATEGORY_ORDER) grouped[cat] = [];
  for (const v of Object.values(items)) {
    (grouped[v.category] || grouped['other']).push(v);
  }
  return grouped;
}

function prettyIngredientName(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// Keto targets (standard macro goals)
const KETO_TARGETS = { fat: 130, protein: 100, net_carbs: 20, calories: 1700 };

// Days of the week
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_FULL = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

// Expose to window
Object.assign(window, {
  NUTRITION_DB, RECIPES, DAYS, DAY_FULL, KETO_TARGETS,
  CATEGORY_ORDER, CATEGORY_LABELS,
  computeMacros, computeDayMacros, generatePlan, generateShoppingList,
  prettyIngredientName, shuffle, scaleRecipe, scaleDayToTargets
});
