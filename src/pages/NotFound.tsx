import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                        Página no encontrada
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        Volver al inicio
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}
