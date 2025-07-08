import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Settings, ArrowRight } from 'lucide-react';

const Nginx = () => {
  const features = [
    {
      title: 'Proxy Reverso',
      description: 'Distribución de carga y proxy para aplicaciones',
      icon: <Globe className="h-6 w-6" />,
      topics: ['Load Balancing', 'Upstream', 'Failover', 'SSL Termination']
    },
    {
      title: 'Servidor Web',
      description: 'Servir contenido estático de forma eficiente',
      icon: <Zap className="h-6 w-6" />,
      topics: ['Static Files', 'Gzip', 'Caching', 'HTTP/2']
    },
    {
      title: 'Seguridad',
      description: 'Configuraciones de seguridad avanzadas',
      icon: <Shield className="h-6 w-6" />,
      topics: ['SSL/TLS', 'Rate Limiting', 'Access Control', 'Headers']
    },
    {
      title: 'Configuración',
      description: 'Configuración flexible y modular',
      icon: <Settings className="h-6 w-6" />,
      topics: ['Virtual Hosts', 'Locations', 'Modules', 'Logs']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nginx
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Servidor web de alto rendimiento, proxy reverso y balanceador de carga. La solución perfecta para aplicaciones de producción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Comenzar Tutorial
              </button>
              <button className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
                Ver Configuraciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para un servidor web robusto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="text-gray-600 font-semibold hover:text-gray-700 transition-colors flex items-center">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ejemplo de Configuración
            </h2>
            <p className="text-xl text-gray-600">
              Configuración básica de Nginx con proxy reverso
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # Proxy to application
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static files
    location /static/ {
        alias /var/www/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Explorar Otras Tecnologías
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/python"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Python
              </Link>
              <Link
                to="/laravel"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Laravel
              </Link>
              <Link
                to="/nodejs"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Node.js
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nginx;