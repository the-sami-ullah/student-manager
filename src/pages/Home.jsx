import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../features/students/studentSlice";
import StudentCard from "../components/StudentCard";

const Home = () => {
  
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>
        Student Manager
      </h1>
      <button
        onClick={() => navigate("/add")}
        style={{
          display: "block",
          margin: "0 auto 20px",
          padding: "10px 20px",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#45a049")}
        onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
      >
        Add New Student
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={() => navigate(`/edit/${student.id}`)}
            onDelete={() => handleDelete(student.id)}
          />
        ))}
      </div>
      {students.length === 0 && (
        <p style={{ textAlign: "center", color: "#fff" }}>
          No students yet. Add one!
        </p>
      )}
    </div>
  );
};

export default Home;
