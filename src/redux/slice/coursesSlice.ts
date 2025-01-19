import { createSlice } from "@reduxjs/toolkit";
import courses from "../../data/Courses";

// Define The Data Structure For a Lesson Info
interface Lesson {
  id: number;
  lesson_title: string;
  lesson_number: string;
  lesson_duration: string;
  current?: boolean;
}

// Define The Data Structure For Lessons Info
interface Lessons {
  id: number;
  lesson_title: string;
  lesson_number: string;
  lesson_duration: string;
}

// Define The Data Structure For a CurriculumUnit
interface CurriculumUnit {
  id: number;
  unit: string;
  topic: string;
  info: Lesson[];
}

// Define The Data Structure For CourseDetails Info
interface CourseDetails {
  id: number;
  unit: string;
  topic: string;
  info: Lessons[];
}

// Base Interface For Common Course Properties
interface BaseCourse {
  id: number;
  course_title: string;
  description: string;
  course_duration?: string;
  level?: string;
  author?: string;
}

// Extended Interface For Courses With Multiple Images
interface CourseWithImages extends BaseCourse {
  image1: string;
  image2: string;
  image3: string;
}

// Interface For Full Course Details
interface Course extends CourseWithImages {
  curriclum: CurriculumUnit[];
}

// Interface For First Six Courses
interface FirstSixCourses extends BaseCourse {
  image1: string;
}

// Interface For Main Courses
interface MainCourses extends CourseWithImages {
  curriclum: CourseDetails[];
}

// Interface For Open Course
interface OpenCourse extends BaseCourse {
  image1: string;
  curriclum: CourseDetails[];
}

// Define The Initial State Structure
interface CoursesState {
  courses: Course[]; // Array To Store All Courses
  firstSixCourses: FirstSixCourses[]; // Array To Store The First Six Courses
  mainCourses: MainCourses[]; // Array To Store The Main Courses
  openCourse: OpenCourse | null; // Array To Store The Open Course
}

// Initialize The State With Imported Course Data
const initialState: CoursesState = {
  courses: courses,
  firstSixCourses: [],
  mainCourses: [],
  openCourse: null,
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

    // Reducer To Get The Main Courses From The Courses Array
    getMainCourse(state) {
      state.mainCourses = state.courses.slice(0, 5).map((item) => ({
        id: item.id,
        image1: item.image1,
        image2: item.image2,
        image3: item.image3,
        level: item.level,
        description: item.description,
        author: item.author,
        course_duration: item.course_duration,
        course_title: item.course_title,
        curriclum: item.curriclum,
      }));
    },

    // Reducer To Get The Open Course Data From Courses Array
    getOpenCourse(state, action) {
      const courseId = action.payload; // Store The Course ID
      const course = state.courses.find((course) => course.id === courseId); // Find the course by ID

      if (course) {
        // Assign specific properties to openCourse
        state.openCourse = {
          id: course.id,
          course_title: course.course_title,
          description: course.description,
          image1: course.image1,
          curriclum: course.curriclum,
        };
      } else {
        state.openCourse = null; // Set openCourse to null if not found
      }
    },
  },
});

// Export the action creator
export const { getHomeCourses, getMainCourse, getOpenCourse } =
  coursesSlice.actions;

// Export the reducer
export default coursesSlice.reducer;
