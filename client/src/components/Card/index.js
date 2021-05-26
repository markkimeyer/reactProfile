  
import React from "react"
import './style.css';

function Card(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card project-card">
               <a href={props.live}><img className="img-fluid card-img-top project-img" src={props.image} alt={props.alt}/></a>
                <div className="card-body">
                    <h5 className="card-title" 
                    style={{textDecorationLine: 'underline', textAlign: 'center', fontWeight: 'bold'}}>{props.title}</h5>
                    <br></br>
                    <p className="card-text">{props.description}</p>
                    <br></br>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <a href = {props.repo}><button id="project-one-repo">Repository <i class="fab fa-github"></i></button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
