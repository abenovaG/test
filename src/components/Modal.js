import Portal from "./Portal";
import {useEffect} from "react";

const Modal = ({children}) => {


    // useEffect(() => {
    //     window.addEventListener('keydown', (e) => {
    //         if(e.key === 'Escape') {
    //             onClose();
    //         }
    //     })
    //     return () => {
    //         window.removeEventListener('keydown')
    //     }
    // }, [])

    return (
        <Portal>
            <div className="overlay">
                <div className="content">
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal;