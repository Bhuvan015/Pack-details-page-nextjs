import styled from '@emotion/styled'
import Image from 'next/image'
import TelegramIcon from "../public/telegram.png"
import DiscordIcon from "../public/Discord.png"
import TwitterIcon from "../public/Twitter.png"

interface Props {

}

export const MediaContainer: React.FC<Props> = (props) => {
    return(
        <Container>
            <Link>
                <Div>
                    <Image src = {TelegramIcon} objectFit='cover'/>
                </Div>
                
                <Name>Telegram</Name>
            </Link>

            <Link>  
                <Div>
                    <Image src = {DiscordIcon} objectFit='cover'/>
                </Div>

                <Name>Discord</Name>
            </Link>

            <Link>
                <Div>
                    <Image src = {TwitterIcon} objectFit='cover'/>
                </Div>
                
                <Name>Twitter</Name>

            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Div = styled.div`
    height: 100px;
    width: 100px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        & {
            height: 65px;
            width: 65px;
        }
    }
`

const Link = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0px;


    @media only screen and (max-width: 768px) {
        & {
            width: 90%;
        }
        
    }
`
const Name = styled.p`
    color: #fff;
    padding: 15px 0;
`