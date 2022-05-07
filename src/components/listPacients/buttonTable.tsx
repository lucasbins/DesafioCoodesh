import { useState } from 'react';
import { Pacient, ResultsEntity } from '../../interfaces/pacient';
import { Widget } from './widget';

interface ButtonTableProps {
  pacient: ResultsEntity
}

export const ButtonTable= ({pacient}: ButtonTableProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleModalPacient() {
    setIsOpen(!isOpen)
  }

  return <>
    {isOpen && <Widget pacient={pacient}isOpen={isOpen} onModalChanged={handleModalPacient} /> }
    <button
      className='bg-slate-700 w-full rounded-md px-2 py-1 text-slate-200 font-bold'
      type='button'
      onClick={() => {handleModalPacient()}}
    >
      Visualizar
    </button>
  </>
    
}