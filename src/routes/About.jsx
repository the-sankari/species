// import image from "../assets/img/homepage.png";
import { FaReact } from "react-icons/fa";
import { LuComponent } from "react-icons/lu";

const About = () => {
  return (
    <div className="about py-5">
      <h1 className=" border-bottom text-center">About Species Project</h1>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Project Overview</h1>
          <h3 className="fw-normal text-muted mb-3">
            Species is a simple web application designed to help the users
            explore various species of animals, birds, insects, and fishes. It
            has features like navigating to different categories and view the
            detailed information about each single species.
          </h3>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      {/* Features  */}
      <h1 className="pb-2 border-bottom text-center">Features </h1>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {/* Home page  */}
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              home
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">Home Page</h3>
          <p>
            Landing page of the project is Home page that displays four big
            images of different categories, navigates to the respective
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              category
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">Category Page</h3>
          <p>
            Category page includes lists of Animals, Birds, Insects and Fishes
            as cards with search functionality.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              find_in_page
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">Search </h3>
          <p>
            Search funtionality is added on the header section of the project.
            User can search on different category item from the search box,
            cards will appear according to the input on the search box.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              cards
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">Card </h3>
          <p>
            Each card displays particular species name, image. Holds button to
            remove that card, two buttons for add like, and remove like, also
            shows the amount likes. There is a see more button that navigates to
            singale page to view the detailed information about the species.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              description
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">Single page</h3>
          <p>
            Single page shows the detail innformation about the specific species
            in a card. It renders information about that species from wikipedia
            api. There is a back button that navigates the user to the category
            page.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-4 rounded-3">
            <span className="material-symbols-outlined about-icon text-light">
              info
            </span>
          </div>
          <h3 className="fs-2 text-body-emphasis">About</h3>
          <p>
            Information about the project, features are described in the about
            page. Also about the learning area from the project is described.
          </p>
        </div>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom text-center">My Learnings </h2>
        <p className="card-text">
          While working on this project, I got valuable experience about React,
          React Router, React Hook.
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex  align-items-start">
            <div className="learning-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 mx-2">
              <FaReact className=" text-light" />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">React</h3>
              <p>
                I learned the clear ideas about how react works, manageing the
                components, styling them, organize a react project.
              </p>
            </div>
          </div>
          <div className="col d-flex  align-items-start">
            <div className="learning-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 mx-2">
              <FaReact className=" text-light" />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                React Routers
              </h3>
              <p>
                From this project I gained some deeper understandings about
                React Router. Routing between pages,handling the navigation.
              </p>
            </div>
          </div>
          <div className="col d-flex  align-items-start">
            <div className="learning-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 mx-2">
              <FaReact className=" text-light" />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                React hooks
              </h3>
              <p>
                Working on this project I have improved skill in managing
                &quot;useState&quot;,&quot; useEffect&quot;,
                &quot;useNavigate&quot;, and &quot;useParams&quot; throughout
                different componenets.
              </p>
            </div>
          </div>
          <div className="col d-flex  align-items-start">
            <div className="learning-icons feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 mx-2">
              <LuComponent className=" text-light" />
            </div>

            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Component
              </h3>
              <p>
                Improved skill in making reusable components, passing and
                managing data dynamically for better user experience.
                Conditionaly rendering techniques to display different
                componenets based on state and user interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
