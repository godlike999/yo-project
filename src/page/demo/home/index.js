import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Carousel from 'yo3/component/carousel';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';


class HomePage extends Component {
    render() {
        return (
            <div className="yo-flex">
                <Header title="首页" left={false} />
                <Scroller extraClass="flex">
                    <div className="m-content">
                        <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                            <div>
                                <p className="title">Hello World!</p>
                                <Carousel>
                                    <li className="item"><img className="img" src="http://img7.ph.126.net/e9RD4hshTKggMMnLoyzkWQ==/2881177861627391097.jpg" /></li>  
                                    <li className="item"><img className="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493812063&di=d497dc3b6518799b79d5c6344bcf9244&imgtype=jpg&er=1&src=http%3A%2F%2Faladdnet.b0.upaiyun.com%2F2014%2F4%2F1%2F351.jpg" /></li>  
                                    <li className="item"><img className="img" src="http://img7.ph.126.net/e9RD4hshTKggMMnLoyzkWQ==/2881177861627391097.jpg" /></li>  
                                </Carousel>
                                <p className="intro">&nbsp;&nbsp;&nbsp;&nbsp;我是一个自信而又有能力的前端应用开发工程师，我有两年的工作经验，做过大量的项目，熟悉移动端，app，和微信小程序的开发，拥有很强的学习能力</p>
                            </div>
                        </Touchable>
                    </div>
                </Scroller>

                <Footer/>
            </div>
        )
    }
}

export default HomePage;
