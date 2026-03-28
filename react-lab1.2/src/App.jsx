const courseTitle = "Advanced Web Development";
function App() {

  const studentName = "Abir";
  const student = {
  name: "Abir",
  age: 22,
  track: "Business Administration"
};
  function sayHello() {
    return `Hello ${studentName}, welcome to ${courseTitle}!`;
  }

  return (
    <div>
      <h1>My First React App 🚀</h1>
      <p>Student: {studentName}</p>
      <p>Course Title: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" />
      <h2>Student Info</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
    </div>
  );
}

export default App;