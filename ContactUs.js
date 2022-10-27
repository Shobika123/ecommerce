import React,{useState} from "react";



function ContactUs() {
    const [input, setInput] = useState({
        name:"",
        email:"",
        phone:""
    });

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setInput(prevInput =>{
            return{
            ...prevInput,
            [name]:value}
        })
    }
    const submitHandler = async(event)=>{
        event.preventDefault();
        const formData = {
            name:input.name,
            email:input.email,
            phone:input.phone
        }
        const response = await fetch('https://e-commerce-eeec0-default-rtdb.firebaseio.com/contact.json',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        setInput({
            name:'',
            email:'',
            phone:''
        })
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
          <h2>Contact Us</h2>
          
        <div>
          <label htmlFor="name">Name</label>
          <input name='name' type="text" id="name" onChange={changeHandler}  value={input.name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" id="email"  onChange={changeHandler} value={input.email} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input name='phone' type="number" id="phone"  onChange={changeHandler} value={input.phone} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactUs;