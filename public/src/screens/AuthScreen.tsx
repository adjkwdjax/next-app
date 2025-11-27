function AuthScreen({ setRoom }) {
    const AddToRoom = () => {
        const roomId = document.getElementById('roomIdInput').value;
        setRoom(roomId);
    }

  return (
    <div className="flex flex-col w-80 h-[60%] sm:w-120 sm:h-[60%] gap-1 overflow-hidden">
        <div>
            <form action="" className="flex gap-1">
                <input type="text" id='roomIdInput' placeholder="код комнаты" className="bg-[#282828] outline-0 sm:w-[90%] w-[85%] h-12 rounded-md text-2xl pl-2"/>
                <button onClick={AddToRoom} className="rounded-md sm:w-[10%] w-[15%] text-[#B2B2B2] text-2xl bg-[#282828]">→</button>
            </form>
        </div>
        <div className="flex justify-center items-center mr-0">
            <p className="text-2xl">или</p>
        </div>
        <div className="bg-[#282828] flex-1 flex rounded-[15px] overflow-y-auto min-h-0">
        </div>
    </div>
  )
}

export default AuthScreen;