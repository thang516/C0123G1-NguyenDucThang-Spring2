import {createContext, useContext, useState} from "react";

const FashionContext = createContext(null);

export const useFashion = () => {
    const context = useContext(FashionContext);
    if(!context) throw new Error('Please wrap component into context');
    return context;
}

const FashionProvider = ({children}) => {
    const [quantityCard, setQuantityCard] = useState(0);
    return <FashionContext.Provider value={{quantityCard, setQuantityCard}}>
        {children}
    </FashionContext.Provider>
}
export default FashionProvider;

