-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2023 at 12:32 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dressdesign`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

CREATE TABLE `tbl_booking` (
  `booking_id` int(11) NOT NULL,
  `booking_date` varchar(100) NOT NULL,
  `booking_amount` varchar(100) NOT NULL,
  `booking_status` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`booking_id`, `booking_date`, `booking_amount`, `booking_status`, `user_id`) VALUES
(1, '2023-05-30', '900', 1, 1),
(2, '2023-05-30', '900', 1, 1),
(3, '2023-05-30', '900', 1, 1),
(4, '2023-05-30', '900', 1, 1),
(5, '2023-05-30', '900', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `cart_id` int(11) NOT NULL,
  `cart_qty` varchar(100) NOT NULL DEFAULT '1',
  `product_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `cart_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`cart_id`, `cart_qty`, `product_id`, `booking_id`, `cart_status`) VALUES
(2, '1', 1, 2, 4),
(4, '1', 3, 3, 5),
(6, '1', 5, 4, 4),
(7, '1', 7, 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'Saree'),
(2, 'Shirt'),
(3, 'Churidar'),
(4, 'Gown'),
(5, 'Pants'),
(6, 'Coat');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company`
--

CREATE TABLE `tbl_company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_contact` varchar(100) NOT NULL,
  `company_email` varchar(100) NOT NULL,
  `company_address` varchar(100) NOT NULL,
  `company_logo` varchar(100) NOT NULL,
  `company_proof` varchar(100) NOT NULL,
  `company_password` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL,
  `company_vstatus` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_company`
--

INSERT INTO `tbl_company` (`company_id`, `company_name`, `company_contact`, `company_email`, `company_address`, `company_logo`, `company_proof`, `company_password`, `place_id`, `company_vstatus`) VALUES
(1, 'Jayalakshmi', '8745678999', 'jaya@gmail.com', 'jayalakshmi silks', 'jaya.jpg', 'pro.jpg', 'j@123', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint_details` varchar(100) NOT NULL,
  `complaint_status` int(11) NOT NULL DEFAULT 0,
  `complaint_date` varchar(100) NOT NULL,
  `company_id` int(11) NOT NULL,
  `complaint_reply` varchar(200) NOT NULL DEFAULT 'Not Yet'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `complaint_details`, `complaint_status`, `complaint_date`, `company_id`, `complaint_reply`) VALUES
(1, 'hai', 1, '', 1, 'Replyed\r\n'),
(2, 'hello', 0, '', 1, 'Not Yet'),
(3, 'hai', 0, '2023-05-05', 1, 'Not Yet');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

CREATE TABLE `tbl_country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_country`
--

INSERT INTO `tbl_country` (`country_id`, `country_name`) VALUES
(1, 'India'),
(2, 'France'),
(3, 'Italy'),
(4, 'United States'),
(5, 'Indonesia'),
(6, 'Egypt'),
(7, 'Malaysia'),
(8, 'Australia'),
(9, 'Thailand'),
(10, 'United Kingdom'),
(11, 'Canada');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_design`
--

CREATE TABLE `tbl_design` (
  `design_id` int(11) NOT NULL,
  `design_name` varchar(100) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `design_rate` varchar(100) NOT NULL,
  `design_photo` longtext NOT NULL,
  `designer_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL DEFAULT 0,
  `design_status` int(11) NOT NULL DEFAULT 0,
  `material_id` int(11) NOT NULL,
  `design_details` varchar(100) NOT NULL,
  `design_converted` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_design`
--

INSERT INTO `tbl_design` (`design_id`, `design_name`, `subcategory_id`, `design_rate`, `design_photo`, `designer_id`, `company_id`, `design_status`, `material_id`, `design_details`, `design_converted`) VALUES
(2, 'Saree', 1, '600', 'joice.jpg', 1, 1, 1, 2, 'saree ', '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'),
(6, 'shirt', 15, '450', 'white.jpg', 1, 1, 1, 3, 'white formal shirts', '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'),
(7, 'churidar', 17, '400', 'churi.jpg', 1, 1, 1, 5, 'white colour', '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'),
(8, '', 0, '', '', 1, 0, 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_designer`
--

