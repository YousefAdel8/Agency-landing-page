import Styles from "./EggSection.module.css";

export default function EggSection() {
  return (
    <>
      <div className={`container-fluid  ${Styles.EggSection}`}>
        <div className={`row ${Styles.EggSection}`}>
          {/* Left Section */}
          <div className="col-md-6 col-12 order-2 order-md-1 d-flex justify-content-center align-items-center flex-column">
            <div className={`${Styles.EggText}`}>
              <h2 className={`fw-bolder ${Styles.EggTextH2} ${Styles.FrauncesFont} pb-md-3`}>Transform your Brand</h2>
              <p className="pb-md-2">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a href="#" className={`${Styles.EggTextLink} ${Styles.FrauncesFont}`}>Learn More</a>
            </div>
          </div>
          {/* Right Section */}
          <div className={`col-md-6 col-12 order-1 order-md-2 ${Styles.Eggimage}`}></div>
        </div>
      </div>
    </>
  );
}
