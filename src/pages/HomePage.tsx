import ButtonContainer from "../ui/ButtonContainer";
import HomeCoursesCard from "../ui/HomeCoursesCard";
import SectionTitle from "../ui/SectionTitle";
import test from "./../assets/img/Courses/Image.png";
const title = "Web Design Fundamentals";
const description =
  "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.";
const infoArray = ["4 Weeks", "Beginner", "By John Smith"];
const HomePage = () => {
  function test1() {
    console.log("test");
    return "hi";
  }
  
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <HomeCoursesCard
          img={test}
          title={title}
          description={description}
          infoArray={infoArray}
        />
        <HomeCoursesCard
          img={test}
          title={title}
          description={description}
          infoArray={infoArray}
        />
        <HomeCoursesCard
          img={test}
          title={title}
          description={description}
          infoArray={infoArray}
        />
        <HomeCoursesCard
          img={test}
          title={title}
          description={description}
          infoArray={infoArray}
        />
      </div>

      <SectionTitle title={title} description={description}>
        {/* <CustomButton functionality={() => test1()} btnText="click" /> */}
        <ButtonContainer
          primaryButtonText="Monthly"
          secondaryButtonText="Yearly"
          onPrimaryButtonClick={() => test1()}
          onSecondaryButtonClick={() => test1()}
          // isReversed={true}
        />
      </SectionTitle>
    </div>
  );
};
export default HomePage;
