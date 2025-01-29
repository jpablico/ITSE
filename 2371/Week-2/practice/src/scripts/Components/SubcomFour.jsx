import zebra from '../../assets/images/zebra.jpg';

function SubcomFour() {
  return (
    <div className='ComponentCard'>
      <img src={zebra} alt="zebra" className='imgSrc' />

      <div className='text'>
        <h2 className='title'>zebra</h2>
        <p className='paragraph'>
          Zebras are known for their distinctive black and white stripes, which are unique to each individual. They are social animals that live in herds and are native to Africa. Zebras primarily feed on grasses and are known for their strong migratory instincts.
        </p>
      </div>
    </div>
  );
}

export default SubcomFour;