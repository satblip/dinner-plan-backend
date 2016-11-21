const recipes = [
  {'id': 1, 'name': 'Macaroni Jambon Fromage', 'season': 'Hiver'},
  {'id': 2, 'name': 'Lasagne bolognaise', 'season': 'Toutes saisons'},
  {'id': 3, 'name': 'Lasagne végétarienne', 'season': 'Toutes saisons'},
  {'id': 4, 'name': 'Pâtes carbonara', 'season': 'Toutes saisons'},
  {'id': 5, 'name': 'Tomate/poivron/courgette farcie', 'season': 'Automne/Hiver'},
  {'id': 6, 'name': 'Poisson-purée', 'season': 'Toutes saisons'},
  {'id': 7, 'name': 'Couscous', 'season': 'Toutes saisons'},
  {'id': 8, 'name': 'Pizza', 'season': 'Toutes saisons'},
  {'id': 9, 'name': 'Wok', 'season': 'Toutes saisons'},
  {'id': 10, 'name': 'Croque Monsieur', 'season': 'Toutes saisons'},
  {'id': 11, 'name': 'Hamburger maison', 'season': 'Toutes saisons'},
  {'id': 12, 'name': 'Cannelloni ricotta épinards', 'season': 'Toutes saisons'},
  {'id': 13, 'name': 'Quiche lorraine', 'season': 'Automne/Hiver'},
  {'id': 14, 'name': 'Quiche - produits de saison', 'season': 'Toutes saisons'},
  {'id': 15, 'name': 'Omelette aux Légumes', 'season': 'Toutes saisons'},
  {'id': 16, 'name': 'Boulettes sauce tomate-frites', 'season': 'Toutes saisons'},
  {'id': 17, 'name': 'Boulettes sauce curry', 'season': 'Toutes saisons'},
  {'id': 18, 'name': 'Poulet curry/lait de coco-riz', 'season': 'Toutes saisons'},
  {'id': 19, 'name': 'Salade Poulet Hawai', 'season': 'Printemps/Été'},
  {'id': 20, 'name': 'Salade grecque', 'season': 'Printemps/Été'},
  {'id': 21, 'name': 'Tomate crevette', 'season': 'Printemps/Été'},
  {'id': 22, 'name': 'Pomme de terre en salade', 'season': 'Printemps/Été'},
  {'id': 23, 'name': 'Pêches au thon', 'season': 'Printemps/Été'},
  {'id': 24, 'name': 'Brochettes de Poulet et Pommes Croquettes', 'season': 'Toutes saisons'},
  {'id': 25, 'name': 'Sushi', 'season': 'Toutes saisons'},
  {'id': 26, 'name': 'Feuilleté Chèvre et Saumon Fumé', 'season': 'Printemps/Été'},
  {'id': 27, 'name': 'Hachis parmentier', 'season': 'Automne/Hiver'},
  {'id': 28, 'name': 'Reblochon', 'season': 'Hiver'},
  {'id': 29, 'name': 'Raclette', 'season': 'Hiver'},
  {'id': 30, 'name': 'Stoemp Épinard et Saucisse', 'season': 'Hiver'},
  {'id': 31, 'name': 'Moussaka', 'season': 'Automne/Hiver'},
  {'id': 32, 'name': 'Gratin Dauphinois et Steack', 'season': 'Automne/Hiver'}
];

export let create = [];

for (var recipeId in recipes) {
  const recipeNumber = parseInt(recipeId) + 1;
  create.push({
    name: 'create recipe id: ' + recipeNumber,
    in: recipes[recipeId],
    out: recipes[recipeId]
  });
}

export const read = [{
  name: 'read all recipes',
  in: {},
  out: recipes
}, {
  name: 'read one recipe',
  in: { id: 1 },
  out: recipes[0]
}];

export const update = [{
  name: 'update recipe',
  in: {
    id: 1,
    season: 'Hiver'
  },
  out: { ...recipes[0], season: 'Hiver' }
}];

export const destroy = [{
  name: 'destroy recipe',
  in: {
    id: 1
  },
  out: {
    nbDeletedRows: 1
  }
}];
