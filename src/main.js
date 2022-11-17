import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <div>Hello World</div>;
}

const root = createRoot(document.getElementById('react-container'));
root.render(<App />);