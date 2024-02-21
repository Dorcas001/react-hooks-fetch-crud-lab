import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [list, setPageList] = useState([])

  useEffect(() => {
    fetch(" http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setPageList(data));
  }, []);


function handleUpdateItem(updatedData) {
  const updateItems = list.map((l) => {
    if (l.id === updatedData.id) {
      return updatedData;
    } else {
      return l;
    }
  });
  setPageList(updateItems);
}


  
  function handleDeleteItem(deletedItem) {
    const updatedItems = list.filter((q) => q.id !== deletedItem.id);
    setPageList(updatedItems);
  }


  return (
    
    <section>

      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {list.map((item) =>(
        <QuestionItem key={item} question={item} onDeleteItem={handleDeleteItem}onUpdateItem={handleUpdateItem} />

      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
