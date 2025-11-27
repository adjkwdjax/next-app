import { useState } from 'react';

function VideoChoose(/* тут пропсы для setState и сами state  */) {
    /* тут функция выбора фильмов если source пустой, окно заменяющее проигрыватель на время пока source не выбран */
}

function VideoPlayer(/* сюда пропсы для setState и сами state(в частности source), дополнительно в этой функции будет работа с websocket для синхронизации для совместного просмотра */) {
    /* тут видео плеер проигрывающий видео */
}

export default function VideoRoute() {
    const [source, setSource] = useState<string | null>(null);

  return (
    <div className='border w-full h-full rounded-xl'>

        {source ? 'yes' : 'no'}

    </div>
  );
}



