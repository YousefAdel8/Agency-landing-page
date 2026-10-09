import Styles from "./FourPicturesSection.module.css";

export default function FourPicturesSection() {
  return (
    <section className={Styles.FourPicturesSection}>
      <div className="row g-0">
        <div className="col-6 col-md-3">
          <div className={`${Styles.galleryImage} ${Styles.milkBottles}`}></div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${Styles.galleryImage} ${Styles.orange}`}></div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${Styles.galleryImage} ${Styles.cone}`}></div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${Styles.galleryImage} ${Styles.sugarCubes}`}></div>
        </div>
      </div>
    </section>
  );
}