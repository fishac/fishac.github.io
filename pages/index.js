import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { PortfolioProjects, ProfessionalExperience, Research, Education } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, researchlist, SEO, portfolioprojectlist, professionalexperiencelist, educationlist } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
	  <PortfolioProjects portfolioprojectlist={portfolioprojectlist}/>
      <ProfessionalExperience
        professionalexperiencelist={professionalexperiencelist}
      />
      <Research
        researchlist={researchlist}
      />
	  <Education
        educationlist={educationlist}
      />
    </Fragment>
  );
}
