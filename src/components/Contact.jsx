import React from 'react'

const Contact = (props) => {
    return (
        <section id="contact">
            <h2 className="blind">연락 섹션</h2>
            <div className="contact__line__ver">
                <div className="container">
                    <div className="contact__ver__wrap">
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                        <div className="vertical__line gradient"></div>
                    </div>
                </div>
            </div>
            <div className="contact__line__horiz">
                <div className="container">
                    <div className="contact__horiz__wrap">
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                        <div className="horizon__line gradient"></div>
                    </div>
                </div>
            </div>
            <div className="contact__wrap containerH">
                <div className="contact__title secT">
                    <img src={props.arrowImg} alt="화살표이미지" />
                    <h2>Contact</h2>
                    <div className="title__line"></div>
                </div>
                <div className="contact__cont">
                    <div className="light"></div>
                    <div className="hello">Say Hello</div>
                    <div className="email">rladnrider77@gmail.com</div>
                </div>
            </div>
        </section>
    )
}

export default Contact
