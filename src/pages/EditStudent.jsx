import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../features/students/studentSlice";

const EditStudent = () => {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.students.list.find((s) => s.id === parseInt(id))
  );
  const [form, setForm] = useState({ name: "", age: "", grade: "", email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (student) {
      setForm(student);
    }
  }, [student]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.age && form.grade && form.email) {
      dispatch(
        editStudent({ ...form, id: parseInt(id), age: parseInt(form.age) })
      );
      navigate("/");
    } else {
      alert("Please fill all fields.");
    }
  };

  if (!student) return <p>Student not found.</p>;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={form.grade}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Update Student
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxSizing: "border-box",
};
const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#FF9800",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background 0.3s",
};

export default EditStudent;
