
import './App.css';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import AuthDetails from './component/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  );
}

export default App;
