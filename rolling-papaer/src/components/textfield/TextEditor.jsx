import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";

const Container = styled.div`
  width: 720px;
  height: 260px;

  .ql-toolbar {
    padding: 1.2rem 1.5rem;
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: ${THEME_LIGHT_COLOR.gray2};
  }

  .ql-container {
    width: 720px;
    height: 260px;
    padding: 1.2rem 1.5rem;
    border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .ql-editor {
    padding: 0;
    font-family: 'Pretendard';
  }
`;

const TextEditor = (props) => {
  const [quillValue, setQuillValue] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <Container>
      <ReactQuill
        style={{ width: "720px", height: "260px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={quillValue || ""}
        onChange={handleQuillChange}
      />
    </Container>
  );
};
export default TextEditor;
