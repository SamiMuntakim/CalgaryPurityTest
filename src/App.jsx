import { useState } from "react";
import "./App.css";
import { questions, getScoreMessage, getSchoolCoding } from "./data/questions";

function App() {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [schoolCoding, setSchoolCoding] = useState(null);

  const handleCheckboxChange = (index) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const handleSubmit = () => {
    const calculatedScore = questions.length - checkedItems.size;
    setScore(calculatedScore);
    setSchoolCoding(getSchoolCoding(checkedItems));
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTakeAgain = () => {
    setCheckedItems(new Set());
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    const text = `I scored ${score} on the Calgary Purity Test! How Calgarian are you?`;
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ title: "Calgary Purity Test", text, url }).catch(() => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank",
          "width=550,height=420"
        );
      });
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(url)}`,
        "_blank",
        "width=550,height=420"
      );
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const btn = document.getElementById("copy-btn");
      const originalText = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    } catch {
      alert("Failed to copy link");
    }
  };

  return (
    <>
      <div className="background-pattern" />
      <div className="container">
        {!showResults ? (
          /* Quiz Section */
          <section>
            <header className="header">
              <h1 className="title-script">The Official</h1>
              <div className="title-wrapper">
                <div className="decorative-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="title-main">
                  Calgary
                  <br />
                  Purity Test
                </div>
                <div className="decorative-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </header>

            <div className="description">
              The Calgary Purity Test measures your exposure to Calgary student
              life. Whether you chose this school or just ended up here, this
              test will tell you how far gone you are
            </div>
            <div className="caution">
              Caution: this is not a bucket list. Completion is not the goal.
              <br />
              (Completion of all items on this test will likely result in
              academic probation.)
            </div>
            <div className="instructions">
              Click on every item you have done. Your purity score will be
              calculated at the end.
            </div>

            <div
              className="question-list"
              role="group"
              aria-label="Calgary Purity Test"
            >
              {questions.map((question, index) => (
                <div key={index} className="question">
                  <div className="question-number">{index + 1}.</div>
                  <input
                    type="checkbox"
                    id={`q${index}`}
                    name={`q${index}`}
                    checked={checkedItems.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label htmlFor={`q${index}`}>{question}</label>
                </div>
              ))}
            </div>
            <div className="result-section">
              <button
                className="calculate-btn"
                type="button"
                onClick={handleSubmit}
              >
                Calculate My Score
              </button>
            </div>
          </section>
        ) : (
          /* Results Section */
          <section>
            <header className="header">
              <h1 className="title-script">The Official</h1>
              <div className="title-wrapper">
                <div className="decorative-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="title-main">
                  Calgary
                  <br />
                  Purity Test
                </div>
                <div className="decorative-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </header>

            <div className="results-content">
              <h2 className="score-label">Your score:</h2>
              <p className="score-number">{score}</p>
              <p className="score-title">
                {getScoreMessage(score, questions.length).title}
              </p>
              <p className="score-message">
                {getScoreMessage(score, questions.length).description}
              </p>

              {schoolCoding && (
                <div className="school-coding">
                  <p className="coding-title">{schoolCoding.title}</p>
                  <p className="coding-description">
                    {schoolCoding.description}
                  </p>
                </div>
              )}

              <div className="results-buttons">
                <button className="btn btn-primary" onClick={handleTakeAgain}>
                  Take again
                </button>
                <button className="btn btn-primary" onClick={handleShare}>
                  Share my score
                </button>
                <button
                  id="copy-btn"
                  className="btn btn-primary"
                  onClick={handleCopyLink}
                >
                  Copy link
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
