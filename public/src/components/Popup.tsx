import { useEffect, useRef, ReactNode } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

function Popup({ isOpen, onClose, title, children, width = "max-w-sm", height = "max-h-[80vh]" }: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs bg-black/30">
      <div 
        ref={popupRef}
        className={`bg-[#1c1c1c] rounded-[15px] p-6 w-full ${width} ${height} overflow-y-auto border border-[#3e3e3e]`}
      >
        {/* Заголовок */}
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <button 
              onClick={onClose}
              className="text-[#646464] hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2c2c2c] transition-colors"
            >
              ×
            </button>
          </div>
        )}
        
        {/* Контент */}
        {children}
      </div>
    </div>
  );
}

export default Popup;