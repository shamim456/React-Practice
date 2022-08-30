import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : "john",
            lastName : "doe",
            textArea : "I am",
            email : "",
            password: "",
            subject: "React",
            checkbox: false,
            gender: "Male",
            gender2: "Female"
        }
    }

    handelChange = (e) => {
        if(e.target.name === "fName") {
            this.setState({
                firstName : e.target.value, 
            })
        } else if(e.target.name === "lName") {
            this.setState({
                lastName : e.target.value, 
            })
        }else if(e.target.name === "textArea") {
            this.setState({
                textArea : e.target.value, 
            })
        }else if(e.target.name === "email") {
            this.setState({
                email : e.target.value, 
            })
        }
        else if(e.target.name === "password") {
            this.setState({
                password : e.target.value, 
            })
        }else if(e.target.name === "select") {
            this.setState({
                subject : e.target.value, 
            })
        }else if(e.target.name === "checkbox") {
            this.setState({
                checkbox : e.target.checked, 
            })
        }else if (e.target.name === "gender") {
            this.setState({
                gender: e.target.value,
                
            })
        }else if (e.target.name === "gender2") {
            this.setState({
                gender2: e.target.value,
                
            })
        }
    }

    submitHandeler = (e) => {
        const {firstName, lastName, textArea, email, password, subject, checkbox} = this.state;
        e.preventDefault()
        console.log(firstName, lastName, textArea, email, password, subject, checkbox)

    }

    resetHandeler = (e) => {
        // const {firstName, lastName, email, password, dippertment, check, gender} = this.state;
        this.setState({
            firstName: "javaScript", 
            lastName: "React" ,
            email: "",
            password: "",
            dippertment: "eee",
            check: false,
            gender: "gender",
            comment: ""
        })
       
    }
    
    render() {
        const {firstName, lastName, textArea, email, password, subject, checkbox} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandeler} onReset={this.resetHandeler}>
                    <label >First Name :</label> <input type="text" name="fName" id="fName" placeholder="First Name" value={firstName} onChange = {this.handelChange}/>

                    <label >Last Name :</label> <input type="text" name="lName" id="lName" placeholder="Last Name" value={lastName} onChange = {this.handelChange}/>

                    <label >Email :</label> <input type="email" name="email" id="email" placeholder="Emtet Your Email" value={email} onChange = {this.handelChange}/>

                    <label >Password :</label> <input type="password" name="password" id="password" placeholder="Emtet Your Password" value={password } onChange = {this.handelChange}/> 

                    {/* <label for="DOB">Date Of Birth : </label> <input type="date" name="DOB"  id="DOB"></input> */}

                    {/* <div>
                        <label>Gender : </label>
                        <input type="radio" name="gender" id="male" value="male"  onChange = 
                        {this.ChangeHandeler} /> Male

                        <input type="radio" name="gender2" id="female" value= "female"  onChange = 
                        {this.ChangeHandeler} /> Female
                    </div>  */}

                    
                        <label >Subject : </label>
                        <select value={subject} name= "select" onChange = {this.handelChange}>
                            <option  value="React" > React </option>
                            <option  value="Angular"> Angular </option>
                        </select>
                    

                    <input type="checkbox" name="checkbox" checked={checkbox} onChange = {this.handelChange}/>

                    <textarea type = "text" name= "textArea" id="textArea" value={textArea} onChange = {this.handelChange}/>

                    <input type="submit" value="regestered" />
                    <input type="reset" />
                </form> 
            </div>
        )
            
        }
}

export default Form;