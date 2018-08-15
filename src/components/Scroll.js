import React from 'react';

const Scroll = (props) => {
    return (
        <div style={
            {
                overflowY: 'scroll', 
                boxShadow: 'inset 0px 5px 20px rgba(0,0,0,.5)',
                height: '500px',
            }
        }>
            {props.children}
        </div>
    )
}

export default Scroll;