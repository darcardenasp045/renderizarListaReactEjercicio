import Course from "./Course.js";
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  if (typeof course === undefined || course === null || course === "") {
    return <div>"no hay notas"</div>;
  }

  return (
    <div>
      <Course course={course} />;
    </div>
  );
};

export default App;
