import styled from '@emotion/styled'
import Image from 'next/image'
import FooterLogoImg from '../public/Footer-Logo.png'

interface Props {

}

export const RightFooter: React.FC<Props> = (props) => {
    let footerLogoHeight = 75;
    let footerLogoWidth = 75;
    return(
        <Container>
            <LinksContainer>
                <a href="">Blogs</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Help</a>
                <a href="">Press</a>
                <a href="">Help</a>
                <a href="">Newsletters</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">Youtube</a>
                <a href="">Facebook</a>
                <a href="">Twitch</a>
            </LinksContainer>

            <FooterImg>
                <Image src={FooterLogoImg} objectFit="contain" height={footerLogoHeight} width={footerLogoWidth}/>
            </FooterImg>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        & {
            width: 100%;
        }
    }
`

const LinksContainer = styled.div`
    height: 50%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-right: 1px solid rgb(206, 200, 200);

    a {
        color: #000;
        text-decoration: none;
        font-size: 12px;
        margin: 10px;
        opacity: 0.5;
    }

    @media only screen and (max-width: 768px) {
        a {
            font-size: 8px;
            margin: 5px;
        }
    }


    @media only screen and (max-width: 1300px) {
        a {
            font-size: 10px;
            margin: 8px;
        }
    }

    @media only screen and (max-width: 400px) {
        & {
            width: 90%;
            margin-top: 20px;
            border: none;
            height: 30%;
        }
    }
`

const FooterImg = styled.div`
    height: 50%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1300px) {
        & {
            height: 50%;
            width: 30%;
        }
    }
`