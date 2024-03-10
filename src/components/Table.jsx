import { useState } from "react";
import NewQuestion from "./NewQuestion";

const Table = () => {
  const [questions, setQuestions] = useState(["1"]);
  const increaseQuestions = () => {
    setQuestions((prev) => [...prev, Math.random().toString(36).substring(7)]);
  };

  const deleteQuestion = (question) => {
    setQuestions(questions.filter((item) => item !== question));
  }
  return (
    <div >
      {questions.map((question) => (
        <NewQuestion deleteQuestion={deleteQuestion} key={question} id={question} />
      ))}
      <button className="mt-24 bg-[#5ea2b5] text-white font-semibold p-3 rounded-lg" onClick={increaseQuestions}>
        Add New Question
      </button>
    </div>
  );
};

export default Table;
