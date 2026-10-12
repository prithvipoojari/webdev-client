export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
        <span className="wd-bg-color-yellow wd-fg-color-black">
            On your own exercise: the background of this text is yellow and the foreground black
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This sample block stacks a yellow background with black text, so it
        stays easy to read
      </p>
    </div>
  );
}