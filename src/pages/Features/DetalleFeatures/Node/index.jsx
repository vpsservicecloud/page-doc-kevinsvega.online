const FeaturesDetalleFeaturesNodeIndex = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Guía Completa: Servidor Node.js + React en Maquinas Virtuales (VM)
      </h1>

      {/* Descripción General */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          📋 Descripción General
        </h2>
        <p className="text-gray-700 mb-2">
          Esta guía cubre la configuración completa de un servidor optimizado
          para desarrollo y producción usando Node.js, React y Nginx en una
          máquina virtual (VM).
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ubuntu Server 22.04/24.04 LTS</li>
          <li>Node.js (LTS) + npm</li>
          <li>React (Vite y CRA)</li>
          <li>Nginx como reverse proxy</li>
          <li>PM2 para gestión de procesos</li>
          <li>Certificados SSL</li>
          <li>Automatización y producción</li>
        </ul>
      </section>
      {/* FASE 1: Configuración en Azure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🏗️ FASE 1: Configuración en Azure
        </h2>
        <p className="text-gray-700 mb-2 font-medium">
          Paso 1: Crear la Máquina Virtual
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Imagen: Ubuntu Server 22.04 o 24.04 LTS</li>
          <li>Tamaño: B2s (dev) / B4als (prod)</li>
          <li>Disco: SSD Premium ≥ 128GB</li>
          <li>Puertos: 22, 80, 443, 3000-3010</li>
          <li>IP: Pública y estática</li>
        </ul>
      </section>
      {/* FASE 1.1: Apertura de Puertos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔓 FASE 1.1: Apertura de Puertos
        </h2>

        <p className="text-gray-700 mb-2">
          Para permitir conexiones externas a tu servidor (desde el navegador o
          herramientas externas), debes asegurarte de abrir los siguientes
          puertos en dos niveles:
        </p>

        <h3 className="text-gray-700 font-medium">
          🌐 1. Desde el panel del proveedor (Azure, AWS, etc.)
        </h3>
        <p className="text-gray-700 mb-2">
          En el firewall de red de la plataforma, asegúrate de permitir los
          siguientes puertos:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>22</strong> – SSH (solo para conexión remota)
          </li>
          <li>
            <strong>80</strong> – HTTP (sitios web sin cifrar)
          </li>
          <li>
            <strong>443</strong> – HTTPS (sitios seguros)
          </li>
          <li>
            <strong>3000-3010</strong> – Para desarrollo con Node.js, Vite, etc.
          </li>
        </ul>

        <p className="text-gray-700 mb-2">
          En Azure, esto se hace en la sección{" "}
          <strong>
            Redes &gt; Grupos de seguridad de red &gt; Reglas de entrada.
          </strong>
        </p>

        <h3 className="text-gray-700 font-medium">
          🛡️ 2. Desde el sistema operativo (usando UFW)
        </h3>
        <p className="text-gray-700 mb-2">
          Si usas <code>ufw</code> como firewall en Ubuntu, ejecuta:
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3000:3010/tcp
sudo ufw enable`}
        </pre>

        <p className="text-gray-700 mb-2">Verifica el estado del firewall:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo ufw status numbered`}
        </pre>

        <p className="text-green-700 font-medium">
          ✅ Si todo está bien, deberías poder acceder a tu aplicación desde
          otras máquinas.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔑 FASE 2: Ubicación y permisos de la clave SSH
        </h2>

        <p className="text-gray-700 mb-2">
          Para establecer una conexión SSH exitosa desde tu equipo local, asegúrate de ubicar correctamente tu archivo de clave `.pem` y asignarle los permisos adecuados.
        </p>

        <h3 className="text-gray-700 font-medium">
          📂 Paso 1: Mover la clave a la carpeta `.ssh`
        </h3>
        <p className="text-gray-700 mb-2">
          Ejecuta este comando para mover la clave descargada:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`mv ~/Descargas/<NombreDelArchivo.pem> ~/.ssh/`}
        </pre>

        <h3 className="text-gray-700 font-medium">
          🔐 Paso 2: Darle permisos seguros a la clave
        </h3>
        <p className="text-gray-700 mb-2">
          Asigna permisos 400 para que sólo tú puedas leerla:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`chmod 400 ~/.ssh/<NombreDelArchivo.pem>`}
        </pre>

        <p className="text-gray-700">
          ¡Ahora puedes usar esta clave para conectarte por SSH desde VS Code o la terminal!
        </p>
      </section>

      <section className="mb-10">
        <p className="text-gray-700 font-medium">Paso 3: Conexión por SSH</p>
        <p className="text-gray-700 font-medium">
          💻 Conectas como ubuntu al servidor 20.163.3.250 usando la clave.pem
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`ssh -i ~/Descargas/<NombreDelArchivo.pem> <Usuario-Maquina-Virtual>@<IP-Maquina-Virtual`}
        </pre>
        <p className="text-gray-700 font-medium">🖥️ Ejemplo real</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`ssh -i ~/Descargas/maquinavirtualazure_key.pem maquinavirtualazure@22.796.10.265`}
        </pre>
      </section>

      {/* FASE 2: Instalación del Entorno Base */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🚀 FASE 2: Instalación del Entorno Base
        </h2>
        <p className="text-gray-700 font-medium">
          Paso 3: Actualizar el sistema
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`sudo apt update && sudo apt upgrade -y`}
        </pre>

        <p className="text-gray-700 font-medium">
          Paso 4: Instalar dependencias base
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`sudo apt install curl wget git build-essential nginx -y`}
        </pre>

        <p className="text-gray-700 font-medium">
          Paso 5: Instalar Node.js LTS
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
node -v && npm -v`}
        </pre>
      </section>

      {/* FASE 3: Configuración de NGINX */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ⚙️ FASE 3: Configuración de Nginx Para Desarrollo
        </h2>
        <p className="text-gray-700 mb-2">
          Configura Nginx como reverse proxy tanto para desarrollo:
        </p>
        <p className="text-gray-700 font-medium">
          Elimina el sitio default para evitar duplicado (si no lo necesitas).
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`sudo rm /etc/nginx/sites-enabled/default`}
        </pre>

        <p className="text-gray-700 font-medium">
          Archivo: <code>/etc/nginx/sites-available/nombre-del-archivo</code>
        </p>

        <p className="text-gray-700 font-medium">
          Crea o modifica un "bloque de servidor", que define cómo debe actuar
          Nginx al recibir solicitudes para cierto dominio.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`sudo nano /etc/nginx/sites-available/"nombre-del-archivo`}
        </pre>
        <p className="text-gray-700 font-medium">
          Pegamos la siguiente Configuración.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`server {
  listen 80;
  server_name localhost 127.0.0.1 _;

  location / {
    proxy_pass http://localhost:5173;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
`}
        </pre>
        <p className="text-gray-700 font-medium">Guardamos la configuración:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`Control + O, -> Enter -> Control + X `}
        </pre>
        <p className="text-gray-700 font-medium">
          Creamos un enlace simbólico (alias) del archivo de configuración:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo ln -s /etc/nginx/sites-available/nombre-del-archivo /etc/nginx/sites-enabled/`}
        </pre>

        <p className="text-gray-700 font-medium">
          Prueba la configuración de Nginx y verifica que no haya errores de
          sintaxis:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo nginx -t`}
        </pre>

        <p className="text-gray-700 font-medium">Si todo está bien, verás:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`nginx: configuration file /etc/nginx/nginx.conf test is successful`}
        </pre>

        <p className="text-gray-700 font-medium">
          Recarga Nginx sin reiniciar el servicio completo:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo systemctl reload nginx`}
        </pre>
      </section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Si deseas clonar tu repositorio de GitHub, al final tienes las explicaciones
      </h2>
      <br />

      {/* FASE 4: Acceso desde otra PC o Móvil en Red Local */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          📡 FASE 4: Acceso desde otra PC o Móvil en Red Local
        </h2>

        <p className="text-gray-700 mb-2">
          Si deseas probar tu aplicación desde otro dispositivo en la misma red
          (como tu celular o laptop), puedes hacerlo fácilmente.
        </p>

        <h3 className="text-gray-700 font-medium">
          🔎 Paso 1: Identificar la IP privada del servidor
        </h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`ip a | grep inet`}
        </pre>
        <p className="text-gray-700 mb-2">
          Busca una dirección del tipo <code>192.168.x.x</code> o{" "}
          <code>10.x.x.x</code> (es la IP LAN del servidor).
        </p>

        <h3 className="text-gray-700 font-medium">
          📱 Paso 2: Acceder desde otro dispositivo
        </h3>
        <p className="text-gray-700 mb-2">
          En el navegador de tu otro dispositivo, accede con la IP:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`http://192.168.1.100`}
        </pre>
        <p className="text-gray-700 mb-2">
          Si configuraste un puerto (por ejemplo 3000 o 5173), incluye el
          puerto:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`http://192.168.1.100:3000`}
        </pre>

        <h3 className="text-gray-700 font-medium">
          🌐 Paso 3 (Opcional): Configurar dominio interno para pruebas
        </h3>
        <p className="text-gray-700 mb-2">
          Puedes usar un nombre de dominio falso (como{" "}
          <code>dev.miapp.local</code>) para no depender de la IP:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            En Windows: Edita <code>C:\Windows\System32\drivers\etc\hosts</code>
          </li>
          <li>
            En Linux/Mac: Edita <code>/etc/hosts</code>
          </li>
        </ul>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`192.168.1.100   dev.miapp.local`}
        </pre>
        <p className="text-gray-700">
          Ahora podrás ingresar a{" "}
          <a className="text-blue-600 underline">http://dev.miapp.local</a>{" "}
          desde cualquier navegador en tu red local.
        </p>
        <p className="text-yellow-600 mt-2 font-medium">
          ⚠️ Esta técnica solo funciona dentro de tu red local. No es válida
          para accesos desde internet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🌐 FASE 5: Nginx para Producción (Frontend React)
        </h2>
        <p className="text-gray-700 mb-2">
          Esta configuración es ideal para servir tu aplicación React en
          producción con HTTPS y buenas prácticas.
        </p>

        <p className="text-gray-700 font-medium">
          Paso 6: Generar build de React
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          {`npm run build
sudo mkdir -p /var/www/nombredelacarpeta
sudo cp -r dist/* /var/www/nombredelacarpeta`}
        </pre>

        <p className="text-gray-700 font-medium">
          Editamos el archivo de configuración del sitio:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo nano /etc/nginx/sites-available/"nombre-del-archivo"`}
        </pre>

        <p className="text-gray-700 font-medium">
          Archivo:{" "}
          <code>/etc/nginx/sites-available/node.kevinsvega.online</code>
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`# Redirección HTTP a HTTPS
server {
  listen 80;
  server_name node.kevinsvega.online www.node.kevinsvega.online;
  return 301 https://$host$request_uri;
}

