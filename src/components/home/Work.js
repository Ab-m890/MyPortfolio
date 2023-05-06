import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WorkSection, WorkContainer, Article, ArticleTitle, ArticleBody, ArticleLink, PageTitle } from '../../styles/home/Work'
//mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const Work = () => {
    const navigate = useNavigate()
    return (
        <WorkSection id="work">
            <PageTitle>
                Works
            </PageTitle>
            <WorkContainer>
                <Article mb='3rem'>
                    <ArticleTitle>
                        I build with modern feature.
                    </ArticleTitle>
                    <ArticleBody>
                        Open source
                        projects, web apps
                        and experimentals.
                    </ArticleBody>
                </Article>
                <Article>
                    <ArticleTitle>
                        See My Works
                    </ArticleTitle>
                    <ArticleLink onClick={() => navigate('/works')}>
                        My Works
                        <ArrowForwardIcon style={{marginLeft: '5px'}}/>
                    </ArticleLink>
                </Article>
            </WorkContainer>
        </WorkSection>
    )
}

export default Work