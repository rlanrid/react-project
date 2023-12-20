import React from 'react'
import noiseImg from '../assets/img/noise.gif';
import { StackImgs } from '../data/img.js'

const Stack = (props) => {
    return (
        <section id="stack">
            <h2 className="blind">스택 섹션</h2>
            <div className="stack__wrap containerH">
                <div className="stack__title secT">
                    <img src={props.arrowImg} alt="화살표이미지" />
                    <h2>Stack</h2>
                    <div className="title__line"></div>
                </div>
                <div className="stack__cont">
                    <div className="stack__item num1">
                        <div className="stack__icon">
                            <img src={StackImgs[0].src} alt={StackImgs[0].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">HTML5</div>
                            <div className="desc">Front-End Skill</div>
                            <p>
                                웹표준을 준수하여 현대적이고 유연한 웹 개발을 위해 HTML5를 자유롭게 활용할 수 있고, HTML5의 강력한 기능을 활용하여 웹페이지를 보다 효율적이고
                                동적으로 제작할 수 있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="stack__item num2">
                        <div className="stack__icon">
                            <img src={StackImgs[1].src} alt={StackImgs[1].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">CSS3</div>
                            <div className="desc">Front-End Skill</div>
                            <p>모던한 CSS3 속성을 활용하여 반응형 및 아름다운 디자인을 구축하여 웹페이지를 더욱 매력적으로 만들 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num3">
                        <div className="stack__icon">
                            <img src={StackImgs[2].src} alt={StackImgs[2].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">Sass</div>
                            <div className="desc">Front-End Skill</div>
                            <p>복잡한 CSS 작업을 간소화하고 코드를 구조화하기 위해 Sass를 자유롭게 활용하여 효율적인 웹 개발을 구현할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num4">
                        <div className="stack__icon">
                            <img src={StackImgs[3].src} alt={StackImgs[3].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">JavaScript</div>
                            <div className="desc">Front-End Skill</div>
                            <p>JavaScript를 활용하여 동적이고 상호작용적인 웹 애플리케이션을 개발하며, 사용자와의 원활한 상호작용을 실현할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num5">
                        <div className="stack__icon">
                            <img src={StackImgs[4].src} alt={StackImgs[4].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">Jquery</div>
                            <div className="desc">Front-End Skill</div>
                            <p>jQuery를 활용하여 DOM 조작과 이벤트 처리를 간편하게 구현하며, 동적이고 인터랙티브한 웹 페이지를 구축할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num6">
                        <div className="stack__icon">
                            <img src={StackImgs[5].src} alt={StackImgs[5].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">React</div>
                            <div className="desc">Front-End Skill</div>
                            <p>React를 통해 모듈화된 컴포넌트 기반의 UI 개발을 지향하여, 확장 가능하고 유지보수성 높은 웹 애플리케이션을 구현할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num7">
                        <div className="stack__icon">
                            <img src={StackImgs[6].src} alt={StackImgs[6].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">Node.js</div>
                            <div className="desc">Back-End Skill</div>
                            <p>Node.js의 이벤트 기반 아키텍처를 활용하여 효율적인 서버 개발을 지원하며, 빠른 데이터 처리와 실시간 통신을 구현할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num8">
                        <div className="stack__icon">
                            <img src={StackImgs[7].src} alt={StackImgs[7].alt} className="mongoImg icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">mongoDB</div>
                            <div className="desc">Back-End Skill</div>
                            <p>MongoDB의 문서 지향적인 데이터 모델을 활용하여 복잡한 데이터 구조를 유연하게 다루며, 확장성 있는 데이터 관리 솔루션을 제공할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num9">
                        <div className="stack__icon">
                            <img src={StackImgs[8].src} alt={StackImgs[8].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">PHP</div>
                            <div className="desc">Back-End Skill</div>
                            <p>PHP를 활용하여 웹사이트의 동적 콘텐츠를 생성하고 데이터베이스와의 통합을 지원하여 보다 개인화된 사용자 경험을 제공할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num10">
                        <div className="stack__icon">
                            <img src={StackImgs[9].src} alt={StackImgs[9].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">Json</div>
                            <div className="desc">Back-End Skill</div>
                            <p>SON 형식을 이용하여 다양한 플랫폼 간에 데이터를 쉽게 교환하고 처리하여, 웹 개발 프로세스를 간소화하고 표준화할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num11">
                        <div className="stack__icon">
                            <img src={StackImgs[10].src} alt={StackImgs[10].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">VS Code</div>
                            <div className="desc">Editor</div>
                            <p>VS Code의 다양한 확장 기능을 활용하여 더 나은 개발 경험을 제공하고, 사용자 정의 가능한 작업 흐름을 구성할 수 있습니다.</p>
                        </div>
                    </div>

                    <div className="stack__item num12">
                        <div className="stack__icon">
                            <img src={StackImgs[11].src} alt={StackImgs[11].alt} className="icon__img" />
                            <img src={noiseImg} alt="배경노이즈사진" className="noise" />
                        </div>
                        <div className="stack__desc">
                            <div className="title">Figma</div>
                            <div className="desc">Design</div>
                            <p>Figma의 협업 기능과 디자인 시스템을 활용하여 팀원들과의 협업을 강화하고, 다양한 디자인 작업을 효율적으로 수행할 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack
