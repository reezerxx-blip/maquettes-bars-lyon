# Checklist niveau premium (25 points), v2

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Le Lyon's.

Vérifications faites avec Playwright (Chromium) sur un serveur local temporaire (port 8812, arrêté ensuite), à 375 et 1280 px.

| # | Point | Statut | Raison |
| --- | --- | --- | --- |
| 1 | Concept en une phrase | Validé | « Un mur d'affiches de bar de sport », voir DIRECTION.md |
| 2 | Palette 3 couleurs + accent en tokens | Validé | Marine, rouge, bleu, crème. Néon limité au Blind Test, tons chauds limités aux Dégustations (blocs à identité propre voulus par le client). css/tokens.css |
| 3 | Deux polices maximum | Validé | Anton et DM Sans |
| 4 | Mêmes tokens et composants partout | Validé | 3 feuilles partagées par les 5 pages |
| 5 | Pas de photo de stock ni d'image générée | Validé | Aucune image bitmap, cadres [PHOTO À FOURNIR PAR LE BAR] |
| 6 | Photos en série cohérente | Non applicable | Aucune photo, emplacements en attente |
| 7 | Textes alternatifs | Validé | Lion et illustration Dégustations en role="img" avec aria-label, pictos décoratifs masqués |
| 8 | Échelle d'espacements | Validé | Tokens 4 à 128. Quelques tailles fixes (pastille, bloc date 96 px, hauteurs minimales) |
| 9 | Longueur de ligne lisible | Validé | max-width en ch sur les textes courants |
| 10 | Mouvement limité à quelques moments | Validé | Entrée du hero, lion qui se dessine, reveals au scroll, marquees, égaliseur. Transitions de page non faites |
| 11 | prefers-reduced-motion | Validé | Testé : marquees, égaliseur, GSAP coupés, contenu visible (0 élément caché) |
| 12 | Hover, focus, active | Validé | Hover sous (hover: hover), focus double anneau blanc et bleu, active par translation |
| 13 | Zones tactiles 44 px | Validé | Mesuré : aucun lien ou bouton sous 44 px sur les 5 pages à 375 et 1280 |
| 14 | Favicon et image de partage | Favicon validé, image Open Graph non faite | Maquette noindex, non partagée |
| 15 | Page 404 | Validé | 404.html, « Hors-jeu ! » |
| 16 | Aucun lien mort | Validé | Liens internes et ancres (carte.html#bieres, #programme) présents. Liens externes d'après le brief, non testés en ligne |
| 17 | Micro-textes relus | Validé | Recherche automatique : aucun tiret cadratin ni demi-cadratin, aucun emoji, aucun lorem |
| 18 | Contraste AA | Validé | Calcul automatique sur tous les textes visibles (4,5:1, 3:1 pour le grand texte) : 0 écart sur les 10 combinaisons page et largeur |
| 19 | Images compressées, width et height | Non applicable | SVG uniquement, viewBox défini |
| 20 | Captures 375 et 1280 sans défilement horizontal | Validé | Mesuré élément par élément : 0 débordement. Capture 768 non faite |
| 21 | Lisible sans JavaScript | Validé | JS désactivé : 0 élément caché sur les 5 pages |
| 22 | Navigation clavier | Validé | Lien d'évitement, tabulation complète des 5 pages, contour visible partout |
| 23 | Lighthouse | Non fait | Outil non lancé. Console sans erreur ni avertissement sur les 5 pages, 2 largeurs |
| 24 | CREDITS à jour | Validé | CREDITS.md, textes OFL joints dans fonts/ |
| 25 | Aucune clé ni donnée sensible | Validé | Rien d'envoyé, aucun formulaire |

Autres règles du brief : meta robots noindex sur chaque page, pas de canonique, mention « Maquette de refonte non officielle » en pied des 5 pages.
