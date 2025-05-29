# HW #39 Definition
## Refactoring
### Instead of separated variables like selectedPlatform, selectedGenre,etc., introduce interface GameQuery. Each field of the interface will reflect a separated variable
#### Update of the components in accordance with the mentioned above item
## Building SortSelector component
### Allows defining ordering by relevance in accordance with the API documentation from https://api.rawg.io/docs/#operation/games_list 
### Similar to the PlatformSelector component having built at the CW #39
### The menu items should be taken from some configuration presenting array of objects like
[{"value":"-rating", "displayedName":"Popularity"},{"value":"-metacritic", "displayedName":"Critic Score"},... ]
