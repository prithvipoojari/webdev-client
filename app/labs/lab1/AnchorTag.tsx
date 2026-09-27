export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="/labs">Back to Labs</a><br />
      <a href="#wd-anchor-bottom">Jump to bottom</a><br />
      <a
        href="https://github.com/jannunzi"
        target="_blank"
        rel="noreferrer"
      >
        GitHub (new tab)
      </a><br />
      <a
        id="wd-your-link"
        href="https://prithvipoojari.com"
      >
        Prithvi Manjunath Poojari&apos;s Portfolio Website.
      </a>
      <br />
      <a
        id="wd-your-github"
        href="https://www.linkedin.com/in/prithvipoojari/"
        target="_blank"
        rel="noreferrer"
      >
        Prithvi Manjunath Poojari&apos;s Linkedin Profile.
      </a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        MDN: table element
      </a>
    </>
  );
}
