# Crear usuario con su correspondiente contraseña
    CREATE USER '<nombre_del_usuario>'@'<direccion_del_host>' IDENTIFIED BY '<contraseña>';

## Ejemplo para usuarios locales
    CREATE USER 'coder'@'localhost' IDENTIFIED BY 'house';

## Ejemplo para usuarios remotos
    CREATE USER 'coder'@'%' IDENTIFIED BY 'house';

> para mysql un usuario local y un usuario remoto, aunque tengan el mismo nombre, son dos usuarios distintos!

# Asignar privilegios de administracion a un usuario sobre todas las tablas de una base
    GRANT ALL PRIVILEGES ON <nombre_de_las_base>.* TO '<nombre_del_usuario>'@'localhost' WITH GRANT OPTION;
    FLUSH PRIVILEGES;

## Ejemplos
    GRANT ALL PRIVILEGES ON coderhouse.* TO 'coder'@'localhost' WITH GRANT OPTION;
    GRANT ALL PRIVILEGES ON coderhouse.* TO 'coder'@'%' WITH GRANT OPTION;
    FLUSH PRIVILEGES;

# Borrar usuario
    DROP USER '<nombre_del_usuario>'@'<direccion_del_host>';

## Ejemplo
    DROP USER 'coder'@'localhost';
