-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: players
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `band`
--

DROP TABLE IF EXISTS `band`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `band` (
  `band_id` int(11) NOT NULL AUTO_INCREMENT,
  `style` varchar(255) DEFAULT NULL,
  `foundationYear` varchar(255) DEFAULT NULL,
  `bandName` varchar(255) NOT NULL,
  PRIMARY KEY (`band_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `band`
--

LOCK TABLES `band` WRITE;
/*!40000 ALTER TABLE `band` DISABLE KEYS */;
INSERT INTO `band` VALUES (3,'Classic Rock & Roll','2001','The Black Keys'),(4,'Rock','2006','Arctic Monekys'),(9,'Psychodelic Rock','1997','Tame Impala');
/*!40000 ALTER TABLE `band` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `band_member`
--

DROP TABLE IF EXISTS `band_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `band_member` (
  `band_member_id` int(11) NOT NULL AUTO_INCREMENT,
  `musician_id` int(11) DEFAULT NULL,
  `band_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`band_member_id`),
  KEY `fk_band_1` (`band_id`),
  KEY `fk_musician_1` (`musician_id`),
  CONSTRAINT `fk_band_1` FOREIGN KEY (`band_id`) REFERENCES `band` (`band_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_musician_1` FOREIGN KEY (`musician_id`) REFERENCES `musician` (`musician_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `band_member`
--

LOCK TABLES `band_member` WRITE;
/*!40000 ALTER TABLE `band_member` DISABLE KEYS */;
INSERT INTO `band_member` VALUES (8,NULL,3),(10,NULL,4),(15,NULL,9);
/*!40000 ALTER TABLE `band_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musician`
--

DROP TABLE IF EXISTS `musician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `musician` (
  `musician_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `photo` varchar(400) DEFAULT NULL,
  `birthdate` varchar(100) DEFAULT NULL,
  `instrument` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`musician_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musician`
--

LOCK TABLES `musician` WRITE;
/*!40000 ALTER TABLE `musician` DISABLE KEYS */;
INSERT INTO `musician` VALUES (32,'Kevin Parker','M','parker.png','1986-11-20','Guitar and Bass'),(35,'Alex Turner','','tumblr_oh0d49L7821vl7x77o1_500.png','1983-11-06','Guitar'),(37,'Dan Auerbach','M','Dan-Auerbach.png','1979-11-12','Guitar'),(38,'Patrick Carney','M','patrick carney.png','1980-04-14','Drums'),(40,'Matt Bellamy','M','bellamy.png','1978-06-09','Guitar'),(41,'Liam Gallagher','M','LIAM1.png','1972-09-21','Guitar'),(42,'Noel Gallagher','M','Noel.png','1968-03-12','Guitar'),(43,'Julian Casablancas','M','casablancas.png','1978-08-23','Guitar'),(44,'Kurt Cobain','M','tumblr_oidvsdk6Qx1vl7x77o1_500.png','1967-02-20','Guitar'),(46,'Leon Bridges','M','BRIDGES.png','1989-06-13','Voice and Guitar'),(47,'Michael Kiwanuka','M','kiwanuka.png','1987','Voice and Guitar'),(48,'Tom Misch','M','misch.png','1995','Voice and Guitar');
/*!40000 ALTER TABLE `musician` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-17  9:49:11
