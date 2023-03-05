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
-- Table structure for table `table8_databse`
--

CREATE TABLE `table8_details` (
 `staff_id` int(255) NOT NULL,
   `staff_name`   varchar(120) NOT NULL,
 
  `staff_gender` varchar(255) NOT NULL,
   `phone_number` varchar(255) NOT NULL
 
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table8_details`
--

INSERT INTO `table8_details` (`staff_id`,`staff_name`, `staff_gender`, `phone_number`) VALUES
('1','zain', 'male', '0333-123456');

INSERT INTO `table8_details` (`staff_id`,`staff_name`, `staff_gender`, `phone_number`) VALUES
('2','daniyal', 'male', '0333-123111');

INSERT INTO `table8_details` (`staff_id`,`staff_name`, `staff_gender`, `phone_number`) VALUES
('3','dani', 'male', '0333-1233222');

INSERT INTO `table8_details` (`staff_id`,`staff_name`, `staff_gender`, `phone_number`) VALUES
('4','danish', 'male', '0333-123555');

INSERT INTO `table8_details` (`staff_id`,`staff_name`, `staff_gender`, `phone_number`) VALUES
('5','samreen', 'female', '0333-123444');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `table8_details`
  ADD PRIMARY KEY (`staff_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `table8_details`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
