
import SubcomOne from './SubcomOne.jsx';
import SubcomTwo from './SubcomTwo.jsx';
import SubcomThree from './SubcomThree.jsx';
import SubcomFour from './SubcomFour.jsx';


function Mother() {

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

export default Mother