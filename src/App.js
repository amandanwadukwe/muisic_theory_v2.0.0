import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";
import Lesson7 from "./pages/Lesson7";
import Lesson8 from "./pages/Lesson8";
import About from "./pages/About";
import MusicTheoryPiano from "./components/MusicTheoryPiano";
import FeedBackButon from "./components/FeedbackButton";
import Piano from "./resources/piano.svg";
import commentImage from "./resources/comment.svg";

// import Feedback from './components/Feedback';
// import InstagramLoginComp from './components/InstagramLogin';

import { useState } from "react";
import "./App.css";
import FeedBackButton from "./components/FeedbackButton";

function App() {
  const [showPrimaryNavigation, setShowPrimaryNavigation] = useState(false);
  const [activePageNumber, setActivePageNumber] = useState(0);

  function toggleNavigationState() {
    setShowPrimaryNavigation(!showPrimaryNavigation);
  }

  function goToNextPage() {
    if (activePageNumber < 9) setActivePageNumber(activePageNumber + 1);
  }

  function goToPreviousPage() {
    if (activePageNumber > 0) setActivePageNumber(activePageNumber - 1);
  }

  function goToAboutPage() {
    setActivePageNumber(9);
  }

  function goToFirstLesson() {
    setActivePageNumber(0);
  }

  function goToContact() {
    window.location.href = "https://www.instagram.com/muisictheory/";
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="App">
      <Header
        toggleNavigationState={toggleNavigationState}
        goToFirstLesson={goToFirstLesson}
      />
      <Navigation
        toggleNavigationState={toggleNavigationState}
        showPrimaryNavigation={showPrimaryNavigation}
        goToAboutPage={goToAboutPage}
        goToFirstLesson={goToFirstLesson}
        goToContact={goToContact}
      />
      <main>
        <Introduction
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson1
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson2
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson3
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson4
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson5
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson6
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson7
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <Lesson8
          activePageNumber={activePageNumber}
          goToNextPage={goToNextPage}
          goToTop={scrollToTop}
          goToPreviousPage={goToPreviousPage}
        />
        <About activePageNumber={activePageNumber} goToTop={scrollToTop} />
      </main>
      <div className="banner">
        <MusicTheoryPiano />
        {/*<button className="btn" type="button">
          Show notes
        </button>
        <div>
          <p><b>Note refference:</b></p>
          <img
            style={{ width: "280px", height: "150px" }}
            src={Piano}
            alt="paino refference"
          />
        </div>*/}
        <FeedBackButton />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/muisictheory/"
        >
          <div className="comment-image-container pulse-effect">
            <img
              className="comment-image"
              src={commentImage}
              alt="click to comment"
            />
          </div>
        </a>
      </div>
      <Footer />
      <div style={{ height: "15vh" }}></div>
    </div>
  );
}

export default App;
