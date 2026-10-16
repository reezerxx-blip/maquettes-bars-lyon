# Direction artistique : Super7 (maquette non officielle)

Rédigée avant le code. Maquette de refonte réalisée par Olivier Ruminski. Contenus © Super7.

Version 2 : la direction de la v1 est conservée à l'identique (sauvegarde dans `super7-maquette-v1-SAUVEGARDE`). La v2 la pousse plus loin : plus de matière, plus d'affiche, plus de mouvement. Rien n'est réinventé.

## Concept en une phrase

**« 17h à 01h » : la page se lit comme la soirée. Elle part du béton gris de l'ancien garage en fin d'après-midi et descend vers le rouge des briques de verre à la nuit, une horloge pixel dans l'en-tête suivant la progression.**

Tout choix visuel se rattache à ce fil : jour = béton clair, soirée = brun, nuit = rouge très sombre.

## Ambiance

Club underground assumé, matière avant effet : béton brut, bois, briques de verre rouges, lumière chaude. Aucun néon, aucun halo, aucune lueur. Pas d'ombre portée : aplats, filets, grain. La profondeur vient du contraste entre sections, de la trame de briques et d'une lumière à bords nets qui traverse le verre (bande diagonale plate, jamais floutée).

## Ce que la v2 ajoute

1. **Affiche de club typographique** : grandes compositions en pixel orange sur béton gris clair, grilles de dates en colonnes, inspirées des posters du compte @super7_lyon (principe de composition seulement, rien de copié). Géantes « 17H » et « 01H » qui débordent du cadre.
2. **Plages de briques de verre** : grandes surfaces rouges en SVG répété, avec bande de lumière à bords nets qui glisse selon le défilement (la lumière « traverse » le verre, plus bas dans la page elle est plus rouge).
3. **Textures** : béton (existant), grain fin global très léger (SVG feTurbulence), motifs pixel (tramage de Bayer entre sections).
4. **Grand S7 orange** comme élément graphique : monogramme géant tonal (béton sur béton, rouge sombre sur nuit) et version orange pleine dans le hero.
5. **Transitions jour vers nuit marquées** : bandes de tramage pixel (dither ordonné) entre béton et brun, entre brun et nuit, générées à la main.
6. **Horloge enrichie** : heure, jauge de 8 cases (une par heure de 17h à 01h) et mot de phase (JOUR, SOIR, NUIT).
7. **Programmation en affiche hebdomadaire** : 4 colonnes de dates, lignes Bar / Club, filtre en gros sélecteur pixel qui change aussi l'ambiance de l'affiche (Bar : brun, Club : nuit et briques).
8. **Programmation en mouvement** : bandeaux défilants (noms Bar, noms Club, sens opposés) et bande de cartes à défilement horizontal avec accroche.
9. **Accueil plus riche** : lieu (4 espaces), horaires en affiche, semaine, photos, slow opening en colonnes de dates, accès, Instagram.
10. **Emplacements photo très travaillés** : cadres de viseur, repères, rapport d'image, description de la prise de vue attendue, marquage [PHOTO À FOURNIR PAR LE BAR].

## Palette (3 bases + 1 accent, en deux versions d'orange selon le fond)

| Rôle | Token | Valeur |
|---|---|---|
| Béton clair (jour) | `--beton` | #DAD7D0 |
| Béton ombré | `--beton-2` | #C9C5BC |
| Brun (soirée) | `--brun` | #2B1A12 |
| Rouge nuit | `--nuit` | #2A0C0D |
| Encre sur béton | `--encre` | #24160F |
| Sable (texte sur fond sombre) | `--sable` | #E4DDD0 |
| Accent orange sur clair | `--orange-jour` | #C23E08 (3,6:1 sur béton, réservé aux grands textes et pictos) |
| Accent orange sur sombre | `--orange` | #FF5A14 (orange vif d'identité) |
| Rouge brique de verre | `--brique` | #B3201C |

Le fond clair impose un orange légèrement plus profond pour tenir le contraste AA grand texte ; sur fond sombre l'orange vif est conservé. Tout texte courant sur béton est en encre (13:1).

## Typographie

- **Display : Super7 Pixel**, police pixel dessinée pour cette maquette (grille 5x7, capitales, les minuscules affichent des capitales). Titres, dates, horloge, étiquettes courtes, affiches. Locale, OFL, voir CREDITS.md.
- **Texte : Archivo** (variable, graisse et largeur), locale. Corps de texte, listes, mentions. L'axe de largeur sert aux étiquettes condensées.
- Échelle : ratio 1,333, base 17 px. Interlignes : 1,05 pour le pixel, 1,55 pour le texte. Géantes d'affiche : calées sur la largeur d'écran (vw) avec plafond.
- Pas d'Inter, de Roboto ni de police système laissée seule.

## Composition et éléments cassant la grille

