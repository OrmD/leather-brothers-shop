import { Image } from "../Router";

export function Block2() {
  return (
    <>
      <section className="block2">
        <Image.TransitionImg className={"transition-img"} />
        <div className="trn-button"></div>
        <div className="block2__wrapper block2">
          <div className="block2__body">
            <div className="block2__container-img-text">
              <div className="block2__img">
                <Image.AboutUsImg />
              </div>
              <div className="block2__img-title">
                <h3>Leather Brothers designs, owns and operates all steps in the creation of our extensive variety of handcrafted leather goods, including :</h3>
              </div>
              <div className="block2__img-desc">
                <p className="block2__img-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged..
                </p>
              </div>
            </div>

            <div className="block2__container-btn-bags">
              <Image.AboutUsBag01 className="block2__about-us-bag01" />
              <div className="block2__body-btn-bags">
                <div className="block2__bags-title">
                  <h4>Handcrafted to be one of a kind</h4>
                </div>
                <div className="block2__bags-descr">
                  <p className="block2__bags-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged...
                  </p>
                </div>
                <button type="button" className="block2__button">
                  Family pack
                </button>
              </div>
              <Image.AboutUsBag02 className="block2__about-us-bag02" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
