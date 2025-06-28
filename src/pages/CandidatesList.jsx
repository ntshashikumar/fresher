import { useState } from "react";

const CandidatesList = (props) =>{
    const {candidatesList} = props;

    const [candidates,setCandidate] = useState(candidatesList);

    return(
        <div className="candidates-list">
            <ul className="candidates">
                {
                    candidates.map(candidate => {
                        return(
                            <li className="candidate">
                                <div className="content">
                                    <img src="images/candidate.jpeg" alt="candidates profile picture"></img>
                                    <div className="details">
                                        <div>{candidate.name}</div>
                                        <div>{candidate.college}</div>
                                        <div>{candidate.branch}</div>
                                    </div>
                                </div>
                                <button>View Details</button>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default CandidatesList;