# Direction artistique v2 : Le Lyon's

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Le Lyon's.

La v1 (marine, laiton, serif, peu de visuel) est refusée par le client. Elle est conservée dans `lelyons-maquette-v1-SAUVEGARDE`. Cette v2 repart de zéro, au plus près de l'énergie de l'Instagram @bar_le_lyons : bar de sport et d'afterwork.

## Concept en une phrase

Un mur d'affiches de bar de sport : gros titres condensés, filets tricolores, un lion qui rugit, et ça défile.

Tout choix visuel se rattache à cette idée : on est dans un bar où les affiches de match sont collées au mur, où l'écran est grand et où l'on se retrouve entre amis.

## Identité

- **Typographie** : Anton (SIL OFL 1.1, en local) pour tout ce qui crie : titres, dates, équipes, marquees. Capitales, interligne 0,9 à 1. DM Sans (SIL OFL 1.1, variable, en local) pour le texte. Deux polices, pas une de plus.
- **Palette** : marine profond `#0A1630` (fond dominant), rouge vif `#CC1B27`, bleu vif `#1F55F0`, crème `#F4EEDF`. Accent de lecture sur marine : rouge clair `#FF5F66`, bleu clair `#7FA2FF`.
- **Filets tricolores** : bande bleu, crème, rouge (hauteur 8 ou 16 px), signature répétée sur chaque section et chaque carte.
- **Pictos** : une seule famille SVG au trait (24 px, trait 2, extrémités arrondies) : horloge, épingle, tram, ballon, ballon de rugby, damier F1, écran, chope, cocktail, verre de vin, planche, micro, appareil photo, flèches.
- **Formes** : tout carré, aucun arrondi (affiches, cartes, boutons, étiquettes). Ombres dures décalées (une seule élévation de référence).
- **Lion** : grand lion SVG original au trait, tête à crinière en flammes, costume, chope levée. Dessiné pour la maquette, jamais copié du logo réel. [LOGO OFFICIEL À FOURNIR].
- **Motifs** : rayures tricolores, trame halftone (points), grain léger (SVG feTurbulence statique).

## Blocs à identité propre

- **Blind Test** : seul endroit où le néon rose `#FF3DA8` et cyan `#2EF2FF` est autorisé, sur fond violet-noir `#0B0620`. Barres d'égaliseur animées en `transform`.
- **Dégustations** : bloc sombre et chaud, brun-bordeaux `#2B0E0C`, ambre `#F2A93B`, cuivre `#C8642B`. Formes seulement : disques concentriques façon soleil couchant, verre et tranche d'orange dessinés. Aucune marque tierce, aucun logo, aucun nom de marque, aucune bouteille reconnaissable.
- **Programme de la semaine** : cartes style Instagram sur fond marine (date, compétition, équipe A contre équipe B, heure). Présenté comme « exemple de programmation vu sur Instagram, à confirmer », jamais comme calendrier officiel. Aucun blason, aucune photo de joueur.

## Composition

- Hero plein écran, nom en immense condensé, baseline sur bande rouge, lion au trait.
- Sections plein écran ou presque, alternance marine / crème / rouge / blocs à identité propre.
- Deux bandes défilantes : « FOOD · DRINKS · GOOD VIBES » (rouge) et « Grand écran · Ambiance · Drinks · Passion du foot » (crème).
- Un élément casse la grille par section : titres débordants, étiquettes inclinées, lion qui sort du cadre.
- Photos du bar : cadres travaillés (trame, coin tricolore, picto appareil photo) marqués [PHOTO À FOURNIR PAR LE BAR]. Aucune fausse photo, aucune image IA ou de stock.

## Mouvement (GSAP cœur, transform et opacity)

1. Entrée du hero : lignes du titre qui montent d'un masque, baseline, boutons, puis le lion se dessine et lève sa chope.
2. Apparition au scroll (IntersectionObserver + GSAP) des affiches et cartes, en cascade courte.
3. Parallaxe légère du lion (transform) et défilement continu des marquees (CSS).
4. Micro-mouvements : égaliseur du Blind Test, scintillement néon discret.
- `prefers-reduced-motion` : tout est coupé, le contenu reste visible.
- Sans JavaScript : site complet, rien n'est caché par défaut (les états cachés sont posés par le script).
- Courbes ease-out, 150 à 700 ms.

## Ce qu'on évite

Pub irlandais (vert, bois, laiton, trèfle, harpe, pinte stylisée), serif, marine et laiton de la v1, dégradés décoratifs sans raison, tiret cadratin et demi-cadratin, emojis, lorem ipsum, chiffres ou prix inventés, logos de clubs ou de ligues, photos de joueurs, marque tierce.

## Accessibilité

Contrastes AA calculés (texte crème sur marine, texte crème sur rouge, texte marine sur crème). Focus visible en double anneau (blanc + bleu), cibles de 44 px minimum, lien d'évitement, hiérarchie de titres, `lang="fr"`.
