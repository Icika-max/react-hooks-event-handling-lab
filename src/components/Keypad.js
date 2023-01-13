// Code Keypad Component Here

function Keypad (){
    const handleClck=()=>{
        console.log("entering password...")
    }
    return (
        <div>
            <input type="password" onClick={handleClck} />
        </div>
    )
}

export default Keypad;