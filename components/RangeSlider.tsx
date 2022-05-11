import styled from '@emotion/styled'
import SliderImage from '../public/Slider-4x.png'

interface Props {
  max : number,
  val : number,
}

export const RangeSlider: React.FC<Props> = ({max, val}) => { 
    return (
        <Container >
            <Input
            type='range'
            max={max}
            value={val}
            className='slider'
            />

            <FloatingBox>
                <h1>
                    1000 Sold / 5000 Packs
                </h1>
            </FloatingBox>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 5px 15px;
    position: relative;

`
const Input = styled.input`

`

const FloatingBox = styled.div`
    position: absolute;
    color: #000;
    background-color: rgb(230, 230, 230);
    left: 50%;
    padding: 0px 5px;
    transform: translateX(-50%);
    top: 25px;
    border-radius: 2px;

    h1 {
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
    }


    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
        }
        & {
            padding: 0 2px;
        }
    }

`