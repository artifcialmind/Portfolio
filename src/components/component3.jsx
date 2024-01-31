import React, { useEffect, useState } from "react";
import cross from '../assets/cross.png'
import api from "./crossAPI"
import '../App.css'


// const getResponse = async (query) => {
//     const response = await api.get(`/response?query=${query}`);
//     console.log(response);
//     return response;
// }

const getGmailLink = (emailAddress, subject, body) => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

}

function detectTextType(inputText) {
    let jsx = []

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  
    const urlRegex = /(?:https?|ftp):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+/g;

    const emails = inputText.match(emailRegex) || [];
  
    const urls = inputText.match(urlRegex) || [];

    let normalText = '';

    if (emails.length > 0 || urls.length > 0) {
        normalText = inputText.replace(emailRegex, '[E]').replace(urlRegex, '[U]').trim();
    }
    else {
      normalText = inputText.trim();
    }
    let normalSentence = '', i = 0;
    let e1 = 0, u1 = 0;
    while (i < normalText.length){
        if (normalText[i] === '[' && i + 2 < normalText.length && normalText[i + 1] === 'E'){
            jsx.push(<p>{normalSentence}</p>);
            normalSentence = '';
            if (e1 < emails.length){
                let gmailLink = getGmailLink(emails[e1], "Query", '');
                jsx.push(<a href={gmailLink} target="_blank" rel="noopener noreferrer">{emails[e1]}</a>);
                e1++;
            }
            i += 3;
        }
        else if (normalText[i] === '[' && i + 2 < normalText.length && normalText[i + 1] === 'U'){
            jsx.push(<p>{normalSentence}</p>);
            normalSentence = '';
            if (u1 < urls.length){
                jsx.push(<a href={urls[u1]} target={"_blank"}>{urls[u1]}</a>);
                u1++;
            }
            i += 3;
        }
        else{
            normalSentence += normalText[i];
            i += 1;
        }
    }
    if (normalSentence.length > 0){
        jsx.push(<p>{normalSentence}</p>)
    }
    console.log(normalText, emails, urls);
    return jsx;
}
  

const ChatBox = (props) => {
    let [responseAI, setResponseAI] = useState("Typing...");
    let [sendStyle, setSendStyle] = useState('');
    let [queryToAsk, setQueryToAsk] = useState('');
    let [clickedAsk, setClickedAsk] = useState(false);
    let [contentButton, setContentButton] = useState("Ask");
    let [valTextArea, setValTextArea] = useState("");
    let [currentLength, setCurrentLength] = useState(0);


    
    useEffect(() => {
        setResponseAI((prevState) => {
            return "Typing..."
        })
        const resp = api.get(`/response?query=${props.contentText}`);
        resp.then((result) => {
            setResponseAI(detectTextType(result.data));
        })

    }, [props.contentText])

    const handleMouseEnterSend = (e) => {
        setSendStyle((prevState) => {
            return 'solid 2px blue';
        })
    }

    const handleMouseLeaveSend = (e) => {
        setSendStyle((prevState) => {
            return 'solid 1px black';
        })
    }

    const handleClosingChatWindow = () => {
        props.clickOnCross();
    }

    const handleClick = (e) => {
        if (queryToAsk.length > 0){ 
            setResponseAI("Typing...");
            setClickedAsk(true);
            setContentButton("Umm..");
            setQueryToAsk('');
            setValTextArea('');
            setCurrentLength(0);
            // console.log(queryToAsk);
            const resp = api.get(`/response?query=${queryToAsk}`);
            
            resp.then((result) => {
                let jsxTransformed = detectTextType(result.data);
                setResponseAI(jsxTransformed);
                setClickedAsk(false);
                setContentButton("Ask");
            })
        }
    }

    const textAreaEnter = (e) => {
        e.preventDefault();
        setQueryToAsk((prevState) => {
            if (e.nativeEvent.data === null){
                if (prevState.length > 0){
                    return prevState.slice(0, prevState.length - 1);
                }
                else{
                    return '';
                }
            }else{
                return prevState + e.nativeEvent.data;
            }
        })
        setValTextArea((prevState) => {
            if (e.nativeEvent.data === null){
                if (prevState.length > 0){
                    return prevState.slice(0, prevState.length - 1);
                }
                else{
                    return '';
                }
            }else{
                return prevState + e.nativeEvent.data;
            }
        })
        setCurrentLength((prevState) => {
            if (e.nativeEvent.data === null){
                if (prevState > 0){
                    return prevState - 1;
                }
                else{
                    return 0;
                }
            }else{
                return prevState + 1;
            }
        })
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            handleClick();
        }
    }
    
    if (props.clickedMultipleTimes){
        return (
            <>
                <div id='chat'>
                    <div id="ai">
                        <div id='close-chat'>
                            <img id='close-chat-heading' src={cross} onClick={handleClosingChatWindow}></img>
                        </div>
                        <div id="ai-response">{responseAI}</div>
                    </div>
                    <div disabled id='user'>
                        <textarea id={'text-area'} placeholder="Enter your query Here" disabled = {clickedAsk ? true: false} maxLength={50} onChange={textAreaEnter} value={valTextArea} onKeyDown={handleKeyPress}></textarea>
                        <p style={{color: 'grey', alignSelf: "flex-end"}}>{currentLength}/50</p>
                        <div>
                            <button id='send-button' style={{border: sendStyle}} onMouseEnter={handleMouseEnterSend} onMouseLeave={handleMouseLeaveSend} onClick={handleClick} disabled= {clickedAsk ? true: false}><p>{contentButton}</p></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div id='chat' style={props.customStyle}>
                    <div id="ai">
                        <div id='close-chat'>
                            <img id='close-chat-heading' src={cross} onClick={handleClosingChatWindow}></img>
                        </div>
                        <div id="ai-response">{responseAI}</div>
                    </div>
                    <div disabled id='user'>
                        <textarea id={'text-area'} placeholder="Enter your query Here" onChange={textAreaEnter} disabled = {clickedAsk ? true: false} maxLength={50} value={valTextArea} onKeyDown={handleKeyPress}></textarea>
                        <p style={{color: 'grey', alignSelf: "flex-end"}}>{currentLength}/50</p>
                        <div>
                            <button id='send-button' style={{border: sendStyle}} onMouseEnter={handleMouseEnterSend} onMouseLeave={handleMouseLeaveSend} onClick={handleClick} disabled = {clickedAsk ? true: false}><p>{contentButton}</p></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ChatBox;
