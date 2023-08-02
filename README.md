# DigikareChallenges

### Objectif
Faire le test front end Digikare pour avoir un référentiel de ce que je vois comme bonne pratiques à mettre en place dans notre monorepo.
Mais aussi tester certains tools que j'ai jamais essayé tels que `vitest` `falso`.

Lien du test => https://github.com/digikare/challenges/tree/main/frontend.


## Architectures
- NX 
- Angular
- Tailwindcss
- TDD
- State management agnostique avec "Elf" https://ngneat.github.io/elf/
- Clean architectures
- Atomic design ( ébauche :p )



# Structure du Projects
- apps
  - caretrack-board // Application Angular
- libs
  - core
    - core-domain // Toutes les classes du coeur du domain ( use-case , builder etc..)
    - caretracks // Libs Typescript du domaine "caretrack" ( suis l'application de folder => [# Architecture lib domaine](#Architecture lib domaine) 
  - ui
    - design-system
      - // Libs en mode atomic design avec angular + tailwindcss
      


# Architecture lib domaine

Dans la lib
- [**adapters**](src/lib/adapters)
  - [**presenters**](src/lib/adapters/presenters)
  - [**repositories**](src/lib/adapters/repositories)
- [**domain**](src/lib/domain)
  - [**entities**](src/lib/domain/entities)
  - [**ports**](src/lib/domain/ports)
    - [**presenters**](src/lib/domain/ports/presenters)
    - [**requests**](src/lib/domain/ports/requests)
  - [**repositories**](src/lib/domain/repositories)
  - [**use-cases**](src/lib/domain/use-cases)
    - [**add-caretrack**](src/lib/domain/use-cases/add-caretrack)
    - [**cancel-caretrack**](src/lib/domain/use-cases/cancel-caretrack)
    - [**get-caretrack**](src/lib/domain/use-cases/get-caretrack)
    - [**get-caretracks**](src/lib/domain/use-cases/get-caretracks)

![archi.png](docs%2Fimages%2Farchi.png)
