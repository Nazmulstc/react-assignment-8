import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'


const Doctor = (props) => {
    console.log(props);
    const { Id, Name, Skills, Specialist, Url, Appointment } = props.doctor
    const cardIcon = <FontAwesomeIcon icon={faShoppingCart} /
    >
    return (
        <div className="doctor">
            <img className="doctor-img" src={Url} alt="" />
            <h2 className="doctor-name">Name: {Name}</h2>
            <p>{Skills}</p>
            <p>{Specialist}</p>
            <p className="price">Appointment Price: {Appointment} Tk</p>
            <button
                onClick={() => props.handleAddToCart(props.doctor)}
                className="btn"
            >{cardIcon} Appointment Now</button>

        </div>
    );
};

export default Doctor;