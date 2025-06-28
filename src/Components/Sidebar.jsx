const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="filters">
                <label>Colleges</label>
                <ul>
                    <li>
                        <input type="checkbox" />UBDT
                    </li>
                    <li>
                        <input type="checkbox" />SIT
                    </li>
                    <li>
                        <input type="checkbox" />GMIT
                    </li>
                    <li>
                        <input type="checkbox" />STJIT
                    </li>
                </ul>
            </div>
            <div className="filters">
                <label>Branches</label>
                <ul>
                    <li>
                        <input type="checkbox" />CSE
                    </li>
                    <li>
                        <input type="checkbox" />ISE
                    </li>
                    <li>
                        <input type="checkbox" />ECE
                    </li>
                    <li>
                        <input type="checkbox" />AIML
                    </li>
                </ul>
            </div>
            <div className="filters">
                <label>City</label>
                <ul>
                    <li>
                        <input type="checkbox" />Davangere
                    </li>
                    <li>
                        <input type="checkbox" />Tumkur 
                    </li>
                    <li>
                        <input type="checkbox" />Bangalore
                    </li>
                    <li>
                        <input type="checkbox" />Mysore
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;