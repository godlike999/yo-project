import React, { Component } from 'react';
import { List } from '$yo-component';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';


class ProjectPage extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }

    componentWillMount(){
        var that = this;
        axios.get('http://baofeizz.online/php/work.php')
            .then(function (response){
                that.setState({
                    dataSource:response.data
                })
            })
    }

    render() {
        return (
            <div className="yo-flex">
                <Header title="我的工作"/>
                <List
                    ref="list"
                    extraClass="flex"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <any className="lst">
                        <div className="flex">
                            <div className="yo-card">
                                <h3 className="hhd">{item.category}</h3>
                            </div>
                            <div className="yo-card">
                                <div className="bd">
	                                <h3>{item.name}</h3>
	                                <p>{item.posts},{item.reportto}</p>
                                </div>
                                <div className="extra">
                                    <img className="img-cover" src={item.url}/>
                                </div>
                            </div>

                            <div className="yo-card">
                                <div className="bd">
                                    <h3 className="title">
                                        {item.projects}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </any>
                    }
                    onItemTap={(item, i, ds) => {
                        yoHistory.push(`/detail/${item.id}`);
                    }}
                />
                <Footer/>
            </div>
        )
    }
}

export default ProjectPage;