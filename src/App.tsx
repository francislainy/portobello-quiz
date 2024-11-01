import React, {useState} from 'react';
import './App.css';
// import Image from 'next/image'

// Sample questions about friends, now with optional images
const questions = [
  {
    question: "Who needs to be told the difference between a chicken and a dinosaur?",
    options: ["Jodi", "Jade", "Sarah", "James"],
    correctAnswer: "Jodi"
  },
  {
    question: "Who has married a handsome and tall brother leaving all the single sisters with whatever is left?",
    options: ["Samyra", "Rosaria", "Rosina", "Fran"],
    correctAnswer: "Rosina"
  },
  {
    question: "Who likes writing?",
    options: ["Janis", "Yol", "Elsa", "Meline"],
    correctAnswer: "Yol"
  },
  {
    question: "Who likes country music?",
    options: ["Confidence", "Mira", "Orla", "Tiffany"],
    correctAnswer: "Confidence"
  },
  {
    question: "Who is not ashamed of posting pictures of himself having a bath?",
    options: ["Martin", "Finn", "Banks", "Federica"],
    correctAnswer: "Finn"
  },
  {
    question: "Who likes rugbi?",
    options: ["Orla", "Fran", "Domingos", "Laura"],
    correctAnswer: "Laura"
  },
  {
    question: "Who has a twin brother who is good at drawing?",
    options: ["Tiffany", "Federica", "Emily", "Elsa"],
    correctAnswer: "Emily"
  },
  {
    question: "Who is probably sleeping now?",
    options: ["Bartosz", "Finn", "Emily", "Meline"],
    correctAnswer: "Bartosz"
  },
  {
    question: "Who likes painting wildlife?",
    options: ["Emily", "Sarah", "Lola", "Confidence"],
    correctAnswer: "Emma"
  },
  {
    question: "Who is 29 as most people of his age?",
    options: ["Federica", "Samyra", "Jodi", "Janis"],
    correctAnswer: "Jodi"
  },
  {
    question: "Who likes talking?",
    options: ["James", "Rebecca", "Fran", "Orla"],
    correctAnswer: "Orla"
  },
  {
    question: "Who denies being half English/half Italian?",
    options: ["Mira", "Federica", "James", "Laura"],
    correctAnswer: "Laura"
  },
  {
    question: "Who can speak Portuguese?",
    options: ["Bartosz", "Sarah", "Banks", "Janis"],
    correctAnswer: "Sarah"
  },
  {
    question: "Who likes plants with funny names?",
    options: ["Lola", "Mira", "Domingos", "Elsa"],
    correctAnswer: "Mira"
  },
  {
    question: "Who according to Sarita is not smelly?",
    options: ["Banks", "Federica", "Fran", "Samyra"],
    correctAnswer: "Federica"
  },
  {
    question: "Who likes playing table tennis?",
    options: ["Yol", "Laura", "James", "Mila"],
    correctAnswer: "James"
  },
  {
    question: "Who wakes up super early?",
    options: ["Tiffany", "Emily", "Rebecca", "Fran"],
    correctAnswer: "Fran"
  },
  {
    question: "Who likes Endless possibility?",
    options: ["Mira", "Martin", "Yol", "Federica"],
    correctAnswer: "Federica"
  },
  {
    question: "Who likes high waisted trousers?",
    options: ["Lilia", "Sediye", "Jodi", "Confidence"],
    correctAnswer: "Sediye"
  },
  {
    question: "Who is good at skying?",
    options: ["Sediye", "Jade", "Tiffany", "James"],
    correctAnswer: "James"
  },
  {
    question: "Who likes dancing?",
    options: ["Fran", "James", "Samyra", "Banks"],
    correctAnswer: "Samyra"
  },
  {
    question: "Who loves puppies?",
    options: ["Yol", "Finn", "Lola", "Jade"],
    correctAnswer: "Yol"
  },
  {
    question: "Who loves a sandy beach with a dark run?",
    options: ["Laura", "Janis", "Orla", "Sediye"],
    correctAnswer: "Orla"
  },
  {
    question: "Who used to be a massage therapist but won't help you if you have neck pain?",
    options: ["Domingos", "Orla", "Mira", "Lilia"],
    correctAnswer: "Orla"
  },
  {
    question: "Who likes photography?",
    options: ["Domingos", "Fran", "Samyra", "Emily"],
    correctAnswer: "Samyra"
  },
  {
    question: "Who likes board games?",
    options: ["Fran", "Bartosz", "Mira", "Emily"],
    correctAnswer: "Bartosz"
  },
  {
    question: "Who likes learning languages?",
    options: ["Lilia", "Orla", "Sediye", "Fran"],
    correctAnswer: "Lilia"
  },
  {
    question: "Who likes photography?",
    options: ["Domingos", "Fran", "Samyra", "Emily"],
    correctAnswer: "Samyra"
  },
  {
    question: "Who likes going on holidays?",
    options: ["Elsa", "Martin", "Lilia", "Emily"],
    correctAnswer: "Lilia"
  },
  {
    question: "Who almost had a modelling career?",
    options: ["Lilia", "Sediye", "Janis", "Jade"],
    correctAnswer: "Sediye"
  },
  {
    question: "Who wants to be a cowboy?",
    options: ["Domingos", "Bartosz", "Janis", "Martin"],
    correctAnswer: "Martin"
  },
  {
    question: "Who is 61?",
    options: ["Sarah", "Martin", "Mira", "Laura"],
    correctAnswer: "Elsa"
  },
  {
    question: "Who enjoys toothless smiles?",
    options: ["Sarah", "Janis", "Yol", "Lola"],
    correctAnswer: "Janis"
  },
  {
    question: "Who likes to cook?",
    options: ["Jade", "Meline", "Elsa", "Lilia"],
    correctAnswer: "Jade"
  },
  {
    question: "Who likes vintage clothes?",
    options: ["Confidence", "Jade", "Emily", "Lilia"],
    correctAnswer: "Jade"
  },
  {
    question: "Who is an assistant nurse?",
    options: ["Confidence", "Emily", "Yol", "Domingos"],
    correctAnswer: "Confidence"
  },
  {
    question: "Who likes playing monopoly?",
    options: ["Rebecca", "Fran", "Yol", "Laura"],
    correctAnswer: "Rebecca"
  },
  {
    question: "Who likes brewing coffee?",
    options: ["Domingos", "James", "Sediye", "Jade"],
    correctAnswer: "Jade"
  },
  {
    question: "Who speaks 6 languages?",
    options: ["Lilia", "Mira", "Tiffany", "Rosina"],
    correctAnswer: "Rosina"
  },
  {
    question: "Who likes snowboarding?",
    options: ["Tiffany", "Rosina", "Laura", "Samyra"],
    correctAnswer: "Tiffany"
  },
  {
    question: "Who is just an ordinary man who enjoys a conversation in a pub?",
    options: ["Fran", "Janis", "Federica", "Domingos"],
    correctAnswer: "Tiffany"
  },
  {
    question: "Who is this child?",
    image: "/placeholder.svg?height=300&width=300",
    options: ["Lisa", "Tom", "Rachel", "Chris"],
    correctAnswer: "Rachel"
  }
]

