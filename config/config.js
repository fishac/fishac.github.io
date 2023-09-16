
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
		"I am a mathematician and software engineer always looking to expand my boundaries.",
		"I am currently a Software Engineer 3 at Peraton working on NASA JPSS Command, Control, and Communications Software sustainment.",
		"I earned a PhD in Computional and Applied Mathematics from Southern Methodist University in May, 2023. My thesis topic was in developing novel, efficient algorithms for solving multirate initial-value problems and my advisor was Daniel Reynolds. See my published papers in the Research section below.",
		"My interests include scientific computing, software engineering, machine learning, high-performance and distributed computing, statistical analysis, and more."
	],
}

export const portfolioprojectlist = [
	{
		key: "pooreyesightchess",
		title: "A Chess AI With Poor Eyesight",
		description: "Oh, no! The computer lost its glasses! This chess AI can only recognize the location and color of pieces on board, and was trained with a deep-learning model on a database of millions of games played by real people to be able to guess the correct board state when it makes a move.",
		github: "https://github.com/fishac/PoorEyesightChess",
		report: "https://raw.githubusercontent.com/fishac/PoorEyesightChess/master/PoorEyesightChessReport.pdf",
		keywords: "data mining, feature engineering, classification, class imbalance, deep learning, PyTorch, parameter tuning, ensemble modeling, model deployment, dashboard" 
	},
	{
		key: "multilocationproductforecasting",
		title: "Multi-Location/Multi-Product Demand Forecasting",
		description: "Forecasting demand of a variety of products for branches of a chain store scattered across multiple cities. I evaluated and compared multiple model structures, informed by analysis of the data.",
		github: "https://github.com/fishac/DS-Projects/tree/main/ForecastingMultiregionFoodDemand",
		report: "https://raw.githubusercontent.com/fishac/DS-Projects/main/ForecastingMultiregionFoodDemand/MultiRegionMultiProductDemandForecasting.pdf",
		keywords: "forecasting, regression, time series, auto-regressive (AR) models, XGBoost, ensemble modeling, parameter tuning, feature selection, table joins, dashboard" 
	},
	{
		key: "predictingchesswinner",
		title: "Predicting Chess Game Winner During the Middlegame",
		description: "Predicting the winner of a chess game after turn 20 given the board state and history of the game to that point, trained on millions of games with 25+ turns played.",
		github: "https://github.com/fishac/DS-Projects/tree/main/PredictingChessWinner",
		report: "https://raw.githubusercontent.com/fishac/DS-Projects/main/PredictingChessWinner/PredictingChessWinnerReport.pdf",
		keywords: "data mining, feature engineering, classification, logistic regression, XGBoost" 
	},
	{
		key: "forecastingwindpower",
		title: "Forecasting Wind Power Generation",
		description: "A suite of forecasting models predicting wind-power generation from a single turbine.",
		github: "https://github.com/fishac/DS-Projects/tree/main/ForecastingWindPower",
		report: "https://raw.githubusercontent.com/fishac/DS-Projects/main/ForecastingWindPower/ForecastingWindPowerReport.pdf",
		keywords: "data cleaning, feature selection, forecasting, linear regression, SARIMA, XGBoost"
	}
]

export const professionalexperiencelist = [
	{
		title: "Software Engineer 3, Peraton",
		description: "I've been a Software Engineer on the NASA JPSS Command, Control, and Communications Sustainment team since May, 2023."
	},
	{
		title: "Computing Division Intern, Lawrence Livermore National Lab",
		description: "In the summer of 2022 I interned with the SUNDIALS team to optimize integrator parameters in collaboration with the GPTune optimization library team. My mentor was Cody Balos."
	},
	{
		title: "Software Engineer, Northrop Grumman",
		description: "From May, 2018 to June, 2020, as both intern and full software engineer, I worked with two teams in an agile environment to develop software for the US Government. On one team I implemented algorithms for processing space data, and on the other I developed both front- and back-ends of a web application."
	},
	{
		title: "Intern, InterPublic Group",
		description: "In the summer of 2017 I interned with InterPublic Group, writing user-management scripts and developing tools for their global IT Support."
	}
]

export const researchlist = [
	{
		title: "Implicit-Explicit Multirate Infinitesimal Stage-Restart Methods",
		description: "A flexible, efficient family of methods for numerically solving IVPs with the first adaptivity capability for any class of IMEX MRI methods. 2023.",
		icons: [
			{
				icon: faLink,
				link: "https://www.sciencedirect.com/science/article/pii/S0377042723004788?via%3Dihub"
			}
		],
		key: "methods"
	},
	{
		title: "Adaptive Time Step Control for Multirate Infinitesimal Methods",
		description: "Novel time-step controllers specifically designed for multirate infinitesimal numerical IVP-solving methods leveraging techniques from Control Theory. 2023.",
		icons: [
			{
				icon: faLink,
				link: "https://arxiv.org/abs/2202.10484"
			},
			{
				icon: faLink,
				link: "https://epubs.siam.org/doi/10.1137/22M1479798"
			}
		],
		key: "controller"
	},
	{
		title: "CloneMap",
		description: "An Eclipse IDE plug-in to assist software engineers in managing code clones, similar segments of code within a codebase across versions of the software. 2018.",
		icons: [
			{
				icon: faLink,
				link: "https://ieeexplore.ieee.org/abstract/document/8500143"
			}
		],
		key: "clonemap"
	}
]

export const educationlist = [
	{
		title: "PhD, Applied and Computational Mathematics. ",
		description: "Southern Methodist University. May 2023. Advisor: Daniel Reynolds. Thesis topic: Adaptivity in multirate numerical IVP-solving methods.",
		key: "SMU"
	},
	{
		title: "MS, Applied Mathematics.",
		description: "University of Washington. 2020.",
		key: "UW"
	},
	{
		title: "BS, Mathematics with Computer Science Minor",
		description: "University of Nebraska Omaha. 2019.",
		key: "UNO"
	}
]


// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Alex Fish",
	description: "Computational Mathematician",
	image: "profile.png",
}
