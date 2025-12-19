import React from "react";

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email}</p>
      <button onClick={onEdit} style={editButtonStyle}>
        Edit
      </button>
      <button onClick={onDelete} style={deleteButtonStyle}>
        Delete
      </button>
    </div>
  );
};

const editButtonStyle = {
  marginRight: "10px",
  padding: "5px 10px",
  background: "#2196F3",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
const deleteButtonStyle = {
  padding: "5px 10px",
  background: "#f44336",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default StudentCard;
