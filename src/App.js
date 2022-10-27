
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
import Investigadores from './pages/investigadores';
import Semilleros from './pages/semilleros';
import Form from './components/form/Form';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import Proyectos from './pages/proyectos';

class App extends React.Component {

  constructor() {
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromMount = null

  componentDidMount(){
    this.unsubscribeFromMount = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({currentUser:userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromMount();
  }


  render(){
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path="/" element={<Home currentUser={this.state.currentUser}/>} exact />
          <Route path="/signin" element={<SigninPage/>} exact />
          <Route path="/investigadores" element={<Investigadores currentUser={this.state.currentUser}/>} exact />
          <Route path="/semilleros" element={<Semilleros currentUser={this.state.currentUser}/>} exact />
          <Route path="/registrese" element={<Form/>} exact />
          <Route path="/proyectos" element={<Proyectos currentUser={this.state.currentUser}/>} exact />
        </Routes>
      </Router>
    );

  }
}

export default App;
