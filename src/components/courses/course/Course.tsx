import { FC } from "react";
import "./course.scss";

interface CourseProps {
  key: number;
  name: string;
  time: number;
  lessonsCount: number;
  img?: string;
}

const Course: FC<CourseProps> = ({ name, time, lessonsCount, img }) => {
  return (
    <div className="course__container">
      <img src={img} alt="img" className="course__container--image" />
      <div className="course__container__content">
        <p className="course__container__content--name">{name}</p>
        <p className="course__container__content--time">{time} min</p>
      </div>
      <div>{lessonsCount} lessons</div>
      <button>Play</button>
    </div>
  );
};

export default Course;
