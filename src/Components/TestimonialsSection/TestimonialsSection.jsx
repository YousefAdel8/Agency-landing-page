import Styles from "./TestimonialsSection.module.css";
import EmilyImage from "../../assets/Main Task/sunnyside-agency-landing-page-main/images/image-emily.jpg";
import ThomasImage from "../../assets/Main Task/sunnyside-agency-landing-page-main/images/image-thomas.jpg";
import JennieImage from "../../assets/Main Task/sunnyside-agency-landing-page-main/images/image-jennie.jpg";

export default function TestimonialsSection() {
  return (
    <div className="mt-5 py-5 container">
      <div className="row">
        <h2 className={`${Styles.TestimonialsH2} ${Styles.FrauncesFont}`}>
          Client testimonials
        </h2>
      </div>
      <div className="row text-center my-5">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={EmilyImage}
              class="rounded-circle shadow-1-strong"
              width="70"
              height="70"
            />
          </div>
          <p class={`px-xl-3 ${Styles.TestimonialsParagraph} pb-4`}>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5 class={`mb-3 ${Styles.FrauncesFont} `}>Emily R.</h5>
          <p className={`${Styles.TestimonialsJob}`}>Marketing Director</p>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={ThomasImage}
              class="rounded-circle shadow-1-strong"
              width="70"
              height="70"
            />
          </div>
          <p class={`px-xl-3 ${Styles.TestimonialsParagraph} pb-4`}>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h5 class={`mb-3 ${Styles.FrauncesFont} `}>Thomas S.</h5>
          <p className={`${Styles.TestimonialsJob}`}>Chief Operating Officer</p>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src={JennieImage}
              class="rounded-circle shadow-1-strong"
              width="70"
              height="70"
            />
          </div>
          <p class={`px-xl-3 ${Styles.TestimonialsParagraph} pb-4`}>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5 class={`mb-3 ${Styles.FrauncesFont} `}>Jennie F.</h5>
          <p className={`${Styles.TestimonialsJob}`}>Business Owner</p>
        </div>
      </div>
      
    </div>
  );
}
