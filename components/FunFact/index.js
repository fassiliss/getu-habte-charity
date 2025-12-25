import React from "react";
import Image from "next/image";
import shape from "/images/cta-shape.png";

const FunFact = (props) => {
  const funfact = [
    {
      title: "100+",
      subTitle: "Kids Fed Daily",
    },
    {
      title: "50+",
      subTitle: "Students Supported",
    },
    {
      title: "25+",
      subTitle: "Volunteers",
    },
    {
      title: "2",
      subTitle: "Active Programs",
    },
  ];
  return (
    <section className="wpo-fun-fact-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {funfact.map((funfact, fitem) => (
                <div className="grid" key={fitem}>
                  <div className="info">
                    <h3>{funfact.title}</h3>
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
              <div className="shape">
                <Image src={shape} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
