import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import "./App.css";
import axios from "axios";
import Markdown from'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"

function App() {
  const [review, setReview] = useState("");
  const [code, setCode] = useState(` function sum() {
  return a + b;
}`);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode(){
    const response=await axios.post('http://localhost:3000/ai/get-review',{code})
    setReview(response.data)

  }

  return (
    <div className="min-h-[100vh] max-h-[100vh] bg-black flex p-6">
      <div className="w-1/2 flex flex-col m-0 bg-[#282a2c] rounded-2xl mx-2 relative text-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: "100%",
              width: "100%",
            }}
          />
        </div>

        <div className="absolute bottom-4 right-4">
          <button className="bg-black shadow-2xl hover:cursor-pointer hover:bg-gray-300 hover:text-black duration-200 text-lg text-white py-2 px-4 rounded-lg"
          onClick={reviewCode}
          >
            Review
          </button>
        </div>
      </div>

      <div className=" overflow-auto w-1/2 bg-[#171717] text-gray-200 p-4 rounded-2xl mx-2">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </div>
  );
}

export default App;
