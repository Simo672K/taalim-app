import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

function CardDescription({name, level, houreRate}) {
  const [toggleBtn, setToggleBtn]= useState(false);

  const showButtonHandler = ()=> {
    setToggleBtn(true);
  }
  
  const hideButtonHandler = ()=> {
    setToggleBtn(false);
  }

  return (
    <div className="card-body p-4" onMouseEnter={showButtonHandler} onMouseLeave={hideButtonHandler}>
      <div className="flex items-center">
        <h2 className="card-title">{name}<HiCheckBadge size={22}/></h2>
        <button className="ms-auto">
          <FaChevronRight/>
        </button>
      </div>
      <div>
        <p className="badge rounded-lg badge-ghost p-3 font-bold">
          {level}
        </p>
      </div>
      {
        toggleBtn?
        <div className="card-actions mt-auto">
          <button className="btn btn-accent w-full">Decouvrir Vos plans</button>
        </div> :
        <div>
          <span className="font-bold mb-0 text-sm text-gray-400">Lesson debut A partir de</span>
          <h4 className="text-2xl font-bold">{houreRate} DH</h4>
        </div>
      }
    </div>
  );
}

export default CardDescription;
