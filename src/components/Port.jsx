import React from 'react'
import { Link } from 'react-router-dom'
import LinkImg from '../assets/img/link.png'
import { PortImgs } from '../data/img.js'

const Port = (props) => {
    return (
        <section id="port">
            <h2 className="blind">포트폴리오 섹션</h2>
            <div className="port__wrap containerH">
                <div className="port__title secT">
                    <img src={props.arrowImg} alt="화살표이미지" />
                    <h2>Select My PortFolio</h2>
                    <div className="title__line"></div>
                </div>
                <div className="port__cont">
                    <div className="port__item p1">
                        <div className="info">
                            <div className="date">2023</div>
                            <div className="skill">JavaScript</div>
                        </div>
                        <div className="info2">
                            <div className="title">Movie Site Using React</div>
                            <div className="link">
                                <Link to="#"><img src={LinkImg} alt="링크화살표" /></Link>
                            </div>
                        </div>
                        <figure>
                            <img src={PortImgs[0]} alt="포폴이미지1" />
                        </figure>
                    </div>

                    <div className="port__item p2">
                        <div className="info">
                            <div className="date">2023</div>
                            <div className="skill">PHP</div>
                        </div>
                        <div className="info2">
                            <div className="title">TrendDevice Website Using PHP</div>
                            <div className="link">
                                <Link to="#"><img src={LinkImg} alt="링크화살표" /></Link>
                            </div>
                        </div>
                        <figure>
                            <img src={PortImgs[1]} alt="포폴이미지2" />
                        </figure>
                    </div>

                    <div className="port__item p3">
                        <div className="info">
                            <div className="date">2023</div>
                            <div className="skill">React</div>
                        </div>
                        <div className="info2">
                            <div className="title">YouTube Site Using React</div>
                            <div className="link">
                                <Link to="#"><img src={LinkImg} alt="링크화살표" /></Link>
                            </div>
                        </div>
                        <figure>
                            <img src={PortImgs[2]} alt="포폴이미지3" />
                        </figure>
                    </div>

                    <div className="port__item p4">
                        <div className="info">
                            <div className="date">2023</div>
                            <div className="skill">Node.js</div>
                        </div>
                        <div className="info2">
                            <div className="title">PetPar Website Using Node.js</div>
                            <div className="link">
                                <Link to="#"><img src={LinkImg} alt="링크화살표" /></Link>
                            </div>
                        </div>
                        <figure>
                            <img src={PortImgs[3]} alt="포폴이미지4" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Port
