# Analyse du compte Instagram @super7_lyon

Source : relevé transmis par le client (Olivier), à partir du compte. Rien n'a été téléchargé par la maquette elle-même hors les 6 photos fournies. Maquette de refonte non officielle, réalisée par Olivier Ruminski. Contenus © Super7.

## Compte

- 10,4 k abonnés, bio « lieu de vie et club », jeudi au dimanche 17h à 01h, 40 rue Saint-Jérôme 69007 Lyon.
- Stories à la une : « this week ».

## Affiches

- Typo pixel étirée avec effet de balayage horizontal (lignes de balayage, lettres en ondulation), gigantesque.
- Orange vif (proche #FF4A14) sur gris clair froid (proche #D2D0CC) ou sur brun profond (proche #4A2E2B) ; variante orange plein avec lettres grises.
- Petits textes en capitales grotesques fines.
- Hiérarchie : gros titre pixel, puis programmation en colonnes, chaque artiste avec BAR ou CLUB en exposant. Très aéré, aucune illustration, pas de néon.
- Slow Opening (24 au 27 sept.) : Axymt, Bœuf & Brocoli, Farah & Mouataz, IMA:R, Isa, Mastaï, Neskeh, Notserious Bigs, Nuage Rose, Pablo Valentino, Pelaya, P Errine, Sayan, S.D.S, Tauceti, Waxist ; « 17h, 01h, GRATUIT » ; 40 rue Saint-Jérôme 69007 Lyon ; « lieu de vie et club ».
- Programmation du 15 au 18 oct. : voir le brief.

## Photos

Chaleur ambrée, plâtre brut et murs patinés, bois clair brut, enceintes hi-fi vintage et disques, briques de verre rouges, tuyauterie rouge, grandes verrières, rue la nuit, foule et lasers rouges en club. Garage industriel reconverti en salon de musique, ni froid ni brillant, convivial, esthétique argentique et naturelle, cadrages sobres.

## Ton

Sobre, minimal, quasi sans phrases, informatif.

## Application dans la maquette

| Constat | Application |
|---|---|
| Couleurs mesurées | tokens `--orange` #FF4A14, `--beton` #D2D0CC, `--brun-affiche` #4A2E2B ; orange sur clair assombri (#B83A06) pour l'AA |
| Typo à balayage | masque CSS de lignes fines sur les titres pixel géants (ondulation non reprise : coût de rendu) |
| BAR / CLUB en exposant | page Programmation et cartes de l'accueil |
| Orange plein, lettres grises | non repris (contraste AA insuffisant) ; l'orange plein sert au survol avec texte encre |
| Photos ambrées et argentiques | grain global, duotone orange au survol, cadrages sobres sans gros plan de visages |
| Line-up du slow opening | section dédiée de l'accueil |
| Ton sobre | textes courts partout |
