function Button({ value, onClick }) {
  return (
    <div className="arced bg-[#0f0f0f]">
      <button
        onClick={() => {
          onClick && onClick();
        }}
        className="btn w-full"
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
