import React, { useRef, useState } from "react";
import '../App.css'
import ChatBox from "./component3";


const Header = () => {
    const buttonRef = useRef(null)

    let [multiClicked, setMultiClicked] = useState(false);
    let [button1State, setState] = useState('');
    let [button2State, setState2] = useState('');
    let [button3State, setState3] = useState('');
    let [button4State, setState4] = useState('');
    let [button1Border, setBorder1] = useState('');
    let [button2Border, setBorder2] = useState('');
    let [button3Border, setBorder3] = useState('');
    let [button4Border, setBorder4] = useState('');
    let [button1BorderColor, setBorderColor1] = useState('');
    let [button2BorderColor, setBorderColor2] = useState('');
    let [button3BorderColor, setBorderColor3] = useState('');
    let [button4BorderColor, setBorderColor4] = useState('');


    const handlePtrEnter = (e) => {
        if (e.target.id == 'header-button1'){
            setState((prevState) => {
                return '21px';
            })
            setBorder1((prevState) => {
                return 'groove';
            })
            setBorderColor1((prevState) => {
                return 'grey';
            })
        }
        if (e.target.id == 'header-button2'){
            setState2((prevState) => {
                return '21px';
            })
            setBorder2((prevState) => {
                return 'groove';
            })
            setBorderColor2((prevState) => {
                return 'grey';
            })
        }
        if (e.target.id == 'header-button3'){
            setState3((prevState) => {
                return '21px';
            })
            setBorder3((prevState) => {
                return 'groove';
            })
            setBorderColor3((prevState) => {
                return 'grey';
            })
        }
        if (e.target.id == 'header-button4'){
            setState4((prevState) => {
                return '21px';
            })
            setBorder4((prevState) => {
                return 'groove';
            })
            setBorderColor4((prevState) => {
                return 'grey';
            })
        }
    }

    const handlePtrLeave = (e) => {
        if (e.target.id === 'header-button1'){
            setState((prevState) => {
                return '20px';
            })
            setBorder1((prevState) => {
                return 'none';
            })
            setBorderColor1((prevState) => {
                return 'black';
            })
        }
        if (e.target.id === 'header-button2'){
            setState2((prevState) => {
                return '20px';
            })
            setBorder2((prevState) => {
                return 'none';
            })
            setBorderColor2((prevState) => {
                return 'black';
            })
        }
        if (e.target.id === 'header-button3'){
            setState3((prevState) => {
                return '20px';
            })
            setBorder3((prevState) => {
                return 'none';
            })
            setBorderColor3((prevState) => {
                return 'black';
            })
        }
        if (e.target.id === 'header-button4'){
            setState4((prevState) => {
                return '20px';
            })
            setBorder4((prevState) => {
                return 'none';
            })
            setBorderColor4((prevState) => {
                return 'black';
            })
        }
    }

    let [clicked, setClicked] = useState(false);
    let [content, setContent] = useState("");

    const handleClick = (e) => {
        if (e.target.id === 'header-button1'){
            setContent(() => {
                return 'Home'
            });
        }
        else if (e.target.id === 'header-button2'){
            setContent(() => {return "About"});
        }
        else if (e.target.id === 'header-button3'){
            setContent(() => {return "Contact"});
        }
        else{
            setContent(() => {return "Avatar"});
        }
        if (clicked === true){
            setMultiClicked(true);
        }
        setClicked((prevState) => {
            return true;
        })
    }

    const handleClickOnCross = () => {
        setClicked((prevState) => {
            return false;
        })
        setMultiClicked(false);
    }
    const handleClickHome = () => {
        window.location.reload();
    }
    
    return (
        <>
            <header className='button-container'>
                <div className="back-gradient">
                    <button id="header-button1" style={{fontSize: button1State, borderBottom: button1Border, borderBottomColor: button1BorderColor}} onMouseOver={handlePtrEnter} onMouseOut={handlePtrLeave} onClick={handleClickHome}>
                        Home
                    </button>
                </div>
                <div className="back-gradient">
                    <button id="header-button2" style={{fontSize: button2State, borderBottom: button2Border, borderBottomColor: button2BorderColor}} onMouseOver={handlePtrEnter} onMouseOut={handlePtrLeave} onClick={handleClick}>
                        About
                    </button>
                </div>
                <div className="back-gradient">
                    <button id="header-button3" style={{fontSize: button3State, borderBottom: button3Border, borderBottomColor: button3BorderColor}} onMouseOver={handlePtrEnter} onMouseOut={handlePtrLeave} onClick={handleClick}>
                        Contact
                    </button>
                </div>
                <div className="back-gradient">
                    <button id="header-button4"style={{fontSize: button4State, borderBottom: button4Border, borderBottomColor: button4BorderColor}} onMouseOver={handlePtrEnter} onMouseOut={handlePtrLeave} onClick={handleClick}>
                        Avatar
                    </button>
                </div>
            </header>
            {clicked ? <ChatBox customStyle={{animationName: 'chatAnimation', animationDuration: '2s', animationTimingFunction: 'ease-in'}} clickOnCross={handleClickOnCross} clickedMultipleTimes = {multiClicked} contentText={content}></ChatBox> : <></>}
        </>
    )
}

export default Header;