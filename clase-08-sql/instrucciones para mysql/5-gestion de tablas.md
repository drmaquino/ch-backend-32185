# Crear tabla
    CREATE TABLE <nombre_base_de_datos>.<nombre_tabla> (
        <nombre_columna> <tipo_de_dato>,
        <nombre_columna> <tipo_de_dato>,
        <nombre_columna> <tipo_de_dato>
    );

## Ejemplo
    CREATE TABLE coderhouse.personas (
        id_persona INT AUTO_INCREMENT,
        nombre VARCHAR(25),
        edad INT,
        PRIMARY KEY (id_persona)
    );

