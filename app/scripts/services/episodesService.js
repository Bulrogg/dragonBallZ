'use strict';

angular.module('episodes.service', []);

angular.module('episodes.service').factory('episodesService', function() {
	return {
		'listeDesEpisodes' : [
		{ 'id':'001', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'un mysterieux guerrier' },
		{ 'id':'002', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le passe de sangoku' },
		{ 'id':'003', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Un equipe de choc' },
		{ 'id':'004', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Quand les ennemis s\'allient' },
		{ 'id':'005', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Sangoku sacrifie sa vie' },
		{ 'id':'006', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Pour une victoire definitive' },
		{ 'id':'007', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'L\'entrainement de sangohan' },
		{ 'id':'008', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La metamorphose de sangohan' },
		{ 'id':'009', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le robot' },
		{ 'id':'010', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Un compagnon pour sangohan' },
		{ 'id':'011', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une courte escale' },
		{ 'id':'012', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Un chemin sans fin' },
		{ 'id':'013', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le passage secret' },
		{ 'id':'014', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le palai' },
		{ 'id':'015', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Sangohan lutte pour survivre' },
		{ 'id':'016', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le village abandonne' },
		{ 'id':'017', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La cité des guerriers' },
		{ 'id':'018', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La fin du voyage' },
		{ 'id':'019', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La loi de la pesanteur' },
		{ 'id':'020', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La legende des guerriers de l\'espace' },
		{ 'id':'021', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La fin de l\'entrainement de sangoku' },
		{ 'id':'022', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Des graines tres etrange' },
		{ 'id':'023', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une tactique monstrueuse' },
		{ 'id':'024', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Un acte de courage' },
		{ 'id':'025', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La force du desespoire' },
		{ 'id':'026', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La treve' },
		{ 'id':'027', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Un retour tres attendu' },
		{ 'id':'028', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une double perte' },
		{ 'id':'029', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'L\'insurpassable technique de kaioh' },
		{ 'id':'030', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Sangoku vs Vegeta' },
		{ 'id':'031', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'La transformation de Vegeta' },
		{ 'id':'032', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Au dela de la derniere chance' },
		{ 'id':'033', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le don de la force' },
		{ 'id':'034', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une lourde responsabilitée' },
		{ 'id':'035', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une etonnante transformation' },
		{ 'id':'036', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Une nouvelle destination' },
		{ 'id':'037', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Voyage au bout du monde' },
		{ 'id':'038', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Depart pour la planete Namek' },
		{ 'id':'039', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Prisonniers dans l\'espace' },
		{ 'id':'040', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Destination Namek' },
		{ 'id':'041', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Des ami tres attentionnes' },
		{ 'id':'042', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'L\'ennemie se reveille' },
		{ 'id':'043', 'urlRutube':'', 'saison':'Saison 1: l\'arrivée des sayens', 'titre':'Le dernier piège' },
		{ 'id':'044', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'arrivée sur namek' },
		{ 'id':'045', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une puissance extraordinaire' },
		{ 'id':'046', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Jusqu\'au bout de l\'univers' },
		{ 'id':'047', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les nameks contre le tyran' },
		{ 'id':'048', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un soldat impitoyable' },
		{ 'id':'049', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une terrible revelation' },
		{ 'id':'050', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un incident de parcours' },
		{ 'id':'051', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Des nouvelle de Kaioh' },
		{ 'id':'052', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le troisieme adversaire' },
		{ 'id':'053', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La transformation du troisieme adversaire' },
		{ 'id':'054', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Rencontre avec le chef des namec' },
		{ 'id':'055', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une guerrison miraculeuse' },
		{ 'id':'056', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Qui rira le dernier' },
		{ 'id':'057', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Jour de chance pour l\'ennemi' },
		{ 'id':'058', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'armée secrète du tyran' },
		{ 'id':'059', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Bonne chance Bulma' },
		{ 'id':'060', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les deboires de Bulma' },
		{ 'id':'061', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'armée secrète arrive' },
		{ 'id':'062', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une troupe de choc' },
		{ 'id':'063', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sous le pouvoir de l\'ennemie' },
		{ 'id':'064', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le soufle destructeur' },
		{ 'id':'065', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sangohan contre l\'invincible soldat' },
		{ 'id':'066', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un guerrier legendaire' },
		{ 'id':'067', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sangoku aux prises avec les ennemis' },
		{ 'id':'068', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le capitaine des forces special' },
		{ 'id':'069', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le défi du capitaine' },
		{ 'id':'070', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Freezer a la recherche du mot magique' },
		{ 'id':'071', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La metamorphose' },
		{ 'id':'072', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les sept boules de cristal enfin retrouvees' },
		{ 'id':'073', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sous l\'apparence de sangoku' },
		{ 'id':'074', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une erreur fatal' },
		{ 'id':'075', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La formule magique' },
		{ 'id':'076', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les trois voeux enfin realises' },
		{ 'id':'077', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'The_Fusion' },
		{ 'id':'078', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une force insurmontable' },
		{ 'id':'079', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La riposte de sangohan' },
		{ 'id':'080', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'arrivée de satan petit coeur' },
		{ 'id':'081', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Freezer vs petit coeur' },
		{ 'id':'082', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Seconde transformation' },
		{ 'id':'083', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Doit-on sauver vegeta' },
		{ 'id':'084', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La perte d\'un allier precieux' },
		{ 'id':'085', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le retour de sangoku' },
		{ 'id':'086', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une fin tragique pour Vegeta' },
		{ 'id':'087', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sangoku tiendra t\'il sa promesse' },
		{ 'id':'088', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La promesse rompue' },
		{ 'id':'089', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une lutte interminable' },
		{ 'id':'090', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Tentative d\'intimidation' },
		{ 'id':'091', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'attaque de Kaioh' },
		{ 'id':'092', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un atout pour la victoire' },
		{ 'id':'093', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les grandes forces de l\'univers' },
		{ 'id':'094', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La phase final' },
		{ 'id':'095', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'apparition d\'un guerrier legendaire' },
		{ 'id':'096', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une terrible vengeance' },
		{ 'id':'097', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un denouement difficile' },
		{ 'id':'098', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La force totale' },
		{ 'id':'099', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le souhait de Kaioh' },
		{ 'id':'100', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Un fils courageux' },
		{ 'id':'101', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Le dernier souhait' },
		{ 'id':'102', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Une lueur d\'espoir pour sangoku' },
		{ 'id':'103', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Les derniere minutes avant l\'explosion' },
		{ 'id':'104', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La fin du Tyran' },
		{ 'id':'105', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'La defaite de freezer' },
		{ 'id':'106', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'L\'explosion d\'un heros' },
		{ 'id':'107', 'urlRutube':'', 'saison':'Saison 2: Un monstre nommé Freezer', 'titre':'Sangoku est vivant' },
		{ 'id':'108', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Le succeseur du tout puissant' },
		{ 'id':'109', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Le poison diabolique' },
		{ 'id':'110', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Le champs de bataille au paradie' },
		{ 'id':'111', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Coup de colère ou coup de grace' },
		{ 'id':'112', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Petit coeur redeviendra Satan' },
		{ 'id':'113', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Un pouvoir grandissant' },
		{ 'id':'114', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Le mystere du firmament' },
		{ 'id':'115', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'Un tour diabolique' },
		{ 'id':'116', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'La fin de la magie noire' },
		{ 'id':'117', 'urlRutube':'', 'saison':'Saison 3: Le Retour de Garlic Junior', 'titre':'En age de se marier' },
		{ 'id':'118', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Freezer contre attaque' },
		{ 'id':'119', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le mystérieux sauveur' },
		{ 'id':'120', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Mauvaise surprise pour Freezer' },
		{ 'id':'121', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Qui est ce mystérieux guerrier' },
		{ 'id':'122', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le secret bien garde' },
		{ 'id':'123', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'La nouvelle technique de Sangoku' },
		{ 'id':'124', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'La grande preparation' },
		{ 'id':'125', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Une nouvelle epreuve pour Sangoku' },
		{ 'id':'126', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'L\'arrivée des cyborgs' },
		{ 'id':'127', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Les cyborgs' },
		{ 'id':'128', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'La botte secrete des cyborg' },
		{ 'id':'129', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le retour de Vegeta' },
		{ 'id':'130', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le secret' },
		{ 'id':'131', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Qui sont les cyborgs' },
		{ 'id':'132', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'A la recherche du laboratoire' },
		{ 'id':'133', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le cauchemar devient réalité' },
		{ 'id':'134', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le dernier née' },
		{ 'id':'135', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Un cyborg sans peur et sans reproche' },
		{ 'id':'136', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Un combat inegal' },
		{ 'id':'137', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'La decision de Petit Coeur' },
		{ 'id':'138', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Sangoku est a l\'abri' },
		{ 'id':'139', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le mauvais presage' },
		{ 'id':'140', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'Le passager de la seconde machine a voyager dans le temps' },
		{ 'id':'141', 'urlRutube':'', 'saison':'Saison 4: Les cyborgs', 'titre':'L\'union fait la force' },
		{ 'id':'142', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Un monstre aux pouvoirs effrayants' },
		{ 'id':'143', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Un quatrième Cyborgs' },
		{ 'id':'144', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'L\'erreur de Petit-coeur' },
		{ 'id':'145', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le secret de la naissance de Cell' },
		{ 'id':'146', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le réveil de Sangoku' },
		{ 'id':'147', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Une lueur d\'espoir' },
		{ 'id':'148', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les Cyborgs repères' },
		{ 'id':'149', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Tout près du but' },
		{ 'id':'150', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La créature invincible' },
		{ 'id':'151', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Un adversaire de taille' },
		{ 'id':'152', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les robots ne sont pas de taille' },
		{ 'id':'153', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La bouée de sauvetage' },
		{ 'id':'154', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le bout du tunnel' },
		{ 'id':'155', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'L\'apogée de Végéta' },
		{ 'id':'156', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'A genoux devant Végéta' },
		{ 'id':'157', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'L\'arrogance de Végéta' },
		{ 'id':'158', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le choix de Krilin' },
		{ 'id':'159', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Prélude avant la terreur' },
		{ 'id':'160', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La terreur en marche' },
		{ 'id':'161', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Végéta en danger !' },
		{ 'id':'162', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Trunks fait des Ã©tincelles' },
		{ 'id':'163', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Trunks au secours de Végéta' },
		{ 'id':'164', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Trunks le survivant du futur' },
		{ 'id':'165', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La terrible proposition de Cell' },
		{ 'id':'166', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Pourquoi un tournoi ?' },
		{ 'id':'167', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le spectacle continue' },
		{ 'id':'168', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le retour de Sangoku' },
		{ 'id':'169', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Ailleurs' },
		{ 'id':'170', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La fausse alerte' },
		{ 'id':'171', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Photo de famille' },
		{ 'id':'172', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'L\'assaut contre Cell' },
		{ 'id':'173', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Un nouveau Dieu' },
		{ 'id':'174', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les boules de cristal' },
		{ 'id':'175', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les vingt dernières minutes' },
		{ 'id':'176', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les disciples d\'Hercule' },
		{ 'id':'177', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Premier round' },
		{ 'id':'178', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le grand jeu' },
		{ 'id':'179', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La tactique secrète' },
		{ 'id':'180', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Sangoku abandonne' },
		{ 'id':'181', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le dernier participant' },
		{ 'id':'182', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le secret de Sangohan' },
		{ 'id':'183', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La mort de C 16' },
		{ 'id':'184', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les monstres miniatures' },
		{ 'id':'185', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Bravo Sangohan' },
		{ 'id':'186', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Cell K,O,' },
		{ 'id':'187', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La fin du cauchemar' },
		{ 'id':'188', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le sacrifice' },
		{ 'id':'189', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La terreur' },
		{ 'id':'190', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Tel pÃ¨re, tel fils' },
		{ 'id':'191', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le jour de la délivrance' },
		{ 'id':'192', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'La paix est revenue' },
		{ 'id':'193', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le 2me souhait' },
		{ 'id':'194', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Le cauchemar du monde futur' },
		{ 'id':'195', 'urlRutube':'', 'saison':'Saison 5: Cell', 'titre':'Les habitants de l\'autre mondes' },
		{ 'id':'196', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Encore un tournoi?' },
		{ 'id':'197', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Les quarts de finale' },
		{ 'id':'198', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'La finale de tous les dangers' },
		{ 'id':'199', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Le nouveau champion' },
		{ 'id':'200', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Le premier jour d\'école' },
		{ 'id':'201', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Le guerrier intergalactique' },
		{ 'id':'202', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Romance' },
		{ 'id':'203', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Videl en mauvaise posture' },
		{ 'id':'204', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Face Ã face' },
		{ 'id':'205', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Un championnat qui s\'annonce mal' },
		{ 'id':'206', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Tel père, tel fils' },
		{ 'id':'207', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Comment taquiner les oiseaux ?' },
		{ 'id':'208', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Rappel des troupes' },
		{ 'id':'209', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Comme au bon vieux temps' },
		{ 'id':'210', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Petit Trunks deviendra grand' },
		{ 'id':'211', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Trunks contre Sangoten' },
		{ 'id':'212', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Que le meilleur gagne!' },
		{ 'id':'213', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Hercule, le faux héros!' },
		{ 'id':'214', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'Tirage au sort' },
		{ 'id':'215', 'urlRutube':'', 'saison':'Saison 6: Encore un Tournoi !', 'titre':'L\'abandon de petit coeur' },
		{ 'id':'216', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'L\'adversaire de Videl' },
		{ 'id':'217', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La premère défaite' },
		{ 'id':'218', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangohan est démasqué' },
		{ 'id':'219', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La fin du mystère' },
		{ 'id':'220', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La course poursuite' },
		{ 'id':'221', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le premier sous-sol' },
		{ 'id':'222', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La surprise du 2ème sous-sol' },
		{ 'id':'223', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangoku est inébranlable' },
		{ 'id':'224', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le tournoi reprend' },
		{ 'id':'225', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le guerrier démasqué' },
		{ 'id':'226', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Un échange de bons procédés' },
		{ 'id':'227', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangohan Ã l\'épreuve!' },
		{ 'id':'228', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La face cachée de Végéta' },
		{ 'id':'229', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La terrible confrontation' },
		{ 'id':'230', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La revanche de Végéta' },
		{ 'id':'231', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Végéta s\'explique' },
		{ 'id':'232', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une apparition attendue' },
		{ 'id':'233', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Des apparences trompeuses' },
		{ 'id':'234', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Attention, danger!' },
		{ 'id':'235', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le biscuit géant' },
		{ 'id':'236', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le defi d\'un père' },
		{ 'id':'237', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le sacrifice d\'un père' },
		{ 'id':'238', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Tout recommence Ã zéro' },
		{ 'id':'239', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Deux absences inexpliquées' },
		{ 'id':'240', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Un seul souhait' },
		{ 'id':'241', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La douloureuse nouvelle' },
		{ 'id':'242', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'L\'épée sacrée du royaume des cieux' },
		{ 'id':'243', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Deux fortes têtes' },
		{ 'id':'244', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le chantage continue' },
		{ 'id':'245', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Un coup de bluff?' },
		{ 'id':'246', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Boubou se révolte' },
		{ 'id':'247', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La fin de la permission de Sangoku' },
		{ 'id':'248', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le temps des adieux' },
		{ 'id':'249', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Des adieux et des retrouvailles' },
		{ 'id':'250', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'L\'épée cassée' },
		{ 'id':'251', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Péché d\'orgueil' },
		{ 'id':'252', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le doyen des dieux' },
		{ 'id':'253', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le monstre et le chiot' },
		{ 'id':'254', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une accalmie' },
		{ 'id':'255', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Trois Boo différents' },
		{ 'id':'256', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une visite inattendue' },
		{ 'id':'257', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Les dernières secondes de répit' },
		{ 'id':'258', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une drôle de tactique' },
		{ 'id':'259', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Les super fantômes kamikazes' },
		{ 'id':'260', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La porte entre les deux dimensions' },
		{ 'id':'261', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une partie de volley qui tourne mal' },
		{ 'id':'262', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le choc des titans' },
		{ 'id':'263', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une lueur d\'espoir' },
		{ 'id':'264', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La mystérieuse réapparition de Dendé' },
		{ 'id':'265', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une erreur fatale' },
		{ 'id':'266', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le retour a la vie' },
		{ 'id':'267', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Les boucles magiques' },
		{ 'id':'268', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le refus de Végéta' },
		{ 'id':'269', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La naissance d\'un nouveau super héros' },
		{ 'id':'270', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'On n\'est pas hors de danger' },
		{ 'id':'271', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'L\'étrange attitude de Végétto' },
		{ 'id':'272', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une erreur qui risque de coûter cher' },
		{ 'id':'273', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Un drôle de labyrinthe' },
		{ 'id':'274', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Gare aux mirages' },
		{ 'id':'275', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le monstre a deux têtes' },
		{ 'id':'276', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La sortie de secours' },
		{ 'id':'277', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Prochaine victime : la Terre' },
		{ 'id':'278', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La tragèdie continue' },
		{ 'id':'279', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La menace qui pÃ¨se sur l\'autre-monde' },
		{ 'id':'280', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangoku joue son va-tout' },
		{ 'id':'281', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La minute de vérité' },
		{ 'id':'282', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une intervention providentielle' },
		{ 'id':'283', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le dragon de la planète Namec' },
		{ 'id':'284', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La stratégie du dernier espoir' },
		{ 'id':'285', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'L\'ingratitude des Terriens' },
		{ 'id':'286', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangoku passe a l\'attaque' },
		{ 'id':'287', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Boo et les billets débarquent' },
		{ 'id':'288', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Le bonheur retrouvé' },
		{ 'id':'289', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'La troisième génération' },
		{ 'id':'290', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Une vieille connaissance' },
		{ 'id':'291', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Sangoku commence une nouvelle vie' },
		{ 'id':'292', 'urlRutube':'', 'saison':'Saison 7: Boubou !', 'titre':'Merci'}
		],
		mergerUrlRutube = function(liste) {
			
		}
	};
});