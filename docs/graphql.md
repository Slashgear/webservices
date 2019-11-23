# :thought_balloon: GraphQL

## Objectif du cours

- Définir un server qui propose une API GraphQL qui expose les données de l'API https://anapioficeandfire.com/

L'api doit suivre le schéma suivant:

```graphql
type Book {
  url: String
  name: String
  isbn: String
  authors: [String]
  numberOfPages: Int
  publiser: String
  country: String
  mediaType: String
  released: String
  characters: [String]
  povCharacters: [String]
}

type Character {
  url: String
  name: String
  gender: String
  culture: String
  born: String
  died: String
  titles: [String]
  aliases: [String]
  father: Character
  mother: Character
  spouse: Character
  allegiances: [House]
  books: [Book]
  povBooks: [Book]
  tvSeries: [String]
  playedBy: [String]
}

type House {
  url: String
  name: String
  region: String
  coatOfArms: String
  words: String
  titles: [String]
  seats: [String]
  currentLord: Character
  heir: Character
  overlord: House
  founded: String
  founder: Character
  diedOut: String
  ancestralWeapons: [String]
  cadetBranches: [House]
  swornMembers: [Character]
}

type Query {
  books: [Book]
  book(id: Int!): Book
  character(id: Int!): Character
  house(id: Int!): House
}
```

Je vous conseille d'utiliser les outils proposés par [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

## À faire

- Implémenter toutes les requêtes GraphQL présentes dans le schéma
- Les requêtes doivent pouvoir permettre toutes les sous requêtes possible
  (exemple: je veux pouvoir request le nom de la maison du père de la femme de Ned Stark en une seule requête)
- Mettre en place du cache avec `redis`
