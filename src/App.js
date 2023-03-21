import Course from "./Course.js";
const App = () => {
  const course = {};

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
