import { useState } from 'react';
import SettingsPopup from './SettingsPopup';

function Header({ user }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header id="header" className="w-full min-h-16 rounded-[15px] flex flex-col sm:flex-row gap-2 p-0">
        {/* Левая часть */}
        <div className="w-full sm:w-[70%] sm:min-w-[256px] h-12 sm:h-full bg-[#1c1c1c] rounded-xl px-4 sm:pl-5 flex items-center justify-center sm:justify-start">
          <h1 className="text-2xl min-[720px]:text-3xl sm:text-4xl lg:text-5xl mb-1 leading-tight ">текст</h1>
        </div>
        
        {/* Правая часть */}
        <div className="w-full sm:w-[30%] h-12 sm:h-full bg-[#1c1c1c] rounded-xl px-3 sm:px-4 flex items-center justify-between p-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <img 
              src={user.avatar}
              alt="Аватар пользователя"
              className="w-8 h-8 min-[480px]:w-10 min-[480px]:h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col gap-0 min-w-0 flex-1">
              <h1 className="text-base min-[480px]:text-lg sm:text-xl leading-tight truncate">{user.name}</h1>
              <h2 className="text-xs min-[480px]:text-sm sm:text-base text-[#646464] leading-tight truncate">@{user.username}</h2>
            </div>
          </div>
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="bg-[#3e3e3e] w-auto min-w-20 sm:min-w-[100px] h-8 sm:h-10 px-3 rounded-[5px] flex items-center justify-center hover:bg-[#4f4f4f] whitespace-nowrap shrink-0 ml-2"
          >
            изменить
          </button>
        </div>
      </header>

      <SettingsPopup
        isOpen={isSettingsOpen}
        user={user}
        onChangeUserData={async (name: string, username: string) => 
        {
          
        }}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  )
}

export default Header;