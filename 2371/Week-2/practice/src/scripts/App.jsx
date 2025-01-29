import '../styles/App.css'
import SubcomOne from './Components/SubcomOne.jsx';
import SubcomTwo from './Components/SubcomTwo.jsx';
import SubcomThree from './Components/SubcomThree.jsx';
import SubcomFour from './Components/SubcomFour.jsx';


function App() {

  return (
    <>
      <div className="App">
        <h1 className='mainTitle'>Animals</h1>

        <SubcomOne />
        <SubcomTwo />
        <SubcomThree />
        <SubcomFour />
      </div>
    </>
  )
}

export default App
