import { useState } from 'react';

export default function VideoRoute() {
    const [source, setSource] = useState<string | null>(null);

  return (
    <div className='border w-full h-full rounded-xl'>

        <video src="https://dlcache4.vibio.tv/e40ff9657f0fe5e44dcd56f464ed8aaa/3105/3105757/output.lq.mp4" className='w-full h-full'></video>

    </div>
  );
}



