export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p style={{ color: "black", backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: "10px", padding: "20px", fontSize: "1.3em", fontWeight: "500" }}>
            We are a father-son duo passionate about delivering quality and trust.<br />
            My father brings decades of experience, dedication, and a strong local presence,
            while I contribute with modern solutions, technology, and fresh energy.<br />
            Together, we blend tradition with innovation to serve our customers better every day.
          </p>
        </div>
        {/* <div id="row"> */}
        <div className="row no-gutters">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                <div className="thumbnail">
                  {" "}
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
