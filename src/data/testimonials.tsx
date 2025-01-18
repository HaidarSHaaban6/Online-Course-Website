import photo1 from "./../assets/img/Testimonials/Image1.png";
import photo2 from "./../assets/img/Testimonials/Image.png";
import photo3 from "./../assets/img/Testimonials/Image3.png";
import photo4 from "./../assets/img/Testimonials/Image2.png";


export interface Testimonials {
  name: string;
  review: string;
  photo: string;
}

export const testimonials: Testimonials[] = [
  {
    name: "Sarah L",
    review:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    photo: photo1,
  },
  {
    name: "Jason M",
    review:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    photo: photo2,
  },
  {
    name: "Emily R",
    review:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course! I loved it!",
    photo: photo3,
  },
  {
    name: "Michael K",
    review:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    photo: photo4,
  },
  {
    name: "Sarah L",
    review:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    photo: photo1,
  },
  {
    name: "Jason M",
    review:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    photo: photo2,
  },
];