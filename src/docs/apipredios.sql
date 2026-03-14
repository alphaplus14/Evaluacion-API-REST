-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2026 a las 13:22:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apipredios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `predios`
--

CREATE TABLE `predios` (
  `idPredio` int(11) NOT NULL,
  `descripcionPredio` varchar(200) NOT NULL,
  `area` decimal(10,0) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL,
  `fotografia` varchar(200) DEFAULT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `avaluo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `predios`
--
ALTER TABLE `predios`
  ADD PRIMARY KEY (`idPredio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
