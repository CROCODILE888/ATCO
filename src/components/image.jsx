export const Image = ({ title, image }) => {
  return (
    <div id="portfolio-item" className="portfolio-item">
      <div className="hover-bg">
        {" "}
        {/* <a href={largeImage} title={title} data-lightbox-gallery="gallery1"> */}
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={image} className="img-responsive" alt={title} />{" "}
        {/* </a>{" "} */}
      </div>
    </div>
  );
};
