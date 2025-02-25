-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2025 at 10:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_voting`
--

-- --------------------------------------------------------

--
-- Table structure for table `aadharinfo`
--

CREATE TABLE `aadharinfo` (
  `AadharNo` bigint(30) NOT NULL,
  `Email_Address` varchar(255) NOT NULL,
  `DOB` text NOT NULL,
  `IsRegistered` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aadharinfo`
--

INSERT INTO `aadharinfo` (`AadharNo`, `Email_Address`, `DOB`, `IsRegistered`) VALUES
(2556567451, 'A@1241', '12-02-2004', 'Yes'),
(56546685, 'ABCD@12312gmail.com', '12-02-2004', '0'),
(255656768, 'ABCD@123gmail.com', '12-02-2004', '0'),
(255656745, 'sitacs-2024@psncet.ac.in', '12-02-2004', '0');

-- --------------------------------------------------------

--
-- Table structure for table `registered_users`
--

CREATE TABLE `registered_users` (
  `AadharNo` bigint(20) NOT NULL,
  `Account_address` varchar(255) NOT NULL,
  `IsRegistered` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registered_users`
--

INSERT INTO `registered_users` (`AadharNo`, `Account_address`, `IsRegistered`) VALUES
(2556567451, '0xF4dBEb13B380FE8CDb26955c04Fcf27a41C459b2', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `users_registration`
--

CREATE TABLE `users_registration` (
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Email_Address` varchar(255) NOT NULL,
  `Mobile_Number` text NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Department` varchar(255) DEFAULT NULL,
  `Year` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Role` enum('Candidate','Voter','Admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_registration`
--

INSERT INTO `users_registration` (`First_Name`, `Last_Name`, `Email_Address`, `Mobile_Number`, `Password`, `Department`, `Year`, `Gender`, `Role`) VALUES
('A', 'B1', 'A@1241', '122123344512', '$2b$10$DTdrf/oXaCmYUkJgF0QNge8BpKXSE0iG1GAS2lUGMbq42xmy8ToKG', 'CSE', 'IV', 'Male', 'Admin'),
('A', 'B', 'ABCD@12312gmail.com', '23', '$2b$10$WTx.zvyDadRrGV2SLtd3yeFPPwzpauhF6K06/NMDZmPWKTuCU.xtC', 'CSE', 'IV', 'Male', 'Voter'),
('A', 'B', 'ABCD@123gmail.com', '122123344512', '$2b$10$2klxVMY4pfQiX2COCg7o/uWMacuM/EyLNvfWs4r9TPCdHeOjcaKRy', 'CSE', 'IV', 'Male', 'Candidate'),
('A', 'B', 'sitacs-2024@psncet.ac.in', '122123344512', '$2b$10$O2PpENkz1cZUiymuZr.VHe6lCc0XOMBctLIayDkOKU1zIw26jR.LO', 'CSE', 'IV', 'Male', 'Candidate');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aadharinfo`
--
ALTER TABLE `aadharinfo`
  ADD PRIMARY KEY (`Email_Address`),
  ADD UNIQUE KEY `AadharNo` (`AadharNo`);

--
-- Indexes for table `users_registration`
--
ALTER TABLE `users_registration`
  ADD PRIMARY KEY (`Email_Address`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
