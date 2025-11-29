import { io } from "socket.io-client";
import { useEffect } from "react";
import type { Room } from '@/types';

import { VideoSearch } from "../components/VideoSearch";

import 'reactjs-popup/dist/index.css';

function RoomScreen(room: Room) {
    useEffect(() => {
        const newSocket = io('http://localhost:3000');

        newSocket.on('connect', () => {
            console.log('✅ Подключились к серверу, ID:', newSocket.id);
            newSocket.emit('join-room', room.room_id);
        });

        newSocket.on('disconnect', () => {
            console.log('❌ Отключились от сервера');
        });

        newSocket.on('connect_error', (error) => {
            console.log('❌ Ошибка подключения:', error);
        });

        return () => {
            console.log('🧹 Очистка компонента, отключаем socket');
            newSocket.disconnect();
        };
    }, [room.room_id]);

    return(
        <div className="flex w-full relative h-full sm:flex-row flex-col rounded-xl gap-2 p-4">
            <div id="leftBlock" className="bg-[#282828] relative sm:w-3/4 w-full min-h-3/4 rounded-xl"> 
                <VideoSearch /> 
            </div>

            <div id="rightBlock" className="bg-[#282828] rounded-xl flex-1 flex flex-col min-h-full gap-2 overflow-hidden p-2">
                <div id="scrollBar" className="border border-[#4a4a4a] rounded-xl w-full h-11/12 min-h-0 overflow-auto max-w-full scrollbar">
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                    <div className="min-h-60">12345678</div>
                </div>
                <div className="w-full min-h-1/12 rounded-xl">
                    <input type="text" className="h-full text-xl outline-0 bg-[#242424] rounded-xl pl-2" placeholder="сообщение" />
                </div>
            </div>
        </div>
    )
}

export default RoomScreen;