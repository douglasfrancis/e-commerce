import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    const [cart, setCart] = useState([]);
    

return (
    <Context.Provider value={[cart, setCart]}>
        {props.children}
    </Context.Provider>
)
};
