import { useState } from "react";

  function Button({ value, onClick,disabled=false,...onClickArgs }) {
    const [loading,setLoading]=useState(false)

    async function handleClick(){
      try{setLoading(true)
        console.log("loading ...",loading)
      await onClick(Object.values(onClickArgs))
      setLoading(false)}
      catch(e){
        setLoading(false)
    }
  }
    
    return (
      <div className="arced bg-[#0f0f0f]">
        <button
          disabled={loading}
          onClick={handleClick}
          className={loading?"btn w-full opacity-30":"btn w-full"}
        >
          {value}
        </button>
      </div>
    );
  }

  export default Button;
