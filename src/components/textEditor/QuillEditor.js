import React, { useState, useRef } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.core.css';
// import 'react-quill/dist/quill.bubble.css';
Quill.register('modules/imageResize', ImageResize);

// 看不懂為啥加了這個就有 icon 出現 ???
const icons = Quill.import('ui/icons');
icons['undo'] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
icons['redo'] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;

// function undoChange() {
//   Quill.history.undo();
// }
// function redoChange() {
//   Quill.history.redo();
// }

// 選單會依序排列
const modules = {
  toolbar: [
    ['undo', 'redo'],
    ['blockquote', 'code-block'],
    [{ header: [1, 2, 3, 5, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video', 'formula'],
    [{ color: ['red', 'green', 'blue'] }, { background: [] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ font: [] }],
    ['clean'],
  ],
  // handlers: {
  //   undo: undoChange,
  //   redo: redoChange,
  // },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize'],
  },
  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: true,
  },
};

const QuillEditor = ({ setQuillValue }) => {
  const [value, setValue] = useState('');
  const quillRef = useRef();

  console.log('quillRef: ', quillRef);

  const onChangeSelection = (range, source, editor) => {
    console.log('onChangeSelection: ', { range, source, editor });
  };
  const onFocus = (range, source, editor) => {
    console.log('onFocus: ', { range, source, editor });
  };
  const onBlur = (previousRange, source, editor) => {
    console.log('onBlur: ', { previousRange, source, editor });
  };

  const onGetLength = () => {
    console.log('length: ', quillRef.current.unprivilegedEditor.getLength()); // 因為必定會有個 '\n' 所以都多 1
  };
  const onGetText = () => {
    console.log('text: ', quillRef.current.unprivilegedEditor.getText());
  };
  const onGetHTML = () => {
    console.log('HTML: ', quillRef.current.unprivilegedEditor.getHTML());
  };
  const onGetContents = () => {
    console.log('delta: ', quillRef.current.unprivilegedEditor.getContents());
  };

  const onSubmit = () => {
    console.log('submit: ');
    setQuillValue(quillRef.current.unprivilegedEditor.getContents());
    console.log('🚀 ~ file: QuillEditor.js ~ line 89 ~ onSubmit ~ quillRef', quillRef);
  };
  return (
    <Box>
      <Typography sx={{ mb: 3 }} variant='h2'>
        QuillEditor
      </Typography>
      <Box sx={{ mb: '10px' }}>
        <ReactQuill
          ref={quillRef}
          theme={'snow'}
          value={value}
          onChange={setValue}
          onChangeSelection={onChangeSelection}
          onFocus={onFocus}
          onBlur={onBlur}
          // readOnly // 用在接資料僅供顯示
          modules={modules}
          // placeholder='HOLDERRR'
          // defaultValue='HOHOHO' // 作為非受控組件時的預設值
          // style={{ color: 'red', fontSize: '23px' }} // 建立在頂層 .quill 的 inline style 注意有些權重會無法覆蓋
        />
      </Box>
      <ButtonGroup variant='outlined'>
        <Button onClick={onGetLength}>getLength</Button>
        <Button onClick={onGetText}>getText</Button>
        <Button onClick={onGetHTML}>getHTML</Button>
        <Button onClick={onGetContents}>getContents</Button>
        <Button variant='contained' onClick={onSubmit}>
          Submit
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default QuillEditor;
