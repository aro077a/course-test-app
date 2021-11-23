import React, { Dispatch, FC, SetStateAction } from "react";
import { courses } from "../../data";
import Header from "../header/Header";
import Course from "./course/Course";
import "./courses.scss";

interface CoursesProps {
  setTabIndex: Dispatch<SetStateAction<number>>;
  tabIndex: number;
}

const Courses: FC<CoursesProps> = ({ setTabIndex, tabIndex }) => {
  return (
    <div className="courses__container">
      <>
        <Header setTabIndex={setTabIndex} tabIndex={tabIndex} />
        {courses?.map((course) => {
          return (
            <Course
              key={course.id}
              img={course.img}
              name={course.name}
              time={course.time}
              lessonsCount={course.lessons_count}
            />
          );
        })}
      </>
    </div>
  );
};

export default Courses;
