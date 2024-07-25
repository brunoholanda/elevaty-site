import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import styles from './Btn.module.scss'

const Btn = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <button className={styles.btn}>
            {props.children}
        </button>
    )
}

export default Btn;