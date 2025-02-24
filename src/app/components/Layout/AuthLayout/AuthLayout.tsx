import type { FC, PropsWithChildren } from "react";
import styles from './AuthLayout.module.css'


const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.authLayout}>
    {children}
    </div>
}

export default AuthLayout