import Close from "../resources/close.svg";
export default function Navigation(props) {
  return (
    <div>
      <nav className="big-nav">
        <div
          className="exit-btn-container"
          onClick={props.toggleNavigationState}
        >
          <img className="icon" src={Close} alt="exit" />
        </div>
        <ul>
          <li onClick={() => props.goToFirstLesson()}>
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">h</div>
                <div className="letter-two">o</div>
                <div className="letter-three">m</div>
                <div className="letter-four">e</div>
              </div>
            </div>
          </li>
          <li onClick={() => props.goToContact()}>
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">C</div>
                <div className="letter-two">o</div>
                <div className="letter-three">n</div>
                <div>t</div>
                <div className="letter-four">a</div>
                <div className="letter-five">c</div>
                <div className="letter-six">t</div>
              </div>
            </div>
          </li>
          <li onClick={() => props.goToAboutPage()}>
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">A</div>
                <div className="letter-two">b</div>
                <div className="letter-three">o</div>
                <div className="letter-four">u</div>
                <div className="letter-five">t</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav
        className={
          props.showPrimaryNavigation ? "small-nav reveal" : "small-nav conceal"
        }
      >
        <div
          className="exit-btn-container"
          onClick={props.toggleNavigationState}
        >
          <img className="icon" src={Close} alt="exit" />
        </div>
        <ul>
          <li
            onClick={() => {
              props.goToFirstLesson();
              props.toggleNavigationState();
            }}
          >
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">h</div>
                <div className="letter-two">o</div>
                <div className="letter-three">m</div>
                <div className="letter-four">e</div>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              props.goToContact();
              props.toggleNavigationState();
            }}
          >
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">C</div>
                <div className="letter-two">o</div>
                <div className="letter-three">n</div>
                <div>t</div>
                <div className="letter-four">a</div>
                <div className="letter-five">c</div>
                <div className="letter-six">t</div>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              props.goToAboutPage();
              props.toggleNavigationState();
            }}
          >
            <div className="primary-nav-link">
              <div className="a">
                <div className="letter-one">A</div>
                <div className="letter-two">b</div>
                <div className="letter-three">o</div>
                <div className="letter-four">u</div>
                <div className="letter-five">t</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
