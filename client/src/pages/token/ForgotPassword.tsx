import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from './token.module.scss';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import arrowLeftIcon from "../../assets/arrowLeftIcon.svg";
import envelopeIcon from "../../assets/envelopeIcon.svg";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    
    return (
        <main className={styles.registerTokenPageMain}>
            <div className={styles.registerTokenPageImg}>
                <div className={styles.registerTokenReturn}>
                    <a href="#"><img src={arrowLeftIcon} className={styles.registerTokenArrowLeft}></img></a>
                </div>
                <div className={styles.registerTokenPageMail}>
                    <img src={envelopeIcon} className={styles.registerTokenEnvelope}></img>
                    <h1 className={styles.registerTokenH1}>Verifique seu email</h1>
                </div>

            </div>
            <div className={styles.registerTokenPageInput}>
            <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.registerTokenPageButton}>
                <Button
                size="medium"
                disabled
                rounded
                onClick={() => {}}
                label="Continuar"
                />
            </div>
        </main>
    );
};

export default ForgotPassword;