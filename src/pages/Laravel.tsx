import { Link } from 'react-router-dom';
import { Database, Shield, Zap, Users, ArrowRight } from 'lucide-react';

const Laravel = () => {
  const features = [
    {
      title: 'Eloquent ORM',
      description: 'Sistema de mapeo objeto-relacional elegante y expresivo',
      icon: <Database className="h-6 w-6" />,
      topics: ['Modelos', 'Relaciones', 'Migraciones', 'Factories']
    },
    {
      title: 'Autenticación',
      description: 'Sistema de autenticación completo y seguro',
      icon: <Shield className="h-6 w-6" />,
      topics: ['Laravel Sanctum', 'Policies', 'Gates', 'Middleware']
    },
    {
      title: 'Blade Templates',
      description: 'Motor de plantillas potente y fácil de usar',
      icon: <Zap className="h-6 w-6" />,
      topics: ['Componentes', 'Layouts', 'Directivas', 'Slots']
    },
    {
      title: 'Artisan CLI',
      description: 'Herramienta de línea de comandos para desarrollo',
      icon: <Users className="h-6 w-6" />,
      topics: ['Comandos', 'Migraciones', 'Seeders', 'Factories']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Database className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Laravel
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              El framework PHP para artesanos web. Sintaxis elegante y herramientas poderosas para crear aplicaciones web modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Comenzar Tutorial
              </button>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-red-200">
                Ver Documentación
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
              Todo lo que necesitas para crear aplicaciones web robustas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-lg p-3 mr-4">
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
                      className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center">
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
              Ejemplo de Código
            </h2>
            <p className="text-xl text-gray-600">
              Un controlador REST con Laravel
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('author')
            ->latest()
            ->paginate(15);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        return Post::create($request->all());
    }

    public function show(Post $post)
    {
        return $post->load('author', 'comments');
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
                to="/nodejs"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Node.js
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

export default Laravel;