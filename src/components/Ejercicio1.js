import React from 'react'
import '../App.css';

class Ejercicio1 extends React.Component {

    state = {
        totalPages: null,
        totalUsers: null,
        users : []
    }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(response => {
            this.setState({
                totalPages: response.total_pages,
                totalUsers: response.per_page * response.total_pages
            })
        })
        .catch(error => console.log(error))
    }

    getUsers(){
        const pages = this.state.totalPages;
        for(let i = 1; i <= pages; i++){
        fetch(`https://reqres.in/api/users?page=${i}`)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    users : this.state.users.concat(response.data)
                })
            })
            .catch(error => console.log(error))
        }
    }

    getLengthFullName(user){
        const fn = user.first_name.length
        const ln = user.last_name.length
        return fn + ln
    }

    total12(){
        if(this.state.users.length !== 0){
        var cant12 = 0;
        this.state.users.forEach(user => {
            if(this.getLengthFullName(user) > 12){
                cant12 = cant12 + 1
            }
        });
            console.log(`En total hay ${cant12} personas con mas de 12 letras.`)
            var porcentaje = (parseFloat(cant12) / parseFloat(this.state.users.length)) * 100
            console.log(`En total hay un ${porcentaje} %.`)
            }else{
                alert("Aun no posee usuarios para evaluar")
            }
    }

  render() {
    return(
      <div className="container">
        <button type="button" onClick={() => this.getUsers()} className="btn btn-primary">Ej 1 (Get Users)</button>
        <button onClick={() => this.total12()} className="badge badge-pill badge-danger">Total Names 12</button>
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
                        <h6 className="card-subtitle mb-2 text-muted">{user.first_name} - {user.last_name}</h6>
                        </div>
                        <div className="card-footer">
                        <button onClick={() => this.getLengthFullName(user)} className="badge badge-pill badge-danger">Length full name</button>
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

export default Ejercicio1