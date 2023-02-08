import './home.css'
import Aos from 'aos'
import { useEffect } from 'react'

export const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return(
        <div className='body'>
            <div className='dywl'>
                <div className='dyw'>
                    <div>
                        <a  data-aos="fade-up"
                            className='d'>D</a>
                        <a  data-aos="fade-down"
                            className='o'>O</a>
                    </div>
                    <div>
                        <a  data-aos="fade-right"
                            className='y'>Y</a>
                        <a  data-aos="fade-left"
                            className='o'>O</a>
                        <a  data-aos="fade-up-right"
                            data-aos-duration="1000"
                            className='u'>U</a>
                    </div>
                    <div>
                        <a  data-aos="fade-up-left"
                            className='w'>W</a>
                        <a  data-aos="fade-down-right"
                            className='a'>A</a>
                        <a  data-aos="fade-down-left"
                            className='n'>N</a>
                        <a  data-aos="flip-left"
                            data-aos-duration="1000"
                            className='t'>T</a>
                    </div>
                </div>
                <div className='learning'>
                    <div>
                        <a  data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                            className='l'>L</a>
                        <a  data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className='e'>E</a>
                        <a  data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            className='a'>A</a>
                        <a  data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className='r'>R</a>
                        <a  data-aos="zoom-in-up"
                            className='n'>N</a>
                        <a  data-aos="zoom-in-down"
                            className='i'>I</a>
                        <a  data-aos="zoom-in-left"
                            className='n'>N</a>
                        <a  data-aos="zoom-in-right"
                            className='g'>G</a>
                    </div>
                        <a  data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            className='as'>?</a>
                </div>
            </div>
            <div className='yes'>
                    <button className='yesa'>YES</button>
            </div>
        </div>
    )
}