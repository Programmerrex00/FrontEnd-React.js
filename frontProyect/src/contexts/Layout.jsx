import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileExcel, faFilePdf, faFileLines, faCircleNodes, faPager,
    faClipboardList, faTag, faScaleBalanced, faUpload
} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button/Button';
import Input from '../components/InputsContents/Input';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);


    const handleCopiarA = () => {
        // Lógica para copiar
      };
    
      const handleCopiarDe = () => {
        // Lógica para copiar
      };


      const handleCrear = () => {
        // Lógica para copiar
      };


      const handleChange = (e) => {
        console.log(e.target.value);
      };


      const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
      ];

  return (
    <div className={`layout ${theme}`}>

      <header className="layout__header bg-gray-800 text-white p-4 font-bold text-yellow-500 rounded-md">
        <h3>COTIZACION / REQ</h3>
      </header>

      <main className='layout_main'>
        <div className='icon-container flex flex-wrap gap-6 ml-7 mt-7'>

          <button>
            <FontAwesomeIcon icon={faFileExcel} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-green-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'/>
          </button>
          

          <button>
            <FontAwesomeIcon icon={faFilePdf} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-red-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>
          
          
          <button>
            <FontAwesomeIcon icon={faFileLines} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-blue-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>

          <button>
            <FontAwesomeIcon icon={faCircleNodes} className='icon text-lg middle none h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50' />
          </button>


          <button>
            <FontAwesomeIcon icon={faPager} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-yellow-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>

          <button>
          <FontAwesomeIcon icon={faClipboardList} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-black-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>

          <button>
          <FontAwesomeIcon icon={faTag} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-yellow-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>

          <button>
            <FontAwesomeIcon icon={faScaleBalanced} className='icon text-lg middle none h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-center font-sans text-xs font-medium uppercase shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50' />
          </button>


          <button>
          <FontAwesomeIcon icon={faUpload} className='icon text-lg middle none relative h-10 max-h-[25px] w-10 max-w-[25px] rounded-lg bg-green-500   text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' />
          </button>

        </div>



        <div className="flex flex-col">

        <span className="flex mb-0 text-xs"> 
          <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-1 px-5 rounded-l ml-6 mt-2">Cliente</span>
          <Input className="bg-yellow-500 w-22 font-bold text-center text-yellow-200 p-2 px-5 rounded-full-7 rounded-l ml-1 mt-2 hover:bg-yellow-600 hover:text-white cursor-pointer transition-colors" value="Ver" type="Button" label="Nombre" onChange={handleChange} />
          <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-64" type="text" label="Nombre" onChange={handleChange} />
          <Input className="bg-yellow-500 w-16 font-bold text-center text-yellow-200 p-2 px-5 rounded-full-7 ml-1 mt-2 hover:bg-yellow-600 hover:text-white cursor-pointer transition-colors" value="Listar" type="Button" label="Listar" onChange={handleChange} />
        </span>


        <span className="flex mb-0 text-xs"> 
          <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-1 px-5 rounded-l ml-6 mt-2">Nombre</span>
          <Input className="field text-sm text-gray-600 p-1 px-3 rounded-r ml-1 mt-2 w-96" type="text" label="Nombre" onChange={handleChange} />
        </span>

        <span className="flex mb-0 text-xs"> 
          <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 px-5 rounded-l ml-6 mt-2">Persona de Contacto</span>
          <Input className="field text-sm text-gray-600 p-1 px-3 rounded-r ml-1 mt-2 w-96" type="select" label="Persona de Contacto" onChange={handleChange} options={options} />
        </span>


        <span className="flex mb-0 text-xs"> 
          <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-0 px-5 rounded-l ml-6 mt-2">No. Ref Cliente</span>
          <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-96" type="text" label="Nombre" onChange={handleChange} />
        </span>


        <span className="flex mb-0 text-xs"> 
          
          <Input className="field text-sm bg-gray-500 text-gray-200 p-1.5 px-3 rounded-r w-full ml-6 mt-2 w-60" type="select" label="Pesos" onChange={handleChange} options={options} />
          <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-64" type="text" label="Nombre" onChange={handleChange} />
        </span>


        </div>


        <div className="flex justify-end mt-0">
  <div className="flex flex-col">

    <span className="flex mb-0 text-xs"> 
      <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-1 px-5 rounded-l ml-6 mt-2">Cliente</span>
      <Input className="bg-yellow-500 w-22 font-bold text-center text-yellow-200 p-2 px-5 rounded-full-7 rounded-l ml-1 mt-2 hover:bg-yellow-600 hover:text-white cursor-pointer transition-colors" value="Ver" type="Button" label="Nombre" onChange={handleChange} />
      <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-64" type="text" label="Nombre" onChange={handleChange} />
      <Input className="bg-yellow-500 w-16 font-bold text-center text-yellow-200 p-2 px-5 rounded-full-7 ml-1 mt-2 hover:bg-yellow-600 hover:text-white cursor-pointer transition-colors" value="Listar" type="Button" label="Listar" onChange={handleChange} />
    </span>

    <span className="flex mb-0 text-xs"> 
      <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-1 px-5 rounded-l ml-6 mt-2">Nombre</span>
      <Input className="field text-sm text-gray-600 p-1 px-3 rounded-r ml-1 mt-2 w-96" type="text" label="Nombre" onChange={handleChange} />
    </span>

    <span className="flex mb-0 text-xs"> 
      <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 px-5 rounded-l ml-6 mt-2">Persona de Contacto</span>
      <Input className="field text-sm text-gray-600 p-1 px-3 rounded-r ml-1 mt-2 w-96" type="select" label="Persona de Contacto" onChange={handleChange} options={options} />
    </span>

    <span className="flex mb-0 text-xs"> 
      <span className="bg-gray-500 w-28 font-bold text-center text-gray-200 p-0 px-5 rounded-l ml-6 mt-2">No. Ref Cliente</span>
      <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-96" type="text" label="Nombre" onChange={handleChange} />
    </span>

    <span className="flex mb-0 text-xs"> 
      <Input className="field text-sm bg-gray-500 text-gray-200 p-1.5 px-3 rounded-r w-full ml-6 mt-2 w-60" type="select" label="Pesos" onChange={handleChange} options={options} />
      <Input className="field text-sm text-gray-600 p-1.5 px-3 rounded-r w-full ml-1 mt-2 w-64" type="text" label="Nombre" onChange={handleChange} />
    </span>

  </div>
</div>

        









    <div className='button-container'>
    <div className="otros-botones">
      <Button label="Copiar de" onClick={handleCopiarDe}></Button>
      <Button label="Copiar a" onClick={handleCopiarA}></Button>
    </div>
  </div>

  <div className='button-container-crear'>
    <div className='crear'>
      <button onClick={handleCrear} className="before:ease relative h-12 w-40 overflow-hidden border border-gray-800 bg-gray-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-800 hover:before:-translate-x-40">Crear</button>
    </div>
  </div>

  

  {children}


    </main>

    </div>
  );
};

export default Layout;