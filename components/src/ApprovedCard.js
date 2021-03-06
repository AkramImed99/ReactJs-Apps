import React from 'react';



const ApprovedCard = (props) => {
    console.log(props.children)
;    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
                <div>
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>

                    </div>
                </div>
             
        </div>
    )

};

export default ApprovedCard;