CREATE TABLE `tbl_designer` (
  `designer_id` int(11) NOT NULL,
  `designer_name` varchar(100) NOT NULL,
  `designer_gender` varchar(20) NOT NULL,
  `designer_contact` varchar(100) NOT NULL,
  `designer_email` varchar(100) NOT NULL,
  `designer_address` varchar(100) NOT NULL,
  `designer_pincode` varchar(20) NOT NULL,
  `place_id` int(11) NOT NULL,
  `designer_photo` varchar(100) NOT NULL,
  `designer_proof` varchar(100) NOT NULL,
  `designer_password` varchar(100) NOT NULL,
  `designer_vstatus` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_designer`
--

INSERT INTO `tbl_designer` (`designer_id`, `designer_name`, `designer_gender`, `designer_contact`, `designer_email`, `designer_address`, `designer_pincode`, `place_id`, `designer_photo`, `designer_proof`, `designer_password`, `designer_vstatus`) VALUES
(1, 'Praveena', '', '9876543456', 'praveena@gmail.com', 'Kannur dist,payyannoor', '', 1, 'pro.jpg', 'p.jpg', 'p@123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`, `state_id`) VALUES
(1, 'Thrissur', 1),
(2, 'Bastia', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_caption` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL,
  `gallery_file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`gallery_id`, `gallery_caption`, `product_id`, `gallery_file`) VALUES
