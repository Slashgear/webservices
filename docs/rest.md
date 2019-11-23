# :sleepy: REST

## Objectif du cours

- Définir un webservice REST proposant une API de lecture et d'édition de personnage.
- Technologies proposées:

  - Java/Spring + H2 database (ou Mongo)
  - Kotlin/Spring + H2 database (ou Mongo)
  - NodeJS/Express + Mongo

::: tip
Vous pouvez utiliser [Spring Initializr](https://start.spring.io/) pour setup le projet.
:::

## CRUD

Vous devez définir un C.R.U.D sur l'entité `Character`

- name string The name of this character
- gender string The gender of this character.
- culture string The culture that this character belongs to.
- died string Textual representation of when and where this character died.
- titles array of strings The titles that this character holds.
- aliases array of strings The aliases that this character goes by.
- father string The character resource URL of this character's father.
- mother string The character resource URL of this character's mother.
- spouse string The character resource URL of this character's spouse.

## (Optionnel) Déploiement du service dans le cloud

Si vous avez terminé de développer votre client et votre server en Java ou Node. Essayer de le déployer sur un provider cloud comme Clever Cloud

## Les questions ?

- Quels sont les spécificités de REST, par rapport à SOAP ou JSON-rpc ?
- Vous voyez des points négatifs ?

## Les points clés

:::tip

✅ Sans état (Attention à l'auth)
✅ Utilisation des code HTTP
Mono request
❌ Schéma d'API fort
:::

:::warning ⚠️ Ne jetez pas ce TP, vous en aurez besoin pour la suite :::
