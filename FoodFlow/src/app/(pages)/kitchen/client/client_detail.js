"use client"

// IMPORT MODULE.CSS
import ClientMngModal from "@/components/client/ClientMngModal";
import client_styles from "@/components/styles/client.module.css"
import { useState } from "react";


export default function Client_detail() {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <main className={client_styles.main}>
      {/* First Btn */}
      <div className={client_styles.cm_button_container}>
        <button  onClick={() => setIsOpen(true)}
         className={client_styles.cm_button}>Client manager</button>

        {isOpen && (<ClientMngModal/> )}
      </div>

      <div className={client_styles.card_container}>
        {/* first container */}
        <div className={client_styles.first_Card}>
          {/* <Image src={copyTag} alt="copy tag" className={client_styles.copy_tag}/> */}
          <svg  className={client_styles.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 16.5C4.0875 16.5 3.73425 16.353 3.44025 16.059C3.14625 15.765 2.9995 15.412 3 15V6C3 5.5875 3.147 5.23425 3.441 4.94025C3.735 4.64625 4.088 4.4995 4.5 4.5H6C6 3.675 6.29375 2.96875 6.88125 2.38125C7.46875 1.79375 8.175 1.5 9 1.5C9.825 1.5 10.5313 1.79375 11.1188 2.38125C11.7063 2.96875 12 3.675 12 4.5H13.5C13.9125 4.5 14.2658 4.647 14.5598 4.941C14.8538 5.235 15.0005 5.588 15 6V15C15 15.4125 14.853 15.7657 14.559 16.0597C14.265 16.3538 13.912 16.5005 13.5 16.5H4.5ZM4.5 15H13.5V6H12V7.5C12 7.7125 11.928 7.89075 11.784 8.03475C11.64 8.17875 11.462 8.2505 11.25 8.25C11.0375 8.25 10.8593 8.178 10.7153 8.034C10.5713 7.89 10.4995 7.712 10.5 7.5V6H7.5V7.5C7.5 7.7125 7.428 7.89075 7.284 8.03475C7.14 8.17875 6.962 8.2505 6.75 8.25C6.5375 8.25 6.35925 8.178 6.21525 8.034C6.07125 7.89 5.9995 7.712 6 7.5V6H4.5V15ZM7.5 4.5H10.5C10.5 4.0875 10.353 3.73425 10.059 3.44025C9.765 3.14625 9.412 2.9995 9 3C8.5875 3 8.23425 3.147 7.94025 3.441C7.64625 3.735 7.4995 4.088 7.5 4.5Z" fill="white"/>
          </svg>
          <p className={client_styles.card_mainText}>All Clients</p>

          <p className={client_styles.card_number}>20</p>

          <p className={client_styles.card_detail}>+ increased by 20% since Dec 2022</p>
        </div>
        {/* /////////////////////////// */}
        <div className={client_styles.cardII_Card}>
        <svg className={client_styles.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="18"
        viewBox="0 0 18 18" fill="none">
          <path d="M4.5 16.5C4.0875 16.5 3.73425 16.353 3.44025 16.059C3.14625 15.765 2.9995 15.412 3 15V6C3 5.5875 3.147 5.23425 3.441 4.94025C3.735 4.64625 4.088 4.4995 4.5 4.5H6C6 3.675 6.29375 2.96875 6.88125 2.38125C7.46875 1.79375 8.175 1.5 9 1.5C9.825 1.5 10.5313 1.79375 11.1188 2.38125C11.7063 2.96875 12 3.675 12 4.5H13.5C13.9125 4.5 14.2658 4.647 14.5598 4.941C14.8538 5.235 15.0005 5.588 15 6V15C15 15.4125 14.853 15.7657 14.559 16.0597C14.265 16.3538 13.912 16.5005 13.5 16.5H4.5ZM4.5 15H13.5V6H12V7.5C12 7.7125 11.928 7.89075 11.784 8.03475C11.64 8.17875 11.462 8.2505 11.25 8.25C11.0375 8.25 10.8593 8.178 10.7153 8.034C10.5713 7.89 10.4995 7.712 10.5 7.5V6H7.5V7.5C7.5 7.7125 7.428 7.89075 7.284 8.03475C7.14 8.17875 6.962 8.2505 6.75 8.25C6.5375 8.25 6.35925 8.178 6.21525 8.034C6.07125 7.89 5.9995 7.712 6 7.5V6H4.5V15ZM7.5 4.5H10.5C10.5 4.0875 10.353 3.73425 10.059 3.44025C9.765 3.14625 9.412 2.9995 9 3C8.5875 3 8.23425 3.147 7.94025 3.441C7.64625 3.735 7.4995 4.088 7.5 4.5Z" fill="#999999"/>
          </svg>
          <p className={client_styles.cardII_mainText}>Recurring Clients</p>

          <p className={client_styles.cardII_number}>10</p>

          <p className={client_styles.cardII_detail}>+ increased by 20% since Dec 2022</p>
        </div>

        <div className={client_styles.cardII_Card}>
        <svg className={client_styles.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="18"
        viewBox="0 0 18 18" fill="none">
          <path d="M4.5 16.5C4.0875 16.5 3.73425 16.353 3.44025 16.059C3.14625 15.765 2.9995 15.412 3 15V6C3 5.5875 3.147 5.23425 3.441 4.94025C3.735 4.64625 4.088 4.4995 4.5 4.5H6C6 3.675 6.29375 2.96875 6.88125 2.38125C7.46875 1.79375 8.175 1.5 9 1.5C9.825 1.5 10.5313 1.79375 11.1188 2.38125C11.7063 2.96875 12 3.675 12 4.5H13.5C13.9125 4.5 14.2658 4.647 14.5598 4.941C14.8538 5.235 15.0005 5.588 15 6V15C15 15.4125 14.853 15.7657 14.559 16.0597C14.265 16.3538 13.912 16.5005 13.5 16.5H4.5ZM4.5 15H13.5V6H12V7.5C12 7.7125 11.928 7.89075 11.784 8.03475C11.64 8.17875 11.462 8.2505 11.25 8.25C11.0375 8.25 10.8593 8.178 10.7153 8.034C10.5713 7.89 10.4995 7.712 10.5 7.5V6H7.5V7.5C7.5 7.7125 7.428 7.89075 7.284 8.03475C7.14 8.17875 6.962 8.2505 6.75 8.25C6.5375 8.25 6.35925 8.178 6.21525 8.034C6.07125 7.89 5.9995 7.712 6 7.5V6H4.5V15ZM7.5 4.5H10.5C10.5 4.0875 10.353 3.73425 10.059 3.44025C9.765 3.14625 9.412 2.9995 9 3C8.5875 3 8.23425 3.147 7.94025 3.441C7.64625 3.735 7.4995 4.088 7.5 4.5Z" fill="#999999"/>
          </svg>
          <p className={client_styles.cardII_mainText}>Applied Loyalty Program</p>

          <p className={client_styles.cardII_number}>20</p>

          <p className={client_styles.cardIII_detail}>-increased by 20% since Dec 2022</p>
        </div>

      </div>
      <div className={client_styles.bottom_cm}>
        <button className={client_styles.bottom_button}>view Custom report</button>
      </div>
      
    </main>
    )
}