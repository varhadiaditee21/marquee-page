import React from 'react';

class HeaderComp extends React.Component{
    render(){
        return(
        <div style={{ height: '100%', width: '50%'}}>
        <div style={{marginTop: '1.179rem', marginLeft: '8.104rem'}}>

       
        <img style={{color: '#fff', marginBottom: -8}} src="./abc.png"/> <br></br>

        <a style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#fff', marginBottom: -8, 
        fontFamily: 'helveticaNeue',  fontWeight: 'bold',
        fontStretch: 'normal',fontStyle: 'normal', letterSpacing: 'normal', lineHeight:1.86, textDecoration:'none'}} href="#home">Industries<br></br></a>

 
        <a style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#ffc004', 
        fontFamily: 'helveticaNeue',  fontWeight: 'bold',
        fontStretch: 'normal',fontStyle: 'normal', letterSpacing: 'normal', lineHeight:1.86, textDecoration:'none'}} href="#news">Services <br></br></a>


        <a style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#fff', 
        fontFamily: 'helveticaNeue',  fontWeight: 'bold',
        fontStretch: 'normal',fontStyle: 'normal', letterSpacing: 'normal', textDecoration:'none' }} href="#about">About Us</a>
        </div>
        </div>
        
            
        )
    }
}

export default HeaderComp;