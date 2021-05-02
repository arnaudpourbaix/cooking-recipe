import { MigrationInterface, QueryRunner } from 'typeorm';

export class IngredientInserts1617616621272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('insert into ingredient values(1, "Betterave", 1)');
    queryRunner.query('insert into ingredient values(2, "Brocoli", 1)');
    queryRunner.query('insert into ingredient values(3, "Carotte", 1)');
    queryRunner.query('insert into ingredient values(4, "Céleri rave", 1)');
    queryRunner.query('insert into ingredient values(5, "Céleri branche", 1)');
    queryRunner.query('insert into ingredient values(6, "Chou rouge", 1)');
    queryRunner.query('insert into ingredient values(7, "Chou-fleur", 1)');
    queryRunner.query(
      'insert into ingredient values(8, "Chou de Bruxelles", 1)'
    );
    queryRunner.query('insert into ingredient values(9, "Courge", 1)');
    queryRunner.query('insert into ingredient values(10, "Cresson", 1)');
    queryRunner.query('insert into ingredient values(11, "Endive", 1)');
    queryRunner.query('insert into ingredient values(12, "Épinard", 1)');
    queryRunner.query('insert into ingredient values(13, "Mâche", 1)');
    queryRunner.query('insert into ingredient values(14, "Navet", 1)');
    queryRunner.query('insert into ingredient values(15, "Oignon", 1)');
    queryRunner.query('insert into ingredient values(16, "Oseille", 1)');
    queryRunner.query('insert into ingredient values(17, "Panais", 1)');
    queryRunner.query('insert into ingredient values(18, "Poireau", 1)');
    queryRunner.query('insert into ingredient values(19, "Potiron", 1)');
    queryRunner.query('insert into ingredient values(20, "Radis", 1)');
    queryRunner.query('insert into ingredient values(21, "Salsifis", 1)');
    queryRunner.query('insert into ingredient values(22, "Topinambour", 1)');
    queryRunner.query('insert into ingredient values(23, "Avocat", 1)');

    queryRunner.query('insert into ingredient values(24, "Ananas", 2)');
    queryRunner.query('insert into ingredient values(25, "Banane", 2)');
    queryRunner.query('insert into ingredient values(26, "Citron", 2)');
    queryRunner.query('insert into ingredient values(27, "Clémentine", 2)');
    queryRunner.query(
      'insert into ingredient values(28, "Fruit de la passion", 2)'
    );
    queryRunner.query('insert into ingredient values(29, "Goyave", 2)');
    queryRunner.query('insert into ingredient values(30, "Grenade", 2)');
    queryRunner.query('insert into ingredient values(31, "Kaki", 2)');
    queryRunner.query('insert into ingredient values(32, "Kiwi", 2)');
    queryRunner.query('insert into ingredient values(33, "Litchi", 2)');
    queryRunner.query('insert into ingredient values(34, "Mandarine", 2)');
    queryRunner.query('insert into ingredient values(35, "Mangue", 2)');
    queryRunner.query('insert into ingredient values(36, "Pamplemousse", 2)');
    queryRunner.query('insert into ingredient values(37, "Papaye", 2)');
    queryRunner.query('insert into ingredient values(38, "Poire", 2)');
    queryRunner.query('insert into ingredient values(39, "Pomelo", 2)');
    queryRunner.query('insert into ingredient values(40, "Pomme", 2)');
    queryRunner.query('insert into ingredient values(41, "Orange", 2)');
    queryRunner.query(
      'insert into ingredient values(42, "Orange sanguine", 2)'
    );
    queryRunner.query('insert into ingredient values(43, "Abricot", 2)');
    queryRunner.query('insert into ingredient values(44, "Cassis", 2)');
    queryRunner.query('insert into ingredient values(45, "Cerise", 2)');
    queryRunner.query('insert into ingredient values(46, "Fraise", 2)');
    queryRunner.query('insert into ingredient values(47, "Framboise", 2)');
    queryRunner.query('insert into ingredient values(48, "Melon", 2)');
    queryRunner.query('insert into ingredient values(49, "Mûre", 2)');
    queryRunner.query('insert into ingredient values(50, "Prune", 2)');
    queryRunner.query('insert into ingredient values(51, "Rhubarbe", 2)');
    queryRunner.query('insert into ingredient values(52, "Artichaut", 1)');
    queryRunner.query('insert into ingredient values(53, "Asperge", 1)');
    queryRunner.query('insert into ingredient values(54, "Aubergine", 1)');
    queryRunner.query('insert into ingredient values(55, "Concombre", 1)');
    queryRunner.query('insert into ingredient values(56, "Courgette", 1)');
    queryRunner.query('insert into ingredient values(61, "Poivron", 1)');
    queryRunner.query('insert into ingredient values(62, "Salade frisée", 1)');
    queryRunner.query('insert into ingredient values(63, "Laitue", 1)');
    queryRunner.query('insert into ingredient values(64, "Tomate", 1)');
    queryRunner.query('insert into ingredient values(65, "Ail", 1)');
    queryRunner.query('insert into ingredient values(66, "Batavia", 1)');
    queryRunner.query('insert into ingredient values(67, "Blette", 1)');
    queryRunner.query('insert into ingredient values(68, "Cornichon", 1)');
    queryRunner.query('insert into ingredient values(69, "Fenouil", 1)');
    queryRunner.query('insert into ingredient values(70, "Haricot vert", 1)');
    queryRunner.query('insert into ingredient values(72, "Mesclun", 1)');
    queryRunner.query('insert into ingredient values(73, "Pâtisson", 1)');
    queryRunner.query('insert into ingredient values(74, "Brugnon", 2)');
    queryRunner.query('insert into ingredient values(75, "Figue", 2)');
    queryRunner.query('insert into ingredient values(76, "Groseille", 2)');
    queryRunner.query(
      'insert into ingredient values(77, "Fraise des bois", 2)'
    );
    queryRunner.query('insert into ingredient values(78, "Mirabelle", 2)');
    queryRunner.query('insert into ingredient values(79, "Myrtille", 2)');
    queryRunner.query('insert into ingredient values(80, "Nectarine", 2)');
    queryRunner.query('insert into ingredient values(81, "Pastèque", 2)');
    queryRunner.query('insert into ingredient values(82, "Pêche", 2)');
    queryRunner.query('insert into ingredient values(83, "Quetsche", 2)');
    queryRunner.query('insert into ingredient values(84, "Raisin", 2)');
    queryRunner.query('insert into ingredient values(85, "Reine-claude", 2)');
    queryRunner.query('insert into ingredient values(86, "Bolet", 1)');
    queryRunner.query('insert into ingredient values(87, "Cèpe", 1)');
    queryRunner.query('insert into ingredient values(88, "Chou chinois", 1)');
    queryRunner.query('insert into ingredient values(89, "Pleurote", 1)');
    queryRunner.query(
      'insert into ingredient values(90, "Trompette de la mort", 1)'
    );
    queryRunner.query('insert into ingredient values(91, "Châtaigne", 2)');
    queryRunner.query('insert into ingredient values(92, "Clémentine", 2)');
    queryRunner.query('insert into ingredient values(93, "Coing", 2)');
    queryRunner.query('insert into ingredient values(94, "Olive verte", 1)');
    queryRunner.query('insert into ingredient values(95, "Olive noire", 1)');
    queryRunner.query(
      'insert into ingredient values(96, "Champignon de Paris", 1)'
    );
    queryRunner.query('insert into ingredient values(97, "Lentille verte", 3)');
    queryRunner.query('insert into ingredient values(98, "Lentille rouge", 3)');
    queryRunner.query(
      'insert into ingredient values(99, "Lentille blonde", 3)'
    );
    queryRunner.query(
      'insert into ingredient values(100, "Lentille corail", 3)'
    );
    queryRunner.query('insert into ingredient values(101, "Pois chiche", 3)');
    queryRunner.query('insert into ingredient values(102, "Pois cassé", 3)');
    queryRunner.query('insert into ingredient values(103, "Petit pois", 3)');
    queryRunner.query('insert into ingredient values(104, "Pois gourmand", 3)');
    queryRunner.query('insert into ingredient values(105, "Fève", 3)');
    queryRunner.query('insert into ingredient values(106, "Haricot rose", 3)');
    queryRunner.query('insert into ingredient values(107, "Haricot rouge", 3)');
    queryRunner.query('insert into ingredient values(108, "Haricot noir", 3)');
    queryRunner.query('insert into ingredient values(109, "Riz", 4)');
    queryRunner.query('insert into ingredient values(110, "Maïs", 4)');
    queryRunner.query('insert into ingredient values(111, "Avoine", 4)');
    queryRunner.query('insert into ingredient values(112, "Millet", 4)');
    queryRunner.query('insert into ingredient values(113, "Sorgho", 4)');
    queryRunner.query('insert into ingredient values(114, "Fonio", 4)');
    queryRunner.query('insert into ingredient values(115, "Teff", 4)');
    queryRunner.query('insert into ingredient values(116, "Amaranthe", 4)');
    queryRunner.query('insert into ingredient values(117, "Quinoa", 4)');
    queryRunner.query('insert into ingredient values(118, "Chia", 4)');
    queryRunner.query('insert into ingredient values(119, "Sarrazin", 4)');

    queryRunner.query('insert into ingredient values(120, "Amande", 5)');
    queryRunner.query('insert into ingredient values(121, "Noix", 5)');
    queryRunner.query('insert into ingredient values(122, "Noix de cajou", 5)');
    queryRunner.query(
      'insert into ingredient values(123, "Noix de macadamia", 5)'
    );
    queryRunner.query('insert into ingredient values(124, "Noix de pécan", 5)');
    queryRunner.query(
      'insert into ingredient values(125, "Noix du Brésil", 5)'
    );
    queryRunner.query('insert into ingredient values(126, "Noix de coco", 5)');
    queryRunner.query('insert into ingredient values(127, "Noisette", 5)');
    queryRunner.query('insert into ingredient values(128, "Pistache", 5)');
    queryRunner.query('insert into ingredient values(129, "Pignon de pin", 5)');
    queryRunner.query('insert into ingredient values(130, "Soja", 5)');
    queryRunner.query('insert into ingredient values(131, "Cacahuète", 5)');
    queryRunner.query('insert into ingredient values(132, "Sésame", 5)');
    queryRunner.query('insert into ingredient values(133, "Courge", 5)');
    queryRunner.query('insert into ingredient values(134, "Lin", 5)');
    queryRunner.query('insert into ingredient values(135, "Tournesol", 5)');
    queryRunner.query('insert into ingredient values(136, "Colza", 5)');
    queryRunner.query('insert into ingredient values(137, "Fève de cacao", 5)');
    queryRunner.query('insert into ingredient values(138, "Pavot", 5)');
    queryRunner.query('insert into ingredient values(139, "Badiane", 6)');
    queryRunner.query('insert into ingredient values(140, "Baie rose", 6)');
    queryRunner.query('insert into ingredient values(141, "Cannelle", 6)');
    queryRunner.query('insert into ingredient values(142, "Cardamome", 6)');
    queryRunner.query('insert into ingredient values(143, "Coriandre", 6)');
    queryRunner.query('insert into ingredient values(144, "Curcuma", 6)');
    queryRunner.query('insert into ingredient values(145, "Fève de Tonka", 6)');
    queryRunner.query('insert into ingredient values(146, "Gingembre", 6)');
    queryRunner.query('insert into ingredient values(147, "Macis", 6)');
    queryRunner.query('insert into ingredient values(148, "Paprika", 6)');
    queryRunner.query(
      'insert into ingredient values(149, "Piment d’Espelette", 6)'
    );
    queryRunner.query(
      'insert into ingredient values(150, "Poivre de Sichuan", 6)'
    );
    queryRunner.query('insert into ingredient values(151, "Safran", 6)');
    queryRunner.query('insert into ingredient values(152, "Sumac", 6)');
    queryRunner.query(
      'insert into ingredient values(153, "Clou de girofle", 6)'
    );
    queryRunner.query('insert into ingredient values(154, "Curry", 6)');
    queryRunner.query(
      'insert into ingredient values(155, "Curry de Madras", 6)'
    );
    queryRunner.query('insert into ingredient values(156, "Muscade", 6)');
    queryRunner.query('insert into ingredient values(157, "Ras-el-hanout", 6)');
    queryRunner.query('insert into ingredient values(158, "Vanille", 6)');
    queryRunner.query(
      'insert into ingredient values(159, "Poivre de cayenne", 6)'
    );
    queryRunner.query('insert into ingredient values(160, "Poivre noir", 6)');
    queryRunner.query('insert into ingredient values(161, "Poivre blanc", 6)');
    queryRunner.query('insert into ingredient values(162, "Poivre vert", 6)');
    queryRunner.query('insert into ingredient values(163, "Sel", 6)');
    queryRunner.query('insert into ingredient values(164, "Raisin", 7)');
    queryRunner.query('insert into ingredient values(165, "Abricot", 7)');
    queryRunner.query('insert into ingredient values(166, "Figue", 7)');
    queryRunner.query('insert into ingredient values(167, "Pomme", 7)');
    queryRunner.query('insert into ingredient values(168, "Poire", 7)');
    queryRunner.query('insert into ingredient values(169, "Pruneau", 7)');
    queryRunner.query('insert into ingredient values(170, "Banane", 7)');
    queryRunner.query('insert into ingredient values(171, "Mangue", 7)');
    queryRunner.query('insert into ingredient values(172, "Papaye", 7)');
    queryRunner.query('insert into ingredient values(173, "Datte medjool", 7)');
    queryRunner.query('insert into ingredient values(174, "Baie de Goji", 7)');
    queryRunner.query(
      'insert into ingredient values(175, "Myrtille sauvage", 7)'
    );
    queryRunner.query('insert into ingredient values(176, "Aneth", 6)');
    queryRunner.query('insert into ingredient values(177, "Ail", 6)');
    queryRunner.query('insert into ingredient values(178, "Basilic", 6)');
    queryRunner.query(
      'insert into ingredient values(179, "Baies de genièvre", 6)'
    );
    queryRunner.query('insert into ingredient values(180, "Garam Masala", 6)');
    queryRunner.query('insert into ingredient values(181, "Romarin", 6)');
    queryRunner.query('insert into ingredient values(182, "Cumin", 6)');
    queryRunner.query('insert into ingredient values(183, "Persil", 6)');
    queryRunner.query('insert into ingredient values(184, "Origan", 6)');
    queryRunner.query(
      'insert into ingredient values(185, "Herbe de Provence", 6)'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
