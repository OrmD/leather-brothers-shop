import { Wrapper } from "../wrapper-blocks/Wrapper";
import articleData from "../../data/articles.json";
import { ArticleCard } from "./ArticleCard";
import { Modal } from "./ModalWindow";
import { useState } from "react";

export function Block7() {
  const [showModal, setShowModal] = useState(false);
  const [selectedText, setSelectedText] = useState({});

  const handleOpenModal = (btnRef) => {
    if (btnRef.current) {
      const idCard = btnRef.current.id;
      const currentText = articleData[idCard];
      setShowModal(true);
      setSelectedText(currentText);
    }
  };
  console.log(selectedText);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Wrapper
      objProps={{
        secName: "Articles",
        wrapName: "Articles__wrapper",
        descName: "Articles__desc",
        titleValue: "Articles / Blogs",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
    >
      <div className="Articles__container-cards">
        {articleData.map((el, index) => {
          return <ArticleCard index={index} key={index} number={el.number} title={el.title} text={el.text} openModal={handleOpenModal} />;
        })}
        <Modal showModal={showModal} closeModal={handleCloseModal} title={selectedText.title} number={selectedText.number} text={selectedText.fullText} />
      </div>
    </Wrapper>
  );
}
