export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let name = "Prithvi";
  const greetingMessage = `Hello ${name}, welcome to the world of JavaScript!`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1} <br />
      name = {name} <br />
      greetingMessage = {greetingMessage} <br />
      sampleSum = {sampleSum}

      <hr />
    </div>
  );
}