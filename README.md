# centiva-test-modal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Le point
Mon objectif était de remettre ce test dans un délai d'une semaine. Il n'est pas parfait, il reste encore plusieurs améliorations, et je ne suis pas parvenue à relever un de défis. J'ai cependant plusieurs victoires à mon actif. 

### Victoires
- VueJS. J'ai passé plus de temps le nez dans des références de CSS que de VueJS, ça me confirme donc que j'en maitrise bien les bases. Il y a toujours plus à apprendre, et que j'ai hâte de pousser plus loin mes connaissances techniques de ce framework.
- ESLINT. J'ai frappé plusieurs murs, je dois changer mes habitudes, je vois l'écran noire du "tu as oublié ton point-virgule" de moins en moins souvent depuis quelques jours. 
- CSS. Je suis agréablement surprise du résultat visuel, et j'ai hâte de recevoir de la rétroaction sur la structure que j'ai utilisée (particulièrement pour le `modal__content-container`) afin d'ensuite m'améliorer. 
- Ne pas montrer de modale vide. Je tiens à partager que je tente de le faire depuis des jours à l'aide de `this.$slot.content` au lieu de `this.$slots.content`. Ça fonctionne maintenant que j'ai découvert qu'il me manquait une lettre. Peut-on célébrer ensemble le fait que j'avais pensé au bon mécanisme dès le début?
- Mixin. L'utilisation d'un mixin diminue de beaucoup la quantité de code lors de l'insertion d'une modale. 

### Défis
- BEM. C'est une notation que je ne connais de façon technique, je l'ai utilisé pour de petits projets personnels qui ne comptaient que quelques éléments, mais je réalise que j'ai besoin de voir l'ensemble d'un projet de plusieurs composantes plus complexes l'utilisant pour apprendre à l'utiliser correctement. 
- SCSS. La solution au code répétitif utilisé pour mettre les icônes et les bordures de la même couleur s'y trouve-t-elle? Probablement, car je n'ai pas l'impression d'avoir utilisé les avantages du CSS à leur juste valeur. Mon code pourrait certainement être raccourci. L'organisation et la nomanclature des fichiers est aussi à retravailler.
- Contexte lorsque la modale est ouverte. Je sais qu'il faut que j'arrive à appliquer le filtre 'filter: blur(5px)' au contexte et non à la modale lorsque celle-ci est ouverte, mais c'est à ce moment que j'aurais utilisé la carte 'téléphoner à un collègue'. Quelles que soient les conclusions de ce test technique, j'apprécierais de comprendre comment le faire. Je n'arrive pas à cibler "tout sauf ce popup". Donc soit le filtre est appliqué juste au parent (ce qui cause un problème si j'ai plusieurs éléments sur une même page), soit le filtre est appliqué à toute l'application, y compris la modale. J'ai triché ici et juste mis un fond gris-bleu avec transparents. "Fake it 'till you make it." 

## Conclusions
Les tests techniques de ce type profitent aux employeurs qui cherchent un candidat, mais aussi aux candidats qui peuvent alors faire le point sur leurs forces et faiblesses. J'ai vu un progrès fulgurant dans mes compétences au cours des dernières années, mais j'ai encore beaucoup à apprendre. Je suis travaillante, je prend chaque objectif comme un challenge à relever, et j'ai envie de continuer à apprendre dans un environnement qui y est propice. *Alea jacta est*, les dés sont jetés. Voici ce dont je suis capable seule, j'espère que c'est suffisant pour vous donner envie de voir ce que je peux accomplir et apporter au sein d'une équipe comme celle de Centiva. 