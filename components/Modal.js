import { useEffect, useRef } from 'react'
import styles from "styles/Modal.module.css"

const Modal = (props) => {
    console.log("props from modal: ", props)
    const modalRef = useRef(null)
    useOnClickOutside(modalRef, () => props.closeModal());
    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Mikäli klikataan refe-elementtiä tai sen lapsia, ei tehdä mitään
                    if (!ref.current || ref.current.contains(event.target)) {
                        return
                    }
                    handler(event)
                }
                document.addEventListener("mousedown", listener)
                document.addEventListener("touchstart", listener)
                return () => {
                    document.removeEventListener("mousedown", listener)
                    document.removeEventListener("touchstart", listener)
                }
            },
            [ref, handler]
        )
    }
     // Kuunnellaan ESC-näppäintä ja suljetaan modaali
    const listenForEscKey = event => {
        const { keyCode } = event;
        if (keyCode === 27) {
            props.closeModal();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', listenForEscKey);
        return () => {
            window.removeEventListener('keydown', listenForEscKey);
        }
    })
    // Ei renderöidä mikäli showModal on false
    if (!props.showModal) {
        return null
    }
    
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent} ref={modalRef}>
                <span className={styles.close} onClick={props.closeModal}>X</span>
                <h1>{props.portion.name}</h1>
            </div>
        </div>
    )
}
export default Modal