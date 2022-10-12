
import profile from './profile.png';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Alex Fish",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Professional Experience",
			link: "#professionalexperience",
		},
		{
			title: "Research",
			link: "#research"
		},
		{
			title: "Education",
			link: "#education",
		},
	],
}
export const intro = {
	title: "Hello, I'm Alex Fish",
	description: "Thanks for visiting my site.",
	image: profile.src,
	buttons: [
		{
			title: "Email",
			link: "mailto:acfishx@gmail.com",
			isPrimary: true,
		},
		{
			title: "CV",
			link: "https://docs.google.com/document/d/1gj8D6jrHCmDC9Thx2e-Kaq9Yt9_-pAKhq8KJMuxFvXc/edit?usp=sharing",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/alex-fish-212981137/",
			isPrimary: true,
		},
		{
			title: "GitHub",
			link: "https://github.com/fishac",
			isPrimary: true,
		},
		{
			title: "Google Scholar",
			link: "https://scholar.google.com/citations?hl=en&user=obr5HzIAAAAJ",
			isPrimary: true,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
		"I am expecting to graduate with a PhD in Applied and Computational Mathematics from Southern Methodist University in May, 2023. My advisor is Daniel Reynolds and I am currently funded by FASTMath SciDAC. My research is focused on adaptivity in multirate numerical IVP-solving methods.",
		"I am passionate about mathematics and software development with experience in industry, academia, and national labs.",
		"I am currently looking for a post-graduation job in computational mathematics, scientific computing, machine learning, and related fields!"
	],
}

export const professionalexperience = {
	title: "Professional Experience",
	cards: [
		{
			title: "Intern, Lawrence-Livermore National Lab",
			description: "In the summer of 2022 I interned with the SUNDIALS team to optimize integrator parameters, in collaboration with the GPTune team.",
			icons: null,
		},
		{
			title: "Software Engineer, Northrop Grumman",
			description: "From May, 2018 to June, 2020, as both intern and full software engineer, I worked with a team in an agile environment to develop software for the US Government.",
			icons: null,
		},
		{
			title: "Intern, InterPublic Group",
			description: "In the summer of 2017 I interned with InterPublic Group, writing user-management scripts and developing tools for their global IT Support.",
			icons: null
		
		}
	],
}

export const research = {
	title: "Research",
	cards: [
		{
			title: "New Family of Numerical IVP-Solving Methods",
			description: "This work is in development.",
			icons: null
		},
		{
			title: "New Numerical IVP-Solving Methods in Existing Families",
			description: "This work is in development.",
			icons: null
		},
		{
			title: "Adaptive Time Step Control for Multirate Infinitesimal Methods",
			description: "Novel time-step controllers specifically designed for multirate infinitesimal numerical IVP-solving methods leveraging techniques from Control Theory. 2022.",
			icons: [
				{
					icon: faLink,
					link: "https://arxiv.org/abs/2202.10484"
				}
			]
		},
		{
			title: "CloneMap",
			description: "An Eclipse IDE plug-in to assist software engineers in managing code clones, similar segments of code within a codebase, across versions of software. 2018.",
			icons: [
				{
					icon: faLink,
					link: "https://ieeexplore.ieee.org/abstract/document/8500143"
				}
			]
		}
	],
}

export const education = {
	title: "Education",
	cards: [
		{
			title: "PhD, Applied and Computational Mathematics",
			description: "Southern Methodist University. Expected May, 2023. Advisor: Daniel Reynolds. Thesis topic: Adaptivity in multirate numerical IVP-solving methods.",
			icons: null
		},
		{
			title: "MS, Applied Mathematics",
			description: "University of Washington. 2020.",
			icons: null
		},
		{
			title: "BS, Mathematics with Computer Science Minor",
			description: "University of Nebraska Omaha. 2019.",
			icons: null
		}
	],
}


// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Alex Fish",
	description: "Computational Mathematician",
	image: "profile.png",
}
