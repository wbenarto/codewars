CREATE TABLE `tbl_customer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
)

CREATE TABLE `tbl_product` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `productName` varchar(255) DEFAULT NULL,
    `productPrice` varchar(255) DEFAULT NULL,
    `productQuantity` int(10) DEFAULT NULL,

 )

 CREATE TABLE `tbl_transcations` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `saleDate` datetime DEFAULT NULL,
   `totalAmount` varchar(255) DEFAULT NULL
 )

DELETE FROM `table`
WHERE id NOT IN (
  SELECT id
  FROM (
    SELECT id
    FROM `table`
    ORDER BY id DESC
    LIMIT 30 -- keep this many records
  ) 
);