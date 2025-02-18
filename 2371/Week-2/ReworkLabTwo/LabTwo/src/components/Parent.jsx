import React from 'react';
import OwlCard from './OwlCard'; // Import the subcomponent
import barnOwlImg from './images/BarnOwl.jpg';
import snowyOwlImg from './images/SnowyOwl.jpg';
import greatHornedOwlImg from './images/GreatHornedOwl.jpg';
import '../styles/Parent.css';

function Parent() {
    return (
        <div className="parent-container">
            <h1>All About Owls</h1>
            <OwlCard 
                title="Barn Owl" 
                description="The Barn Owl is known for its heart-shaped face and silent flight." 
                image={barnOwlImg} 
            />
            <OwlCard 
                title="Snowy Owl" 
                description="The Snowy Owl is a large, white owl native to Arctic regions." 
                image={snowyOwlImg} 
            />
            <OwlCard 
                title="Great Horned Owl" 
                description="This powerful owl is known for its large size and distinctive ear tufts." 
                image={greatHornedOwlImg} 
            />
        </div>
    );
}

export { Parent };