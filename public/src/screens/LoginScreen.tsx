import { useState } from 'react';

function LoginScreen({ setIsAuthorized }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showButton, setShowButton] = useState(false);
  const [typeAuthorize, setTypeAuthorize] = useState('none');

  const handleInput = (e) => {
    const value = e.target.value;
    setUsername(value);
    setShowButton(value.length > 0);
    };

  const installCookies = async (token:string) => {
    document.cookie = `token=${token}; path=/; max-age=2592000`; // 24 часа
    }

    const handleCheckUsername = async () => {
    try {
        const response = await fetch(`/api/users/getUserByUsername/${username}`, {
        method: 'GET',
        });

        if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();

        if (data !== null) {
            setTypeAuthorize('login');
        } else {
            setTypeAuthorize('registration');
        }
        
    } catch (error) {
        console.error('Ошибка запроса:', error);
    }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
            });

            if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();

            await installCookies(data.token);
            
            setIsAuthorized(true);
            
            console.log('Успешный вход:', data);
            
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    };

    const handleRegistration = async () => {
        try {
            const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
            });

            if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();

            await installCookies(data.token);

            console.log('Успешная регистрация:', data);
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
        };

  return (
    <>

    <div className="items-center justify-center rounded-xl bg-[#282828] flex w-80 h-[60%] sm:w-120 sm:h-[60%] gap-1 flex-col overflow-hidden">
        {typeAuthorize === 'none' && (<input 
            type="text" 
            value={username}
            onInput={handleInput}
            className="w-2/3 h-15 bg-[#242424] rounded-xl text-3xl outline-none pl-4 text-white" 
            placeholder="юзернейм" 
        />)}
        {typeAuthorize !== 'none' && (<input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-2/3 h-15 bg-[#242424] rounded-xl text-3xl outline-none pl-4 text-white" 
            placeholder="юзернейм" 
        />)}
        {typeAuthorize !== 'none' && (<input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-2/3 h-15 bg-[#242424] rounded-xl text-3xl outline-none pl-4 text-white" 
            placeholder="пароль" 
        />)}
        {typeAuthorize === 'registration' && (<input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-2/3 h-15 bg-[#242424] rounded-xl text-3xl outline-none pl-4 text-white" 
            placeholder="почта" 
        />)}

      
      {showButton && (
        <button 
          onClick={ () => {
            switch (typeAuthorize) {
                case 'none':
                    handleCheckUsername();
                    break;
                case 'login':
                    handleLogin();
                    break;
                case 'registration':
                    handleRegistration();
                    break;
                default:
                    console.error('unhandled typeAuthorize')
                    break;
            }
          }}
          className="bg-[#1c1c1c] w-2/3 h-15 hover:bg-[#181818] text-white font-bold py-2 px-4 rounded"
        >
           ➔
        </button>
      )}
    </div>
    </>
  );
}

export default LoginScreen;