export const Services = (props) => {
  return (
    <div id="brands" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Brands We Deal In</h2>
          <p>We stock and supply products from top-tier hardware brands trusted across India.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-sm-4 col-md-4 mb-4 col-lg-3">
                <img
                  src={d.image}
                  alt={d.name}
                  className="brand-logo"
                />
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
