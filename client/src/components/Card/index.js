  
import React from "react"

function Card(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card project-card">
                <img className="img-fluid card-img-top project-img" src={props.image} alt={props.alt}  href={props.live}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href = {props.repo}
                    ><button id="project-one-repo">Repository <i class="fab fa-github"></i></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;
