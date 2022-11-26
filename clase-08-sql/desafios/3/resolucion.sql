-- Punto 1)
show databases;

create database mibase;
use mibase;

-- Punto 2)
create table usuarios(
	id int unsigned not null auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    edad int unsigned not null,
    email varchar(50) not null,
    primary key(id)
);

-- Punto 3)
insert into usuarios (nombre, apellido, edad, email) values
('Juan', 'Perez', 23, 'jp@gmail.com'),
('Pedro', 'Mei', 21, 'pm@gmail.com'),
('Juana', 'Suarez', 25, 'js@gmail.com');

-- Punto 4)
select * from usuarios;

-- Punto 5)
delete from usuarios where id = 2;

-- Punto 6)
update usuarios set edad = 24 where id = 1;

-- Punto 7)
select * from usuarios;




