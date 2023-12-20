import React from 'react'
import SmallLinkImg from '../assets/img/smallLink.png'

const More = (props) => {
    return (
        <section id="more">
            <h2 className="blind">더보기 섹션</h2>
            <div className="more__wrap containerH">
                <div className="more__title secT">
                    <img src={props.arrowImg} alt="화살표이미지" />
                    <h2>More Portfolio</h2>
                    <div className="title__line"></div>
                </div>
                <div className="more__cont">
                    <div className="more__item num1">
                        <div className="title">Movie Quiz Game Using JS</div>
                        <div className="type">Personal Project</div>
                        <div className="stack">React, TmdbAPI</div>
                        <div className="link">
                            <a href="#">
                                <img src={SmallLinkImg} alt="작은링크화살표" />
                            </a>
                        </div>
                        <div className="more__img__wrap">
                            <div className="more__img__inner">
                                <img src="assets/img/quizmoviesite.png" alt="영화퀴즈게임사이트" className="more__img" />
                            </div>
                        </div>
                    </div>
                    <div className="more__item num2">
                        <div className="title">Vite Site</div>
                        <div className="type">Personal Project</div>
                        <div className="stack">Vite.js</div>
                        <div className="link">
                            <a href="#">
                                <img src={SmallLinkImg} alt="작은링크화살표" />
                            </a>
                        </div>
                        <div className="more__img__wrap">
                            <div className="more__img__inner">
                                <img src="assets/img/vitesite.png" alt="vite사이트" className="more__img" />
                            </div>
                        </div>
                    </div>
                    <div className="more__item num3">
                        <div className="title">Web Standard site</div>
                        <div className="type">Personal Project</div>
                        <div className="stack">HTML5, CSS3</div>
                        <div className="link">
                            <a href="#">
                                <img src={SmallLinkImg} alt="작은링크화살표" />
                            </a>
                        </div>
                        <div className="more__img__wrap">
                            <div className="more__img__inner">
                                <img src="assets/img/webstandardsite.png" alt="웹표준사이트" className="more__img" />
                            </div>
                        </div>
                    </div>
                    <div className="more__item num4">
                        <div className="title">Academy Site</div>
                        <div className="type">Personal Project</div>
                        <div className="stack">HTML5, CSS3, JavaScript</div>
                        <div className="link">
                            <a href="#">
                                <img src={SmallLinkImg} alt="작은링크화살표" />
                            </a>
                        </div>
                        <div className="more__img__wrap">
                            <div className="more__img__inner">
                                <img src="assets/img/academysite.png" alt="학원사이트" className="more__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More
