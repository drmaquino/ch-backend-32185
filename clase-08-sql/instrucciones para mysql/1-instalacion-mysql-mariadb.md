# Instalar mysql en un contenedor docker:

## Muestra las versiones disponibles
    docker search <nombre>

### Ejemplo
    docker search mysql

## Descarga la imagen elegida
    docker pull <nombre>:<version>

### Ejemplo
    docker pull mysql:5.7

## Crea y ejecuta un contenedor con mysql
    docker run \
        --name <nombre_del_contenedor> \
        -e MYSQL_ROOT_PASSWORD=<contraseña> \
        -p 3306:3306 \
        -d docker.io/library/mysql

### Ejemplo
    docker run \
        --name drm-mysql \
        -e MYSQL_ROOT_PASSWORD=mysqlpassword \
        -p 3306:3306 \
        -d mysql:5.7

------------------------------------------------

# Instalar mysql (local en ubuntu):
https://platzi.com/tutoriales/1566-bd/8226-como-instalar-mysql-y-workbench-en-ubuntu-sin-morir-en-el-intento/


## Para operar con el servicio de mysql por la terminal, instalado localmente en linux:
    sudo /etc/init.d/mysql [ start | stop | status ]
ó
    sudo systemctl [ start | stop | status ] mysql.service
