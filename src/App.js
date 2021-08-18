import React from 'react';
import ColoredUserpic from './coloredUserpic';

const App = () => {
    return <ColoredUserpic
        src='https://images.unsplash.com/photo-1629153974080-3cd94b567ab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6} 
    />
}

export default App;