export default function About(props) {
  props.goToTop();

  return (
    <section className={props.activePageNumber === 9 ? "display" : "hide"}>
      <p>
        Muisic.theory is an awesome piano-based music theory course that makes
        learning music theory easy and fun. It breaks down complex concepts into
        simple patterns, so you can build music pieces by connecting the dots.
      </p>
      <p>
        The course is written and developed by Amanda Obiajulu Nwadukwe, a
        talented software developer and programmer. Amanda has been working in
        the industry for three years and has experience as a lead developer, IT
        Manager, and robotics delivery analyst. She loves creating smooth user
        experiences and exciting designs.
      </p>
      <p>
        Amanda's love for unpicking the logical patterns between notes on the
        piano shines through in Muisic.theory. However, she believes that
        learning is a collaborative journey. That's why she welcomes
        contributions from fellow musicians and enthusiasts. Your unique
        insights and experiences can help enrich the course and make it even
        more valuable for learners worldwide.
      </p>
      <p>
        With Muisic.theory and Amanda's innovative approach, learning music
        theory becomes an accessible and exciting endeavor. Embark on this
        transformative journey and unlock your musical potential.
      </p>
    </section>
  );
}
