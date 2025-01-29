import elephant from '../../assets/images/elephant.jpg';

function SubcomOne() {
  return (
    <div className='ComponentCard'>
      <img src={elephant} alt="elephant" className='imgSrc' />

      <div className='text'>
        <h2 className='title'>Elephant</h2>
        <p className='paragraph'>
          Elephants are the largest land animals on Earth. They are known for their intelligence, strong social bonds, and long trunks. Elephants are herbivores and can be found in various habitats, including forests, grasslands, and deserts. 
        </p>
      </div>
    </div>
  );
}

export default SubcomOne;