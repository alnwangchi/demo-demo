import TextEditorPage from '../pages/TextEditorPage';
import Quill from '../pages/TextEditorOutlet/Quill';
import Welcome from '../pages/TextEditorOutlet/Welcome';
import Tiptap from '../pages/TextEditorOutlet/Tiptap';
import CK from '../pages/TextEditorOutlet/CK';
import JestCounterPage from '../pages/JestCounterPage';
import AnimationPage from '../pages/AnimationPage.js';

const routers = [
  {
    name: '文字編輯器',
    path: '/text-editor',
    element: <TextEditorPage />,
    nested: [
      { name: 'welcome', path: 'welcome', element: <Welcome /> },
      { name: 'quill', path: 'quill', element: <Quill /> },
      { name: 'tiptap', path: 'tiptap', element: <Tiptap /> },
      { name: 'ck', path: 'ck', element: <CK /> },
    ],
  },
  {
    name: 'Jest 計數器測試',
    path: '/jest-counter',
    element: <JestCounterPage />,
  },
  {
    name: 'Framer Motion',
    path: '/animation',
    element: <AnimationPage />,
  },
  {
    name: '無',
    path: '*',
    // element: <NotFound />,
  },
  // { name: '錯誤頁', path: '/error/:status/:message_code', element: <Error /> },
];

export default routers;
