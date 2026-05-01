# Keto Planner

Personal keto meal planning app. Runs as a static site on GitHub Pages, optimized for iPhone.

## Structure

```
docs/           Requirements and research references
data/           Nutrition database and recipe files
  nutrition-db.json
  recipes/
    breakfast/  One JSON file per recipe
    lunch/
    dinner/
app/            The single-page app (served by GitHub Pages)
scripts/        Build tools
```

## Adding Recipes

1. Create a JSON file in `data/recipes/{meal_type}/`
2. Commit and push

## Local Development
s
Open `app/index.html` in a browser. For file fetching to work locally, use a simple server:

```bash
cd app && python3 -m http.server 8000
```

## Deployment

Configure GitHub Pages to serve from the `app/` folder.
