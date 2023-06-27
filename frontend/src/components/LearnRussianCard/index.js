const LearnRussianCard = ({ no, question, answer }) => {
  const isImage = answer.includes("images");

  return (
    <article className="learn-card">
      <h4 className="learn-card__number">{no}</h4>
      <div className="learn-card__content">
        <div className="learn-card__question-section">
          <h3 className="learn-card__question">Вопрос:</h3>
          <p className="learn-card__question-text">{question}</p>
        </div>
        <div className="learn-card__answer-section">
          <h3 className="learn-card__answer">Ответ:</h3>
          {isImage ? (
            <img src={`/${answer}`} alt="Answer" className="learn-card__image" />
          ) : (
            <p className="learn-card__answer-text">{answer}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default LearnRussianCard;