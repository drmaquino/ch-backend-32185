
# Abrir una terminal
## Si estoy usando docker, acceder a la terminal del contenedor
    docker exec -it <nombre_del_contenedor> bash

## Ejemplo
    docker exec -it drm-mongo bash

# Loguearme al CLI
    mongosh -u <username> -p
    (Enter password:) <password>

## Ejemplo
    mongosh -u root -p
    (Enter password:) mongopassword

## También funciona con string de conexión
    mongodb://<username>:<password>@<host>:<port>/<dbname>?authSource=admin&w=1

### Ejemplo
    mongodb://coder:house@localhost:27017/coderhouse?authSource=admin&w=1
