import { useRef } from "react";

export const Demouseref = ():JSX.Element => {
    const inputRef =useRef<HTMLInputElement>(null)

    const changeBorder =() =>{
        if (inputRef.current){
            inputRef.current.style.borderColor="red"
        }
    }

  return (
    <div>
      <h3>useRef for DOM Manipulation</h3>
      <input
        type="text"
        placeholder="Click the button to focus me"
        style={{
            border: "2px solid blue",
            padding: "5px",
            borderRadius: "5px",
          }}
      />
      <button onClick={changeBorder}>Change border</button>
    </div>
  );
};

export default Demouseref;