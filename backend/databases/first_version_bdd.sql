-- phpMyAdmin SQL Dump
-- version 4.9.7 
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 11 avr. 2022 à 03:57
-- Version du serveur :  10.3.32-MariaDB
-- Version de PHP : 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `beetendersnew_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) UNSIGNED NOT NULL,
  `name_category` varchar(100) NOT NULL,
  `fk_id_user` int(11) UNSIGNED NOT NULL,
  `icon` varchar(30) NOT NULL,
  `type` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-IsXoTEdufyaSk3VPLwLlwKs-MPcoS95', 1652110080, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('-LYrtmQDDc9jN8WIq473N-YW_CHaOoMP', 1651482992, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('-nnZ0DU5Yb6khBHXTbpWsq-zF5qO8TBI', 1651858231, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('0Dv7Za38jnvd-CNMtTEc7mXAnp-_Dg4E', 1652055005, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('1RZrgrcMHZ1hIaA2JsArLAvNC9zn-G4n', 1651798301, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('2N-tHsG-Kqb-YkIrkurpBys1JdDWPUbC', 1652055010, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('2O_MHQ0QkzU8l_VP5ZdvEOUigv7RIzIS', 1652110071, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('2eidqSUrRKmBMzAnCQ9tmKGHo85j1G0B', 1652014287, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('2oaFLODL7frfY7J7oHgKe7CcuOl7cxZc', 1652055015, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('31nW_bzd9lSvZ0ZBY5fAoqHxA24C4xuO', 1651777290, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('32kCy-ixksWlyqP_WVA1fUgkBw45oWaa', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('3NjIgoNtaXpTCxjAKpy4zu4PkIkejZUT', 1651597135, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('3OjlYN-DNV9VnRolk9odkvm_laA4VzpZ', 1652110072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('3kQKg5AIe_6k2t7zIbcd0O0h38s522pW', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('5aL4mfqsOBJwCqAPSauinI9hMEtSWStF', 1652014282, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('68_66OyHaCnxBJYZF9nB6mBoD2vpp3EO', 1652014274, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('6CVRdR7s5lPTwdl33NBRAzAILeudGZNY', 1651862960, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('6Cmb0g-iarKiAK53taTG6uJFmzHIXEEy', 1652014285, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('6gKB2vOMkRTyhai38c3qMVkKO8UrPox5', 1652141094, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('7PDv-flShgFoo5eKhaDvUy81CxxavKD4', 1652141094, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('7yHZ9GDfrW0UQnDX2fGfPqoLjxqhv05K', 1652110073, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('8eldNJG3lyGuqBjwdH4x0leQYZXKN0PN', 1652110072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('8vRA2FIWGB1RGuJmJX-M1uKgCgM3zhrY', 1652014275, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('AtCbgjVx24jd7xGXYf7k43BklJ2m2j9g', 1652110088, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('B3BM-r_4IZTyvgkXDpPID6dyYmbxiULb', 1652014281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('BUAhWje_u2VoNMOOvIniDpi4K21Sgtt8', 1652110072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('BgyfvXjir1VMLzATaW6rXBR013pFVf4P', 1652014284, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Csc2GWCgWV46XI_TVoShwWQ8tdoEYy2r', 1651886341, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('DQtwO0HX7B6qXJP164bQV2MaJb_Wzs8_', 1652055029, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('DagFPlXcQSckvM4L8bDY-dmW7Adj2avs', 1652014283, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('E8yQ-1mNuvzgAIZAGxp9wgxhmcsk-kUP', 1652055016, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('EZ8NaKmShkckG5vLdvtX6KaOwGqhy_h2', 1652110072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('EfLtVh-ow_OCBrTJijyDHoxZe79D-iYd', 1652110075, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Ep8uNTlCdVr6Pb6mKvPZfYBOaRblFCxL', 1651445436, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('F1kDpk9Gs0W6hBTu2b8mB7Dih-myrxsO', 1652185976, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('F6K0SDnoEJ0fUyW9_0N2J8eb-zaWblSu', 1651636567, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('FAVp1furFThAxtDXeVwFgqpOMZZ_B_Zn', 1651777290, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('FGePoJlmU590ARr7Hq-HoseHPTPhv8ac', 1651973788, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('FQ2qJLQiRR09cPzUp8qfqmAcj3Ik-rPx', 1652195212, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('FZ3twtJ2eAmL4IcbAhXz0jKqE-T9RrJp', 1651420525, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('G4yEkEIydoHIcpaXB1xcg5eg8iCFO1Ax', 1651886286, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('HTYHP3mu_nnsZ4o7a8Jo0lXo8QFY7t2B', 1652014275, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('HbbFP87d3f551M7wTQ1hfiLJL6Tj3ez1', 1651420163, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IGljncQAXl8uKqf-uUiXbl3c-N5eqybM', 1652110080, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IK_SZ6xZE1ECQ_spq-ngbtm6TtH6mRJy', 1651680534, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IYofSqxWfRM-zy2YJUJpXyjBEhkRPtlZ', 1651680533, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IaFUndAJVeiTeEyrViL_S_eIaL1hihYz', 1652014277, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IicEcj4Ib1u96IB-a7WUnHVmPJW78xC6', 1652193193, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('IoMXOlnBbrbFEmgiRqk0ZSgSF_T-XdIf', 1652176806, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('J66aHvWu2_96Yva-fBD0KoXaxcUTzfkm', 1652014318, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('JXpvW_VfxKyYvDfp9dXwj_xgluxLa0eb', 1651886327, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('KQl6U8e2CHCYawgUGumnL5hGeybwoyT6', 1651443548, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LAvNdBAMjTryEtKxIF_1NxFQKoFIy5AW', 1652110073, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LD4BbLGjGdLF5sLEIbYODFKzdrGkbtTt', 1652110074, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LaDsXDNvi-oRJ_WRqgrZeSMII3997fAg', 1652176808, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LwpXYf-i6rhmWO_83p8pWirflkyoFD1B', 1652055027, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('LxUloX6LdxoGZBxmm6t7LCO8n2Kitdg7', 1652232789, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('M9CBvbQrUvZ2m2pAJg1akHBr-ItN4mYD', 1652232772, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('MfM54csDEmogVkcRwBgYPTgwDe3QxpyF', 1652195212, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('NE5slVaHNcxgM-lYAefMsBwRNunEqCVi', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('NEJy-4AHBXjcPKTYnlBnGk49OZboZc-5', 1652110087, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('NcFqI7xQqxbSI925QSB1-GFUWRGWTvNw', 1652014275, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('OexNPWMDBYcr17QguOAnSd9T_qq7wPA_', 1652141096, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('OqzvlmoUDZvbhk8hboIOqEFxU8reK8t1', 1651804429, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('PI6Q4EMnQXJaw-nlGfxx5jnhx6qDN8oK', 1652055026, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('PO3rT0ULVUuLiKo0Xg9Lr6Jg0ZAgo5TV', 1652014276, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('PfeDTNVmwX_7cCQTiSY6At3TrP-72EJ-', 1652110073, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('PmmwEBdLRZ41gmEjn9cGtYpQ5Lb0nGai', 1652014281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('PoXqIHdYpFASYqUAk46Ju8tILZOqJqHA', 1652110075, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('QDsQ1jZCwxzgagmV8qS_EMe-3KT0WA7C', 1652200959, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('QG145uYTiBycEqgcPVEOToO-Ww_FNMkk', 1652014275, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('QnBbUAudE0XQfmWaBulaqSf7p07gj8m0', 1652014280, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('RzcqlMGdCjBKTTLTLOxoZAjx0-mjnCC7', 1651886277, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('SjzUMAEQQ6A3ggR-BP8iDuV-BPuiCAgo', 1652055036, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('SyNtZT5m6udhOoIIh13W_XpZLp65qyGt', 1652014281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Uf6FfKDDDbaSxkmAGqaMiHNOnuSkMgMD', 1652054997, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('UpfM9rvYgQp85424V3HNrT1NYVwEeyDZ', 1652209250, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('V81j2elTS6yLkbVJ_9zulhnp8hmXcJ7V', 1652195206, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('WPDPEx5LEcowghfIjiBDw-c1l9p8Mjar', 1651489668, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('WhDzvg8bXPrtRolvjc1D9E_X50xFAOUR', 1652014269, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('X3tfUdUSr28kXr6QBSCYKbx_RFZsEQi7', 1651595622, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('XXAff6uOL6eMFHg4Ls0RQGIDYiQarVUR', 1652055032, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('XkpZsJ87bsUvOgLAatHiCf0lgRXxvhZQ', 1652014281, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('Za4Q2VE0ouWwjCkmSVUDKLtcE24aw2K1', 1652110074, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ZnojSZ_4G89Jdo4p21u9-fXpee_l_YqH', 1651416536, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('_7sn8cVmpF6GEZGKrrjRkNBT1PrlEe8e', 1651622857, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('_LQbHbiKOyovWMtxQ_1nkxPGTmiRZ9IC', 1652055036, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('_Nv2hdhEiWBrDMcv_RnZIu2_d-8DJaS7', 1652014273, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('_nYnBhSHGR0-Jm5m0Lt2Y_SIjsB8953O', 1652055004, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('a7m7NErxnD0RiMcHjr4u46k0HW1-Cn30', 1652109997, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('aXoa_FGjcuw5XTj4NjHiEPHV1t3cIte7', 1651858226, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('b85EXa6xVmvJmqp8LHuP9rU7RQivw1QT', 1652055003, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('bfU5uiYaQ3DnnfdU_zoUUPiQkMX_5k4D', 1652014282, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('cPb4Vsp20WvEhnjv63puazhZz87bHgH1', 1652232785, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('cT78lkN6PVT346OIdpA0loJDIugAZf6J', 1652014276, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('cTje-aS66piCUs64tN-13-QCLVKvB7Vb', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('dZQM-Z9kpvzyPxYxUtUr6LZAlT1X1it8', 1652110071, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('eIA9JeCB8rV060Q_ZZokoH4ovKbasC8-', 1652055015, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ecCJ1r4BvPKdC8BeHv0vPrXp4xnc4rnc', 1652014273, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('g6p32BBMVRG8wijGqwb18XQt7oHBSLer', 1652014317, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('g_empEycBCgKApkRAHBCcwIESVDPDymn', 1652201037, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('gmcPtJXMWyc2c_WNQV-c5AqJkGt24Sff', 1652055028, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('hOi3Fs0QDWaBncWi8lkhrjS8oTQZsNgH', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('hZrx9lQVAVXsx43g_qCa7N63Q7vG0taZ', 1651886313, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('haK4r5qyFG4XH1gxk0xilhBv2aSZGZ5E', 1651858232, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('hd8zSqnnpDiCZ02dYWWliNsobkPs9zyT', 1652014216, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('hiaEFUtBcdkDll1_XrniiWE3I8ufU4b_', 1652055033, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('i9MemR6U1B4oieUDlfdMWyuFvkPeOVVf', 1652055016, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('iPEL59h7DyydpM_x73rDi901eXWeKnQF', 1652014283, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ibptGDmPaGML4TZHZO7hxiO-4KYpYCpj', 1651549176, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ihYZAZ0gS3RI3MQZfGwnQ8Xav8VSdlIq', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('im8ynrP-9Leqz2ekSA3BFo7VTPusiPB6', 1652110074, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('jNe6cxOw57tvsuWwLP7h_rKUDs-96QYg', 1652141095, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('jSRCwa9PioPXgkQohkdZ-gIWICSOEgiS', 1652014268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('je0gb6-J4ymy7Sp3SBGk0nAOYFVLoZzo', 1652110073, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('l2QluNyzK5IGdR_eCDclbVa3HtyRDMb3', 1651482991, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('nF6jxXf-uDE_JjiWOyckh74v0-r5O6nF', 1651886299, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ommJWeX9CD1BmW03XKDeqyRLcKR8N3BX', 1652054998, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('owopW5A6K_nd9HLUF9kj0qEXoj1GiQ-u', 1652055022, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('pJe43d5tK4Reh5VPL8VUiapJpdr1zi6L', 1651804489, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('pSK7Sqw40MYkUvdT20pn9U3patvSoeLi', 1652055003, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('qgR_O7CgaKDYsBj4QKXrCHW3NOw9Noq5', 1652055022, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('qpK9fXkbmmyfoMb8C53DUkuCgTuuB47J', 1652014272, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('rQqYq9aWwQcxyrvKN07bF8hTM7bDvSDs', 1651858226, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('r_kJQBBhydRzHljf5angwK__lJ_CJ4q3', 1652176810, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ro5ucx6kka0EzEuFvMNj_ChfBy939VW-', 1652195212, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('s1JoX8c3V3fsU1gn_thNILQjwh3qXh-w', 1651482991, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('t7Mt46loHjuOjIT2pipGYd5a4WOUK3di', 1652176809, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('t9a_Bw5cCPeUqlruyG0ggo-ZoPBXUnxA', 1652232792, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('tNEQgdKuPcmKyLAzWIk3QrEGWyplJEoG', 1652014276, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('tmidmrNjPFONpHRL4Irfap_CcQrxqBWY', 1652014274, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('tqFbAlPCL4frw2LUhpZLJZFrcZoQEwC5', 1651886355, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('ueWteodoYIAaU2NNjTvLm5Xw6tEAjVZi', 1652014278, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('vEIvZwmjJDbHMpEcedZZQbydgL6X2G1w', 1652110074, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('xIJlIShJnHAKPmzarAKK0ss8Mp5jQ5Oc', 1652026995, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('xJMlJu2T7RO_QKbIiCuUfnjtqgyPW37t', 1651482989, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('xPPDncJG3tgfIWer3T9WZjEskOnvAWJ2', 1651858618, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('xrlznkddjrWyKLr9CteRIfXrqRoe2zOy', 1652110072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('yB6DmKiQezBkQgOgoaFtCfNjmPbQEMZh', 1651973776, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('yMORzwu7n2hIHeaWpvSfG6XZXRz6Z8hh', 1652055009, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('yr9RVohcGppj0Vdi_iR-fnoIT0cbvMJk', 1652014274, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('zDwi5Ix1VPvf-hy3NXYRLwdU1k3Sh1av', 1652110075, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}');

-- --------------------------------------------------------

--
-- Structure de la table `tokens`
--

CREATE TABLE `tokens` (
  `id_token` int(11) UNSIGNED NOT NULL,
  `token` mediumtext DEFAULT NULL,
  `refresh_token` mediumtext DEFAULT NULL,
  `id_user` int(11) UNSIGNED NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tokens`
