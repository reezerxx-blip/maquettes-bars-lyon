# Crédits

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Super7.

## Polices

| Police | Usage | Licence | Source |
|---|---|---|---|
| Super7 Pixel (grille 5x7, capitales) | titres, dates, horloge | SIL Open Font License 1.1 (dessin original pour cette maquette, aucun glyphe repris) | `fonts/source/build_assets.py`, fichier `fonts/super7-pixel.woff2` |
| Archivo variable (axes graisse 100 à 900, largeur 62 à 125), Omnibus-Type | texte courant, étiquettes | SIL Open Font License 1.1 | `fonts/archivo-latin.woff2`, copie locale d'un fichier déjà présent dans le dossier `laleona-refonte` du même poste (origine Google Fonts) ; aucun téléchargement pour cette maquette, aucun appel à un service de polices |

## Bibliothèques

- GSAP cœur 3.15.0 (licence Standard gratuite GreenSock), copie locale `js/gsap.min.js` (identique à celle de la maquette lelyons, bannière 3.15.0 vérifiée). Chargé seulement sur grand écran avec souris, pour un effet décoratif ; le site n'en dépend pas.
- Non utilisés : ScrollTrigger (URL CDN non vérifiée), Lenis, Open Props (le défilement natif et des tokens maison suffisent), React, shadcn, radix-ui, heroicons, iconify.

## Assets créés à la main (aucune source tierce)

- `images/glass-brick.svg` : motif de brique de verre.
- `images/concrete.svg` : trame de béton (filtre feTurbulence).
- `images/logo-s7.svg` et `favicon.svg` : monogramme S7 redessiné (non officiel).
- `images/s7-ton-jour.svg`, `s7-ton-nuit.svg`, `s7-ton-brun.svg` : variantes tonales du S7 (graphisme).
- `images/grain.svg` : grain fin (feTurbulence). `images/dither-*.svg` : bandes de tramage de Bayer générées par script.
- Effet de balayage des titres : masque CSS, aucun fichier.
- `images/og.jpg` : image de partage 1200 x 630, recadrage de la photo HD du bar vu d'en haut (Instagram @super7_lyon).
- Icônes : flèches en pixels dessinées en SVG inline (un seul jeu, style unique).

## Inspiration

Catalogue 21st.dev, recherche « marquee ticker » : principe du bandeau défilant en pause au survol. Aucun code récupéré, réécrit en CSS.

## Photos

Photos © Super7, @super7_lyon (Instagram), reprises pour cette maquette ; à remplacer par les originaux du bar.

- 12 photos HD (1364 à 3277 px) téléchargées du compte Instagram @super7_lyon (3 affiches et 9 photos retenues), voir PHOTOS-ANALYSE.md pour l'inventaire, les doublons et les emplacements.
- 3 photos d'origine du client en basse définition (terrasse, cabine DJ, colonne d'enceintes, 578 à 677 px), affichées en petit cadre ; recadrées de 4,5 % pour retirer les flèches de carrousel.
- Fichiers : `images/photos/<nom>-<largeur>.webp` (480, 800, 1200, 1600 px selon la source, générés avec Pillow, qualité 80 à 82). Aucune amélioration, aucun traitement par IA, aucun service tiers.
- Crédit visible en pied de page de chaque page et sur la page Infos.

## Images

Aucune image générée par IA, aucune photo de stock, aucune photo de tiers. Rien n'est envoyé à un service tiers : tout est servi en local.
