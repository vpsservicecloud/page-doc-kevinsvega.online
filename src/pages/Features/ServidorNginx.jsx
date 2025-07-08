// src/pages/DetalleFeatures/ServidorNginx.jsx
const ServidorNginx = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Guía Completa: Servidor Node.js + React en Maquinas Virtuales (VM)
      </h1>

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
        <br />
        <p className="text-gray-700 font-medium">Paso 2: Conexión por SSH</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          chmod 400 ~/Descargas/vmdesarrollo_key.pem ssh -i
          ~/Descargas/vmdesarrollo_key.pem vmdesarrollo@20.163.3.250
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🚀 FASE 2: Instalación del Entorno Base
        </h2>
        <p className="text-gray-700 font-medium">
          Paso 3: Actualizar el sistema
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          sudo apt update && sudo apt upgrade -y
        </pre>

        <p className="text-gray-700 font-medium">
          Paso 4: Instalar dependencias base
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          sudo apt install curl wget git build-essential nginx -y
        </pre>

        <p className="text-gray-700 font-medium">
          Paso 5: Instalar Node.js LTS
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
          sudo apt install -y nodejs node -v && npm -v
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ⚙️ FASE 4: Configuración de Nginx
        </h2>
        <p className="text-gray-700 mb-2">
          Configura Nginx como reverse proxy tanto para desarrollo como
          producción:
        </p>

        <p className="text-gray-700 font-medium">
          Archivo:{" "}
          <code>/etc/nginx/sites-available/node.kevinsvega.online</code>
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          server &#123; listen 80; server_name node.kevinsvega.online; location
          /vite &#123; proxy_pass http://localhost:3000; proxy_set_header Host
          $host; &#125; location /api &#123; proxy_pass http://localhost:5000;
          proxy_set_header Host $host; &#125; location / &#123; return 200
          '&lt;h1&gt;Servidor activo&lt;/h1&gt;'; add_header Content-Type
          text/html; &#125; &#125;
        </pre>
        <p className="text-gray-700 font-medium">Activar configuración:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
          sudo ln -s /etc/nginx/sites-available/node.kevinsvega.online
          /etc/nginx/sites-enabled/ sudo nginx -t sudo systemctl reload nginx
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔒 FASE 7: Certificados SSL
        </h2>
        <p className="text-gray-700 font-medium">Paso 18: Instalar Certbot</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
          sudo apt install certbot python3-certbot-nginx -y
        </pre>

        <p className="text-gray-700 font-medium">
          Paso 19: Generar certificados SSL
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          sudo certbot --nginx -d node.kevinsvega.online -d
          production.kevinsvega.online
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ✅ Resultado Final
        </h2>
        <p className="text-gray-700 mb-2">
          Al completar la guía tendrás un entorno completo para desarrollo y
          producción:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>React con Vite y CRA funcionando en desarrollo</li>
          <li>API Node.js gestionada por PM2</li>
          <li>Nginx como reverse proxy</li>
          <li>HTTPS activo con Certbot</li>
          <li>Scripts de automatización para dev/prod</li>
        </ul>
      </section>
    </div>
  );
};

export default ServidorNginx;
