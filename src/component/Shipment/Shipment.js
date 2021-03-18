import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import './Shipment.css'

const Shipment = () => {

    const [greet, setGreet] = useState("")
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, greet) => {
      console.log(data)
      greet = setGreet("thanks for chooing ema john")
    };
  
    console.log(watch("example")); // watch input value by passing the name of it
    
    const [logedInUser, setLogedInUser] = useContext(userContext)

    return (
      <form className="shipForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>please give your proper shipment details</h1>

        <input name="name" defaultValue={logedInUser.name} placeholder="Enter your full name" ref={register({ required: true })} />
        {errors.name && <span style={{color: "red"}}>name field is required</span>}

        <input name="email" defaultValue={logedInUser.email} placeholder="Enter your email" ref={register({ required: true })} />
        {errors.email && <span style={{color: "red"}}>email field is required</span>}

        <input name="address" placeholder="Enter your address" ref={register({ required: true })} />
        {errors.address && <span style={{color: "red"}}>address field is required</span>}

        <input name="number" placeholder="Enter your phone Number" ref={register({ required: true })} />
        {errors.number && <span style={{color: "red"}}>number field is required</span>}
        
        <input type="submit" />
        
        <h4>{greet}</h4>
      </form>
    );
};

export default Shipment;