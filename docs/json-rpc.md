# :hatching_chick: JSON-rpc

## Introduction

JSON-rpc est un protocole très léger de _webservice_ utilisant le format JSON pour échanger de l'information.
Il permet à un client de faire des _remote procedure calls_.

### Le format

Le format des messages est très simple.

_Le client_:

```js
{
  "jsonrpc": "2.0", // version of JSON-rpc format
  "method": "subtract", // name of the procedure you want to call on the remote server
  "params": {"minuend": 42, "subtrahend": 23},
  "id": 3 // identifiant unique de l'appel
}
```

_La réponse_:

```js{4}
{
  "jsonrpc": "2.0",
  "result": 19,
  "id": 3
}
```

:::tip
Les paramètres d'appel peuvent également être sous la forme d'un tableau
:::

### Les notifications

On peut également appeler une procédure distante sans attendre de réponse.

```js
{
  "jsonrpc": "2.0",
  "method": "update",
  "params": [1,2,3,4,5]
}
```

## Création d'un webservice JSON-rpc

L'objectif de ce tp est de fournir un API JSON-rpc dans le language que vous souhaitez (Node, Java, Php, Kotlin,etc...).
Prenez un outil simple que vous connaissez, l'objectif est de délivrer ce webservice le plus vite possible.
Je vous met à dispo dans cette page un outil pour tester directement votre webservice.
Cependant il vous faudra fournir le bon header de [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS)

### Le webservice à faire

Le webservice à faire est assez simple, il doit retourner les maison de _Game of Thrones_ par id ainsi que la liste complète des maisons.

#### house by id

```js
{
  "jsonrpc": "2.0",
  "method": "house.GetHouse",
  "params": { id: 1 },
  "id": 3
}
```

doit retourner

```js
{
  jsonrpc: "2.0",
  result: {
    id: 1,
    name: "House Algood",
    region: "The Westerlands",
    coatOfArms:
      "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
    words: ""
  },
  id: 3
};
```

#### houses

```js
{
  "jsonrpc": "2.0",
  "method": "houses.GetHouses",
  "params": [],
  "id": 3
}
```

<details>

<summary>Réponse</summary>

```js
{
  jsonrpc: "2.0",
  result: [
    {
      id: 1,
      name: "House Algood",
      region: "The Westerlands",
      coatOfArms:
        "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      words: "",
    },
    {
      id: 2,
      name: "House Allyrion of Godsgrace",
      region: "Dorne",
      coatOfArms: "Gyronny Gules and Sable, a hand couped Or",
      words: "No Foe May Pass"
    },
    {
      id: 3,
      name: "House Amber",
      region: "The North",
      coatOfArms: "",
      words: ""
    },
    ...etc
  ],
  id: 3
};
```

</details>

### Le code à faire

La structure de donnée `House` est déjà défini pour vous.

**À faire**

- Coder un le server JSON-RPC, capable d'exposer les maisons de Game Of Thrones
- Code un client qui consommera cette API
- Lancer le server et le client
- **Montrer au prof**
- Ajouter une méthode `GetHouses`
- **Montrer au prof**
- (en option) faire en sorte de mutualiser le code dupliqué entre le client et le server.

### Tester son webservice

Les requêtes suivantes devraient échouer, pourquoi ?

<JSONRpc method="house.GetHouse" :params="{id: 1}" id="1" />

<JSONRpc method="house.GetHouses" :params="{}" id="2" />

## (Optionnel) Déploiement du service dans le cloud

Si vous avez terminé de développer votre client et votre server en Go.
Essayer de le déployer sur un provider cloud comme [Clever Cloud](https://www.clever-cloud.com/en/)

## Les points clés

:::tip

- :white_check_mark: Petits messages
- :white_check_mark: Gestion d'erreurs avec code
- JSON
- Mono request
- Support des notification (pas de réponse)
- :x: Schéma d'API fort
- :white_check_mark: Format de message fort
  :::

:::warning
:warning: Ne jetez pas ce TP, vous en aurez besoin pour la suite
:::
