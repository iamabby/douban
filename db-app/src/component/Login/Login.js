import React from "react";
import "./Login.css";
import axios from "axios";



class Login extends React.Component {
    constructor(){
        super();
        this.state={
            name:"",
            pwd:"",

        }
    }
    savaInfo(e){
      const{
          name,
          pwd,
      }=this.state;
      if(!name){
          console.log("用户名不能为空");
      }
      if(!pwd){
          console.log("密码不能为空");
      }
      axios.get(`/v2/user/abby`)
      .then((response)=>{
          console.log(response);         
      })
      .then((error)=>{
          console.log(error);
      })
    }
    render() {
        return (
            <div className="login_block">
                <input type="text" placeholder="邮箱/手机号/用户名" value={this.state.name} />
                <input type="password" placeholder="密码" value={this.state.pwd} />
                <input type="button" value="确定" className="btn_login" onClick={(e)=>this.savaInfo(e)}/>
            </div>
        )
    }
}
export default Login;