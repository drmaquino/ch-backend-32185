para ejecutar con node v17+ exportar la siguiente variable de entorno:

NODE_OPTIONS=--openssl-legacy-provider

sino, no funciona pq deprecaron una librería de encriptación y webpack aun no se
adaptó.
