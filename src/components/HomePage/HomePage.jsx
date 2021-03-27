import React from 'react';
import ButtonComp from '../ButtonComp/ButtonComp';
import HeaderComp from '../HeaderComp/HeaderComp';
import FooterComp from '../FooterComp/FooterComp';
import LeftMid from '../MidComp/LeftMid';


class HomePage extends React.Component{

  render(){

    return (
        <div style={{backgroundImage: `url("slide-one.png")`, height: '100vh', width: '100vw'}}>
            <div style={{display: 'flex', height: '25vh', alignItems: 'center',justifyContent: 'center'}}>
                <HeaderComp/>
                <ButtonComp/>
            </div>
        <LeftMid/>     
        <FooterComp/>
        </div>

    )
  }
}

export default HomePage;
