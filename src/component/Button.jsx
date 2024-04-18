  function Button({ value, onClick,disabled=false,...onClickArgs }) {
    return (
      <div className="arced bg-[#0f0f0f]">
        <button
          disabled={disabled}
          onClick={() => {
            onClick && onClick(Object.values(onClickArgs));
          }}
          className={disabled?"btn w-full opacity-30":"btn w-full"}
        >
          {value}
        </button>
      </div>
    );
  }

  export default Button;
