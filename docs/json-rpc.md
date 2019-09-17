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

## Création d'un webservice JSON-rpc en GO

L'objectif de ce tp est de fournir un API JSON-rpc écrite en [Go](https://golang.org/)

### Installation de Go en local

- Suivez la [doc d'installation de Go](https://golang.org/doc/install) à la lettre.
- Visual Studio Code est un très bon Editeur pour développer en Go, IntelliJ fait aussi le café
- Prenez le temps de tester votre installation.

### Le webservice à faire

Le webservice à faire est assez simple, il doit retourner les maison de _Game of Thrones_ par id ainsi que la liste complète des maisons.

#### house by id

```js
{
  "jsonrpc": "2.0",
  "method": "house",
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
  "method": "houses",
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

Dans le dossier [../workshops/jsonrpc](../workshops/jsonrpc) est défini un server et un client Go.

La structure de donnée `House` est déjà défini pour vous.

Ces ressources peuvent vous aider:

- [les bases du langage Go](https://go-tour-fr.appspot.com/welcome/1)
- [Le module JSON-rpc de go](https://golang.org/pkg/net/rpc/jsonrpc/)

**À faire**

- Compléter le server JSON-RPC
- Compléter le client
- Lancer le server et le client
- **Montrer au prof**
- Ajouter une méthode `GetHouses`
- **Montrer au prof**
- (en option) faire en sorte de mutualiser le code dupliqué entre le client et le server.

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
