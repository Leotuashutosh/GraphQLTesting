import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch'
import logo from './SpaceX.jpg';

const client = new ApolloClient({
  uri: '/graphql'
})
function App() {
  return (
    <ApolloProvider client = {client}>
    <Router>
    <div className="container">
      <img src={logo} alt="SpaceX" style={{width: 300, display: 'block', margin:'auto'}} />
      <Routes>
        <Route exact path="/" element= {<Launches />} />
        <Route exact path="/launch/:flight_number" element= {<Launch />} />
        </Routes> 
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
