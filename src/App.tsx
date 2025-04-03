import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <Layout />
      </Router>
    </FluentProvider>
  );
}

export default App; 