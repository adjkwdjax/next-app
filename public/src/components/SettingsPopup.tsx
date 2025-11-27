import { useState } from 'react';
import Popup from './Popup';

interface SettingsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    userName: string;
    avatar?: string;
  };
  onChangeUserData: (name: string, userName: string) => Promise<void>;
}

function SettingsPopup({ isOpen, onClose, user, onChangeUserData }: SettingsPopupProps) {
  const [name, setName] = useState<string>(user.name);
  const [userName, setUserName] = useState<string>(user.username);

  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="профиль"
      width="max-w-md"
    >
      <div className='flex flex-row gap-4 items-center'>
        <button className='w-20 h-20 min-[480px]:w-18 min-[480px]:h-18 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 bg-black'>
          <img 
            src={user.avatar || "src/assets/ava.jpg"} 
            alt="Аватар пользователя"
            className="w-20 h-20 min-[480px]:w-18 min-[480px]:h-18 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 hover:opacity-70 border"
          />
        </button>
        <div className='flex flex-col gap-2 justify-center'>
          <input 
            type="text" 
            id='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder='имя' 
            className='bg-[#323232] rounded-[5px] w-48 h-8 pl-2 outline-none focus:bg-[#242424]' 
          />
          <input 
            type="text" 
            id='username' 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder='юзернейм' 
            className='bg-[#323232] rounded-[5px] w-48 h-8 pl-2 outline-none focus:bg-[#242424]' 
          />
          <button 
            onClick={async () => {
              await onChangeUserData(name, userName); 
              onClose();
            }} 
            className='bg-[#3e3e3e] w-auto min-w-[80px] sm:min-w-[100px] h-8 sm:h-8 rounded-[5px] flex items-center justify-center hover:bg-[#4f4f4f] whitespace-nowrap shrink-0'
          >
            сохранить
          </button>
        </div>
      </div>
    </Popup>
  );
}

export default SettingsPopup;