import { useState } from "react";

const Header = () => {
  const reportName = "Test";
  const [stageType, setStageType] = useState("All Stages");
  return (
    <div className='flex items-center justify-between mb-12'>
      <h1>Report Name: {reportName}</h1>
      <span>{stageType}</span>
      <select value={stageType} onChange={(e) => setStageType(e.target.value)} className='p-2 border-2 outline-none'>
        <option value="All Stages">All Stages</option>
        <option value="Opened">Opened</option>
        <option value="Action">Action</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  )
}

export default Header