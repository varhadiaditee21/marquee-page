import { render } from '@testing-library/react';
import React from 'react';

class LeftMid extends React.Component{
    render(){
        return(
            <div style={{display: 'flex', height: '50vh'}}>
                
            <div style={{display: 'flex', flex: 1, alignItems: 'center',
              justifyContent: 'center', width: '50%'}}>
                  
              <p style={{fontSize: '5.25rem', fontWeight: 'bold', color: '#fff', fontStretch: 'normal', 
              fontStyle: 'normal', letterSpacing: '-2.2px', lineHeight: 1, 
              fontFamily: 'helveticaNeue', height: '17rem', width:'38.25rem'}}>
                Lorem ipsum <br/>dolor sit amet
              </p>
            </div>

            <div style={{display: 'flex', flex: 1, width: '50%', alignItems: 'center',
              justifyContent: 'center'}}>
              <p style={{margin: '10.625rem', color: '#fff', lineHeight: '1.86', letterSpacing:'normal',fontStretch:'normal',
              fontFamily: 'helveticaNeue', height: '14.188rem', width:'22.5rem', fontWeight: 'normal', width: '22.5rem',
              height: '14.188rem'}}>

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo.</p>
            </div>

          </div>
          
        
        )
    }
}

export default LeftMid;