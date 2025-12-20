import { useState } from 'react'
import './App.css'
import { questions, getScoreMessage } from './data/questions'

function App() {
  const [checkedItems, setCheckedItems] = useState(new Set())
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleCheckboxChange = (index) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setCheckedItems(newChecked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const calculatedScore = questions.length - checkedItems.size
    setScore(calculatedScore)
    setShowResults(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTakeAgain = () => {
    setCheckedItems(new Set())
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShare = () => {
    const text = `I scored ${score} on the Calgary Purity Test! How Calgarian are you?`
    const url = window.location.href

    if (navigator.share) {
      navigator.share({ title: 'Calgary Purity Test', text, url }).catch(() => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank',
          'width=550,height=420'
        )
      })
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        '_blank',
        'width=550,height=420'
      )
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      const btn = document.getElementById('copy-btn')
      const originalText = btn.textContent
      btn.textContent = 'Copied!'
      setTimeout(() => {
        btn.textContent = originalText
      }, 2000)
    } catch {
      alert('Failed to copy link')
    }
  }

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
                  Calgary<br />Purity Test
                </div>
                <div className="decorative-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </header>

            <div className="intro">
              <p>
                The Calgary Purity Test is a way for you to measure how much of a true Calgarian you are. Whether you're a lifelong resident or a recent transplant, this test will reveal your authentic Calgary experience.
              </p>
              <p className="caution">
                Caution: this is not a bucket list. Completion is not the goal.
              </p>
              <p className="caution-sub">
                (beware: some of these might be too relatable)
              </p>
              <p className="instructions">
                Click on every item you have done. Your purity score will be calculated at the end.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <ul className="questions-list">
                {questions.map((question, index) => (
                  <li key={index} className="question-item">
                    <span className="question-number">{index + 1}.</span>
                    <input
                      type="checkbox"
                      id={`q${index}`}
                      className="question-checkbox"
                      checked={checkedItems.has(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label htmlFor={`q${index}`} className="question-label">
                      {question}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="submit-container">
                <button type="submit" className="btn btn-primary">
                  Calculate My Score
                </button>
              </div>
            </form>
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
                  Calgary<br />Purity Test
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
              <p className="score-message">{getScoreMessage(score, questions.length)}</p>
              <div className="results-buttons">
                <button className="btn btn-primary" onClick={handleTakeAgain}>
                  Take again
                </button>
                <button className="btn btn-primary" onClick={handleShare}>
                  Share my score
                </button>
                <button id="copy-btn" className="btn btn-primary" onClick={handleCopyLink}>
                  Copy link
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default App
