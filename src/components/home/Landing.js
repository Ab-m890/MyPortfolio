import React from 'react'

//framer motion
import { motion } from 'framer-motion'
import { ArticleBox, Article, ArticleTitle, ArticleBody, LandingContainer, LandingSection, ImageBox, Image } from '../../styles/home/Landing'

const Landing = () => {

    const article = {
        title: 'Frontend Developer',
        body: 'I like to craft solid and scalable frontend products with great user experiences.',
    }

    return (
        <LandingSection id="landing">
            <LandingContainer>
                <ArticleBox>
                    <Article>
                        <ArticleTitle>
                            {
                                article.title.split('').map((char, i) => {
                                    return (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.05, delay: i * 0.05 }}
                                            key={i}
                                        >
                                            {char}
                                        </motion.span>
                                    )
                                })
                            }
                        </ArticleTitle>
                        <ArticleBody>
                            {
                                article.body.split('').map((char, i) => {
                                    return (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.02, delay: article.title.length * 0.05 + i * 0.02 }}
                                            key={i}
                                        >
                                            {char}
                                        </motion.span>
                                    )
                                })
                            }
                        </ArticleBody>
                    </Article>
                </ArticleBox>
                <ImageBox>
                    <motion.div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        initial={{ rotate: 35 }}
                        animate={{ rotate: 0 }}
                        transition={{ type: 'spring', duration: 1, stiffness: 200 }}
                    >
                        <Image src='/images/main.jpg' alt='My Image' />
                    </motion.div>
                </ImageBox>
            </LandingContainer>
        </LandingSection>
    )
}

export default Landing