# Checklist niveau premium, v3 (photos HD, mobile d'abord)

Vérifié avec Playwright (Chromium) le 16/10/2026, sur les 4 pages, aux largeurs 360, 375, 390, 430, 768 et 1280 px : scrollWidth égal à la largeur de fenêtre partout, aucune image cassée (naturalWidth > 0), console sans erreur. Captures regardées : accueil 390 px (haut, milieu, bas), Programmation 390 px, Infos 390 px, accueil 1280 px, rendu sans JavaScript.

| # | Point | Statut | Détail |
|---|---|---|---|
| 1 | Concept « 17h à 01h » conservé | validé | béton, brun, rouge nuit, pixel orange, scanlines, horloge |
| 2 | Hero entier dans le premier écran | validé | svh ; CTA au-dessus de la barre d'actions à 360x640, 375x667, 390x844, 430x932 |
| 3 | Navigation mobile | validé | liens de 44 px minimum, barre fixe Programmation / Itinéraire (Google Maps) / Instagram, padding du body : pied de page jamais masqué |
| 4 | Cibles tactiles 44 px | validé | contrôle mesuré sur l'accueil à 390 px : aucun lien ni bouton sous 44 px de haut |
| 5 | Typographie fluide | validé | clamp sur les échelles 1 à 3, hero calé sur la largeur |
| 6 | Échelle d'espacement 4/8/16/24/32/48 | validé | tokens ; tailles structurelles (briques, crans) hors échelle |
| 7 | Cartes de programmation | validé | défilement horizontal, scroll-snap, carte suivante visible, indication « Faire glisser », fondu de bord ; boutons précédent/suivant au-dessus de 900 px |
| 8 | Planche contact | validé | 2 colonnes au pouce, 3 à 700 px, 4 à 1100 px, cadrages carrés, 4:3 et naturels |
| 9 | Effets lourds | validé | parallaxe et lumière des briques seulement sur grand écran avec souris ; GSAP chargé seulement là ; prefers-reduced-motion respecté |
| 10 | Pas d'info au survol seul | validé | les survols sont décoratifs ; info toujours visible |
| 11 | États hover, focus, active | validé | hover limité aux souris, focus-visible partout, active sur boutons, cartes, barre d'actions, planche |
| 12 | Contraste AA | validé | petit texte orange sur béton : #8F2D03 (5,3:1) ; grands titres #B83A06 (3,7:1, grands textes) ; orange vif sur brun et nuit 5 à 5,4:1 |
| 13 | Photos HD, srcset, sizes | validé | WebP 480/800/1200/1600, width/height, lazy sauf hero (fetchpriority high + preload imagesrcset), decoding async, object-position par photo |
| 14 | Poids mobile de l'accueil | validé | transfert initial mesuré : environ 470 Ko (360 px, écran 2x), environ 770 Ko (390 px, écran 3x) ; 480 et 800 px servis sur petit écran |
| 15 | Photos : pas plus de 2 apparitions hors planche | validé | voir PHOTOS-ANALYSE.md |
| 16 | Photos basse définition jamais en plein écran | validé | terrasse (carte, petit cadre Infos), cabine DJ et colonne d'enceintes (petits cadres) |
| 17 | Pas d'image IA, pas d'image de stock | validé | photos du compte Instagram et du client |
| 18 | Alt descriptifs | validé | 77 à 120 caractères, factuels, en français ; décoratifs vides |
| 19 | SEO : h1 et contenu visibles sans attendre le JS | validé | lettres du h1 animées en CSS, blocs masqués seulement sous l'écran et seulement une fois main.js lancé ; filtre Bar/Club et boutons visibles dès le départ (masqués sans JS) |
| 20 | GSAP local | validé | `js/gsap.min.js`, bannière 3.15.0, identique à la version utilisée jusqu'ici ; aucun appel externe |
| 21 | JSON-LD | validé | NightClub sur l'accueil : nom, adresse, horaires jeudi à dimanche 17h à 01h, image, sameAs Instagram ; ni téléphone ni prix |
| 22 | title et description uniques, og et twitter | validé | og:image et twitter:image `images/og.jpg` 1200 x 630 ; noindex conservé |
| 23 | Lisible sans JS | validé | contrôlé : h1 visible, cartes et filtre masqués proprement |
| 24 | Aucun tiret long, aucun emoji, rien d'inventé | validé | recherche automatique sur HTML, CSS, JS, MD |
| 25 | Crédit photo en pied de page et sur Infos | validé | « Photos © Super7, @super7_lyon (Instagram), reprises pour cette maquette ; à remplacer par les originaux du bar. » |

## Points ouverts

- Terrasse, cabine DJ et colonne d'enceintes restent en basse définition (578 à 677 px) : à remplacer par les originaux du bar.
- og:image, JSON-LD image et canonique en chemins relatifs : à passer en URL absolues avec le domaine définitif.
- Slow opening du 24 au 27 septembre 2026 : passé à la date de la maquette, à mettre à jour avec le bar.
- Espace resto : [PHOTO À FOURNIR PAR LE BAR]. Logo officiel à fournir.
- 404 : chemins relatifs, à revoir selon l'hébergement.
- Lighthouse non passé ; Safari iOS et Firefox non testés.
- Placeholders [À CONFIRMER] : voir SOURCES-CONTENU.md.