--

INSERT INTO `tokens` (`id_token`, `token`, `refresh_token`, `id_user`, `date`) VALUES
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5MDAzNTg0fQ.CO2uAyOsiY_m4mPynHZg9GxqNYn-8WuXl3zRNBQCbAY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5MDAzNTg0fQ.CO2uAyOsiY_m4mPynHZg9GxqNYn-8WuXl3zRNBQCbAY', 6, '2022-04-03 16:33:04'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5MDA1MTM0fQ.QZAkcza_SRJi6EUgX8sKyKNbXRjhKNIMqh_RraUClV8', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5MDA1MTM0fQ.QZAkcza_SRJi6EUgX8sKyKNbXRjhKNIMqh_RraUClV8', 6, '2022-04-03 16:58:54'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAwOTc4fQ.TMIODD77wmtGju9ZK2nEk3M91XwV3c3YRxiAQLTDa34', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAwOTc4fQ.TMIODD77wmtGju9ZK2nEk3M91XwV3c3YRxiAQLTDa34', 6, '2022-04-10 14:29:38'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMDg2fQ.AxyhquO5cay8McVUJZjeCyvR2uRHtDLivK6eKBvm9qM', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMDg2fQ.AxyhquO5cay8McVUJZjeCyvR2uRHtDLivK6eKBvm9qM', 6, '2022-04-10 14:31:26'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTA3fQ.Gun4hVWCsrSHhdi95Lkvsmx93MhYF6W2f7KzzTR-Iis', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTA3fQ.Gun4hVWCsrSHhdi95Lkvsmx93MhYF6W2f7KzzTR-Iis', 6, '2022-04-10 14:31:47'),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTE1fQ.hFOjm8p9xhFxUM7l4At-1Uwhb0oKs2YThcPGqWYY4MY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTE1fQ.hFOjm8p9xhFxUM7l4At-1Uwhb0oKs2YThcPGqWYY4MY', 6, '2022-04-10 14:31:55'),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTMyfQ.fidS8s7_Ae8RxLtJXY8q0scxPJXe-f5zIL4hbcbPl3c', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTMyfQ.fidS8s7_Ae8RxLtJXY8q0scxPJXe-f5zIL4hbcbPl3c', 6, '2022-04-10 14:32:12'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTM4fQ.SlgvLN4sutqGcgW_Zqx1AwernqJJWEDNCM2sH2Fpcb8', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTM4fQ.SlgvLN4sutqGcgW_Zqx1AwernqJJWEDNCM2sH2Fpcb8', 6, '2022-04-10 14:32:18'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTcxfQ.veXCoaymJLRReOwCboYP3dF9wxaFFSP46CVh1Ywbkxs', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTcxfQ.veXCoaymJLRReOwCboYP3dF9wxaFFSP46CVh1Ywbkxs', 6, '2022-04-10 14:32:51'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTc1fQ.bEJ4CfjbIMI6KqfPrT8Q0MtD2y_UKxiUXzicBbnUouw', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTc1fQ.bEJ4CfjbIMI6KqfPrT8Q0MtD2y_UKxiUXzicBbnUouw', 6, '2022-04-10 14:32:55'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTkyfQ.DwpRgqYVqk7sYQluzTnzPqpHR6_KaauTLMGq2DLhVp8', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJpZGlyc2FtaXIyMDBAZ21haWwuY29tIiwiaWF0IjoxNjQ5NjAxMTkyfQ.DwpRgqYVqk7sYQluzTnzPqpHR6_KaauTLMGq2DLhVp8', 6, '2022-04-10 14:33:12');

