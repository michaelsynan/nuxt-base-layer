#!/bin/bash

# Make a request to the colormind API with input constraints
response=$(curl -s -X POST "http://colormind.io/api/" -H "Content-Type: application/json" --data '{"model":"default","input":["N","N","N",{"R":[0,50],"G":[0,50],"B":[0,50]},{"R":[200,255],"G":[200,255],"B":[200,255]}]}')

# Extract the colors using 'jq'
colors=($(echo "$response" | jq -r '.result[] | join(",")' | awk -F, '{printf("#%02x%02x%02x\n", $1, $2, $3)}'))

# Assign labels to the colors
primary="${colors[0]}"
secondary="${colors[1]}"
tertiary="${colors[2]}"
background_dark="${colors[3]}"
background_light="${colors[4]}"

# Output the labeled colors
echo "Primary: $primary"
echo "Secondary: $secondary"
echo "Tertiary: $tertiary"
echo "Background Dark: $background_dark"
echo "Background Light: $background_light"
