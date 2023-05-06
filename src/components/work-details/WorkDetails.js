import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'

//data
import WorksData from '../../api/work/Work'
import { ImageBox, Image, Title, TitleBox, WorkDetailsMainSection, ButtonLink, ButtonLinkBox, ToolsList, ToolsItem, WorkDetailsContainer , Description} from '../../styles/work-details/WorkDetails'

//color
import { MainColor, MainTextColor } from '../../variable/Color'

const WorkDetails = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const details = WorksData[id]

    if (!details) {
        navigate('/404')
    }

    return (
        <WorkDetailsMainSection>
            <WorkDetailsContainer>
                <ImageBox>
                    <Image src={details.image} alt="image" />
                </ImageBox>
                <TitleBox>
                    <Title>
                        Site name : {details.title}
                    </Title>
                </TitleBox>
                <ButtonLinkBox>
                    <ButtonLink color={MainTextColor} bgColor={MainColor} onClick={() => window.open(`http://${details.link}`)}>
                        Live View
                    </ButtonLink>
                </ButtonLinkBox>
                <ButtonLinkBox>
                    <ButtonLink color={MainColor} bgColor={MainTextColor} onClick={() => window.open(`http://${details.github}`)}>
                        Github
                    </ButtonLink>
                </ButtonLinkBox>
                <TitleBox>
                    <Title>
                        Tools Used
                    </Title>
                </TitleBox>
                <ToolsList>
                    {
                        details.tools.map((item, i) => (
                            <ToolsItem key={i}>
                                {item}
                            </ToolsItem>
                        ))
                    }
                </ToolsList>
                <TitleBox>
                    <Title>
                        Description
                    </Title>
                </TitleBox>
                <Description>
                    {details.description}
                </Description>
            </WorkDetailsContainer>
        </WorkDetailsMainSection>
    )
}

export default WorkDetails