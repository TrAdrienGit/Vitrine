# Project Hub

## Présentation

Project Hub est une application Angular permettant de présenter les membres d'une équipe ainsi que leurs projets sous forme de portfolio/CMS.

L'objectif du projet est de mettre en pratique les concepts fondamentaux d'Angular à travers une architecture moderne basée sur :

* Composants standalone
* Services et injection de dépendances
* Routing dynamique
* Typage TypeScript
* Observables RxJS
* Affichage dynamique Angular
* Architecture prête pour une future API REST

---

# État actuel du projet

## Pages disponibles

### Accueil

Affichage dynamique de l'ensemble des membres présents dans les données.

Fonctionnalités :

* Chargement des membres depuis un service
* Génération automatique des cartes membres
* Navigation vers le profil du membre

Exemple :

```text
/
```

---

### Profil membre

Affichage dynamique d'un membre.

Fonctionnalités :

* Chargement du membre à partir du slug URL
* Présentation du profil
* Liste des compétences
* Informations de contact
* Liens complémentaires
* Liste dynamique des projets associés

Exemple :

```text
/adrien-martin
```

---

### Projet

Affichage dynamique d'un projet.

Fonctionnalités :

* Chargement via slug
* Sommaire généré automatiquement
* Affichage des blocs de contenu
* Navigation interne via ancres
* Gestion de plusieurs types de contenu

Exemple :

```text
/adrien-martin/angular-vitrine
```

---

### Contact

Page statique de contact.

Exemple :

```text
/contact
```

---

# Architecture actuelle

## Routing

Routing dynamique utilisant des slugs lisibles.

Exemples :

```text
/
/contact
/adrien-martin
/adrien-martin/angular-vitrine
```

---

## Modèles TypeScript

Interfaces créées pour l'ensemble des données métier :

### Member

```ts
Member
```

### Project

```ts
Project
```

### Contact

```ts
Contact
```

### ProjectBlock

```ts
ProjectBlock
```

### Link

```ts
Link
```

---

## Services

### MemberService

Responsabilités :

* récupération des membres
* recherche par id
* recherche par slug

Retourne désormais des :

```ts
Observable<Member>
Observable<Member[]>
```

---

### ProjectService

Responsabilités :

* récupération des projets
* recherche par id
* recherche par slug
* récupération des projets d'un membre
* génération de slugs

Retourne désormais des :

```ts
Observable<Project>
Observable<Project[]>
```

---

# RxJS

Le projet a été migré vers une architecture Observable.

Ancienne approche :

```text
Service -> Objet
```

Nouvelle approche :

```text
Service -> Observable<T> -> AsyncPipe -> Template
```

Exemple :

```ts
members$: Observable<Member[]>
```

```html
@if (members$ | async; as members)
```

```html
@for (member of members)
```

Cette architecture prépare directement l'arrivée d'une API REST.

---

# Structure des données

## Membres

Chaque membre contient :

* identité
* métier
* avatar
* présentation
* compétences
* projets associés
* coordonnées
* liens complémentaires

---

## Projets

Chaque projet contient :

* titre
* description
* image de couverture
* technologies utilisées
* propriétaire
* blocs de contenu dynamiques

---

## Blocs de contenu

Le contenu d'un projet est entièrement piloté par les données.

Types actuellement supportés :

```text
title
text
image
gif
video
```

Le rendu est généré automatiquement à partir du type du bloc.

---

# Compétences Angular validées

## Module 2 - Introduction Angular

Validation :

* création et structure d'un projet Angular
* utilisation de la CLI
* organisation des dossiers

---

## Module 3 - Composants

Validation :

* création de composants standalone
* découpage de l'interface
* cycle de vie des composants
* utilisation de OnInit
* utilisation de OnChanges

---

## Module 4 - Affichage dynamique

Validation :

* interpolation
* property binding
* directives Angular modernes

Utilisation de :

```html
@if
@for
```

Affichage dynamique piloté par les données.

---

## Module 5 - Services

Validation :

* création de services
* injection de dépendances
* séparation logique métier / affichage

Utilisation de :

```ts
inject(...)
```

---

## Module 6 - Routing

Validation :

* routes simples
* routes paramétrées
* récupération des paramètres
* navigation dynamique

Utilisation de :

```ts
ActivatedRoute
RouterLink
```

---

## Module 8 - Asynchronisme

Validation :

* compréhension de l'asynchronisme
* préparation à la consommation d'API

---

## Module 9 - API REST

Préparation validée :

* architecture compatible HttpClient
* services retournant des Observables

Le remplacement futur :

```ts
of(MEMBERS)
```

par :

```ts
http.get(...)
```

ne nécessitera que peu de modifications.

---

## Module 10 - RxJS

Validation :

* création d'Observables
* utilisation de `of`
* consommation via AsyncPipe
* propagation de données asynchrones

Utilisation de :

```ts
Observable<T>
```

```html
| async
```

---

## Module 11 - Bonnes pratiques

Validation :

* typage fort via interfaces
* séparation des responsabilités
* composants réutilisables
* services dédiés
* architecture maintenable

---

# Travaux prévus

## Court terme

### Finalisation Angular

* remplacement éventuel des snapshots par `paramMap`
* amélioration du typage strict
* gestion des erreurs utilisateur

---

### Formulaire de contact

Objectifs :

* FormsModule
* validation
* validation personnalisée

Permet de couvrir le module Formulaires.

---

## Moyen terme

### Backend Java

Création d'une API REST.

Endpoints envisagés :

```text
GET /members
GET /members/{slug}

GET /projects
GET /projects/{slug}
```

---

### Base de données SQL

Remplacement des mocks par une base réelle.

Flux final :

```text
SQL
 ↓
Java API REST
 ↓
HttpClient Angular
 ↓
Observable
 ↓
AsyncPipe
 ↓
Composants
```

---

## Long terme

### Administration

Back-office permettant :

* création de membres
* modification de projets
* gestion des médias

---

### Authentification

Ajout :

* login
* rôles
* sécurisation des routes

---

# Objectif pédagogique atteint

Le projet démontre actuellement la maîtrise des notions suivantes :

* TypeScript
* Angular standalone
* Composants
* Services
* Injection de dépendances
* Routing dynamique
* Interfaces métier
* RxJS
* AsyncPipe
* Communication parent/enfant
* Génération dynamique de contenu
* Architecture compatible API REST

Le projet constitue désormais une base solide pour l'intégration d'un backend et d'une base de données réels.
