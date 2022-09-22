import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle, { Row, Section, Text } from './globalStyles.js';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Row>
          <Link></Link>
        </Row>
      </Router>
    </>
  );
}

export default App;
