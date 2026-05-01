#!/bin/bash
# Scans data/recipes/{breakfast,lunch,dinner} and generates data/recipes-index.json
# Run after adding or removing recipe files.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
RECIPES_DIR="$PROJECT_DIR/data/recipes"
OUTPUT="$RECIPES_DIR/recipes-index.json"

echo "{" > "$OUTPUT"

first_meal=true
for meal in breakfast lunch dinner; do
  if [ "$first_meal" = true ]; then
    first_meal=false
  else
    echo "," >> "$OUTPUT"
  fi

  printf '  "%s": [' "$meal" >> "$OUTPUT"

  first_recipe=true
  for file in "$RECIPES_DIR/$meal"/*.json; do
    [ -f "$file" ] || continue
    id=$(basename "$file" .json)
    if [ "$first_recipe" = true ]; then
      first_recipe=false
    else
      printf ', ' >> "$OUTPUT"
    fi
    printf '"%s"' "$id" >> "$OUTPUT"
  done

  printf ']' >> "$OUTPUT"
done

echo "" >> "$OUTPUT"
echo "}" >> "$OUTPUT"

echo "Generated $OUTPUT"
cat "$OUTPUT"
