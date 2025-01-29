import giraffe from '../../assets/images/giraffe.jpg';

function SubcomTwo() {
  return (
    <div className='ComponentCard'>
      <img src={giraffe} alt="giraffe" className='imgSrc' />

      <div className='text'>
        <h2 className='title'>Giraffe</h2>
        <p className='paragraph'>
          Giraffes are the tallest mammals on Earth, with their legs and necks being exceptionally long. They are known for their distinctive spotted coats and long tongues, which they use to reach leaves high up in trees. Giraffes are social animals and can be found in savannas and open woodlands across Africa.
        </p>
      </div>
    </div>
  );
}

export default SubcomTwo;