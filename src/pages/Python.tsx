import { Link } from 'react-router-dom';
import { Code, Database, Bot, BarChart3, ArrowRight } from 'lucide-react';

const Python = () => {
  const sections = [
    {
      title: 'Desarrollo Web',
      description: 'Frameworks como Django y Flask para crear aplicaciones web robustas',
      icon: <Code className="h-6 w-6" />,
      topics: ['Django', 'Flask', 'FastAPI', 'REST APIs']
    },
    {
      title: 'Ciencia de Datos',
      description: 'Análisis y visualización de datos con herramientas especializadas',
      icon: <BarChart3 className="h-6 w-6" />,
      topics: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter']
    },
    {
      title: 'Machine Learning',
      description: 'Inteligencia artificial y aprendizaje automático',
      icon: <Bot className="h-6 w-6" />,
      topics: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      title: 'Bases de Datos',
      description: 'Integración con diferentes sistemas de bases de datos',
      icon: <Database className="h-6 w-6" />,
      topics: ['SQLAlchemy', 'PostgreSQL', 'MongoDB', 'Redis']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Code className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Python
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              El lenguaje de programación más versátil del mundo. Desde desarrollo web hasta inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Comenzar Tutorial
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-blue-200">
                Ver Ejemplos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas de Especialización
            </h2>
            <p className="text-xl text-gray-600">
              Explora las diferentes aplicaciones de Python
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {section.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {section.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Ver más detalles
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
              Una API REST simple con FastAPI
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str
    price: float

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}`}</pre>
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

export default Python;