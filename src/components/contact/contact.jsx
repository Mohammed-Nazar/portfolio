import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';


const token = "6135962127:AAGrrvf-bAEm-IUhcR73Nc96R34YRWHq9po";
const id = "5750079047";


export default function Contact(){
    const [message , messageval] = useState();
    const [name , nameval ] = useState();
    const [email , emailval ] = useState();
    const [done , doneval ] = useState();
    function sendBot(){
        const messageTele = "from: "+name+"\n\n"+" email: "+email+" \n"+"Message: "+"\n\n"+message;
        if (message != null && name !=null && email !=null){
        const url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+id+"&text="+messageTele;
        fetch(url
          ).then((response) => response.json());
        doneval("Done Message Sent");
    } else {
        doneval("Done leave blank inputs")
    }
    }


    const changeMessage = event =>{
        messageval(event.target.value);
    }
    const changeName = event =>{
        nameval(event.target.value);
    }
    const changeEmail = event =>{
        emailval(event.target.value)
    }
    
    return (
        <>
        <div id="contact" className="contact">
            <h1><FontAwesomeIcon icon={faContactBook}/> Contact Me </h1>
<div className="contact-form">
    <div>
        <input required onChange={changeEmail} value={email} type="email" name="email" id="email" placeholder="Type Your Email"/>
        <input required onChange={changeName} value={name} name="name" type="text" placeholder="Your Name"/> 
        <input required onChange={changeMessage} name="message" type="text" value={message} placeholder="Send me a message 🥴"/>
        <p>{done}</p>
        <button onClick={sendBot}>Send</button>
    </div>
    
</div>
        </div>
        </>
    )
}