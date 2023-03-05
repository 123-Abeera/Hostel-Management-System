-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 03:18 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `form2`
--

-- --------------------------------------------------------

--
-- Table structure for table `edit`
--

CREATE TABLE `edit` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fathername` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `edit`
--

INSERT INTO `edit` ( `id`,`username`, `email`, `password`, `fathername`, `address`) VALUES
('0','DANGEROUS', 'DANGEROUS@gmail.com', '0139a3c5cf42394be982e766c93f5ed0','dang','DHA PHASE 1');

INSERT INTO `edit` ( `id`,`username`, `email`, `password`, `fathername`, `address`) VALUES
('1','procoder', 'procoder@gmail.com', '0139a3c5cf42394be982e766c93f5ed0','exprocoder','DHA PHASE 2');

INSERT INTO `edit` ( `id`,`username`, `email`, `password`, `fathername`, `address`) VALUES
('2','procder1', 'procoder1@gmail.com', '0139a3c5cf42394be982e766c93f5ed0','exprocoder1','DHA PHASE 3');

INSERT INTO `edit` ( `id`,`username`, `email`, `password`, `fathername`, `address`) VALUES
('3','procoder2', 'procoder2@gmail.com', '0139a3c5cf42394be982e766c93f5ed0','exprocoder2','DHA PHASE 4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `edit`
   ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `edit`
 MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
