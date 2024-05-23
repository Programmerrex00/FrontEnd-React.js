import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileExcel, faFilePdf, faFileLines, faCircleNodes, faPager,
    faClipboardList, faTag, faScaleBalanced, faUpload
} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button/Button';

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

  return (
    <div className={`layout ${theme}`}>
      <header className="layout__header">
        <h3>COTIZACION / REQ</h3>
      </header>

      <main className='layout_main'>
        <div className='icon-container'> {/* Contenedor de iconos */}
          <FontAwesomeIcon icon={faFileExcel} className='icon' />
          <FontAwesomeIcon icon={faFilePdf} className='icon' />
          <FontAwesomeIcon icon={faFileLines} className='icon' />
          <FontAwesomeIcon icon={faCircleNodes} className='icon' />
          <FontAwesomeIcon icon={faPager} className='icon' />
          <FontAwesomeIcon icon={faClipboardList} className='icon' />
          <FontAwesomeIcon icon={faTag} className='icon' />
          <FontAwesomeIcon icon={faScaleBalanced} className='icon' />
          <FontAwesomeIcon icon={faUpload} className='icon' />
        </div>

    {children}
    
















    <button class="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
      <span relative="relative z-10">Shine</span>
    </button>
















    <div className='button-container'>
        <Button label="Copiar de" onClick={handleCopiarDe}></Button>
        <Button label="Copiar a" onClick={handleCopiarA}></Button>
    </div>

    <div className='button-container-crear'>
        <Button label="Crear" onClick={handleCrear}></Button>
    </div>

    </main>

    </div>
  );
};

export default Layout;