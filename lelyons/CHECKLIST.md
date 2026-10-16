# Checklist niveau premium (25 points)

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Le Lyon's.

| # | Point | Statut | Raison |
| --- | --- | --- | --- |
| 1 | Concept en une phrase | Validé | « Le repaire », voir DIRECTION.md |
| 2 | Palette 3 couleurs + accent en tokens | Validé | css/tokens.css |
| 3 | Deux polices maximum | Validé | Source Serif 4 et Archivo |
| 4 | Mêmes tokens et composants partout | Validé | 3 feuilles partagées par les 5 pages |
| 5 | Pas de photo de stock ni d'image générée | Validé | Aucune image bitmap |
| 6 | Photos en série cohérente | Non applicable | Aucune photo, emplacements en attente |
| 7 | Textes alternatifs | Validé | Lion en role="img" avec aria-label, icônes décoratives masquées |
| 8 | Échelle d'espacements | Validé | Tokens 4 à 128. Quelques tailles fixes (colonne de 96 px, hauteurs minimales 44 à 56 px) |
| 9 | Longueur de ligne lisible | Validé | max-width 62ch |
| 10 | Mouvement limité à 3 moments | Validé | Entrée héros, lion, reveals au scroll. Transitions de page non faites |
| 11 | prefers-reduced-motion | Validé | Testé : lion et blocs visibles, animations coupées |
| 12 | Hover, focus, active | Validé | Hover sous (hover:hover), focus laiton, active scale 0,97 |
| 13 | Zones tactiles 44 px | Validé | Boutons 44 à 48 px, liens de nav et pied 44 px |
| 14 | Favicon et image de partage | Favicon validé, image Open Graph non faite | Maquette noindex, non partagée. Un PNG serait à produire pour la version réelle |
| 15 | Page 404 | Validé | 404.html |
| 16 | Aucun lien mort | Validé | Liens internes testés par navigation ; liens externes d'après le brief, non testés en ligne |
| 17 | Micro-textes relus | Validé | Pas de lorem, pas de tiret cadratin ni demi-cadratin (recherche automatique) |
| 18 | Contraste AA | Validé | Calculé : laiton sur marine environ 7,5:1, texte laiton foncé sur blanc cassé environ 5,2:1 ; autres paires plus élevées |
| 19 | Images compressées, width et height | Non applicable | SVG uniquement, viewBox défini |
| 20 | Captures 375, 768, 1280 sans défilement horizontal | Validé | Mesuré : débordement 0 |
| 21 | Lisible sans JavaScript | Validé | Testé JS désactivé : lion et contenus visibles |
| 22 | Navigation clavier | Validé | Lien d'évitement, ordre logique, contour visible |
| 23 | Lighthouse | Non fait | Outil non lancé. Console sans erreur ni avertissement sur les 5 pages |
| 24 | CREDITS à jour | Validé | CREDITS.md. Texte des licences OFL non joint |
| 25 | Aucune clé ni donnée sensible | Validé | Rien d'envoyé, aucun formulaire |
