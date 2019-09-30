# Test API MEAN-docker
Aplicación de prueba - servicios Rest
stack MEAN and Docker
se configura typescript como lenguaje del lado del back y front
<p><b>PENDIENTE FRONT</b></p>

# Correr el proyecto
Para levantar la aplicación use el comando <code>docker-compose up</code>

# API Backend
Para acceder a la API ingrese a: <code>http://localhost:3000/</code>

<h3>User</h3>
<b>Agregar usuario, POST: </b><code>http://localhost:3000/user</code>
<p>datos requeridos: name, email, password</p>

<h3>Autentificación</h3>
<b>Realizar login, POST: </b><code>http://localhost:3000/login</code>
<p>datos requeridos: email, password</p>

<h3>Post</h3>
<b>Crear un post, POST: </b><code>http://localhost:3000/post</code>
<p>datos requeridos: url, title, content, currentDay, user</p>
<p>enviar token obtenido en el login por url</p>

<b>Obtener posts, GET: </b><code>http://localhost:3000/post</code>
<p>enviar token obtenido en el login por url</p>

<b>Obtener posts por id, GET: </b><code>http://localhost:3000/post/{id}</code>
<p>enviar token obtenido en el login por url</p>

<b>Eliminar posts por id, DELETE: </b><code>http://localhost:3000/post/</code>
<p>datos requeridos: 'id' del post</p>
<p>enviar token obtenido en el login por url</p>


<h3>Buscador</h3>
<b>Realizar busqueda profunda, GET: </b><code>http://localhost:3000/field/:table/:term</code>
<p>datos requeridos: tabla = tabla en donde se va a buscar, term = termino de la busqueda</p>
<b>Realizar busqueda general de post, GET: </b><code>http://localhost:3000/all/:term</code>
<p>datos requeridos: tabla = term = termino de la busqueda</p>