(1, 'floral saree design', 1, 'f2.jpg'),
(2, 'pinkish floral', 1, 'f3.jpg'),
(3, 'formal shirts', 3, 'shirt2.jpg'),
(4, 'red colour', 3, 'red.jpg'),
(5, 'white', 3, 'white.jpg'),
(6, 'black', 3, 'black.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_material`
--

CREATE TABLE `tbl_material` (
  `material_id` int(11) NOT NULL,
  `material_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_material`
--

INSERT INTO `tbl_material` (`material_id`, `material_name`) VALUES
(1, 'Cotton'),
(2, 'Denim'),
(3, 'Polyester'),
(4, 'Linen'),
(5, 'Silk'),
(6, 'Chiffon'),
(7, 'Velvet'),
(8, 'Wool');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(100) NOT NULL,
  `district_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `place_name`, `district_id`) VALUES
(1, 'Kunnamkulam', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_details` varchar(100) NOT NULL,
  `product_photo` varchar(100) NOT NULL,
  `product_rate` varchar(100) NOT NULL,
  `design_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`product_id`, `product_name`, `product_details`, `product_photo`, `product_rate`, `design_id`, `company_id`) VALUES
(1, 'Floral shiffon saree', 'florals with shiffon material', 'floral_saree.jpg', '2000', 1, 1),
(2, 'white churi', 'churidar material', 'download.jpg', '3000', 3, 1),
(3, 'Formal blue shirts', 'formal with full sleeve', 'shirt2.jpg', '1000', 4, 1),
(5, 'Formal Shirt', 'Black formal shirt', '43-black.jpg', '2000', 5, 1),
(6, 'kanchipuram saree', 'kanchipuram pattu', '82-kanchi.jpg', '6000', 2, 1),
(7, 'Formal Shirt', 'white full sleeve', '40-white.jpg', '900', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_request`
--

CREATE TABLE `tbl_request` (
  `request_id` int(11) NOT NULL,
  `request_date` varchar(100) NOT NULL,
  `design_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `request_status` int(11) NOT NULL DEFAULT 0,
  `request_transaction` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `review_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review_details` varchar(100) NOT NULL,
  `review_count` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_review`
--

INSERT INTO `tbl_review` (`review_id`, `product_id`, `user_id`, `review_details`, `review_count`) VALUES
(1, 1, 1, 'Beautiful product ...loved it..', '4'),
(2, 2, 1, 'Defective product..', '2'),
(3, 2, 1, 'beautiful', '4'),
(4, 4, 1, 'nice!', '5'),
(8, 4, 1, 'attractive', '3'),
(9, 4, 1, 'nice one', '4'),
(10, 4, 1, 'nice one', '4'),
(11, 4, 1, 'nice one', '4'),
(12, 3, 1, 'hgf', '4'),
(13, 5, 1, 'loved it!', '5'),
(14, 7, 1, 'Attractive', '4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE `tbl_state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(100) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `state_name`, `country_id`) VALUES
(1, 'Kerala', 1),
(2, 'Karnataka', 1),
(3, 'Tamilnadu', 1),
(4, 'Corsica', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stock`
--

CREATE TABLE `tbl_stock` (
  `stock_id` int(11) NOT NULL,
  `stock_date` varchar(100) NOT NULL,
  `stock_qty` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_stock`
--

INSERT INTO `tbl_stock` (`stock_id`, `stock_date`, `stock_qty`, `product_id`) VALUES
(1, '2023-05-16', '10', 1),
(2, '2023-05-09', '3', 2),
(3, '2023-05-31', '5', 3),
(4, '2023-05-16', '88', 5),
(5, '2023-06-01', '34', 7);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subcategory`
--

CREATE TABLE `tbl_subcategory` (
  `subcategory_id` int(11) NOT NULL,
  `subcategory_name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_subcategory`
--

INSERT INTO `tbl_subcategory` (`subcategory_id`, `subcategory_name`, `category_id`) VALUES
(1, 'Kanchipuram', 1),
(2, 'Banarasi', 1),
(3, 'Paithani', 1),
(4, 'Cotton', 1),
(5, 'Lehenga-style', 1),
(6, 'Chiffon', 1),
(7, 'Floral', 1),
(8, 'net', 1),
(9, 'Slimfit', 2),
(10, 'Polo-shirt', 2),
(11, 'Sleevless', 2),
(12, 'Hoodie', 2),
(13, 'T-shirt', 2),
(14, 'Crew-neck', 2),
(15, 'Denim', 2),
(16, 'Anarkali', 3),
(17, 'Salwar suit', 3),
(18, 'Palazzo salwar', 3),
(19, 'Patiala', 3),
(20, 'Punjabi', 3),
(21, 'Pakistani', 3),
(22, 'Wedding', 4),
(23, 'Cocktail', 4),
(24, 'Ball gown', 4),
(25, 'Little black', 4),
(26, 'Cargo', 5),
(27, 'Jeans', 5),
(28, 'Leggings', 5),
(29, 'Tracksuit', 5),
(30, 'Joggers', 5),
(31, 'Palazzo', 5),
(32, 'Formal', 5),
(33, 'Jacket', 6),
(34, 'Overcoat', 6),
(35, 'Trench coat', 6),
(36, 'Rain coat', 6),
(38, 'Down jacket', 6),
(39, 'Down jacket', 6),
(40, 'Down jacket', 6),
(41, 'Down jacket', 6),
(42, 'Down jacket', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_gender` varchar(15) NOT NULL,
  `user_contact` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL,
  `user_photo` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_gender`, `user_contact`, `user_email`, `user_address`, `place_id`, `user_photo`, `user_password`) VALUES
(1, 'Anjali ', '', '9876578904', 'anju@gmail.com', 'Thodupuzha', 1, 'profile.jpg', 'anju1232');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_company`
--
ALTER TABLE `tbl_company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_country`
--
ALTER TABLE `tbl_country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `tbl_design`
--
ALTER TABLE `tbl_design`
  ADD PRIMARY KEY (`design_id`);

--
-- Indexes for table `tbl_designer`
--
ALTER TABLE `tbl_designer`
  ADD PRIMARY KEY (`designer_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `tbl_material`
--
ALTER TABLE `tbl_material`
  ADD PRIMARY KEY (`material_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `tbl_request`
--
ALTER TABLE `tbl_request`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `tbl_review`
--
ALTER TABLE `tbl_review`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `tbl_state`
--
ALTER TABLE `tbl_state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `tbl_stock`
--
ALTER TABLE `tbl_stock`
  ADD PRIMARY KEY (`stock_id`);

--
-- Indexes for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  ADD PRIMARY KEY (`subcategory_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_company`
--
ALTER TABLE `tbl_company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_country`
--
ALTER TABLE `tbl_country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_design`
--
ALTER TABLE `tbl_design`
  MODIFY `design_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_designer`
--
ALTER TABLE `tbl_designer`
  MODIFY `designer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_material`
--
ALTER TABLE `tbl_material`
  MODIFY `material_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_request`
--
ALTER TABLE `tbl_request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_review`
--
ALTER TABLE `tbl_review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_state`
--
ALTER TABLE `tbl_state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_stock`
--
ALTER TABLE `tbl_stock`
  MODIFY `stock_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  MODIFY `subcategory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
