import { registerRootComponent } from 'expo';

import { StrictMode } from 'react';
import App from './src/App';

const RootComponent = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

registerRootComponent(RootComponent);
