# Checklist niveau premium (25 points), v2.1

Vérifications faites avec Playwright (Chromium) à 375 et 1280 px le 16/10/2026 sur les 4 pages : aucun débordement horizontal, console sans erreur. Navigation clavier testée (lien d'évitement en premier focus), reduced-motion émulé (bandeaux arrêtés, filtre fonctionnel), rendu sans JavaScript capturé à 375 px.

| # | Point | Statut | Détail |
|---|---|---|---|
| 1 | Concept en une phrase | validé | « 17h à 01h », béton, brun, rouge nuit, horloge pixel enrichie |
| 2 | Palette en tokens | validé | css/tokens.css, couleurs ajustées sur les affiches (#FF4A14, #D2D0CC, #4A2E2B) |
| 3 | Deux polices maximum | validé | Super7 Pixel + Archivo |
| 4 | Mêmes tokens, composants, ton | validé | 4 pages, 4 feuilles CSS, pages générées depuis un même gabarit |
| 5 | Pas de photo de stock ni d'image IA | validé | 6 photos du compte Instagram du bar, fournies par le client |
| 6 | Photos en série cohérente | validé | série du compte (chaleur ambrée), grain global, duotone orange au survol |
| 7 | Textes alternatifs | validé | alt descriptifs sur les 6 photos, décoratifs vides |
| 8 | Espacements sur l'échelle | validé | tokens ; tailles structurelles (briques 72 px, crans 24 à 28 px) hors échelle |
| 9 | Longueur de ligne | validé | 62ch |
| 10 | Mouvement | validé | transform, opacity, clip-path par pas ; tout fait sans ScrollTrigger |
| 11 | prefers-reduced-motion | validé | émulé : bandeaux statiques, révélations supprimées |
| 12 | Hover, focus, active | validé | liens, boutons, cartes, photos, filtre, line-up |
| 13 | Zones tactiles 44 px | validé | boutons 48 à 72 px, liens 44 px ; exposants BAR/CLUB non cliquables |
| 14 | Favicon et image de partage | validé | og.png inchangée (balises relatives, à passer en absolues à la mise en ligne) |
| 15 | Page 404 | validé | briques et S7 |
| 16 | Aucun lien mort | validé | liens internes OK ; externes (Instagram, carte) non testés en ligne |
| 17 | Micro-textes, pas de lorem | validé | aucun tiret long ni emoji (recherche automatique) |
| 18 | Contraste AA | validé | encre sur béton 11,4:1 ; orange #B83A06 sur béton 3,7:1 (grands textes seulement) ; orange vif sur brun/nuit 5 à 5,4:1 ; orange sur brun d'affiche 3,6:1 (grands textes seulement) ; sable sur brun d'affiche 9:1 |
| 19 | Images compressées, width/height | validé | JPG d'origine (35 à 70 Ko), dimensions renseignées, chargement différé |
| 20 | Captures 375 et 1280 sans scroll horizontal | validé | scrollWidth contrôlé sur les 4 pages ; 768 px non recapturé en v2.1 |
| 21 | Lisible sans JS | validé | pages capturées JS désactivé ; filtre et boutons de défilement masqués sans JS |
| 22 | Navigation clavier | validé | focus visible, bande de cartes focusable au clavier |
| 23 | Lighthouse | non fait | à lancer avant mise en ligne |
| 24 | CREDITS à jour | validé | CREDITS.md, SOURCES-CONTENU.md, INSTAGRAM-ANALYSE.md |
| 25 | Aucune clé ni donnée sensible | validé | aucune |

## Points ouverts

- Photos de 512 px de large : douces en plein écran ; à remplacer par les originaux haute définition.
- Effet d'ondulation des affiches Instagram non reproduit (coût de rendu) ; balayage par lignes de masque seulement.
- Terrasse et espace resto : [PHOTO À FOURNIR PAR LE BAR]. Logo officiel à fournir.
- GSAP chargé depuis le CDN : non testé hors ligne (le site reste complet sans).
- Lighthouse non passé ; 768 px à revérifier visuellement.
- Placeholders [À CONFIRMER] : voir SOURCES-CONTENU.md.
