import { Image } from "../Router";
export function Block1() {
  return (
    <>
      <section className="block1">
        <Image.HeaderBg className={"block1-bg"} />
        <div className="block1__wrapper">
          <div className="block1__body">
            <div className="block1__hiddens">
              <div className="block1__title">
                Shop the Best Selection of
                <strong className="block1__strong"> Leather Bags</strong>
              </div>
            </div>

            <div className="block1__sub-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book...
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
