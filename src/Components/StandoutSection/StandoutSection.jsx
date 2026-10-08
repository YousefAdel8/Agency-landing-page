import Styles from "./StandoutSection.module.css";

export default function StandoutSection() {
  return (
    <>
      <div className={`container-fluid  ${Styles.StandoutSection}`}>
        <div className={`row ${Styles.StandoutSection}`}>
          {/* Left Section */}
          <div className={`col-md-6 col-12 ${Styles.Standoutimage}`}></div>
          {/* Right Section */}
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
            <div className={`${Styles.StandoutText}`}>
              <h2 className={`fw-bolder ${Styles.StandoutTextH2} ${Styles.FrauncesFont} pb-md-3`}>
                Stand out to the right audience
              </h2>
              <p className={`pb-md-2 ${Styles.StandoutTextParagraph}`}>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <a href="#" className={`${Styles.StandoutTextLink} ${Styles.FrauncesFont}`}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
