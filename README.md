# Practica Heroku
## Raül Ojeda Gandia & Iván Pérez Fita

Dispoble en https://safe-sierra-27967.herokuapp.com

### Introducción

Heroku es un popular proveedor de plataforma como servicio (PaaS) que facilita a los desarrolladores el despliegue de aplicaciones web sin un equipo de operaciones. Heroku ha existido desde 2007, y ahora es propiedad de Salesforce .

Actualmente Heroku soporta Cloudant, Couchbase Server, MongoDB y Redis, además de la conocida base de datos PostgreSQL,​ tanto como parte de la plataforma o como servicio independente.

Las aplicaciones se corren desde un servidor Heroku usando Heroku DNS Server para apuntar al dominio de la aplicación (típicamente nombreaplicacion.herokuapp.com). Cada aplicación corre sobre un motor a través de una "red de bancos de prueba" que consta de varios servidores. El servidor Git de Heroku maneja los repositorios de las aplicaciones que son subidas por los usuarios.

### Primeros pasos
Lo primero que hay que hacer es crear un repositorio en github con el codigo que queremos desplegar, en este caso hemos usado el frontend que hemos desarollado en el modulo de servidor. [Entrando aqui](https://github.com/Zar21/heroku-django-react-redux) podras ver el repositorio.

![github](./img/github.png)

Ahora vamos a instalar heroku mediante snap
```bash
sudo snap install heroku --classic
```

### Login

Ahora nos registraremos en la web de heroku
Cuando ya estemos registrados debemos ejecutar:
```bash
heroku login
```
Y logeara a nuestra maquina en heroku usando la cuenta que acabamos de registrar.

![login](./img/login.png)

### Creación de heroku

Ahora dentro de la carpeta donde tenemos el repositorio vamos a ejecutar
```bash
heroku create
```

![create1](./img/create1.png)


Tenemos que configurar un procfile para indicar con que comando ejecutaremos la aplicación 

![procfile](./img/procfile.png)


Cuando tengamos el procfile ya podremos ejecutar
```bash
git add .
git commit -m "Procfile added"
git push heroku master
```
![create2](./img/create2.png)

Ahora la aplicación estara desplegada
### Heroku remoto
Una vez haya terminado deberemos ejecutar
```bash
heroku ps:scale web=1
```
Teniendo una instancia de la app activa

Si queremos ver la aplicación en la url remota hay que ejecutar
```bash
heroku open
```

Por desgracia la versión de react-scripts que estábamos utilizando es insegura y por tánto no funcionó a la primera

![error1](./img/error1.png)

Así que tuvimos que incrementar la versión a la mínima necesaria en nuestro package.json ("react-scripts": "^3.3.1")

![error2](./img/error2.png)

Y subir los cambios a heroku, finalmente se pudo visualizar la página

![create3](./img/create3.png)

La url es https://safe-sierra-27967.herokuapp.com

### Heroku Local
Antes de ejecutar heroku en local debes asegurarte de haber realizado un npm install para tener todas las dependencias de la web.

![local1](./img/local1.png)


Para desplegar heroku en local realizaremos este comando:
```bash
heroku local web
```
Y la aplicación saldrá de manera predeterminada por el puerto 5000

![local2](./img/local2.png)

![local3](./img/local3.png)

### Configuración de variables de entorno
#### Local
Para crear variables de entorno en heroku local debemos crear un archivo .env donde configuraremos las variables que necesitemos

![variablesLocal1](./img/variablesLocal1.png)

Mediante react con el objeto process.env podemos mostrar el contenido de estas variables

![variablesLocal2](./img/variablesLocal2.png)

![variablesLocal3](./img/variablesLocal3.png)


#### Remoto
A diferencia del local en el remoto deberemos configurar las variables de entorno mediante el comando:

![variablesRemoto1](./img/variablesRemoto1.png)

Igual que en local mediante react podemos mostrar el contenido de las variables de entorno

![variablesRemoto2](./img/variablesRemoto2.png)

### Add-ons

Para poder trabajar con addons necesitas introducir tu tarjeta de credito en la cuenta de heroku en nuestro caso no queriamos cumplir esta condición y nos apareció este mensaje de error al intentar usarlo:

![addon3.png](./img/addon3.png)

Igualmente vamos a explicar como usarlo en caso que quieras cumplir con el requerimiento de intruducir tu tarjeta.
En este caso vamos a explicar como usar el addon papertrail para mejorar los logs de heroku.

Para agregar este addon debes introducir estos comandos:

![addon1.png](./img/addon1.png)

Con heroku addons:create papertrail añadimos el addon a nuestro heroku en este paso en donde se nos pide la tarjeta.

Con heroku addons podemos listar todos los addons que tenemos y asi comprovar que esta el nuevo addon agregado.

Finalmente con heroku addons:open papertrail encendemos el addon en este caso abrimos una consola que nos muestra los logs:

![addon2.png](./img/addon2.png)