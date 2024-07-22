import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import ChatBox from "../components/chatbox/ChatBox";

import '../styles/index.css'

function CollaboratePage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <ChatBox />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default CollaboratePage;