import React, { useState } from 'react';
import CKEditor from '../../components/textEditor/CKEditor';
import { Box, Typography } from '@mui/material';
import CKReceiver from '../../components/textEditor/CKReceiver';
import EditorDemoBox from '../../components/textEditor/EditorDemoBox';
import MotionWrapper from '../../components/animationWrapper/MotionWrapper';

// 媽的 不知道為甚麼常常 render 不出來
const CK = () => {
  const [CKValue, setCKValue] = useState('');
  return (
    // <EditorDemoBox
    //   editor={<CKEditor setCKValue={setCKValue} />}
    //   receiver={<CKReceiver CKValue={CKValue} />}
    // />
    <MotionWrapper>
      <Box>
        <Typography variant='h2'>CKEDITOR</Typography>
        <CKEditor />
      </Box>
    </MotionWrapper>
  );
};

export default CK;
