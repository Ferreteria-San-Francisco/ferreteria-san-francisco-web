import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí podrías enviar el error a un servicio de logging
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              ¡Ups! Algo salió mal
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Ocurrió un error inesperado. Por favor, intentá recargar la página
              o volvé al inicio.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                Recargar página
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                onClick={() => this.setState({ hasError: false, error: null })}
              >
                Ir al inicio
              </Link>
            </div>
            {/* Mostrar detalles del error solo en desarrollo */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left max-w-lg mx-auto">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Detalles del error (solo desarrollo)
                </summary>
                <pre className="mt-2 p-4 bg-red-50 text-red-800 text-xs rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;