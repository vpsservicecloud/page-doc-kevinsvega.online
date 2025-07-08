import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Zap, Package, Globe, ArrowRight } from 'lucide-react';

const Node = () => {
  const features = [
    {
      title: 'Express.js',
      slug: 'Express',
      description: 'Framework web minimalista y flexible para Node.js.',
      icon: <Server className="h-6 w-6" />,
      topics: ['Routing', 'Middleware', 'Templates', 'REST APIs'],
    },
    {
      title: 'Servidor Nginx',
      slug: 'Servidor-Nginx-Node',
      description: 'Configuración de Nginx como servidor de alto rendimiento, escalable y listo para producción en entornos Node.js.',
      icon: <Server className="h-6 w-6" />,
      topics: ['Reverse Proxy', 'Load Balancing', 'Archivos Estáticos', 'SSL/TLS',],
    },
    {
      title: 'Ecosistema NPM',
      slug: 'Ecosistema-NPM',
      description: 'El ecosistema de paquetes más grande del mundo.',
      icon: <Package className="h-6 w-6" />,
      topics: ['Lodash', 'Axios', 'Moment', 'Winston'],
    },
    {
      title: 'Asincronía',
      slug: 'Asincronía',
      description: 'Programación asíncrona y manejo de eventos.',
      icon: <Zap className="h-6 w-6" />,
      topics: ['Promises', 'Async/Await', 'Callbacks', 'Event Loop'],
    },
    {
      title: 'APIs Modernas',
      slug: 'APIs-Modernas',
      description: 'Creación de APIs RESTful y GraphQL.',
      icon: <Globe className="h-6 w-6" />,
      topics: ['REST', 'GraphQL', 'WebSockets', 'Microservicios'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Node.js
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entorno de ejecución para JavaScript del lado del servidor. Escalable, eficiente y perfecto para aplicaciones en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Comenzar Tutorial
              </button>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-green-200">
                Ver Ejemplos
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
              Todo lo que necesitas para el desarrollo del lado del servidor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
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
                      className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                  <Link
                    to={`/explorar/${feature.slug}`}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center"
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
              Ejemplo de Código
            </h2>
            <p className="text-xl text-gray-600">
              Servidor Express.js con rutas RESTful
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</pre>
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
                to="/nginx"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Nginx
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Node;