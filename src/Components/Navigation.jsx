const Navigation = (props) => {
    console.log(props);
    // props.navigationitems same as below one
    const {navigationitems} = props;
    return (
        <div className="header">
            <ul>
                {
                    navigationitems.map(item =>{
                        return (
                            <li>
                                <a href="#">{item}</a>
                            </li>
                        );
                    })
                }
                
            </ul>
        </div>
    );
}

export default Navigation;