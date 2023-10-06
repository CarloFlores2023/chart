

const Forms = ()=> {
return(
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="mb-4">
        <label className="text-center justify-center block font-bold text-sky-700">Expresion Algrebraica</label>
        <input
         type="text"
         className="border border-black rounded-md p-1 w-full "
         />
        </div>
        <div>
        <label className="text-center justify-center block font-bold text-sky-700">Inicial</label>
        <input
         type="text"
         className="border border-black rounded-md p-1 w-full "
         />
        </div>
        <div>
        <label className="text-center justify-center block font-bold text-sky-700">Final</label>
        <input
         type="text"
         className="border border-black rounded-md p-1 w-full "
         />
        </div>

    </form>
)}

export default Forms