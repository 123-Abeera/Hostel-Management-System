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
-- Table structure for table `table9_databse`
--

CREATE TABLE `table10_details` (
 `visitor_id` int(255) NOT NULL,
 `visitor_name` varchar(255) NOT NULL,
`student_name`   varchar(120) NOT NULL,
 
  `time_in` varchar(255) NOT NULL,
   `time_out` varchar(255) NOT NULL
  
 
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table10_details`
--

INSERT INTO `table10_details` (`visitor_id`,`visitor_name`,`student_name`, `time_in`, `time_out`) VALUES
('1','kashh', 'procoder', '8am', '9am');

INSERT INTO `table10_details` (`visitor_id`,`visitor_name`,`student_name`, `time_in`, `time_out`) VALUES
('2','kashh', 'procoder1', '9am', '10am');

INSERT INTO `table10_details` (`visitor_id`,`visitor_name`,`student_name`, `time_in`, `time_out`) VALUES
('3','kashh', 'procoder2', '9am', '9;30am');

INSERT INTO `table10_details` (`visitor_id`,`visitor_name`,`student_name`, `time_in`, `time_out`) VALUES
('4','kashh', 'procoder3', '12pm', '1pm');



--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `table10_details`
  ADD PRIMARY KEY (`visitor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `table10_details`
  MODIFY `visitor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
