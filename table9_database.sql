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

CREATE TABLE `table9_details` (
 `mess_id` int(255) NOT NULL,
 `name` varchar(255) NOT NULL,
`monthly_expense`   varchar(120) NOT NULL,
 
  `mess_timings` varchar(255) NOT NULL
  
 
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table9_details`
--

INSERT INTO `table9_details` (`mess_id`,`name`,`monthly_expense`, `mess_timings`) VALUES
('1','chef abid', 'rs_5000', '8am-11pm');

INSERT INTO `table9_details` (`mess_id`,`name`,`monthly_expense`, `mess_timings`) VALUES
('2','chef bro', 'rs_9000', '8am-11pm');

INSERT INTO `table9_details` (`mess_id`,`name`,`monthly_expense`, `mess_timings`) VALUES
('3','chef sadiqee', 'rs_8000', '8am-11pm');

INSERT INTO `table9_details` (`mess_id`,`name`,`monthly_expense`, `mess_timings`) VALUES
('4','chef qalb', 'rs_7000', '8am-11pm');



--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `table9_details`
  ADD PRIMARY KEY (`mess_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `table9_details`
  MODIFY `mess_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
