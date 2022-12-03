# Instalar mongndb en un contenedor docker:

## Muestra las versiones disponibles
    docker search mongo 

## Descarga la imagen elegida
    docker pull mongo

## Crear un directorio local para contener la base de datos
    mkdir <algun_directorio>

### Ejemplo
    mkdir /home/drmaquino/Documents/CODERHOUSE/DOCKER/MONGODB/DB
    
## Crea y ejecuta el contenedor
   docker run \
        --name <nombre_del_contenedor> \
        -v <algun_directorio>:/data/db \
        -e MONGO_INITDB_ROOT_USERNAME=<usuario> \
        -e MONGO_INITDB_ROOT_PASSWORD=<contraseña> \
        -p <puerto_en_mi_OS>:27017 \
        -d mongo

## Ejemplo
   docker run \
        --name drm-mongo \
        -v /home/drmaquino/Documents/CODERHOUSE/DOCKER/MONGODB/DB:/data/db \
        -e MONGO_INITDB_ROOT_USERNAME=root \
        -e MONGO_INITDB_ROOT_PASSWORD=mongopassword \
        -p 27017:27017 \
        -d mongo

