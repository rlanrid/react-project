import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Opening from '../components/Opening'
import Intro from '../components/Intro'
import Port from '../components/Port'
import More from '../components/More'
import About from '../components/About'
import Stack from '../components/Stack'
import Contact from '../components/Contact'
import Comment from '../components/Comment'
import Line from '../components/Line'

import ArrowImg from '../assets/img/arrow.png'
import { appear } from '../utils/apper'
import { mouse } from '../utils/mouse'
import Progress from '../components/Progress'
import Canvas from '../components/Canvas'

const HomeView = () => {
    return (
        <>
            <Progress />
            <Header />
            <Canvas />
            <Main>
                <Opening />
                <Intro appear={appear} />
                <Port arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <More arrowImg={ArrowImg} arrowAlt="화살표이미지" mouse={mouse} />
                <About arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Stack arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Contact arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                <Comment arrowImg={ArrowImg} arrowAlt="화살표이미지" />
            </Main>
            <Footer />
            <Line />
        </>
    )
}

export default HomeView
