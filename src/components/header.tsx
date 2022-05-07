import { UserCircle, Image } from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div className='bg-white mb-10 w-full flex p-4 items-center'>
      <Image size={32} />
      <p className='font-bold ml-2 text-xl text-slate-600'>Pharma Inc</p>
      <div className='right-10 absolute flex items-center '>
        <p className="text-slate-600 mr-3 text-right" >User</p>
        <UserCircle size={32} className="text-slate-600" />
      </div>
    </div>
    );
}

export default Header;