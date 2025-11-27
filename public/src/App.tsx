import Header from './components/Header.tsx'
import RoomScreen from './screens/RoomScreen.tsx'
import AuthScreen from './screens/AuthScreen.tsx'
import LoginScreen from './screens/LoginScreen.tsx'

import { useState, useEffect } from "react";

let user = {};

function App() {
  const [room, setRoom] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);

    useEffect(() => {
    //checkAuth();
  }, []);

  const checkAuth = async () => {
  try {
    const response = await fetch('/api/auth/check', {
      method: 'GET',
      credentials: 'include'
    });

    const data = await response.json()
    
    if (response.status === 200) {
      await handleAuthorizing(data.userId)
      setIsAuthorized(true);
      console.log('Авторизован');
    } else if (response.status === 401) {
      setIsAuthorized(false);
      console.log('Не авторизован');
    } else {
      setIsAuthorized(false);
      console.log('Ошибка сервера:', response.status);
    }
  } catch (error) {
    console.error('Ошибка проверки авторизации:', error);
    setIsAuthorized(false);
  }
};

  const handleAuthorizing = async (id:string) => {
    try {
      const response = await fetch(`/api/users/getUserById/${id}`, {
        method: 'GET',
        });

        if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data !== null) {
            user = data;
        } else {
            console.error('Не удалось найти пользователя по Id: ')
        }
    } catch (error) {
      console.error('Ошибка проверки авторизации:', error);
      setIsAuthorized(false);
    }

  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-[95%] h-[95%] rounded-[15px] flex flex-col min-w-[220px] gap-2'> 
        
        {isAuthorized && !room && <Header user={user} />}

        {/* логика работы Screen */}
        <div className="w-full h-full rounded-[15px] bg-[#1c1c1c] flex flex-col justify-center items-center gap-2">
          {(() => {
          if (room !== null && isAuthorized) {
            return <RoomScreen roomId={room} header={Header} />
          } else if (room == null && isAuthorized) {
            return <AuthScreen setRoom={setRoom} />
          } else {
            return <LoginScreen setIsAuthorized={setIsAuthorized} />
          }
          })()}
        </div>
      {/* логика работы Screen */}

      </div>
      
    </div>
  )
}

export default App