-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 23 avr. 2022 à 21:54
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
-- Structure de la table `currencies`
--

DROP TABLE IF EXISTS `currencies`;
CREATE TABLE IF NOT EXISTS `currencies` (
  `id_currencies` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Entity` varchar(58) DEFAULT NULL,
  `Currency` varchar(65) DEFAULT NULL,
  `Alphabetic_Code` varchar(15) DEFAULT NULL,
  `Numeric_Code` varchar(12) DEFAULT NULL,
  `Minor_Unit` varchar(10) DEFAULT NULL,
  `Withdrawal_Date` varchar(15) DEFAULT NULL,
  `Withdrawal_Interval` varchar(19) DEFAULT NULL,
  PRIMARY KEY (`id_currencies`)
) ENGINE=InnoDB AUTO_INCREMENT=439 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `currencies`
--

INSERT INTO `currencies` (`id_currencies`, `Entity`, `Currency`, `Alphabetic_Code`, `Numeric_Code`, `Minor_Unit`, `Withdrawal_Date`, `Withdrawal_Interval`) VALUES
(1, 'ALGERIA', 'Algerian Dinar', 'DZD', NULL, NULL, NULL, NULL),
(2, 'AFGHANISTAN', 'Afghani', 'AFN', '971', '2', '', ''),
(3, 'ÅLAND ISLANDS', 'Euro', 'EUR', '978', '2', '', ''),
(4, 'ALBANIA', 'Lek', 'ALL', '008', '2', '', ''),
(6, 'AMERICAN SAMOA', 'US Dollar', 'USD', '840', '2', '', ''),
(7, 'ANDORRA', 'Euro', 'EUR', '978', '2', '', ''),
(8, 'ANGOLA', 'Kwanza', 'AOA', '973', '2', '', ''),
(9, 'ANGUILLA', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(11, 'ANTIGUA AND BARBUDA', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(12, 'ARGENTINA', 'Argentine Peso', 'ARS', '032', '2', '', ''),
(13, 'ARMENIA', 'Armenian Dram', 'AMD', '051', '2', '', ''),
(14, 'ARUBA', 'Aruban Florin', 'AWG', '533', '2', '', ''),
(15, 'AUSTRALIA', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(16, 'AUSTRIA', 'Euro', 'EUR', '978', '2', '', ''),
(17, 'AZERBAIJAN', 'Azerbaijan Manat', 'AZN', '944', '2', '', ''),
(18, 'BAHAMAS (THE)', 'Bahamian Dollar', 'BSD', '044', '2', '', ''),
(19, 'BAHRAIN', 'Bahraini Dinar', 'BHD', '048', '3', '', ''),
(20, 'BANGLADESH', 'Taka', 'BDT', '050', '2', '', ''),
(21, 'BARBADOS', 'Barbados Dollar', 'BBD', '052', '2', '', ''),
(22, 'BELARUS', 'Belarusian Ruble', 'BYN', '933', '2', '', ''),
(23, 'BELGIUM', 'Euro', 'EUR', '978', '2', '', ''),
(24, 'BELIZE', 'Belize Dollar', 'BZD', '084', '2', '', ''),
(25, 'BENIN', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(26, 'BERMUDA', 'Bermudian Dollar', 'BMD', '060', '2', '', ''),
(27, 'BHUTAN', 'Indian Rupee', 'INR', '356', '2', '', ''),
(28, 'BHUTAN', 'Ngultrum', 'BTN', '064', '2', '', ''),
(29, 'BOLIVIA (PLURINATIONAL STATE OF)', 'Boliviano', 'BOB', '068', '2', '', ''),
(30, 'BOLIVIA (PLURINATIONAL STATE OF)', 'Mvdol', 'BOV', '984', '2', '', ''),
(31, 'BONAIRE, SINT EUSTATIUS AND SABA', 'US Dollar', 'USD', '840', '2', '', ''),
(32, 'BOSNIA AND HERZEGOVINA', 'Convertible Mark', 'BAM', '977', '2', '', ''),
(33, 'BOTSWANA', 'Pula', 'BWP', '072', '2', '', ''),
(34, 'BOUVET ISLAND', 'Norwegian Krone', 'NOK', '578', '2', '', ''),
(35, 'BRAZIL', 'Brazilian Real', 'BRL', '986', '2', '', ''),
(36, 'BRITISH INDIAN OCEAN TERRITORY (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(37, 'BRUNEI DARUSSALAM', 'Brunei Dollar', 'BND', '096', '2', '', ''),
(38, 'BULGARIA', 'Bulgarian Lev', 'BGN', '975', '2', '', ''),
(39, 'BURKINA FASO', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(40, 'BURUNDI', 'Burundi Franc', 'BIF', '108', '0', '', ''),
(41, 'CABO VERDE', 'Cabo Verde Escudo', 'CVE', '132', '2', '', ''),
(42, 'CAMBODIA', 'Riel', 'KHR', '116', '2', '', ''),
(43, 'CAMEROON', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(44, 'CANADA', 'Canadian Dollar', 'CAD', '124', '2', '', ''),
(45, 'CAYMAN ISLANDS (THE)', 'Cayman Islands Dollar', 'KYD', '136', '2', '', ''),
(46, 'CENTRAL AFRICAN REPUBLIC (THE)', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(47, 'CHAD', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(48, 'CHILE', 'Chilean Peso', 'CLP', '152', '0', '', ''),
(49, 'CHILE', 'Unidad de Fomento', 'CLF', '990', '4', '', ''),
(50, 'CHINA', 'Yuan Renminbi', 'CNY', '156', '2', '', ''),
(51, 'CHRISTMAS ISLAND', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(52, 'COCOS (KEELING) ISLANDS (THE)', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(53, 'COLOMBIA', 'Colombian Peso', 'COP', '170', '2', '', ''),
(54, 'COLOMBIA', 'Unidad de Valor Real', 'COU', '970', '2', '', ''),
(55, 'COMOROS (THE)', 'Comorian Franc ', 'KMF', '174', '0', '', ''),
(56, 'CONGO (THE DEMOCRATIC REPUBLIC OF THE)', 'Congolese Franc', 'CDF', '976', '2', '', ''),
(57, 'CONGO (THE)', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(58, 'COOK ISLANDS (THE)', 'New Zealand Dollar', 'NZD', '554', '2', '', ''),
(59, 'COSTA RICA', 'Costa Rican Colon', 'CRC', '188', '2', '', ''),
(60, 'CÔTE D\'IVOIRE', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(61, 'CROATIA', 'Kuna', 'HRK', '191', '2', '', ''),
(62, 'CUBA', 'Cuban Peso', 'CUP', '192', '2', '', ''),
(63, 'CUBA', 'Peso Convertible', 'CUC', '931', '2', '', ''),
(64, 'CURAÇAO', 'Netherlands Antillean Guilder', 'ANG', '532', '2', '', ''),
(65, 'CYPRUS', 'Euro', 'EUR', '978', '2', '', ''),
(66, 'CZECHIA', 'Czech Koruna', 'CZK', '203', '2', '', ''),
(67, 'DENMARK', 'Danish Krone', 'DKK', '208', '2', '', ''),
(68, 'DJIBOUTI', 'Djibouti Franc', 'DJF', '262', '0', '', ''),
(69, 'DOMINICA', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(70, 'DOMINICAN REPUBLIC (THE)', 'Dominican Peso', 'DOP', '214', '2', '', ''),
(71, 'ECUADOR', 'US Dollar', 'USD', '840', '2', '', ''),
(72, 'EGYPT', 'Egyptian Pound', 'EGP', '818', '2', '', ''),
(73, 'EL SALVADOR', 'El Salvador Colon', 'SVC', '222', '2', '', ''),
(74, 'EL SALVADOR', 'US Dollar', 'USD', '840', '2', '', ''),
(75, 'EQUATORIAL GUINEA', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(76, 'ERITREA', 'Nakfa', 'ERN', '232', '2', '', ''),
(77, 'ESTONIA', 'Euro', 'EUR', '978', '2', '', ''),
(78, 'ETHIOPIA', 'Ethiopian Birr', 'ETB', '230', '2', '', ''),
(79, 'EUROPEAN UNION', 'Euro', 'EUR', '978', '2', '', ''),
(80, 'FALKLAND ISLANDS (THE) [MALVINAS]', 'Falkland Islands Pound', 'FKP', '238', '2', '', ''),
(81, 'FAROE ISLANDS (THE)', 'Danish Krone', 'DKK', '208', '2', '', ''),
(82, 'FIJI', 'Fiji Dollar', 'FJD', '242', '2', '', ''),
(83, 'FINLAND', 'Euro', 'EUR', '978', '2', '', ''),
(84, 'FRANCE', 'Euro', 'EUR', '978', '2', '', ''),
(85, 'FRENCH GUIANA', 'Euro', 'EUR', '978', '2', '', ''),
(86, 'FRENCH POLYNESIA', 'CFP Franc', 'XPF', '953', '0', '', ''),
(87, 'FRENCH SOUTHERN TERRITORIES (THE)', 'Euro', 'EUR', '978', '2', '', ''),
(88, 'GABON', 'CFA Franc BEAC', 'XAF', '950', '0', '', ''),
(89, 'GAMBIA (THE)', 'Dalasi', 'GMD', '270', '2', '', ''),
(90, 'GEORGIA', 'Lari', 'GEL', '981', '2', '', ''),
(91, 'GERMANY', 'Euro', 'EUR', '978', '2', '', ''),
(92, 'GHANA', 'Ghana Cedi', 'GHS', '936', '2', '', ''),
(93, 'GIBRALTAR', 'Gibraltar Pound', 'GIP', '292', '2', '', ''),
(94, 'GREECE', 'Euro', 'EUR', '978', '2', '', ''),
(95, 'GREENLAND', 'Danish Krone', 'DKK', '208', '2', '', ''),
(96, 'GRENADA', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(97, 'GUADELOUPE', 'Euro', 'EUR', '978', '2', '', ''),
(98, 'GUAM', 'US Dollar', 'USD', '840', '2', '', ''),
(99, 'GUATEMALA', 'Quetzal', 'GTQ', '320', '2', '', ''),
(100, 'GUERNSEY', 'Pound Sterling', 'GBP', '826', '2', '', ''),
(101, 'GUINEA', 'Guinean Franc', 'GNF', '324', '0', '', ''),
(102, 'GUINEA-BISSAU', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(103, 'GUYANA', 'Guyana Dollar', 'GYD', '328', '2', '', ''),
(104, 'HAITI', 'Gourde', 'HTG', '332', '2', '', ''),
(105, 'HAITI', 'US Dollar', 'USD', '840', '2', '', ''),
(106, 'HEARD ISLAND AND McDONALD ISLANDS', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(107, 'HOLY SEE (THE)', 'Euro', 'EUR', '978', '2', '', ''),
(108, 'HONDURAS', 'Lempira', 'HNL', '340', '2', '', ''),
(109, 'HONG KONG', 'Hong Kong Dollar', 'HKD', '344', '2', '', ''),
(110, 'HUNGARY', 'Forint', 'HUF', '348', '2', '', ''),
(111, 'ICELAND', 'Iceland Krona', 'ISK', '352', '0', '', ''),
(112, 'INDIA', 'Indian Rupee', 'INR', '356', '2', '', ''),
(113, 'INDONESIA', 'Rupiah', 'IDR', '360', '2', '', ''),
(114, 'INTERNATIONAL MONETARY FUND (IMF) ', 'SDR (Special Drawing Right)', 'XDR', '960', '', '', ''),
(115, 'IRAN (ISLAMIC REPUBLIC OF)', 'Iranian Rial', 'IRR', '364', '2', '', ''),
(116, 'IRAQ', 'Iraqi Dinar', 'IQD', '368', '3', '', ''),
(117, 'IRELAND', 'Euro', 'EUR', '978', '2', '', ''),
(118, 'ISLE OF MAN', 'Pound Sterling', 'GBP', '826', '2', '', ''),
(119, 'ISRAEL', 'New Israeli Sheqel', 'ILS', '376', '2', '', ''),
(120, 'ITALY', 'Euro', 'EUR', '978', '2', '', ''),
(121, 'JAMAICA', 'Jamaican Dollar', 'JMD', '388', '2', '', ''),
(122, 'JAPAN', 'Yen', 'JPY', '392', '0', '', ''),
(123, 'JERSEY', 'Pound Sterling', 'GBP', '826', '2', '', ''),
(124, 'JORDAN', 'Jordanian Dinar', 'JOD', '400', '3', '', ''),
(125, 'KAZAKHSTAN', 'Tenge', 'KZT', '398', '2', '', ''),
(126, 'KENYA', 'Kenyan Shilling', 'KES', '404', '2', '', ''),
(127, 'KIRIBATI', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(128, 'KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)', 'North Korean Won', 'KPW', '408', '2', '', ''),
(129, 'KOREA (THE REPUBLIC OF)', 'Won', 'KRW', '410', '0', '', ''),
(130, 'KUWAIT', 'Kuwaiti Dinar', 'KWD', '414', '3', '', ''),
(131, 'KYRGYZSTAN', 'Som', 'KGS', '417', '2', '', ''),
(132, 'LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)', 'Lao Kip', 'LAK', '418', '2', '', ''),
(133, 'LATVIA', 'Euro', 'EUR', '978', '2', '', ''),
(134, 'LEBANON', 'Lebanese Pound', 'LBP', '422', '2', '', ''),
(135, 'LESOTHO', 'Loti', 'LSL', '426', '2', '', ''),
(136, 'LESOTHO', 'Rand', 'ZAR', '710', '2', '', ''),
(137, 'LIBERIA', 'Liberian Dollar', 'LRD', '430', '2', '', ''),
(138, 'LIBYA', 'Libyan Dinar', 'LYD', '434', '3', '', ''),
(139, 'LIECHTENSTEIN', 'Swiss Franc', 'CHF', '756', '2', '', ''),
(140, 'LITHUANIA', 'Euro', 'EUR', '978', '2', '', ''),
(141, 'LUXEMBOURG', 'Euro', 'EUR', '978', '2', '', ''),
(142, 'MACAO', 'Pataca', 'MOP', '446', '2', '', ''),
(143, 'MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)', 'Denar', 'MKD', '807', '2', '', ''),
(144, 'MADAGASCAR', 'Malagasy Ariary', 'MGA', '969', '2', '', ''),
(145, 'MALAWI', 'Malawi Kwacha', 'MWK', '454', '2', '', ''),
(146, 'MALAYSIA', 'Malaysian Ringgit', 'MYR', '458', '2', '', ''),
(147, 'MALDIVES', 'Rufiyaa', 'MVR', '462', '2', '', ''),
(148, 'MALI', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(149, 'MALTA', 'Euro', 'EUR', '978', '2', '', ''),
(150, 'MARSHALL ISLANDS (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(151, 'MARTINIQUE', 'Euro', 'EUR', '978', '2', '', ''),
(152, 'MAURITANIA', 'Ouguiya', 'MRO', '478', '2', '', ''),
(153, 'MAURITIUS', 'Mauritius Rupee', 'MUR', '480', '2', '', ''),
(154, 'MAYOTTE', 'Euro', 'EUR', '978', '2', '', ''),
(155, 'MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP', 'ADB Unit of Account', 'XUA', '965', '', '', ''),
(156, 'MEXICO', 'Mexican Peso', 'MXN', '484', '2', '', ''),
(157, 'MEXICO', 'Mexican Unidad de Inversion (UDI)', 'MXV', '979', '2', '', ''),
(158, 'MICRONESIA (FEDERATED STATES OF)', 'US Dollar', 'USD', '840', '2', '', ''),
(159, 'MOLDOVA (THE REPUBLIC OF)', 'Moldovan Leu', 'MDL', '498', '2', '', ''),
(160, 'MONACO', 'Euro', 'EUR', '978', '2', '', ''),
(161, 'MONGOLIA', 'Tugrik', 'MNT', '496', '2', '', ''),
(162, 'MONTENEGRO', 'Euro', 'EUR', '978', '2', '', ''),
(163, 'MONTSERRAT', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(164, 'MOROCCO', 'Moroccan Dirham', 'MAD', '504', '2', '', ''),
(165, 'MOZAMBIQUE', 'Mozambique Metical', 'MZN', '943', '2', '', ''),
(166, 'MYANMAR', 'Kyat', 'MMK', '104', '2', '', ''),
(167, 'NAMIBIA', 'Namibia Dollar', 'NAD', '516', '2', '', ''),
(168, 'NAMIBIA', 'Rand', 'ZAR', '710', '2', '', ''),
(169, 'NAURU', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(170, 'NEPAL', 'Nepalese Rupee', 'NPR', '524', '2', '', ''),
(171, 'NETHERLANDS (THE)', 'Euro', 'EUR', '978', '2', '', ''),
(172, 'NEW CALEDONIA', 'CFP Franc', 'XPF', '953', '0', '', ''),
(173, 'NEW ZEALAND', 'New Zealand Dollar', 'NZD', '554', '2', '', ''),
(174, 'NICARAGUA', 'Cordoba Oro', 'NIO', '558', '2', '', ''),
(175, 'NIGER (THE)', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(176, 'NIGERIA', 'Naira', 'NGN', '566', '2', '', ''),
(177, 'NIUE', 'New Zealand Dollar', 'NZD', '554', '2', '', ''),
(178, 'NORFOLK ISLAND', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(179, 'NORTHERN MARIANA ISLANDS (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(180, 'NORWAY', 'Norwegian Krone', 'NOK', '578', '2', '', ''),
(181, 'OMAN', 'Rial Omani', 'OMR', '512', '3', '', ''),
(182, 'PAKISTAN', 'Pakistan Rupee', 'PKR', '586', '2', '', ''),
(183, 'PALAU', 'US Dollar', 'USD', '840', '2', '', ''),
(184, 'PALESTINE, STATE OF', 'No universal currency', '', '', '', '', ''),
(185, 'PANAMA', 'Balboa', 'PAB', '590', '2', '', ''),
(186, 'PANAMA', 'US Dollar', 'USD', '840', '2', '', ''),
(187, 'PAPUA NEW GUINEA', 'Kina', 'PGK', '598', '2', '', ''),
(188, 'PARAGUAY', 'Guarani', 'PYG', '600', '0', '', ''),
(189, 'PERU', 'Sol', 'PEN', '604', '2', '', ''),
(190, 'PHILIPPINES (THE)', 'Philippine Piso', 'PHP', '608', '2', '', ''),
(191, 'PITCAIRN', 'New Zealand Dollar', 'NZD', '554', '2', '', ''),
(192, 'POLAND', 'Zloty', 'PLN', '985', '2', '', ''),
(193, 'PORTUGAL', 'Euro', 'EUR', '978', '2', '', ''),
(194, 'PUERTO RICO', 'US Dollar', 'USD', '840', '2', '', ''),
(195, 'QATAR', 'Qatari Rial', 'QAR', '634', '2', '', ''),
(196, 'RÉUNION', 'Euro', 'EUR', '978', '2', '', ''),
(197, 'ROMANIA', 'Romanian Leu', 'RON', '946', '2', '', ''),
(198, 'RUSSIAN FEDERATION (THE)', 'Russian Ruble', 'RUB', '643', '2', '', ''),
(199, 'RWANDA', 'Rwanda Franc', 'RWF', '646', '0', '', ''),
(200, 'SAINT BARTHÉLEMY', 'Euro', 'EUR', '978', '2', '', ''),
(201, 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', 'Saint Helena Pound', 'SHP', '654', '2', '', ''),
(202, 'SAINT KITTS AND NEVIS', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(203, 'SAINT LUCIA', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(204, 'SAINT MARTIN (FRENCH PART)', 'Euro', 'EUR', '978', '2', '', ''),
(205, 'SAINT PIERRE AND MIQUELON', 'Euro', 'EUR', '978', '2', '', ''),
(206, 'SAINT VINCENT AND THE GRENADINES', 'East Caribbean Dollar', 'XCD', '951', '2', '', ''),
(207, 'SAMOA', 'Tala', 'WST', '882', '2', '', ''),
(208, 'SAN MARINO', 'Euro', 'EUR', '978', '2', '', ''),
(209, 'SAO TOME AND PRINCIPE', 'Dobra', 'STD', '678', '2', '', ''),
(210, 'SAUDI ARABIA', 'Saudi Riyal', 'SAR', '682', '2', '', ''),
(211, 'SENEGAL', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(212, 'SERBIA', 'Serbian Dinar', 'RSD', '941', '2', '', ''),
(213, 'SEYCHELLES', 'Seychelles Rupee', 'SCR', '690', '2', '', ''),
(214, 'SIERRA LEONE', 'Leone', 'SLL', '694', '2', '', ''),
(215, 'SINGAPORE', 'Singapore Dollar', 'SGD', '702', '2', '', ''),
(216, 'SINT MAARTEN (DUTCH PART)', 'Netherlands Antillean Guilder', 'ANG', '532', '2', '', ''),
(217, 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS \"SUCRE\"', 'Sucre', 'XSU', '994', '', '', ''),
(218, 'SLOVAKIA', 'Euro', 'EUR', '978', '2', '', ''),
(219, 'SLOVENIA', 'Euro', 'EUR', '978', '2', '', ''),
(220, 'SOLOMON ISLANDS', 'Solomon Islands Dollar', 'SBD', '090', '2', '', ''),
(221, 'SOMALIA', 'Somali Shilling', 'SOS', '706', '2', '', ''),
(222, 'SOUTH AFRICA', 'Rand', 'ZAR', '710', '2', '', ''),
(223, 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'No universal currency', '', '', '', '', ''),
(224, 'SOUTH SUDAN', 'South Sudanese Pound', 'SSP', '728', '2', '', ''),
(225, 'SPAIN', 'Euro', 'EUR', '978', '2', '', ''),
(226, 'SRI LANKA', 'Sri Lanka Rupee', 'LKR', '144', '2', '', ''),
(227, 'SUDAN (THE)', 'Sudanese Pound', 'SDG', '938', '2', '', ''),
(228, 'SURINAME', 'Surinam Dollar', 'SRD', '968', '2', '', ''),
(229, 'SVALBARD AND JAN MAYEN', 'Norwegian Krone', 'NOK', '578', '2', '', ''),
(230, 'SWAZILAND', 'Lilangeni', 'SZL', '748', '2', '', ''),
(231, 'SWEDEN', 'Swedish Krona', 'SEK', '752', '2', '', ''),
(232, 'SWITZERLAND', 'Swiss Franc', 'CHF', '756', '2', '', ''),
(233, 'SWITZERLAND', 'WIR Euro', 'CHE', '947', '2', '', ''),
(234, 'SWITZERLAND', 'WIR Franc', 'CHW', '948', '2', '', ''),
(235, 'SYRIAN ARAB REPUBLIC', 'Syrian Pound', 'SYP', '760', '2', '', ''),
(236, 'TAIWAN (PROVINCE OF CHINA)', 'New Taiwan Dollar', 'TWD', '901', '2', '', ''),
(237, 'TAJIKISTAN', 'Somoni', 'TJS', '972', '2', '', ''),
(238, 'TANZANIA, UNITED REPUBLIC OF', 'Tanzanian Shilling', 'TZS', '834', '2', '', ''),
(239, 'THAILAND', 'Baht', 'THB', '764', '2', '', ''),
(240, 'TIMOR-LESTE', 'US Dollar', 'USD', '840', '2', '', ''),
(241, 'TOGO', 'CFA Franc BCEAO', 'XOF', '952', '0', '', ''),
(242, 'TOKELAU', 'New Zealand Dollar', 'NZD', '554', '2', '', ''),
(243, 'TONGA', 'Pa’anga', 'TOP', '776', '2', '', ''),
(244, 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago Dollar', 'TTD', '780', '2', '', ''),
(245, 'TUNISIA', 'Tunisian Dinar', 'TND', '788', '3', '', ''),
(246, 'TURKEY', 'Turkish Lira', 'TRY', '949', '2', '', ''),
(247, 'TURKMENISTAN', 'Turkmenistan New Manat', 'TMT', '934', '2', '', ''),
(248, 'TURKS AND CAICOS ISLANDS (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(249, 'TUVALU', 'Australian Dollar', 'AUD', '036', '2', '', ''),
(250, 'UGANDA', 'Uganda Shilling', 'UGX', '800', '0', '', ''),
(251, 'UKRAINE', 'Hryvnia', 'UAH', '980', '2', '', ''),
(252, 'UNITED ARAB EMIRATES (THE)', 'UAE Dirham', 'AED', '784', '2', '', ''),
(253, 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)', 'Pound Sterling', 'GBP', '826', '2', '', ''),
(254, 'UNITED STATES MINOR OUTLYING ISLANDS (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(255, 'UNITED STATES OF AMERICA (THE)', 'US Dollar', 'USD', '840', '2', '', ''),
(256, 'UNITED STATES OF AMERICA (THE)', 'US Dollar (Next day)', 'USN', '997', '2', '', ''),
(257, 'URUGUAY', 'Peso Uruguayo', 'UYU', '858', '2', '', ''),
(258, 'URUGUAY', 'Uruguay Peso en Unidades Indexadas (URUIURUI)', 'UYI', '940', '0', '', ''),
(259, 'UZBEKISTAN', 'Uzbekistan Sum', 'UZS', '860', '2', '', ''),
(260, 'VANUATU', 'Vatu', 'VUV', '548', '0', '', ''),
(261, 'VENEZUELA (BOLIVARIAN REPUBLIC OF)', 'Bolívar', 'VEF', '937', '2', '', ''),
(262, 'VIET NAM', 'Dong', 'VND', '704', '0', '', ''),
(263, 'VIRGIN ISLANDS (BRITISH)', 'US Dollar', 'USD', '840', '2', '', ''),
(264, 'VIRGIN ISLANDS (U.S.)', 'US Dollar', 'USD', '840', '2', '', ''),
(265, 'WALLIS AND FUTUNA', 'CFP Franc', 'XPF', '953', '0', '', ''),
(266, 'WESTERN SAHARA', 'Moroccan Dirham', 'MAD', '504', '2', '', ''),
(267, 'YEMEN', 'Yemeni Rial', 'YER', '886', '2', '', ''),
(268, 'ZAMBIA', 'Zambian Kwacha', 'ZMW', '967', '2', '', ''),
(269, 'ZIMBABWE', 'Zimbabwe Dollar', 'ZWL', '932', '2', '', ''),
(270, 'ZZ01_Bond Markets Unit European_EURCO', 'Bond Markets Unit European Composite Unit (EURCO)', 'XBA', '955', '', '', ''),
(271, 'ZZ02_Bond Markets Unit European_EMU-6', 'Bond Markets Unit European Monetary Unit (E.M.U.-6)', 'XBB', '956', '', '', ''),
(272, 'ZZ03_Bond Markets Unit European_EUA-9', 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)', 'XBC', '957', '', '', ''),
(273, 'ZZ04_Bond Markets Unit European_EUA-17', 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)', 'XBD', '958', '', '', ''),
(274, 'ZZ06_Testing_Code', 'Codes specifically reserved for testing purposes', 'XTS', '963', '', '', ''),
(275, 'ZZ07_No_Currency', 'The codes assigned for transactions where no currency is involved', 'XXX', '999', '', '', ''),
(276, 'ZZ08_Gold', 'Gold', 'XAU', '959', '', '', ''),
(277, 'ZZ09_Palladium', 'Palladium', 'XPD', '964', '', '', ''),
(278, 'ZZ10_Platinum', 'Platinum', 'XPT', '962', '', '', ''),
(279, 'ZZ11_Silver', 'Silver', 'XAG', '961', '', '', ''),
(280, 'AFGHANISTAN', 'Afghani', 'AFA', '4', '', '2003-01', ''),
(281, 'Ã…LAND ISLANDS', 'Markka', 'FIM', '246', '', '2002-03', ''),
(282, 'ALBANIA', 'Old Lek', 'ALK', '', '', '1989-12', ''),
(283, 'ANDORRA', 'Andorran Peseta', 'ADP', '20', '', '2003-07', ''),
(284, 'ANDORRA', 'Spanish Peseta', 'ESP', '724', '', '2002-03', ''),
(285, 'ANDORRA', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(286, 'ANGOLA', 'Kwanza', 'AOK', '', '', '1991-03', ''),
(287, 'ANGOLA', 'New Kwanza', 'AON', '24', '', '2000-02', ''),
(288, 'ANGOLA', 'Kwanza Reajustado', 'AOR', '982', '', '2000-02', ''),
(289, 'ARGENTINA', 'Austral', 'ARA', '32', '', '1992-01', ''),
(290, 'ARGENTINA', 'Peso Argentino', 'ARP', '32', '', '1985-07', ''),
(291, 'ARGENTINA', 'Peso', 'ARY', '', '', '', '1989 to 1990'),
(292, 'ARMENIA', 'Russian Ruble', 'RUR', '810', '', '1994-08', ''),
(293, 'AUSTRIA', 'Schilling', 'ATS', '40', '', '2002-03', ''),
(294, 'AZERBAIJAN', 'Azerbaijan Manat', 'AYM', '945', '', '2005-10', ''),
(295, 'AZERBAIJAN', 'Azerbaijanian Manat', 'AZM', '31', '', '2005-12', ''),
(296, 'AZERBAIJAN', 'Russian Ruble', 'RUR', '810', '', '1994-08', ''),
(297, 'BELARUS', 'Belarusian Ruble', 'BYR', '974', '', '2017-01', ''),
(298, 'BELARUS', 'Belarusian Ruble', 'BYB', '112', '', '2001-01', ''),
(299, 'BELARUS', 'Russian Ruble', 'RUR', '810', '', '1994-06', ''),
(300, 'BELGIUM', 'Convertible Franc', 'BEC', '993', '', '1990-03', ''),
(301, 'BELGIUM', 'Belgian Franc', 'BEF', '56', '', '2002-03', ''),
(302, 'BELGIUM', 'Financial Franc', 'BEL', '992', '', '1990-03', ''),
(303, 'BOLIVIA', 'Peso boliviano', 'BOP', '', '', '1987-02', ''),
(304, 'BOSNIA AND HERZEGOVINA', 'Dinar', 'BAD', '70', '', '1998-07', ''),
(305, 'BRAZIL', 'Cruzeiro', 'BRB', '', '', '1986-03', ''),
(306, 'BRAZIL', 'Cruzado', 'BRC', '76', '', '1989-02', ''),
(307, 'BRAZIL', 'Cruzeiro', 'BRE', '76', '', '1993-03', ''),
(308, 'BRAZIL', 'New Cruzado', 'BRN', '76', '', '1990-03', ''),
(309, 'BRAZIL', 'Cruzeiro Real', 'BRR', '987', '', '1994-07', ''),
(310, 'BULGARIA', 'Lev A/52', 'BGJ', '', '', '', '1989 to 1990'),
(311, 'BULGARIA', 'Lev A/62', 'BGK', '', '', '', '1989 to 1990'),
(312, 'BULGARIA', 'Lev', 'BGL', '100', '', '2003-11', ''),
(313, 'BURMAÂ ', 'Kyat', 'BUK', '', '', '1990-02', ''),
(314, 'CROATIA', 'Croatian Dinar', 'HRD', '191', '', '1995-01', ''),
(315, 'CROATIA', 'Croatian Kuna', 'HRK', '191', '', '2015-06', ''),
(316, 'CYPRUS', 'Cyprus Pound', 'CYP', '196', '', '2008-01', ''),
(317, 'CZECHOSLOVAKIA', 'Krona A/53', 'CSJ', '', '', '', '1989 to 1990'),
(318, 'CZECHOSLOVAKIA', 'Koruna', 'CSK', '200', '', '1993-03', ''),
(319, 'ECUADOR', 'Sucre', 'ECS', '218', '', '2000-09', ''),
(320, 'ECUADOR', 'Unidad de Valor Constante (UVC)', 'ECV', '983', '', '2000-09', ''),
(321, 'EQUATORIAL GUINEA', 'Ekwele', 'GQE', '226', '', '1986-06', ''),
(322, 'ESTONIA', 'Kroon', 'EEK', '233', '', '2011-01', ''),
(323, 'EUROPEAN MONETARY CO-OPERATION FUND (EMCF)', 'European Currency Unit (E.C.U)', 'XEU', '954', '', '1999-01', ''),
(324, 'FINLAND', 'Markka', 'FIM', '246', '', '2002-03', ''),
(325, 'FRANCE', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(326, 'FRENCH  GUIANA', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(327, 'FRENCH SOUTHERN TERRITORIES', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(328, 'GEORGIA', 'Georgian Coupon', 'GEK', '268', '', '1995-10', ''),
(329, 'GEORGIA', 'Russian Ruble', 'RUR', '810', '', '1994-04', ''),
(330, 'GERMAN DEMOCRATIC REPUBLIC', 'Mark der DDR', 'DDM', '278', '', '', '1990-07 to 1990-09'),
(331, 'GERMANY', 'Deutsche Mark', 'DEM', '276', '', '2002-03', ''),
(332, 'GHANA', 'Cedi', 'GHC', '288', '', '2008-01', ''),
(333, 'GHANA', 'Ghana Cedi', 'GHP', '939', '', '2007-06', ''),
(334, 'GREECE', 'Drachma', 'GRD', '300', '', '2002-03', ''),
(335, 'GUADELOUPE', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(336, 'GUINEA', 'Syli', 'GNE', '', '', '1989-12', ''),
(337, 'GUINEA', 'Syli', 'GNS', '', '', '1986-02', ''),
(338, 'GUINEA-BISSAU', 'Guinea Escudo', 'GWE', '', '', '', '1978 to 1981'),
(339, 'GUINEA-BISSAU', 'Guinea-Bissau Peso', 'GWP', '624', '', '1997-05', ''),
(340, 'HOLY SEE (VATICAN CITY STATE)', 'Italian Lira', 'ITL', '380', '', '2002-03', ''),
(341, 'ICELAND', 'Old Krona', 'ISJ', '', '', '', '1989 to 1990'),
(342, 'IRELAND', 'Irish Pound', 'IEP', '372', '', '2002-03', ''),
(343, 'ISRAEL', 'Pound', 'ILP', '', '', '', '1978 to 1981'),
(344, 'ISRAEL', 'Old Shekel', 'ILR', '', '', '', '1989 to 1990'),
(345, 'ITALY', 'Italian Lira', 'ITL', '380', '', '2002-03', ''),
(346, 'KAZAKHSTAN', 'Russian Ruble', 'RUR', '810', '', '1994-05', ''),
(347, 'KYRGYZSTAN', 'Russian Ruble', 'RUR', '810', '', '1993-01', ''),
(348, 'LAO', 'Pathet Lao Kip', 'LAJ', '', '', '1989-12', ''),
(349, 'LATVIA', 'Latvian Lats', 'LVL', '428', '', '2014-01', ''),
(350, 'LATVIA', 'Latvian Ruble', 'LVR', '428', '', '1994-12', ''),
(351, 'LESOTHO', 'Loti', 'LSM', '', '', '1985-05', ''),
(352, 'LESOTHO', 'Financial Rand', 'ZAL', '991', '', '1995-03', ''),
(353, 'LITHUANIA', 'Lithuanian Litas', 'LTL', '440', '', '2014-12', ''),
(354, 'LITHUANIA', 'Talonas', 'LTT', '440', '', '1993-07', ''),
(355, 'LUXEMBOURG', 'Luxembourg Convertible Franc', 'LUC', '989', '', '1990-03', ''),
(356, 'LUXEMBOURG', 'Luxembourg Franc', 'LUF', '442', '', '2002-03', ''),
(357, 'LUXEMBOURG', 'Luxembourg Financial Franc', 'LUL', '988', '', '1990-03', ''),
(358, 'MADAGASCAR', 'Malagasy Franc', 'MGF', '450', '', '2004-12', ''),
(359, 'MALAWI', 'Kwacha', 'MWK', '454', '', '2016-02', ''),
(360, 'MALDIVES', 'Maldive Rupee', 'MVQ', '', '', '1989-12', ''),
(361, 'MALI', 'Mali Franc', 'MLF', '466', '', '1984-11', ''),
(362, 'MALTA', 'Maltese Lira', 'MTL', '470', '', '2008-01', ''),
(363, 'MALTA', 'Maltese Pound', 'MTP', '', '', '1983-06', ''),
(364, 'MARTINIQUE', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(365, 'MAYOTTE', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(366, 'MEXICO', 'Mexican Peso', 'MXP', '', '', '1993-01', ''),
(367, 'MOLDOVA, REPUBLIC OF', 'Russian Ruble', 'RUR', '810', '', '1993-12', ''),
(368, 'MONACO', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(369, 'MOZAMBIQUE', 'Mozambique Escudo', 'MZE', '', '', '', '1978 to 1981'),
(370, 'MOZAMBIQUE', 'Mozambique Metical', 'MZM', '508', '', '2006-06', ''),
(371, 'NETHERLANDS', 'Netherlands Guilder', 'NLG', '528', '', '2002-03', ''),
(372, 'NETHERLANDS ANTILLES', 'Netherlands Antillean Guilder', 'ANG', '532', '', '2010-10', ''),
(373, 'NICARAGUA', 'Cordoba', 'NIC', '', '', '1990-10', ''),
(374, 'PERU', 'Nuevo Sol ', 'PEN', '604', '', '2015-12', ''),
(375, 'PERU', 'Sol', 'PEH', '', '', '', '1989 to 1990'),
(376, 'PERU', 'Inti', 'PEI', '604', '', '1991-07', ''),
(377, 'PERU', 'Sol', 'PES', '604', '', '1986-02', ''),
(378, 'POLAND', 'Zloty', 'PLZ', '616', '', '1997-01', ''),
(379, 'PORTUGAL', 'Portuguese Escudo', 'PTE', '620', '', '2002-03', ''),
(380, 'RÃ‰UNION', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(381, 'ROMANIA', 'Leu A/52', 'ROK', '', '', '', '1989 to 1990'),
(382, 'ROMANIA', 'New Romanian Leu ', 'RON', '946', '', '2015-06', ''),
(383, 'ROMANIA', 'Old Leu', 'ROL', '642', '', '2005-06', ''),
(384, 'RUSSIAN FEDERATION', 'Russian Ruble', 'RUR', '810', '', '2004-01', ''),
(385, 'SAINT MARTIN', 'French Franc', 'FRF', '250', '', '1999-01', ''),
(386, 'SAINT PIERRE AND MIQUELON', 'French Franc', 'FRF', '250', '', '2002-03', ''),
(387, 'SAINT-BARTHÃ‰LEMY', 'French Franc', 'FRF', '250', '', '1999-01', ''),
(388, 'SAN MARINO', 'Italian Lira', 'ITL', '380', '', '2002-03', ''),
(389, 'SERBIA AND MONTENEGRO', 'Serbian Dinar', 'CSD', '891', '', '2006-10', ''),
(390, 'SERBIA AND MONTENEGRO', 'Euro', 'EUR', '978', '', '2006-10', ''),
(391, 'SLOVAKIA', 'Slovak Koruna', 'SKK', '703', '', '2009-01', ''),
(392, 'SLOVENIA', 'Tolar', 'SIT', '705', '', '2007-01', ''),
(393, 'SOUTH AFRICA', 'Financial Rand', 'ZAL', '991', '', '1995-03', ''),
(394, 'SOUTH SUDAN', 'Sudanese Pound', 'SDG', '938', '', '2012-09', ''),
(395, 'SOUTHERN RHODESIAÂ ', 'Rhodesian Dollar', 'RHD', '', '', '', '1978 to 1981'),
(396, 'SPAIN', 'Spanish Peseta', 'ESA', '996', '', '', '1978 to 1981'),
(397, 'SPAIN', '\"A\" Account (convertible Peseta Account)', 'ESB', '995', '', '1994-12', ''),
(398, 'SPAIN', 'Spanish Peseta', 'ESP', '724', '', '2002-03', ''),
(399, 'SUDAN', 'Sudanese Dinar', 'SDD', '736', '', '2007-07', ''),
(400, 'SUDAN', 'Sudanese Pound', 'SDP', '', '', '1998-06', ''),
(401, 'SURINAME', 'Surinam Guilder', 'SRG', '740', '', '2003-12', ''),
(402, 'SWITZERLAND', 'WIR Franc (for electronic)', 'CHC', '948', '', '2004-11', ''),
(403, 'TAJIKISTAN', 'Russian Ruble', 'RUR', '810', '', '1995-05', ''),
(404, 'TAJIKISTAN', 'Tajik Ruble', 'TJR', '762', '', '2001-04', ''),
(405, 'TIMOR-LESTE', 'Rupiah', 'IDR', '360', '', '2002-07', ''),
(406, 'TIMOR-LESTE', 'Timor Escudo', 'TPE', '626', '', '2002-11', ''),
(407, 'TURKEY', 'Old Turkish Lira', 'TRL', '792', '', '2005-12', ''),
(408, 'TURKEY', 'New Turkish Lira', 'TRY', '949', '', '2009-01', ''),
(409, 'TURKMENISTAN', 'Russian Ruble', 'RUR', '810', '', '1993-10', ''),
(410, 'TURKMENISTAN', 'Turkmenistan Manat', 'TMM', '795', '', '2009-01', ''),
(411, 'UGANDA', 'Uganda Shilling', 'UGS', '', '', '1987-05', ''),
(412, 'UGANDA', 'Old Shilling', 'UGW', '', '', '', '1989 to 1990'),
(413, 'UKRAINE', 'Karbovanet', 'UAK', '804', '', '1996-09', ''),
(414, 'UNION OF SOVIET SOCIALIST REPUBLICS', 'Rouble', 'SUR', '', '', '1990-12', ''),
(415, 'UNITED STATES', 'US Dollar (Same day)', 'USS', '998', '', '2014-03', ''),
(416, 'URUGUAY', 'Old Uruguay Peso', 'UYN', '', '', '1989-12', ''),
(417, 'URUGUAY', 'Uruguayan Peso', 'UYP', '', '', '1993-03', ''),
(418, 'UZBEKISTAN', 'Russian Ruble', 'RUR', '810', '', '1994-07', ''),
(419, 'VENEZUELA', 'Bolivar', 'VEB', '862', '', '2008-01', ''),
(420, 'VENEZUELA', 'Bolivar Fuerte', 'VEF', '937', '', '2011-12', ''),
(421, 'VENEZUELA (BOLIVARIAN REPUBLIC OF)', 'Bolivar', 'VEF', '937', '', '2016-02', ''),
(422, 'VIETNAM', 'Old Dong', 'VNC', '', '', '', '1989 to 1990'),
(423, 'YEMEN, DEMOCRATIC', 'Yemeni Dinar', 'YDD', '720', '', '1991-09', ''),
(424, 'YUGOSLAVIA', 'New Yugoslavian Dinar', 'YUD', '', '', '1990-01', ''),
(425, 'YUGOSLAVIA', 'New Dinar', 'YUM', '891', '', '2003-07', ''),
(426, 'YUGOSLAVIA', 'Yugoslavian Dinar', 'YUN', '890', '', '1995-11', ''),
(427, 'ZAIRE', 'New Zaire', 'ZRN', '180', '', '1999-06', ''),
(428, 'ZAIRE', 'Zaire', 'ZRZ', '180', '', '1994-02', ''),
(429, 'ZAMBIA', 'Zambian Kwacha', 'ZMK', '894', '', '2012-12', ''),
(430, 'ZIMBABWE', 'Rhodesian Dollar', 'ZWC', '', '', '1989-12', ''),
(431, 'ZIMBABWE', 'Zimbabwe Dollar (old)', 'ZWD', '716', '', '2006-08', ''),
(432, 'ZIMBABWE', 'Zimbabwe Dollar', 'ZWD', '716', '', '2008-08', ''),
(433, 'ZIMBABWE', 'Zimbabwe Dollar (new)', 'ZWN', '942', '', '2006-09', ''),
(434, 'ZIMBABWE', 'Zimbabwe Dollar', 'ZWR', '935', '', '2009-06', ''),
(435, 'ZZ01_Gold-Franc', 'Gold-Franc', 'XFO', '', '', '2006-10', ''),
(436, 'ZZ02_RINET Funds Code', 'RINET Funds Code', 'XRE', '', '', '1999-11', ''),
(437, 'ZZ05_UIC-Franc', 'UIC-Franc', 'XFU', '', '', '2013-11', ''),
(438, 'Autres', 'Autres', 'Autres', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_preferences`
--

DROP TABLE IF EXISTS `user_preferences`;
CREATE TABLE IF NOT EXISTS `user_preferences` (
  `id_preference` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fk_id_user` int(11) UNSIGNED NOT NULL,
  `theme_color` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `theme_dark_mode` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `category_order` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `currency` int(11) UNSIGNED DEFAULT NULL,
  `balance` float UNSIGNED DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_preference`),
  KEY `fk_id_user` (`fk_id_user`),
  KEY `fk_id_currencies` (`currency`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD CONSTRAINT `fk_id_currencies` FOREIGN KEY (`currency`) REFERENCES `currencies` (`id_currencies`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_user_preferences` FOREIGN KEY (`fk_id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
