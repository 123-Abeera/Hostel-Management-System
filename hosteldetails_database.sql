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
-- Database: `new`
--

-- --------------------------------------------------------

--
-- Table structure for table `hosteldetails`
--

CREATE TABLE `hosteldetails` (
  `hostelid` int(11) NOT NULL,
  `roomid` varchar(255) NOT NULL,
  `studentname` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `hosteldetails` (`hostelid`, `roomid`, `studentname`, `capacity`) VALUES
(1001, '1', 'procoder1', '2');

INSERT INTO `hosteldetails` (`hostelid`, `roomid`, `studentname`, `capacity`) VALUES
(1001, '2', 'procoder2', '2');

INSERT INTO `hosteldetails` (`hostelid`, `roomid`, `studentname`, `capacity`) VALUES
(1001, '3', 'procoder3', '3');

INSERT INTO `hosteldetails` (`hostelid`, `roomid`, `studentname`, `capacity`) VALUES
(1001, '4', 'procoder14', '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `hostelid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `hosteldetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
