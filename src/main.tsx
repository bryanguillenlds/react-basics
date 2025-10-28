import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { MyAwesomeApp } from './MyAwesomeApp'
import { BasicsApp } from './BasicsApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyAwesomeApp /> */}
    <BasicsApp />
  </StrictMode>
);