- Grille 12 colonnes fluide, gouttière 16 / 24 px, échelle 4, 8, 16, 24, 32, 48, 64, 96.
- Titres monumentaux en pixel, alignés à gauche ; texte courant en colonnes étroites (62 caractères max).
- **Ruptures de grille (une par grand moment)** : le mur de briques du hero qui déborde à droite avec le badge S7 ; l'affiche « 17H / 01H » dont les chiffres géants sortent du cadre ; la bande de cartes de la semaine qui défile jusqu'au bord de l'écran.

## Images

Aucune photo disponible hors Instagram (non téléchargeable). Aucune image IA, aucune photo de stock, rien de tiers. Visuels créés à la main : briques de verre (SVG), béton et grain (SVG feTurbulence), tramage pixel (SVG généré), monogrammes S7 (SVG). Les emplacements photo sont des cadres de viseur soignés.

## Mouvement (performant : transform, opacity, clip-path par pas ; reduced-motion respecté)

1. **Hero** : les lettres de SUPER7 s'allument par pas (GSAP cœur `steps()`), le badge S7 se pose par pas.
2. **Horloge** : 17:00 vers 01:00 selon le défilement, par pas de 15 minutes, jauge et phase.
3. **Révélations par pas pixelisés** : les titres se dévoilent en `clip-path` à pas (steps), les blocs montent en opacité et translation ; cascade de 40 à 60 ms.
4. **Transitions de section** : tramage pixel entre béton, brun et nuit ; la lumière des briques avance avec le défilement.
5. **Bandeaux défilants** : lignes Bar et Club en sens opposés, pause au survol et au focus, statiques si reduced-motion.
6. **Cartes de la semaine** : défilement horizontal natif (snap), boutons précédent/suivant, accessible clavier.
7. **Filtre Bar / Club** : bascule de l'ambiance de l'affiche, apparition des noms par pas.
Survols : tous les liens, boutons et cartes ont des états hover (souris seulement), focus-visible et active (`scale(.97)`). Courbe ease-out cubic-bezier(0.23, 1, 0.32, 1), durées 120 à 600 ms.

Toujours exclus : Lenis (le défilement natif suffit), ScrollTrigger (URL CDN non vérifiée, on utilise IntersectionObserver), 3D, lueurs, ombres.

## Structure

- `index.html` : hero, bandeau, lieu (4 espaces), affiche des horaires, semaine en cartes, photos, nuit en briques, slow opening, venir et Instagram.
- `programmation.html` : affiche hebdomadaire, filtre Bar / Club, bandeaux défilants, mention de mise à jour, lien Instagram, entrée et billetterie.
- `infos.html` : horaires, adresse, accès, contact, règles d'entrée, plage de briques.
- `404.html`.
- Navigation : 3 liens, sans menu burger, accessible au clavier.

## Ton de voix

Direct, bref, sans superlatifs. Pas de chiffres inventés ; toute information absente est un `[À CONFIRMER]` visible. Aucun tiret cadratin ni demi-cadratin, aucun emoji.

## Inspirations consultées

Catalogue 21st.dev : requête « marquee ticker » (pause au survol, accessible), principe réécrit à la main. Posters Instagram de @super7_lyon : décrits dans le brief (pixel orange sur gris clair, grilles de dates en colonnes), reproduits en principe uniquement.

## Mise à jour v2.1 : analyse du compte Instagram et vraies photos

Voir INSTAGRAM-ANALYSE.md. Conséquences sur la direction :

- **Couleurs mesurées sur les affiches** : orange vif proche #FF4A14 (token `--orange`), gris clair froid proche #D2D0CC (`--beton`), brun profond d'affiche proche #4A2E2B (`--brun-affiche`, utilisé pour la vue Bar de l'affiche). L'orange sur béton passe à #B83A06 (3,7:1, grands textes seulement) pour tenir l'AA. L'affiche « orange plein, lettres grises » n'est pas reprise : gris sur orange donne environ 2,2:1, sous le seuil AA.
- **Typographie à balayage** : le titre pixel géant reçoit un effet de lignes de balayage (masque CSS à lignes fines, 1 px toutes les 5 px), léger et sans perte de lisibilité, aucun filtre SVG coûteux.
- **Hiérarchie d'affiche** (page Programmation) : gros titre pixel, puis colonnes de dates, chaque artiste avec BAR ou CLUB en exposant. Rythme aéré, aucune illustration.
- **Photos réelles du compte (6)**, utilisées en grand : hero (bar), bandeau plein écran à parallaxe douce (entrée de nuit), cartes du lieu, planche contact (tous les clichés), bandeau de la page Infos. Cadrages sans gros plan sur des visages. Duotone orange au survol. Les photos sont en 512 px de large : douces en grand format, le grain global aide, à remplacer par les originaux haute définition.
- **Section « Le lieu » riche en photos** et **line-up du slow opening** (16 noms vus sur l'affiche Instagram, « 17h, 01h, gratuit »).
- Ton : encore plus sobre, presque sans phrases. Crédit photo visible en pied de page et sur Infos.
