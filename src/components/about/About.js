import React from 'react'
import { AboutContainer, AboutSection, Article, ArticleBody, ArticleTitle, Image, ImageBox } from '../../styles/about/About'

const About = () => {

  const article = {
    body: `
    i'm a frontend web developer from lebanon working with modern front-end technologies. I can build your Website and transform your design into a responsive web application. I take my work seriously, as well as any criticism on it. I work according to accepted standards or specifications.
    `
  }

  return (
    <AboutSection id="about">
      <AboutContainer>
        <ImageBox>
          <Image src='/images/main.jpg' alt='image' />
        </ImageBox>
        <Article>
          <ArticleTitle>
            About<span>Me</span>
          </ArticleTitle>
          <ArticleBody>
            {article.body}
          </ArticleBody>
        </Article>
      </AboutContainer>
    </AboutSection>
  )
}

export default About