# Direction artistique : Super7 (maquette non officielle)

Rédigée avant le code. Maquette de refonte réalisée par Olivier Ruminski. Contenus © Super7.

## Concept en une phrase

**« 17h à 01h » : la page se lit comme la soirée. Elle part du béton gris de l'ancien garage en fin d'après-midi et descend vers le rouge des briques de verre à la nuit, une horloge pixel dans l'en-tête suivant la progression.**

Tout choix visuel se rattache à ce fil : jour = béton clair, soirée = brun, nuit = rouge très sombre.

## Ambiance

Club underground assumé, matière avant effet : béton brut, bois, briques de verre rouges, lumière chaude. Aucun néon, aucun halo, aucune lueur. Les ombres sont absentes (aplats et filets), la profondeur vient du contraste entre sections et de la trame de briques.

## Palette (3 bases + 1 accent, en deux versions d'orange selon le fond)

| Rôle | Token | Valeur |
|---|---|---|
| Béton clair (jour) | `--beton` | #DAD7D0 |
| Brun (soirée) | `--brun` | #2B1A12 |
| Rouge nuit | `--nuit` | #2A0C0D |
| Encre sur béton | `--encre` | #24160F |
| Sable (texte sur fond sombre) | `--sable` | #E4DDD0 |
| Accent orange sur clair | `--orange-jour` | #C23E08 (3,6:1 sur béton, réservé aux grands textes) |
| Accent orange sur sombre | `--orange` | #FF5A14 (orange vif d'identité) |
| Rouge brique de verre | `--brique` | #B3201C |

Le fond clair d'identité impose un orange légèrement plus profond pour tenir le contraste AA grand texte ; sur fond sombre l'orange vif est conservé.

## Typographie

- **Display : Super7 Pixel**, police pixel dessinée pour cette maquette (grille 5x7, capitales uniquement, les minuscules affichent des capitales). Titres, dates, horloge, étiquettes courtes. Police locale, licence OFL, voir CREDITS.md.
- **Texte : Archivo** (variable, graisse et largeur), locale. Corps de texte, listes, mentions. L'axe de largeur sert aux étiquettes condensées.
- Échelle : ratio 1,333 (quarte), base 17 px. Interlignes : 1,05 pour le pixel, 1,55 pour le texte.
- Pas d'Inter, de Roboto ni de police système laissée seule.

## Composition et élément cassant la grille

- Grille 12 colonnes fluide, gouttière 16 / 24 px, espacements sur l'échelle 4, 8, 16, 24, 32, 48, 64, 96.
- Titres monumentaux en pixel, alignés à gauche, interlignes serrés ; texte courant en colonnes étroites (max 62 caractères).
- **Élément cassant la grille (un seul)** : le mur de briques de verre du hero, qui déborde de la colonne vers le bord droit de l'écran et sous l'en-tête, avec le monogramme S7 qui chevauche la jonction entre le hero et la section suivante.

## Images

Aucune photo disponible hors Instagram (non téléchargeable). Emplacements soignés : blocs béton (trame SVG), cadres pixel, marquage `[PHOTO À FOURNIR PAR LE BAR]` avec la prise de vue attendue. Aucune image IA, aucune photo de stock. Motifs créés à la main : briques de verre (SVG), béton (SVG feTurbulence).

## Mouvement (2 à 3 moments, reduced-motion respecté)

1. **Entrée du hero** : les lettres de SUPER7 s'allument une à une, par pas (steps), comme un affichage pixel (GSAP cœur, repli CSS sans JS).
2. **L'horloge de la soirée** : le texte d'horloge de l'en-tête avance de 17:00 à 01:00 selon le défilement (pas de 15 minutes, aucune animation de mouvement). Statique si reduced-motion.
3. **Révélation de la semaine** : les jours se posent en cascade (30 à 60 ms), opacité et translation. Visibles d'emblée sans JS.
Hover/focus/active définis partout ; micro-pression `scale(.97)` sur les boutons. Courbes ease-out fortes cubic-bezier(0.23, 1, 0.32, 1), durées 160 à 600 ms.

Ni Lenis (le défilement natif suffit, aucun gain), ni ScrollTrigger (URL CDN non vérifiée), ni 3D (aucun apport pour un club dont la matière est le plan graphique).

## Structure

- `index.html` : hero, le lieu (4 espaces), semaine type, bande nuit, emplacements photo, infos rapides.
- `programmation.html` : semaine type jour par jour, filtre Bar / Club, mention de mise à jour, lien Instagram.
- `infos.html` : horaires, adresse, contact, accès, règles d'entrée.
- `404.html`.
- Navigation : 3 liens, sans menu burger, accessible au clavier.

## Ton de voix

Direct, bref, sans promesse de marketing, sans superlatifs. Pas de chiffres inventés ; toute information absente est un `[À CONFIRMER]` visible.

## Inspirations consultées

Catalogue 21st.dev : requête « marquee ticker » (composants diceui/marquee, pause au survol, accessible) pour le principe du bandeau défilant ; réécrit à la main en CSS, aucun code récupéré.

