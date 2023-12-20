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

const HomeView = () => {
    return (
        <>
            <Header />
            <Main>
                <Opening />
                <Intro />
                <Port arrowImg={ArrowImg} />
                <More arrowImg={ArrowImg} />
                <About arrowImg={ArrowImg} />
                <Stack arrowImg={ArrowImg} />
                <Contact arrowImg={ArrowImg} />
                <Comment arrowImg={ArrowImg} />
            </Main>
            <Footer />
            <Line />
        </>
    )
}

export default HomeView
