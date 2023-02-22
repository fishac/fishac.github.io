import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Research = ({ title, cards }) => {
	return (
		<div id="research" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							/>
					))}
				</div>
			</div>
		</div>
	);
}

const projecttitlestyle = {
	margin: '0',
	padding: '0',
	fontSize: 20
}

const projectbodystyle = {
	margin: '0',
	padding: '0'
}

export const PortfolioProjects = ({ projects }) => {
	return (
		<div id="portfolioprojects" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">Portfolio Projects</h1>
				<div className="px-sm-5">
					{projects.map((value,index) => (
						<div key={value.key}>
							<p style={projecttitlestyle}><b>{value.title}</b></p>
							<p style={projectbodystyle}>{value.description} See the <a href={value.github}>Github (link)</a> or just the <a href={value.report}>report (link).</a></p>
							<p><b>Keywords:</b> {value.keywords}</p>
						</div>
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const ProfessionalExperience = ({ title, cards }) => {
	return (
		<div id="professionalexperience" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Professional Experience</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Education = ({ title, cards }) => {
	return (
		<div id="education" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							/>
					))}
				</div>
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}