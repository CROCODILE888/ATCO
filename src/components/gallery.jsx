import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            Here are some of our top-selling products.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-3"
                  style={{ boxShadow: "initial" }}
                >
                  <Image
                    title={d.title}
                    image={d.image}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
      <hr style={{ width: "80%", marginBottom: 0 }} />
    </div>
  );
};
