import { useState } from 'react';
import Popup from './Popup';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateUser: (name: string, userName: string) => Promise<void>;
}

function LoginPopup({ isOpen, onClose, onCreateUser }: LoginPopupProps) {
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onClose} 
      title="авторизация"
      width="max-w-md"
    >
        <div>123</div>
    </Popup>
  );
}

export default LoginPopup;