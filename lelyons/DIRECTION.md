# Direction artistique : Le Lyon's

Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Le Lyon's.

## Concept en une phrase

Un repaire : dehors la nuit bleu marine, dedans une lampe de laiton allumée et une tablée entre amis.

Tout choix visuel se rattache à cette idée. Le fond marine est la nuit et le lieu, le blanc cassé est le papier d'une carte de brasserie, le laiton est la lumière d'une applique, jamais un néon.

## Ce qu'on évite

- Pub irlandais : pas de vert, de trèfle, de bois sombre à clous, de typo gothique.
- Néon sportif : pas de couleurs saturées, de rouge/vert stade, de typo oblique agressive, de silhouettes de joueurs.
- Template « bar » : pas de dégradé violet, pas de cartes arrondies avec ombre, pas de grille de 3 icônes identiques.

## Palette (3 couleurs de base + 1 accent)

| Rôle | Valeur | Usage |
| --- | --- | --- |
| Marine nuit | #0F1C38 (profond #0A1326, relevé #172A4D) | fonds sombres, texte sur clair |
| Blanc cassé | #F4EFE4 | fonds clairs, texte sur sombre |
| Marine moyen | #223A66 | filets, surfaces secondaires |
| Accent laiton | #D6A55A | liens, détails, un seul point de lumière par écran |

Pas de noir pur, pas de blanc pur. Contrastes AA vérifiés en CHECKLIST.md.

## Typographie

- Display : Source Serif 4 (serif éditorial), graisse 600, titres serrés (interligne 1,05 à 1,15). Sert au nom « Le Lyon's » et aux titres.
- Texte et étiquettes : Archivo variable. Corps en graisse 400. Étiquettes et navigation en capitales, largeur 125 %, interlettrage 0,16 em, pour rappeler le sans-serif espacé du logo.
- Échelle : ratio 1,25 (14, 16, 20, 25, 31, 39, 49, 61, jusqu'à un titre fluide de héros).
- Espacements : 4, 8, 16, 24, 32, 48, 64, 96, 128.
- Formes : angles droits partout, filets de 1 px. Pas d'ombres sauf une élévation de référence très douce.

## Composition

- Alternance de bandes sombres (marine) et claires (blanc cassé) comme les pages d'une carte.
- Héros asymétrique : nom du bar très grand à gauche, lion au trait à droite qui déborde sur la bande suivante (le seul élément qui casse la grille de l'accueil).
- Sections : un repaire (trois moments : afterwork, matchs, soirées), la carte (catégories, sans prix inventés), les matchs (calendrier en placeholder), venir au bar.
- Photos : emplacements typographiques [PHOTO À FOURNIR PAR LE BAR] en aplats marine avec motif de filets. Aucune fausse photo.
- Lion : illustration au trait originale, volontairement simple, en attendant le logo officiel [VISUEL À FOURNIR PAR LE BAR].

## Mouvement (3 moments, transform et opacité seulement)

1. Entrée du héros : titre et sous-titre montent légèrement (CSS pur, 500 à 700 ms, ease-out).
2. Le lion se dessine trait par trait puis lève sa chope une fois (GSAP cœur, une seule séquence d'environ 2 s).
3. Apparition au scroll des blocs et des lignes du calendrier (IntersectionObserver, décalage de 60 ms).

Pas d'animation sur les actions clavier. `prefers-reduced-motion` : aucune animation, contenu visible immédiatement. Sans JavaScript ou sans GSAP : tout est visible et statique.

## 3D

Non applicable. Aucune scène 3D n'apporte quelque chose à un bar de quartier ; elle alourdirait la page sans servir le concept.

## Technique

HTML statique, CSS maison à partir de tokens, un script léger. CDN : GSAP cœur uniquement (URL vérifiée dans le skill web-pro-toolkit). Open Props et Lenis non utilisés : les tokens maison suffisent, et le défilement natif est plus fiable. Polices locales (OFL).

## Pages

index, carte, matchs et évènements, infos pratiques, 404.
