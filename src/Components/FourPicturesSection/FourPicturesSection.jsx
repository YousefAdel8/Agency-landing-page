import Styles from "./FourPicturesSection.module.css";

export default function FourPicturesSection() {
  return (
    <>
      <div className={`${Styles.FourPicturesSection}`}>
        <div className="row g-0">
          <div className={`col-md-3 col-12`}>
            <div className={`${Styles.MilkBottlesImage}`}></div>
          </div>
          <div className={`col-md-3 col-12`}>
            <div className={`${Styles.OrangeImage}`}></div>
          </div>
          <div className={`col-md-3 col-12`}>
            <div className={`${Styles.ConeImage}`}></div>
          </div>
          <div className={`col-md-3 col-12`}>
            <div className={`${Styles.SugarCubesImage}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}
