import { useState } from "react";

const NewQuestion = (props) => {
  const [questionType, setQuestionType] = useState("essay");
  const [numberOfOptions, setNumberOfOptions] = useState(["1"]);
  const increaseQuestions = () => {
    setNumberOfOptions((prev) => [...prev, Math.random().toString(36).substring(7)]);
  };

  const handleDelete = (option) => {
    setNumberOfOptions(numberOfOptions.filter((item) => item !== option));
  };

  const deleteHandler = () => {
    props.deleteQuestion(props.id);
  }

  return (
    <div className="flex justify-between border-2">
      <div className="border-r-2 p-3 flex-1">
        <input type="text" className="outline-none border-2 rounded-lg py-1" />
      </div>
      <div className="border-r-2 p-3 flex-1">
        <select onChange={(e) => setQuestionType(e.target.value)} className="px-2 py-1 border-2 outline-none rounded-lg">
          <option value="essay">Essay</option>
          <option value="single">Single Choice</option>
          <option value="multi">Multiple Choice</option>
        </select>
      </div>
      <div className="border-r-2 p-3 flex-1 flex flex-col">
        {questionType === "essay"
          ? "N/A"
          : numberOfOptions.map((option) => (
              <div key={option} className="flex items-center gap-2 mb-2">
                <input type="text" className="outline-none border-2 rounded-lg py-1" />
                <i className="fa-solid fa-plus text-[#48aad1] hover:text-[#407d96] duration-300  cursor-pointer"></i>
                <i className="fa-solid fa-trash text-[#f07671] hover:text-[#c55753] duration-300 cursor-pointer" onClick={() => handleDelete(option)}></i>
              </div>
            ))}
        {questionType === "essay" ? null : (
          <button onClick={increaseQuestions} className="bg-[#29ba55] text-white text-semibold p-2 rounded-lg mt-4 w-fit">
            Add Choice
          </button>
        )}
      </div>
      <div className="border-r-2 p-3 flex-1">
        <select className="px-2 py-1 border-2 outline-none rounded-lg">
          <option value="Opened">Opened</option>
          <option value="Action">Action</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className="border-r-2 p-3 flex-1 space-y-2">
        <h4>Attach File</h4>
        <input className="block size-[15px]" type="checkbox" name="" id="" />
      </div>
      <div className="border-r-2 p-3 flex-1">
        <button onClick={deleteHandler} className="bg-[#f07671] hover:bg-[#c55753] duration-300 text-white text-semibold p-2 rounded-lg mt-4 w-fit">Delete Question</button>
      </div>
      <div className="p-3">
        <h4>Sort</h4>
        <div className="flex flex-col text-xl gap-2">
          <i className="fa-solid fa-angle-up text-[#48aad1] hover:text-[#407d96] duration-300 cursor-pointer"></i>
          <i className="fa-solid fa-angle-down text-[#48aad1] hover:text-[#407d96] duration-300 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
