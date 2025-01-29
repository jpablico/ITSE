import wolf from '../../assets/images/wolf.jpg';

function SubcomThree() {
  return (
    <div className='ComponentCard'>
      <img src={wolf} alt="wolf" className='imgSrc' />

      <div className='text'>
        <h2 className='title'>Wolf</h2>
        <p className='paragraph'>
          Wolves are highly social animals that live in packs. They are known for their strong family bonds and cooperative hunting strategies. Wolves are carnivores and primarily hunt large ungulates, but they can also eat smaller animals and scavenged carrion.
        </p>
      </div>
    </div>
  );
}

export default SubcomThree;