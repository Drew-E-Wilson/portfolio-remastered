// import emailjs from "emailjs-com";
// import styles from "./Contact.module.css";

// export default function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm("default_service", "portfolio_template", e.target, "user_F2Sq2nQMNHFpxUqhNbuwc")
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         });
//     e.target.reset();
//   };

//   return (
//     <div className={styles.contact_container}>
//       <form onSubmit={sendEmail} className={styles.form_container}>
//         <h2>Send me a message</h2>
//         <div>
//           <input type="text" placeholder="Name" name="name" className={styles.info_input} />
//         </div>
//         <div>
//           <input type="email" placeholder="Email Address" name="email" className={styles.info_input} />
//         </div>
//         <div>
//           <textarea className={styles.infobox} cols="30" rows="8" placeholder="Your Message" name="message" />
//         </div>
//         <div>
//           <input type="submit" value="Send Message" className={styles.form_button} />
//         </div>
//       </form >
//     </div >
//   );
// }
