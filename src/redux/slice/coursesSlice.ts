import { createSlice } from "@reduxjs/toolkit";
import courses from "../../data/Courses";

// Define The Data Structure For a Lesson Info
interface Lesson {
  id: number;
  lesson_title: string;
  lesson_number: string;
  lesson_duration: string;
}

// Define The Data Structure For a Curriculum Unit
interface CurriculumUnit {
  id: number;
  unit: string;
  topic: string;
  info: Lesson[];
}

// Define The Data Structure For a Course
interface Course {
  id: number;
  course_title: string;
  description: string;
  course_duration: string;
  level: string;
  author: string;
  image1: string;
  image2: string;
  image3: string;
  curriclum: CurriculumUnit[];
}

interface FirstSixCourses {
  id: number;
  image1: string;
  course_title: string;
  description: string;
  course_duration: string;
  level: string;
  author: string;
}

// Define The Initial State Structure
interface CoursesState {
  courses: Course[]; // Array To Store All Courses
  firstSixCourses: FirstSixCourses[]; // Array To Store The First Six Courses
}

// Initialize The State With Imported Course Data
const initialState: CoursesState = {
  courses: courses,
  firstSixCourses: [],
};

// Create The Slice With Reducers
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // Reducer To Get The First Six Courses From The Courses Array
    getHomeCourses(state) {
      state.firstSixCourses = state.courses.slice(0, 6).map((item) => ({
        id: item.id,
        image1: item.image1,
        course_title: item.course_title,
        description: item.description,
        course_duration: item.course_duration,
        level: item.level,
        author: item.author,
      }));
    },
  },
});

// Export the action creator
export const { getHomeCourses } = coursesSlice.actions;

// Export the reducer
export default coursesSlice.reducer;
