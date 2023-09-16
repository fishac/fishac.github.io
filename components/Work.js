import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Research = ({ researchlist }) => {
	return (
		<div id="research" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-secondary fw-bold">Research</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{researchlist.map((value, index) => (
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

const listElementStyle = {
	width: '100%'
}

const titleStyle = {
	margin: '0',
	padding: '0',
	fontSize: 20
}

const bodyStyle = {
	margin: '0',
	padding: '0'
}

export const PortfolioProjects = ({ portfolioprojectlist }) => {
	return (
		<div id="portfolioprojects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Portfolio Projects</h1>
				<div className="px-sm-5">
					{portfolioprojectlist.map((value,index) => (
						<div key={value.key}>
							<p style={titleStyle} className="text-light"><b>{value.title}</b></p>
							<p style={bodyStyle} className="text-light">{value.description} See the <a href={value.github} className="text-light"><b>Github (link)</b></a> or just the <a href={value.report} className="text-light"><b>report (link).</b></a></p>
							<p className="text-light"><b>Keywords:</b> {value.keywords}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const ProfessionalExperience = ({ professionalexperiencelist }) => {
	return (
		<div id="professionalexperience" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">Professional Experience</h1>
				<div className="d-flex flex-row flex-wrap justify-content-left px-sm-5">
					{professionalexperiencelist.map((value,index) => (
						<div key={value.key}>
							<p style={titleStyle} className="text-primary"><b>{value.title}</b></p>
							<p style={bodyStyle}>{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const Education = ({ educationlist }) => {
	return (
		<div id="education" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">Education</h1>
				<div className="d-flex flex-row flex-wrap justify-content-left">
					{educationlist.map((value, index) => (
						<div key={value.key} style={listElementStyle}>
							<p style={titleStyle} className="text-primary"><b>{value.title}</b></p>
							<p style={bodyStyle} className="text-primary">{value.description}</p>
						</div>
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