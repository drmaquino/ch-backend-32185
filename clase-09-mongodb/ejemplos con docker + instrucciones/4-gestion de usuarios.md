# Para cualquier operacion de usuarios vamos a trabajar con la base 'admin'
    use admin

## Crear un usuario con permisos para una base en particular
    db.createUser(
      {
        user: "<nombre_del_usuario>",
        pwd: "<contraseña>",
        roles:
           { role: "< read | readWrite", db: "<base_de_datos>" }
        ]
      }
    )

## Consultar sobre un usuario
    db.getUser("<nombre_del_usuario>")
    
## Borrar un usuario
    db.dropUser("<nombre_del_usuario>")
