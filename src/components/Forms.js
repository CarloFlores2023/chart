const Forms = ({ expression, start, end, setExpression, setStart, setEnd, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="expression" className="block text-sky-700 font-semibold text-lg mb-2">
            Expresión Algebraica
          </label>
          <input
            type="text"
            id="expression"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 text-gray-700 placeholder-gray-400"
            placeholder="Ejemplo: x^2 + 3x - 5"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="start" className="block text-sky-700 font-semibold text-lg mb-2">
            Inicial
          </label>
          <input
            type="number"
            id="start"
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 text-gray-700 placeholder-gray-400"
            placeholder="Ejemplo: 0"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="end" className="block text-sky-700 font-semibold text-lg mb-2">
            Final
          </label>
          <input
            type="number"
            id="end"
            value={end}
            onChange={(e) => setEnd(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 text-gray-700 placeholder-gray-400"
            placeholder="Ejemplo: 10"
          />
        </div>
      </form>
    );
  };
  
  export default Forms;
  