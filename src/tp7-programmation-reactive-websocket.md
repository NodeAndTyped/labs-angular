# TP 6
> Programmation réactive et websocket

Nous allons développer la gestion des changements de statut de connexion des utilisateurs en temps réel.

Autrement dit dès lorsqu'un utilisateur se connectera sur notre application, nous mettrons à jour la liste des utilisateurs avec
les nouveaux statuts.

Pour ce faire, nous allons utiliser les WebSockets associés à la programmation réactive.

## Installation

Commençons par installer le WebSocket Client:

```bash
npm install --save socket.io-client
```

## Exemple d'utilisation

WebSocket nécessite très de configuration pour fonctionner. Il faut simplement lui donner l'url
du serveur websocket. Voici un exemple :

```typescript
import * as io from 'socket.io-client';

const socket = io("http://host:port");

socket.on('mycustomevent', (data) => console.log(data));
```

## Exercice 1

Notre objectif sera de mettre en place le socket client et de fournir un observable via votre nouveau service `UsersSocketService`.

Le socket client écoutera l'événement `users.update` et recevra la liste nouvelle liste d'utilisateurs à chaque changement de statuts.

> Pour tester le changement de statuts, ouvrez un nouvelle onglet avec l'application est connectez-vous avec un autre compte utilisateur.

## Exercice 2

Une fois que vous avez réussi à récupérer la liste des utilisateurs à l'afficher dans la liste, essayez de rendre 
observable de bout en bout votre composant. Ainsi nous consommerons à la fois un webservice Ajax en mode Observable et
du socket en Observable. Ces observables seront mergés pour ne donner qu'un seul Observable qui sera directement utilisé dans la vue.

Trop difficile ?

Je vous recommande donc de procéder par étape :

* Créer une méthode observable comme par exemple `UserService.getUsersObservable(): Observable<User[]>`,
* Merger les deux observables (UserService et UsersWebSocketService),
* Utiliser le pipe **async** dans le template pour connecter notre Observable avec le `*ngFor`.

À vous de jouer !


> Correction du TP : #resources-tp6-solution





<!--[Suivant](tp6-programmation-reactive-websocket.md)-->