export default function ImageFriendQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setQuizCompleted(false)
    setScore(0)
  }

  return (
      <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-800 text-center mb-6">
            {quizCompleted ? "Quiz Completed!" : "Friends Quiz"}
          </h2>
          {!quizCompleted ? (
              <>
                <p className="text-lg font-medium text-purple-700 mb-4">
                  {questions[currentQuestion].question}
                </p>
                {questions[currentQuestion].image && (
                    <div className="mb-4 flex justify-center">
                      {/*<Image*/}
                      {/*    src={questions[currentQuestion].image}*/}
                      {/*    alt={`Image for question ${currentQuestion + 1}`}*/}
                      {/*    width={300}*/}
                      {/*    height={300}*/}
                      {/*    className="rounded-lg"*/}
                      {/*/>*/}
                    </div>
                )}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                            className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-purple-800">{option}</span>
                      </label>
                  ))}
                </div>
              </>
          ) : (
              <p className="text-xl text-center text-purple-700">
                Your score: {score} out of {questions.length}
              </p>
          )}
          <div className="mt-6 flex justify-end">
            {!quizCompleted ? (
                <button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
            ) : (
                <button
                    onClick={resetQuiz}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Restart Quiz
                </button>
            )}
          </div>
        </div>
      </div>
  )
}
