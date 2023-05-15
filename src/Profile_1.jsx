import Styled from "styled-components"
import { FaMdOutlineAddHome } from 'react-icons/fa';

const Container = Styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    padding: 64px 0;
`
const InnerContainer = Styled.div`
    width: 1000px;
    height: 200px;
    background: rgba(0, 0, 0, 0.3);
`
const GridContainer = Styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
`
const MainBox = Styled.div`
    background: white;
    height: 500px;
    border-radius: 15px 0 15px 15px;   
`

export default function Profile_1() {
    return (
        <Container>
            {/* 1000픽셀 중앙정렬*/}
            <InnerContainer>
                {/* 그리드 */}
                <GridContainer>
                    {/* 박스 */}
                    <MainBox>
                        <div><h3>임차인입니다</h3></div>
                        <div>
                            <h2>허위매물 제로!</h2>
                            <h3>전수조사 기반 압도적<br />질과 양의 매물로 제공합니다</h3>
                        </div>
                        <div><h4>사무실 구경하기</h4></div>
                    </MainBox>
                    <MainBox>2</MainBox>
                    <MainBox>3</MainBox>
                </GridContainer>
            </InnerContainer>
        </Container>
    )
}