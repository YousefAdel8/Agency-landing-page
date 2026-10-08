import Styles from "./GraphicSection.module.css";

export default function GraphicSection() {
  return (
    <>
      <div className={`container-fluid  ${Styles.GraphicSection}`}>
        <div className={`row ${Styles.GraphicSection}`}>
          {/* Left Section */}
          <div
            className={`col-md-6 col-12 order-1 order-md-2 ${Styles.Graphicimage}`}
          >
            <div
              className={`d-flex justify-content-end align-items-center flex-column h-100 pb-md-5 pb-3`}
            >
              <div className={`${Styles.MaxWidthText}`}>
                <h3
                  className={`${Styles.FrauncesFont} ${Styles.GraphicH3} text-center pb-2`}
                >
                  Graphic Design
                </h3>
                <p className={`text-center {${Styles.GraphicParagragh}`}>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div
            className={`col-md-6 col-12 order-1 order-md-2 ${Styles.Photographyimage}`}
          >
            <div
              className={`d-flex justify-content-end align-items-center flex-column h-100 pb-md-5 pb-3`}
            >
              <div className={`${Styles.MaxWidthText}`}>
                <h3
                  className={`${Styles.FrauncesFont} ${Styles.PhotographyH3} text-center pb-2`}
                >
                  Photography
                </h3>
                <p className={`text-center {${Styles.PhotographyParagragh}`}>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
