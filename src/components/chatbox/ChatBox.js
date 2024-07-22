import './ChatBox.css';
import '../../styles/bootstrap.css'

export default function ChatBox () {

    return( 
        
        <div class="container">
            <label className='main-label'>
                    Chat Messages
            </label>
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card chat-app">
                        <div id="plist" class="people-list">
                            
                            <ul class="list-unstyled chat-list mt-2 mb-0">
                                <li class="clearfix">
                                    <img src="https://static.wikia.nocookie.net/loonatheworld/images/7/7a/%2B%2B_Promotional_Picture_Chuu.png/" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">pestosalad</div>
                                        <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                                    </div>
                                </li>
                                <li class="clearfix active">
                                    <img src="https://cdns-images.dzcdn.net/images/cover/067c480cd5c57ed595461994e6264650/1900x1900-000000-80-0-0.jpg" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">daln</div>
                                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li class="clearfix">
                                    <img src="https://i.pinimg.com/236x/61/38/62/6138625fadd1f4a57dc5b1eb773ecf4d.jpg" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">love4tofu</div>
                                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>                                    
                                <li class="clearfix">
                                    <img src="https://i5.walmartimages.ca/images/Enlarge/_41/393/41393.jpg" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">goodnightkir</div>
                                        <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                                    </div>
                                </li>
                                <li class="clearfix">
                                    <img src="https://static.wikia.nocookie.net/saintpirates/images/6/66/Tony_Tony_Chopper.png/" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">jehcka</div>
                                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li class="clearfix">
                                    <img src="https://cdn.mos.cms.futurecdn.net/rQyBPaVKfv6fFDEvUof42P-415-80.png" alt="avatar"/>
                                    <div class="about">
                                        <div class="name">altth3a</div>
                                        <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat">
                            <div class="chat-header clearfix">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            <img src="https://cdns-images.dzcdn.net/images/cover/067c480cd5c57ed595461994e6264650/1900x1900-000000-80-0-0.jpg" alt="avatar"/>
                                        </a>
                                        <div class="chat-about">
                                            <h6 class="m-b-0">daln</h6>
                                            <small>Online</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-history">
                                <ul class="m-b-0">
                                    <li class="clearfix">
                                        <div class="message other-message float-right"> hey, can you send me the mp3 of the beat you used? </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data">
                                            <span class="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div class="message my-message">oh my bad, forgot about that</div>                                    
                                    </li>                               
                                    <li class="clearfix">
                                        <div class="message-data">
                                            <span class="message-data-time">10:13 AM, Today</span>
                                        </div>
                                        <div class="message my-message">give me a sec</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="input-group mb-0">
                                    <input type="text" class="form-control" placeholder="Enter text here..."/>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}