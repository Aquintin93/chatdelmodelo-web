export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Chat del Modelo</h1>
        <p className="text-lg max-w-xl">
          Aprende y aplica el Modelo con nuestro asistente virtual.
        </p>
      </header>

      <a
        href="https://chatgpt.com/g/g-67e13da0521881918f734f0b57e2ce63-botradicaler"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-green-700 transition"
      >
        Hablar con el chatbot
      </a>

      <footer className="mt-10 text-center text-sm text-gray-500 max-w-xl">
        <p>
          Este chatbot es un proyecto educativo independiente y no está afiliado, respaldado ni aprobado por Mercadona S.A.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} chatdelmodelo.com</p>
      </footer>
    </main>
  );
}
