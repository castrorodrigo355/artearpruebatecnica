import React from 'react'
import '../App.css';

class Ejercicio2 extends React.Component {

  state = {
    page: "",
    users: []
  }

  handleChange(e){
    console.log(this.state.page)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getImages(){
    let page = this.state.page;
    fetch(`https://reqres.in/api/users?page=${page}`)
          .then(res => res.json())
          .then(response => {
              this.setState({
                page: "",
                users: response.data
              })
          })
          .catch(error => console.log(error))
  }

  getUsers(){
    console.log(this.state.users)
  }

  render() {
    return (
      <div>
        <label>Select Page</label>
        <input type="number" min="1" max="4" onChange={this.handleChange.bind(this)} id="page" value={this.state.page} name="page" placeholder="......"></input>
        <button type="button" onClick={() => this.getImages()} className="btn btn-primary">Images</button>
        <div style={{display: "inline"}}>
            {
                this.state.users.map((user, i) => {
                return(
                    <div key={i}>
                    <div className="card" style={{width: "18rem", margin:"10px"}}>
                        <div className="card-header">
                        <h5 className="card-title">{user.id}</h5>
                        </div>
                        <div className="card-body">
                          <img src={user.avatar}></img>
                        </div>
                    </div>
                    </div>
                )
                })
            }  
        </div>
      </div>
    )
  }
}

export default Ejercicio2