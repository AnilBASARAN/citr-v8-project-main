import { useEffect,useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({children}) => {
    const elRef = useRef(null);
    if(!elRef.current){
        elRef.current = document.createElement("div");
    }

    useEffect(()=>{
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
        //after the user clicks yes or no we need componentwillunmount() ,
        //coz component's about to exit the DOM, you want to run that methor
        return ()=> modalRoot.removeChild(elRef.current);
        // this is how you do componentwillunmount() in a functional component
        // anything that you return in an effect will be run after a component has been unmount from the DOM.
        // it will be , it does it before it totally unmounts

        // we do kind of behavior & thing -to remove event listeners
        //- or to remove smth from the DOM, which we are doing right now
        // - if you are doing some sort of external event listening
        // i if you are stopping a timer, if you are doing something like a set timeout or request animation frame 
        // or if you  set interval here is you do cancel that interval
    },[]);

    return createPortal(<div>{children}</div>,elRef.current);
}

export default Modal;