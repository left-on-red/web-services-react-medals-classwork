import './App.css';

import Container from '@material-ui/core/Container';
import MedalList from './components/MedalList';

function App() {
  return (
    <Container className="container" maxWidth="sm">
        <MedalList />
        <button className="reset-btn" onClick={() => { localStorage.clear(); window.location.reload() }}>Reset</button>
    </Container>
  );
}

export default App;
