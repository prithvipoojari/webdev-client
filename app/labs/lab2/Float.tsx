const NATURE = [
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1039/400/300",
  "https://picsum.photos/id/29/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1043/400/300",
];
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={NATURE[0]} alt="Fjord between rocky cliffs" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={NATURE[1]} alt="Waterfall in a green forest" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={NATURE[2]} alt="Snowy mountain range" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={NATURE[3]} alt="Red rock canyon at sunset" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-bg-color-yellow">
          Float right
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={NATURE[4]} alt="Forest and granite cliffs by a river" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-landscape wd-bg-color-green">
          Green
        </div>
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
