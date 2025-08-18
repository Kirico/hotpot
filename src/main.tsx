import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { unstableSetRender } from 'antd-mobile'

import './index.css'
import App from './App.tsx'

unstableSetRender((node, container) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  container._reactRoot ||= createRoot(container);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
