-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 23 avr. 2022 à 23:07
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ixpensa`
--

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `id_transaction` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fk_id_category` int(9) UNSIGNED DEFAULT NULL,
  `amount` float UNSIGNED NOT NULL DEFAULT '0',
  `fk_id_user` int(11) UNSIGNED DEFAULT NULL,
  `type` tinyint(4) UNSIGNED DEFAULT NULL COMMENT '1 ==> personal, 2 ==> business',
  `note` mediumtext NOT NULL,
  `type_transaction` tinyint(4) UNSIGNED DEFAULT NULL COMMENT '1 => expense, 2 => income',
  `recurring_expense` tinyint(1) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `inserted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_transaction`),
  KEY `fk_id_user_transactions` (`fk_id_user`),
  KEY `fk_id_category_transactions` (`fk_id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `transactions`
--

INSERT INTO `transactions` (`id_transaction`, `fk_id_category`, `amount`, `fk_id_user`, `type`, `note`, `type_transaction`, `recurring_expense`, `date`, `inserted_at`) VALUES
(1, 1, 3152420, 6, 1, 'rest rest', 1, 1, '2022-04-22', '2022-04-23 22:36:39');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `fk_id_category_transactions` FOREIGN KEY (`fk_id_category`) REFERENCES `categories` (`id_category`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `fk_id_user_transactions` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
