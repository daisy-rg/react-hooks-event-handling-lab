// Code EyesOnMe Component Here
function EyesOnMe(){
    function handleBlur(){
        console.log("Hey! Eyes on me!");}
function handleFocus(){
      console.log("Good!");
      
}            
        
        
    
    return (
    <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me </button>
)
}

export default EyesOnMe;