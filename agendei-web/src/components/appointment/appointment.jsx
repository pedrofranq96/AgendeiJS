


function Appointment(props) {
    
   
     const data = new Date(props.bookingDate);

    return (
        <tr>
            <td >{props.user}</td>
            <td >{props.doctor}</td>
            <td >{props.service}</td>
            <td >{props.bookingDate}</td>
            <td>{props.bookingHour}h</td>
            <td  className="text-end">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.price)}</td>
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

export default Appointment;