import React, { useState } from 'react';
import QuillEditor from '../../components/textEditor/QuillEditor';
import QuillReceiver from '../../components/textEditor/QuillReceiver';
import EditorDemoBox from '../../components/textEditor/EditorDemoBox';
import MotionWrapper from '../../components/animationWrapper/MotionWrapper';

const Quill = () => {
  const [quillValue, setQuillValue] = useState('');
  return (
    <MotionWrapper>
      <EditorDemoBox
        editor={<QuillEditor setQuillValue={setQuillValue} />}
        receiver={<QuillReceiver quillValue={quillValue} />}
      />
    </MotionWrapper>
  );
};

export default Quill;