-- --------------------------------------------------------

--
-- Structure de la table `tokens_pswd`
--

CREATE TABLE `tokens_pswd` (
  `id_token_pswd` int(11) UNSIGNED NOT NULL,
  `token_pswd` mediumtext NOT NULL,
  `id_user` int(11) UNSIGNED NOT NULL,
  `added_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tokens_pswd`
--

INSERT INTO `tokens_pswd` (`id_token_pswd`, `token_pswd`, `id_user`, `added_at`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkaXJzYW1pcjIwMEBnbWFpbC5jb20iLCJpYXQiOjE2NDkyMTI0ODN9.bcK6kmxv24GUXU-zEGPhYekhtVikOlPAzBjdwykuZAQ', 6, '2022-04-06 02:34:43');

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE `transactions` (
  `id_transaction` int(11) UNSIGNED NOT NULL,
  `fk_id_category` int(9) UNSIGNED DEFAULT NULL,
  `amount` float NOT NULL DEFAULT 0,
  `fk_id_user` int(11) UNSIGNED DEFAULT NULL,
  `note` mediumtext NOT NULL,
  `type` tinyint(4) UNSIGNED DEFAULT NULL COMMENT '1 => expense, 2 => income',
  `time` time DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) UNSIGNED NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `activation_code` varchar(150) DEFAULT NULL,
  `date_last_login` timestamp NOT NULL DEFAULT current_timestamp(),
  `signed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `full_name`, `email`, `password`, `activation_code`, `date_last_login`, `signed_at`) VALUES
(6, 'samir idir', 'idirsamir200@gmail.com', '$2b$10$u0t6ff8/lAjS3LHNY26I6uruY5Qw.kZxkCs5nMGUSplXLpL5tqMcq', 'eyJhbGciOiJIUzI1NiJ9.aWRpcnNhbWlyMjAwQGdtYWlsLmNvbQ.py2a6zOm36qih_Sb_65ZjBDtYc6zsGVwOYUCmTzkuZQ', '2022-04-10 14:33:12', '2022-04-01 22:19:07');

-- --------------------------------------------------------

--
-- Structure de la table `user_preferences`
--

CREATE TABLE `user_preferences` (
  `id_preference` int(11) UNSIGNED NOT NULL,
  `fk_id_user` int(11) UNSIGNED NOT NULL,
  `theme_color` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `theme_dark_mode` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `category_order` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `currency` int(11) UNSIGNED DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_preferences`
--

INSERT INTO `user_preferences` (`id_preference`, `fk_id_user`, `theme_color`, `theme_dark_mode`, `category_order`, `currency`, `date`) VALUES
(1, 6, 0, 0, NULL, NULL, '2022-04-01 22:19:07');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`),
  ADD KEY `fk_id_user_category` (`fk_id_user`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id_token`);

--
-- Index pour la table `tokens_pswd`
--
ALTER TABLE `tokens_pswd`
  ADD PRIMARY KEY (`id_token_pswd`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id_transaction`),
  ADD KEY `fk_id_user_transactions` (`fk_id_user`),
  ADD KEY `fk_id_category_transactions` (`fk_id_category`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD PRIMARY KEY (`id_preference`),
  ADD KEY `fk_id_user` (`fk_id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id_token` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `tokens_pswd`
--
ALTER TABLE `tokens_pswd`
  MODIFY `id_token_pswd` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id_transaction` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `user_preferences`
--
ALTER TABLE `user_preferences`
  MODIFY `id_preference` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_id_user_category` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `tokens_pswd`
--
ALTER TABLE `tokens_pswd`
  ADD CONSTRAINT `fk_id_user_f` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `fk_id_category_transactions` FOREIGN KEY (`fk_id_category`) REFERENCES `categories` (`id_category`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `fk_id_user_transactions` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD CONSTRAINT `fk_id_user_preferences` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
