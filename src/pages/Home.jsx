import React from 'react';
import TopRated from '../components/HomePage/TopRated';
import PlantCareSection from '../components/HomePage/PlantCareSection';
import GreenExperts from '../components/HomePage/GreenExperts';
import EcoDecorIdeasSection from '../components/HomePage/EcoDecorIdeasSection';
import HeroSlider from '../components/HomePage/HeroSlider';
import bgImg from '../assets/pattern.png'
import PlantsThatSavedLives from '../components/HomePage/PlantsThatSavedLives';


const Home = () => {
    return (
        <div className='pb-11 space-x-11'
        style={{ backgroundImage: `url(${bgImg})` }}
        
        > 
            
            <HeroSlider></HeroSlider>

            <TopRated></TopRated>

            <PlantCareSection></PlantCareSection>

            <GreenExperts></GreenExperts>

            <EcoDecorIdeasSection></EcoDecorIdeasSection>

            {/* Extra Home page section  */}

            <PlantsThatSavedLives></PlantsThatSavedLives>

        </div>
    );
};

export default Home;



