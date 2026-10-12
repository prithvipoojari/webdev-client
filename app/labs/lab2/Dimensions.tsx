export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This box is set to 120 by 60 pixels, so this long sentence spills
          out below it instead of making the box taller
        </div>
      </div>
        <div>
            <div className="wd-dimension-portrait wd-bg-color-yellow">On your own exercise</div>
        </div>
    </div>
  );
}