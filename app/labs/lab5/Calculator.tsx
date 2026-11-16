"use client";
import { useState } from "react";
const SYMBOLS: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState<string | null>(null);
  const calculate = async (op: string) => {
    const response = await fetch(`/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`);
    const data = await response.json();
    if (!response.ok) {
      setResult("");
      setError(data.error);
      return;
    }
    setError(null);
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-lab5-next-calculator" className="p-2">
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="a-input" className="mr-2">A:</label>
      <input type="number" placeholder="A" id="a-input" value={a}
        onChange={(e) => setA(e.target.value)}
        className="mb-2 rounded border border-neutral-300 px-2 py-1" />
      <br />
      <label htmlFor="b-input" className="mr-2">B:</label>
      <input type="number" placeholder="B" id="b-input" value={b}
        onChange={(e) => setB(e.target.value)}
        className="mb-2 rounded border border-neutral-300 px-2 py-1" />
      <br />
      <label htmlFor="operation-select" className="mr-2">Operation:</label>
      <select id="operation-select" value={operation}
        onChange={(e) => { setOperation(e.target.value); calculate(e.target.value); }}
        className="mb-2 rounded border border-neutral-300 px-2 py-1">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <br />
      <button type="button" onClick={() => calculate(operation)} disabled={a === "" || b === ""}
        className="mt-2 rounded bg-blue-600 px-4 py-1.5 text-white disabled:opacity-50">
        Calculate
      </button>
      <br />
      {result && <input readOnly value={result} className="mt-2 rounded border border-neutral-300 px-2 py-1" />}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
}
