function Subcomponents({ title, description, image }) {
  return (
    <div className="ComponentCard">
      <img src={image} alt={title} className="imgSrc" />
      <div className="text">
        <h2 className="title">{title}</h2>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default Subcomponents;

