import React from 'react';

class ButtonComp extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '50%', alignItems: 'flex-end',
            display: 'flex', flexDirection: 'column'}}>

            <div style={{border: ('solid 1px'), borderColor: '#fff', height: '2.625rem',
              width: '8.688rem', marginRight: '8.125rem', marginTop: '1.563rem'}}>
              <p style={{textAlign: 'center', padding: 0, margin: 0, marginTop: 12, color: 'white', 
              fontSize: '0.938rem', fontWeight:'bold',fontStretch: 'normal', fontStyle:'normal', letterSpacing: 'normal'
            }}>Contact Us</p>
            </div>

            </div>
        )
    }
}

export default ButtonComp;