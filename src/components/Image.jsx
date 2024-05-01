function Image({ src, alt, classNames }) {
  const classes = classNames || [];
  return (
    <img src={src} alt={alt} className={["max-h-full", ...classes].join("")} />
  );
}

export default Image;
