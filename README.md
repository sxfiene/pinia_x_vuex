# Description

C'était lors de mon stage en tant qu'expert front-end au sein de La Poste. L'objectif de ce projet était de migrer la gestion d'état de l'application Vue.js de Vuex vers Pinia, la nouvelle bibliothèque de gestion d'état recommandée par l'équipe principale de Vue.

## Prérequis

- Node.js (version >= 12)
- Vue.js (version >= 3)

## Structure du projet

migration-vuex-pinia/\
├── src/\
│   ├── components/ \
│   ├── views/ \
│   ├── store/ \
│   │   ├── vuex/ \
│   │   └── pinia/ \
│   ├── App.vue \
│   └── main.js \
├── package.json \
└── README.md 

- src/components : Répertoire contenant les composants Vue réutilisables.
- src/views : Répertoire contenant les vues principales de l'application.
- src/store/vuex : Répertoire contenant le module Vuex avant la migration.
- src/store/pinia : Répertoire contenant le store Pinia après la migration.



  
