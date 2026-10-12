export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 300px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 300px includes padding and border
        </div>
        {/* border-box keeps the declared width: padding and border fit inside
            it, so this box stays 300px wide on screen. content-box adds them
            on top and grows wider. */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-border wd-ai-box-sizing">
          border-box again: still exactly 300px wide on screen
        </div>
      </div>
    </div>
  );
}