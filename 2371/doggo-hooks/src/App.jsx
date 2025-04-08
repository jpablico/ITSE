import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [breed, setBreed] = useState('');
  const [animationClass, setAnimationClass] = useState('');
  const breeds = [
    'labrador', 
    'poodle', 
    'beagle', 
    'golden', 
    'husky', 
    'boxer', 
    'chihuahua', 
    'pug'
  ];

  const fetchDogImage = async (selectedBreed = '') => {
    setIsLoading(true);
    if (dogImage) {
      setAnimationClass('img-slide-out');
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    try {
      const url = selectedBreed 
        ? `https://dog.ceo/api/breed/${selectedBreed}/images/random`
        : 'https://dog.ceo/api/breeds/image/random';

      const response = await fetch(url);
      const data = await response.json();
      
      if (data.status === 'success') {
        setDogImage(data.message);
        setAnimationClass('img-slide-in');
      } else {
        console.error('Error fetching dog image');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  const handleBreedChange = (e) => {
    const selectedBreed = e.target.value;
    setBreed(selectedBreed);
    fetchDogImage(selectedBreed);
  };

  return (
    <div className="dog-app">
      <h1>Pawsome Pics</h1>
      
      <div className="controls">
        <div className="breed-selector">
          <label htmlFor="breed-select">Select a breed</label>
          <select 
            id="breed-select" 
            value={breed} 
            onChange={handleBreedChange}
          >
            <option value="">Any breed</option>
            {breeds.map((breedOption) => (
              <option key={breedOption} value={breedOption}>
                {breedOption.charAt(0).toUpperCase() + breedOption.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={() => fetchDogImage(breed)} 
          className="refresh-button"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Fetch!'}
        </button>
      </div>

      <div className="image-container">
        {isLoading && !dogImage ? (
          <div className="loading">Loading...</div>
        ) : (
          dogImage && (
            <img 
              src={dogImage} 
              alt="Random dog" 
              className={animationClass}
              onAnimationEnd={() => {
                if (animationClass === 'img-slide-out') {
                  setAnimationClass('');
                }
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;