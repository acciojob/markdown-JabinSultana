import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {

  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Live preview using useEffect
  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setPreview(text);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);

  }, [text]);

  return (

    <div style={{ display: "flex", height: "100vh" }}>

      {/* Markdown Input */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
        style={{ width: "50%", padding: "10px" }}
      />

      {/* Preview Section */}

      <div
        className="preview"
        style={{ width: "50%", padding: "10px" }}
      >

        {loading ? (

          <p className="loading">
            Loading...
          </p>

        ) : (

          <ReactMarkdown>
            {preview}
          </ReactMarkdown>

        )}

      </div>

    </div>

  );

};

export default MarkdownEditor;
