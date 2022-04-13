import pic from "./images/sheile.jpg";
import pik1 from "./images/pik1.jpg"
import pik2 from "./images/pik2.jpg"
import pik3 from "./images/pik3.jpg"
import pik4 from "./images/pik4.jpg"
import pik5 from "./images/pik5.jpg"
import pik6 from "./images/pik6.jpg"
import pik7 from "./images/pik7.jpg"
import pik8 from "./images/pik8.jpg"

function Days() {
    return (
        <>
        <div className="days">
            <div className="dayboard">
                <div className="dayName">WED <br/><k className="month">Jul</k></div>
                <div className="monthDate">30</div>
            </div>
            
        <Notes text="New task assignment to you" pick={pik1}/>
        <Notes text="New feedback received from Task Name" pick={pik2}/>
        <Notes text="Task marked completed by you"  pick={pik3}/>
        <Notes text="Task Name updated for journey Journey Name" pick={pik4}/>
        <Notes text="Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ" pick={pik5}/>
        </div>
        
      <hr className='horiRay'/>
      <div className="days">
            
            <div className="dayboard">
                <div className="dayName">THU <br/><k className="month">Jul</k></div>
                <div className="monthDate dimcolor">30</div>
            </div>
            
        <Notes text="Meeting with Bobby Charlie" pick={pik6}/>
        <Notes text="Chat about Design Mentorship" pick={pik7}/>
        <Notes text="Critical delay observed in time line adherence" pick={pik8}/>
        <Notes text="Finish project documentation for review (1-1 checkin)" pick={pik1}/>
        </div>
        </>
    );
}


function Notes(props) {
    return (
        <div className="notes">
            <div className="time">11:30 AM</div>
            <div className="typeImage">
                <img className="logopng" src={props.pick} />
            </div>
            <div className="messageBox">
                <div className="messageText"><strong>{props.text}</strong></div>
                <div className="messageSender">
                    <div className="senderImage">
                        <img src={pic} />
                    </div>
                    <div className="senderName">Sheila O'Riley</div>
                </div>
            </div>
        </div>
    );
}


function Super(props) {
    return (
        <>
            <Days />
        </>
    );
}

export default Super;