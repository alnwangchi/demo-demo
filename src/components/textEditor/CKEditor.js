import React from 'react';
import { CKEditor as CK, Base64UploadAdapter } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditor = () => {
  // 媽的 不知道為何該組件被作為 props 時 render 不出來

  console.log('CKCKCK');
  return (
    <CK
      editor={ClassicEditor}
      config={{
        Plugins: [Base64UploadAdapter],
      }}
      data='<p>Hello from CKEditor 5!</p>'
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
};
export default CKEditor;
