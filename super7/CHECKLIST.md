# Checklist niveau premium (25 points)

Légende : validé / non applicable / non fait. Vérifications faites en navigateur intégré à 375, 768 et 1280 px le 16/10/2026.

| # | Point | Statut | Détail |
|---|---|---|---|
| 1 | Concept en une phrase | validé | « 17h à 01h » : béton clair, brun, rouge nuit, horloge pixel (DIRECTION.md) |
| 2 | Palette 2-3 couleurs + accent en tokens | validé | css/tokens.css ; deux oranges (clair/sombre) pour le contraste |
| 3 | Deux polices maximum | validé | Super7 Pixel + Archivo |
| 4 | Mêmes tokens, composants, ton | validé | 4 pages, 4 feuilles CSS communes |
| 5 | Pas de photo de stock ni d'image IA | validé | aucune photo |
| 6 | Photos en série cohérente | non applicable | aucune photo fournie ; emplacements [PHOTO À FOURNIR PAR LE BAR] |
| 7 | Textes alternatifs | validé | décoratifs vides, emplacements photo décrits par aria-label |
| 8 | Espacements sur l'échelle | validé | tokens --s-1 à --s-8 ; quelques tailles structurelles (72 px de brique, 96/144 px du badge, 24 px du cran du mur) hors échelle |
| 9 | Longueur de ligne | validé | .prose 62ch, textes courts |
| 10 | Mouvement limité | validé | hero, horloge, révélation de la semaine, transition de page |
| 11 | prefers-reduced-motion | validé | CSS vérifié (bandeau statique, pas de révélation, hero visible, horloge figée) ; émulation de la préférence non testée en navigateur |
| 12 | Hover, focus, active | validé | tous les liens et boutons ; focus visible vérifié au clavier |
| 13 | Zones tactiles 44 px | validé | min-height 48 px sur nav et boutons, 44 px sur liens de liste |
| 14 | Favicon et image de partage | validé | favicon.svg, images/og.png (balises og relatives, à passer en absolues à la mise en ligne) |
| 15 | Page 404 | validé | 404.html |
| 16 | Aucun lien mort | validé | liens internes vérifiés par script ; liens externes (Instagram, carte) non testés en ligne |
| 17 | Micro-textes, pas de lorem | validé | relecture faite, aucun tiret long, aucun emoji (script) |
| 18 | Contraste AA | validé | calculé : orange clair 3,67 sur béton (grands textes seulement), orange vif 5,3 à 6,2 sur sombres, texte 7,5 à 13 |
| 19 | Images compressées, width/height | validé | badge et logo en SVG avec dimensions ; aucune image raster dans les pages |
| 20 | Captures 375, 768, 1280 sans scroll horizontal | validé | scrollWidth contrôlé sur les 4 pages à 375 ; index à 768 et 1280 |
| 21 | Lisible sans JS | validé | classe .js posée par script, retirée : tout visible (opacités à 1) |
| 22 | Navigation clavier | validé | tabulation testée, contour 3 px, lien d'évitement présent |
| 23 | Lighthouse | non fait | non exécuté ; à lancer avant toute mise en ligne |
| 24 | CREDITS à jour | validé | CREDITS.md |
| 25 | Aucune clé ni donnée sensible | validé | aucune |

## Points ouverts

- Lighthouse non passé (point 23).
- Émulation reduced-motion non testée en direct.
- Téléphone, e-mail, tarifs, billetterie, accès : placeholders [À CONFIRMER] (voir SOURCES-CONTENU.md).
- Logo officiel et photos : à fournir par le bar.
