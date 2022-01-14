import React from 'react';
import { homeObjFour, homeObjOne } from './Data';
import { homeObjTwo } from './Data';
import {homeObjThree} from './Data';
import { InfoSection } from '../../Components';

const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />  
          <InfoSection {...homeObjTwo}/> 
          <InfoSection {...homeObjThree}/> 
          <InfoSection {...homeObjFour} /> 

        </>
    )
}

export default Home
