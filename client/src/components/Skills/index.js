import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css"

import html from "../../Images/Icons/html.png"
import css from "../../Images/Icons/CSS.png"
import js from "../../Images/Icons/js.png"
import ajax from "../../Images/Icons/AJAX.png"
import jquery from "../../Images/Icons/jquery.png"
import git from "../../Images/Icons/git.png"
import node from "../../Images/Icons/node.png"
import express from "../../Images/Icons/express.png"
import vscode from "../../Images/Icons/vscode.png"
import mongodb from "../../Images/Icons/mongodb.png"
import mysql from "../../Images/Icons/mysql.png"
import react from "../../Images/Icons/react.png"


function Skills() {
	return (

		
			<Container>
                <header>
				<h2>Technical Skills</h2>
				</header>
				<div className="row topRow">
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={html}
							alt="html"></img>
						<p>HTML5</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={css}
							alt="css"></img>
						<p>CSS</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={js}
							alt="js"></img>
						<p>JavaScript and ES6</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={ajax}
							alt="ajax"></img>
						<p>AJAX/Axios</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={jquery}
							alt="jquery"></img>
						<p>jQuery</p>

					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={git}
							alt="git"></img>
						<p>Git</p>
					</div>
				</div>
				<div className="row rowTwo">
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={node}
							alt="node"></img>
						<p>Node.js</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={express}
							alt="express"></img>
						<p>Express</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={vscode}
							alt="vscode"></img>
						<p>Visual Studio Code</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={mongodb}
							alt="mongodb"></img>
						<p>MongoDB</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={mysql}
							alt="mysql"></img>
						<p>MySQL</p>
					</div>
					<div className="col-sm-2">

						<img className="img img-thumbnail img-fluid icon" src={react}
							alt="react"></img>
						<p>React</p>
					</div>
				</div>
			</Container>

	)
}

export default Skills;
