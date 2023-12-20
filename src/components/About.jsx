import React from 'react'
import RightArrowImg from '../assets/img/rightArrow.png'
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <section id="about">
            <h2 className="blind">자기소개 섹션</h2>
            <div className="about__wrap containerH">
                <div className="about__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>About</h2>
                    <div className="title__line"></div>
                </div>
                <div className="about__cont">
                    <div className="about__left">
                        <div className="about__intro">
                            {/* <!-- Hello, I'm Woojoo, a frontend developer<br />
                                passionate about crafting engaging digital<br />
                                    experiences. I specialize in translating ideas<br />
                                        into interactive and visually appealing<br />
                        designs. --> */}
                            안녕하세요, 신입 프론트엔드 개발자 우주입니다!<br />
                            코딩에 대해 관심이 있던 와중에 웹 개발에<br />
                            관심이 생겨서 프론트엔드의 꿈을 가지게 되었습니다.<br />
                            웹 개발을 통해 사람들의 삶을 더 편리하고 흥미롭게 <br />
                            만들 수 있는 기회를 찾고 있습니다.

                        </div>
                        <div className="about__link">
                            <Link to="/">
                                <p>About me</p>
                                <img src={RightArrowImg} alt="오른쪽화살표" />
                            </Link>
                        </div>
                    </div>
                    <div className="about__right">
                        <figure>
                            <img src="assets/img/noise.gif" alt="노이즈배경이미지" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
