



function Doctor(props) {
    
    const iconSrc = props.icon === "M" ? "./male.png" : "./female.png";



    return (
        <tr>
            <td><img className="icon" src={iconSrc} alt="Doctor icon" /></td>
            <td >{props.name}</td>
            <td >{props.specialty}</td>
            <td className="text-end">
                <div className="d-inline me-1">
                    <button onClick={() =>props.clickEdit(props.id_appointment)} className="btn btn-sm btn-warning me-1">
                        <i className="bi bi-pencil-square"/>
                    </button>
                    <button onClick={() =>props.clickDelete(props.id_appointment)} className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"/>
                    </button>
                </div>
            </td>
        </tr>       
    )
}

export default Doctor;