DROP TABLE IF EXISTS `financialmanager`.`item`;

CREATE TABLE  `financialmanager`.`item` (
	`id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
	`shop` VARCHAR( 255 ) NOT NULL ,
	`item` VARCHAR( 255 ) NOT NULL ,
	`count` INT UNSIGNED NOT NULL DEFAULT  '1',
	`price` BIGINT NOT NULL ,
	INDEX (  `shop` ,  `item` )
) ENGINE = INNODB  DEFAULT CHARSET=UTF8;