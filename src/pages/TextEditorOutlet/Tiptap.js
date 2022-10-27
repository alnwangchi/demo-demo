import React, { useState } from 'react';
import TiptapEditor from '../../components/textEditor/Tiptap/TiptapEditor';
import TiptapReceiver from '../../components/textEditor/Tiptap/TiptapReceiver';
import EditorDemoBox from '../../components/textEditor/EditorDemoBox';
import MotionWrapper from '../../components/animationWrapper/MotionWrapper';

const Tiptap = () => {
  const [tiptapValue, setTiptapValue] = useState('');
  return (
    <MotionWrapper>
      <EditorDemoBox
        editor={<TiptapEditor setTiptapValue={setTiptapValue} />}
        receiver={<TiptapReceiver tiptapValue={tiptapValue} />}
      />
    </MotionWrapper>
  );
};

export default Tiptap;
