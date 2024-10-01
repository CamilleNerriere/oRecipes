import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import './styles/index.scss';

createRoot(document.getElementById('root')!).render(<App />);
