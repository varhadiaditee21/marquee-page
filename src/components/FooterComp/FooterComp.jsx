import React from 'react';
// import './styles.css';

class FooterComp extends React.Component{
    render(){
        return(
            <div style={{display: 'flex', height: '25vh', alignItems: 'flex-end', justifyContent: 'center'}}>
                
            <div style={{display: 'flex', flexDirection:'row', backgroundColor: '#fff', height: '11.188rem', width: '73.75rem'}}>
                
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{height: '2rem', width: '30.188rem', marginLeft: '4.813rem', 
                    fontSize: '1.5rem', fontWeight:'bold',fontStretch: 'normal', fontStyle:'normal',
                    letterSpacing: '-0.63px', lineHeight:'1.33', marginTop: '4.625rem',
                        }}>Nemo enim ipsam voluptatem quia voluptas. 
                    </p>

                    <p style={{height: '3rem', width: '30.188rem', marginLeft: '18.813rem', 
                    fontSize: '0.688rem', fontWeight:'bold',fontStretch: 'normal', fontStyle:'normal',
                    letterSpacing: '-0.63px', lineHeight:'3.33', marginTop: '4.625rem',
                        }}>LET'S TALK</p>
                </div>
                              
            </div>

            </div>
            

      
          

            
        )
    }
}

export default FooterComp;