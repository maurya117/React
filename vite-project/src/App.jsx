import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Student Information</h2>

      <Student name="palak maheshwari" course="Computer Science" marks="85" />
      <Student name="pari sharma" course="Information Technology" marks="92" />
      <Student name="ojasvi" course="Electronics" marks="78" />
      
    </div>
  );
}

export default App;

