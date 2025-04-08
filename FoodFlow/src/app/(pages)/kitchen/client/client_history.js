import client_H_styles from "@/components/styles/client_H.module.css"
import Image from "next/image"
import client_HIcon from "/public/images/icons/client_H_Img.jpg"

export default function Client_history() {


    return (
        <div className="mb-7">
            <main className={client_H_styles.main}>
                <div className={client_H_styles.info}>
                    <p className={client_H_styles.info_one}>History</p>
                    <p className={client_H_styles.info_two}>View All</p>
                </div>

                <div className={client_H_styles.H_container}>
                    <div className={client_H_styles.H_one}>
                        <p className={client_H_styles.H_oneM}>You have no previous Client updates</p>
                        
                        <p className={client_H_styles.H_oneS}>Create your first client</p>
                        <p className={client_H_styles.H_oneSs}>Just click the ___ to begin</p>
                    </div>
                    <Image className={client_H_styles.H_img} src={client_HIcon} alt="image of article" />
                </div>
            </main>
        </div>
    )
}