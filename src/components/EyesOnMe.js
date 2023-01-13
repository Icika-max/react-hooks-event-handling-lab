// Code EyesOnMe Component Here
const EyesOnMe= () => {
    const handleClickFocus=()=>{
        console.log("Good")
    }
    const handleClickBlur=()=>{
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onClick={handleClickFocus}>focus</button>
            <button onClick={handleClickBlur}>blur</button>
        </div>
    );
}
 
export default  EyesOnMe;