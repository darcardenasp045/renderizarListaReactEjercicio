import React from "react";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} - {exercises} exercises
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p>
        <strong>
          Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Course;
