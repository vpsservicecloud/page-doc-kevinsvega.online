import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Server, Shield } from 'lucide-react';

const Home = () => {
  const technologies = [
    {
      name: 'Python',
      description: 'Lenguaje versátil para desarrollo web, ciencia de datos y automatización',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      path: '/python'
    },
    {
      name: 'Laravel',
      description: 'Framework PHP elegante para aplicaciones web modernas',
      icon: <Database className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      path: '/laravel'
    },
    {
      name: 'Node.js',
      description: 'Entorno de ejecución para JavaScript del lado del servidor',
      icon: <Server className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      path: '/nodejs'
    },
    {
      name: 'Nginx',
      description: 'Servidor web de alto rendimiento y proxy reverso',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-gray-500 to-gray-600',
      path: '/nginx'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Domina las Tecnologías
              <span className="block text-blue-600">del Desarrollo Web</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explora las herramientas más poderosas para crear aplicaciones web modernas y escalables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/python"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#technologies"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-blue-200"
              >
                Ver Tecnologías
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologías Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Cada tecnología incluye documentación completa y ejemplos prácticos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <Link
                  to={tech.path}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${tech.color}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} text-white mb-4`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {tech.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir DevStack?
            </h2>
            <p className="text-xl text-gray-600">
              Tu guía completa para el desarrollo web moderno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ejemplos Prácticos
              </h3>
              <p className="text-gray-600">
                Código real que puedes usar inmediatamente en tus proyectos
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Documentación Completa
              </h3>
              <p className="text-gray-600">
                Guías detalladas para cada tecnología y caso de uso
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Buenas Prácticas
              </h3>
              <p className="text-gray-600">
                Aprende las mejores técnicas y patrones de desarrollo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;