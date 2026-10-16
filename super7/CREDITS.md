# Crédits

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Super7.

## Polices

| Police | Usage | Licence | Source |
|---|---|---|---|
| Super7 Pixel (grille 5x7, capitales) | titres, dates, horloge | SIL Open Font License 1.1 (dessin original pour cette maquette, aucun glyphe repris) | `fonts/source/build_assets.py`, fichier `fonts/super7-pixel.woff2` |
| Archivo variable (axes graisse 100 à 900, largeur 62 à 125), Omnibus-Type | texte courant, étiquettes | SIL Open Font License 1.1 | `fonts/archivo-latin.woff2`, copie locale d'un fichier déjà présent dans le dossier `laleona-refonte` du même poste (origine Google Fonts) ; aucun téléchargement pour cette maquette, aucun appel à un service de polices |

## Bibliothèques

- GSAP cœur 3.15 (licence Standard gratuite GreenSock), chargé depuis `https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js` (URL vérifiée dans le skill web-pro-toolkit). Facultatif : sans lui, le hero s'affiche d'emblée.
- Non utilisés : ScrollTrigger (URL CDN non vérifiée), Lenis, Open Props (le défilement natif et des tokens maison suffisent), React, shadcn, radix-ui, heroicons, iconify.

## Assets créés à la main (aucune source tierce)

- `images/glass-brick.svg` : motif de brique de verre.
- `images/concrete.svg` : trame de béton (filtre feTurbulence).
- `images/logo-s7.svg` et `favicon.svg` : monogramme S7 redessiné (non officiel).
- `images/s7-ton-jour.svg`, `s7-ton-nuit.svg`, `s7-ton-brun.svg` : variantes tonales du S7 (graphisme).
- `images/grain.svg` : grain fin (feTurbulence). `images/dither-*.svg` : bandes de tramage de Bayer générées par script.
- Effet de balayage des titres : masque CSS, aucun fichier.
- `images/og.png` : image de partage générée par script avec la police pixel.
- Icônes : flèches en pixels dessinées en SVG inline (un seul jeu, style unique).

## Inspiration

Catalogue 21st.dev, recherche « marquee ticker » : principe du bandeau défilant en pause au survol. Aucun code récupéré, réécrit en CSS.

## Photos

6 photos du compte Instagram @super7_lyon, fournies par le client et reprises telles quelles (JPG de 480 à 512 px de large, aucun service tiers) pour cette maquette. Photos © Super7, @super7_lyon (Instagram), reprises pour cette maquette ; à remplacer par les originaux haute définition du bar. Fichiers : `images/photos/bar-interieur.jpg`, `etagere-enceinte.jpg`, `briques-rouges.jpg`, `entree-nuit.jpg`, `club-foule.jpg`, `mur-arche.jpg`. Crédit visible en pied de page et sur la page Infos.

## Images

Aucune image IA, aucune photo de stock, aucune photo de tiers. Rien n'est envoyé à un service tiers (hors téléchargement de GSAP par le navigateur).

