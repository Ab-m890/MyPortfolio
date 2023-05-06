import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CardTitle, CardImage, CardImageBox, CardItem, CardsContainer, PageTitle, PageTitleContainer, WorkMainSection } from '../../styles/work/Work'

//works data
import WorksData from '../../api/work/Work'
const Work = () => {

    const navigate = useNavigate()

    const data = WorksData

    const displayWorks = Object.keys(data).map((item, i) => {
        return (
            <Link to={`/works/${item}`} key={i}>
                <CardItem>
                    <CardImageBox>
                        <CardImage src={WorksData[item].image} alt="image" />
                    </CardImageBox>
                    <CardTitle>
                        {WorksData[item].title}
                    </CardTitle>
                </CardItem>
            </Link>
        )
    })

    return (
        <WorkMainSection>
            <PageTitleContainer>
                <PageTitle>
                    My Works
                </PageTitle>
            </PageTitleContainer>
            <CardsContainer>
                {
                    displayWorks
                }
            </CardsContainer>
        </WorkMainSection>
    )
}

export default Work