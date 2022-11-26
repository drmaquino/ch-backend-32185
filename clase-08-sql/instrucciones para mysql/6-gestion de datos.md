-- CRUD
use coderhouse;

select * from personas;

INSERT INTO `coderhouse`.`personas`(`nombre`, `edad`) VALUES ("marian", 36);

INSERT INTO `coderhouse`.`personas`(`nombre`, `edad`) VALUES ("will", 37);
INSERT INTO `coderhouse`.`personas`(`nombre`, `edad`) VALUES ("sol", 34);

UPDATE `coderhouse`.`personas` SET `edad` = 35 WHERE id_persona = 3;

DELETE FROM `coderhouse`.`personas` WHERE id_persona = 3;