# Servidor HTTPS principal
server {
  listen 443 ssl;
  server_name node.kevinsvega.online www.node.kevinsvega.online;

  # Certificados SSL (usando Certbot)
  ssl_certificate /etc/letsencrypt/live/node.kevinsvega.online/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/node.kevinsvega.online/privkey.pem;

  # Carpeta raíz del frontend
  root /var/www/node.kevinsvega.online;
  index index.html;

  # Configuración de rutas SPA
  location / {
    try_files $uri /index.html;
  }

  # Cache estático para recursos
  location ~* \\\.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|otf|svg)$ {
    expires 6M;
    access_log off;
    add_header Cache-Control "public";
  }

  # Seguridad básica
  location ~ /\\\. {
    deny all;
  }
}
`}
        </pre>
        <p className="text-gray-700 font-medium">Guardamos la configuración:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`Control + O, -> Enter -> Control + X `}
        </pre>
        <p className="text-gray-700 font-medium">
          Hace un test de la configuración de Nginx, Verifica que no haya
          errores de sintaxis:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo nginx -t`}
        </pre>

        <p className="text-gray-700 font-medium">Si todo está bien, verás:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`nginx: configuration file /etc/nginx/nginx.conf test is successful`}
        </pre>

        <p className="text-gray-700 font-medium">
          Recarga Nginx sin reiniciar el servicio completo:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          {`sudo systemctl reload nginx`}
        </pre>
      </section>
      {/* Resultado Final */}
      <section className="mb-10">
        {/* FASE 4: Certificados SSL */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🔒 FASE 6: Certificados SSL
          </h2>

          <p className="text-gray-700 font-medium">
            Paso 6: Instalar Certbot y el plugin para Nginx
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`sudo apt install certbot python3-certbot-nginx -y`}
          </pre>

          <p className="text-gray-700 font-medium">
            Paso 7: Generar certificados SSL
          </p>
          <p className="text-gray-700 mb-2">
            Puedes generar un certificado para un dominio único o para múltiples
            subdominios en una sola línea:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Para un solo dominio:</strong>
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            {`sudo certbot --nginx -d tudominio.com`}
          </pre>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Para múltiples dominios o subdominios:</strong>
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
            {`sudo certbot --nginx -d tudominio.com -d sub.tudominio.com`}
          </pre>

          <p className="text-gray-700 mb-2">
            Esto solicitará un certificado SSL válido desde Let's Encrypt y
            configurará automáticamente Nginx para servir tu sitio con{" "}
            <strong>HTTPS</strong>.
          </p>

          <p className="text-green-700 font-medium mt-2">
            🔐 Una vez completado, podrás acceder de forma segura a:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a>https://tudominio.com</a>
            </li>
            <li>
              <a>https://sub.tudominio.com</a>
            </li>
          </ul>

          <p className="text-gray-700 mt-2">
            Ambos mostrarán el <strong>candado de seguridad válido 🔒</strong>{" "}
            en el navegador, indicando que la conexión es cifrada y segura.
          </p>
        </section>
        {/* FASE 7: Usar VS Code con la VM Remota */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            💻 FASE 7: Conectar VS Code a la VM con Remote - SSH
          </h2>

          <p className="text-gray-700 mb-2">
            Esta configuración te permite editar archivos, acceder a la terminal
            y trabajar directamente dentro de la máquina virtual desde Visual
            Studio Code en tu PC local.
          </p>

          <h3 className="text-gray-700 font-medium">
            🔌 Paso 1: Instalar la extensión “Remote - SSH”
          </h3>
          <p className="text-gray-700 mb-2">
            Abre Visual Studio Code y busca la extensión{" "}
            <strong>Remote - SSH</strong> en la marketplace. Instálala:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`Extensiones > Remote - SSH > Instalar`}
          </pre>

          <h3 className="text-gray-700 font-medium">
            🔐 Paso 2: Asegúrate de tener tu clave .pem o acceso SSH listo
          </h3>
          <p className="text-gray-700 mb-2">
            Debes tener el archivo `.pem` si usas Azure o AWS, o acceso por
            clave pública si configuraste SSH manualmente.
          </p>

          <h3 className="text-gray-700 font-medium">
            🛠️ Paso 3: Configurar conexión en VS Code
          </h3>
          <p className="text-gray-700 mb-2">Presiona:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`F1 → Remote-SSH: Connect to Host...`}
          </pre>
          <p className="text-gray-700 mb-2">
            Luego selecciona: <strong>“Add New SSH Host…”</strong> y escribe la
            línea de conexión SSH. Ejemplo:
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`ssh -i ~/.ssh/miarchivo.pem ubuntu@20.150.1.50`}
          </pre>

          <p className="text-gray-700 mb-2">
            VS Code te preguntará dónde guardar esto. Elige:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <code>~/.ssh/config</code> para Linux/macOS
            </li>
            <li>
              <code>C:\Users\TuUsuario\.ssh\config</code> en Windows
            </li>
          </ul>

          <h3 className="text-gray-700 font-medium">
            📁 Paso 4: Accede y edita tus archivos como si estuvieran locales
          </h3>
          <p className="text-gray-700 mb-2">
            Una vez conectado, verás un icono verde en la parte inferior
            izquierda de VS Code indicando que estás dentro de la VM.
          </p>
          <p className="text-gray-700 mb-2">
            Puedes usar la terminal integrada, instalar extensiones, abrir
            proyectos, correr comandos `npm run dev`, etc.
          </p>

          <h3 className="text-green-700 font-medium">🎯 Ventajas</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>No necesitas usar SFTP o copiar archivos</li>
            <li>Todo el entorno corre directamente en tu servidor remoto</li>
            <li>Ideal para trabajar desde cualquier parte</li>
          </ul>
        </section>
        {/* FASE 8: Respaldar el Proyecto en GitHub */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Subir nuestro proyecto a GitHub desde VISUAL STUDIO CODE
        </h2>
        <br />
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            📦 FASE 8: Subir el proyecto a GitHub para respaldo
          </h2>

          <p className="text-gray-700 mb-2">
            Es fundamental tener una copia remota de tu proyecto en GitHub,
            especialmente si tu servidor es temporal, de prueba o estás usando
            una VM que puede expirar.
          </p>

          <h3 className="text-gray-700 font-medium">
            ✅ Paso 1: Crear un repositorio en GitHub
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Ve a{" "}
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://github.com/new
              </a>
            </li>
            <li>
              Elige un nombre para tu proyecto, por ejemplo{" "}
              <code>mi-servidor-react-node</code>
            </li>
            <li>Selecciona "Privado" si no quieres que otros lo vean</li>
            <li>No marques ninguna opción de inicialización</li>
            <li>Haz clic en "Create repository"</li>
          </ul>

          <h3 className="text-gray-700 font-medium">
            📁 Paso 2: Inicializar Git en tu proyecto
          </h3>
          <p className="text-gray-700 mb-2">
            Desde la terminal en tu VM (o en VS Code con Remote SSH):
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`cd ~/mi-proyecto
git init
git add .
git commit -m "Primer commit: proyecto base Node.js + React + Nginx"`}
          </pre>

          <h3 className="text-gray-700 font-medium">
            🔗 Paso 3: Conectar con el repositorio remoto
          </h3>
          <p className="text-gray-700 mb-2">
            Usa la URL de tu repo en GitHub, por ejemplo:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`git remote add origin https://github.com/tuusuario/mi-servidor-react-node.git`}
          </pre>

          <h3 className="text-gray-700 font-medium">
            🚀 Paso 4: Subir los archivos al repositorio
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`git branch -M main
git push -u origin main`}
          </pre>

          <h3 className="text-gray-700 font-medium">🛡️ Recomendaciones</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Asegúrate de tener un <code>.gitignore</code> con:
              <ul className="list-disc list-inside ml-5">
                <li>
                  <code>node_modules/</code>
                </li>
                <li>
                  <code>dist/</code>
                </li>
                <li>
                  <code>.env</code>
                </li>
                <li>
                  <code>.DS_Store</code> (macOS)
                </li>
              </ul>
            </li>
            <li>
              Usa <strong>commits frecuentes</strong> mientras desarrollas:{" "}
              <code>git add . && git commit -m "avance X"</code>
            </li>
            <li>
              Siempre haz <code>git push</code> al terminar una sesión de
              desarrollo
            </li>
          </ul>

          <h3 className="text-green-700 font-medium mt-4">
            🎉 Con esto, aunque tu VM falle, siempre podrás clonar tu proyecto
            en cualquier servidor con:
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`git clone https://github.com/tuusuario/mi-servidor-react-node.git`}
          </pre>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Clonar nuestro proyecto de GitHub  a nuestra MÁQUINA VIRTUAL (VM) y tenerla sincronizada con el repositorio
          </h2>
          <br />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            ✅ FASE 9: Conexión segura con GitHub usando clave SSH
          </h2>

          <p className="text-gray-700 mb-2">
            Usar una clave SSH es ideal si vas a clonar, hacer push o pull desde GitHub varias veces. Aquí te mostramos cómo configurarlo correctamente.
          </p>

          <h3 className="text-gray-700 font-medium">
            🛠️ Paso 1: Generar clave SSH en la VM
          </h3>
          <p className="text-gray-700 mb-2">En tu servidor, ejecuta:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`ssh-keygen -t ed25519 -C "vpsservicecloud"`}
          </pre>
          <p className="text-gray-700 mb-2">
            Presiona enter en todos los pasos para usar la ruta y nombre por defecto:
            <code className="bg-gray-200 px-1 rounded mx-1">/home/tu-usuario/.ssh/id_ed25519</code>
          </p>

          <h3 className="text-gray-700 font-medium">
            📋 Paso 2: Copiar clave pública
          </h3>
          <p className="text-gray-700 mb-2">
            Muestra tu clave pública con:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`cat ~/.ssh/id_ed25519.pub`}
          </pre>

          <p className="text-gray-700 mb-2">Copia el contenido del resultado.</p>

          <h3 className="text-gray-700 font-medium">
            🔗 Paso 3: Agregar clave a GitHub
          </h3>
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>Abre <a href="https://github.com/settings/keys" className="text-blue-600 underline" target="_blank">https://github.com/settings/keys</a></li>
            <li>Haz clic en <strong>"New SSH key"</strong></li>
            <li>Pega la clave pública y guarda</li>
          </ol>

          <h3 className="text-gray-700 font-medium">
            📁 Paso 4: Clonar repositorio desde la VM
          </h3>
          <p className="text-gray-700 mb-2">
            Una vez añadida la clave, puedes clonar usando el protocolo SSH:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
            {`cd /var/www
sudo git clone git@github.com:vpsservicecloud/page-doc-kevinsvega.online.git doc.kevinsvega.online`}
          </pre>

          <h3 className="text-green-700 font-medium">🎯 Ventajas</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>No necesitas ingresar usuario/contraseña en cada acción</li>
            <li>Mayor seguridad y automatización</li>
            <li>Ideal para servidores y producción</li>
          </ul>
        </section>


        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ✅ Resultado Final
        </h2>
        <p className="text-gray-700 mb-2">
          Al completar esta guía habrás desplegado un entorno profesional y
          robusto para desarrollo y producción, incluyendo respaldo y acceso
          remoto.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Frontend React (Vite y CRA) funcionando local y remoto</li>
          <li>API Node.js ejecutándose con PM2 (auto reinicio y logs)</li>
          <li>Nginx configurado como reverse proxy para IP o dominio</li>
          <li>Acceso desde otros dispositivos usando IP LAN o IP pública</li>
          <li>Certificados SSL activos con Certbot (Let’s Encrypt)</li>
          <li>Conexión directa a la VM desde VS Code (Remote - SSH)</li>
          <li>Repositorio GitHub conectado como respaldo automático</li>
          <li>Puertos abiertos correctamente en VM y firewall</li>
          <li>Scripts de automatización y separación de entornos (dev/prod)</li>
        </ul>
      </section>
    </div>
  );
};

export default FeaturesDetalleFeaturesNodeIndex;
