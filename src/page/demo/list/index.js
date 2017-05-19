import React, { Component } from 'react';
import { List } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';

import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';


class Detail extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }

    componentWillMount(){
        var that = this;
        axios.get('http://baofeizz.online/php/skill.php')
          .then(function (response) {
            that.setState({
                dataSource:response.data
            })

            
          })
    }

    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }

    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }


    render() {

        return (
            <div className="yo-flex">
                <Header title="列表页" right={{ title: '点我', onTap: () => scan() }} />
                <List
                    ref="list"
                    extraClass="flex"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <any className="lst">
                        <div className="flex">
                            <div className="f-left"><img src={item.url}/></div>
                            <div className="f-right">
                                <h4>{item.category}</h4>
                                <p>{item.name}</p>
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

let guid = -1;

function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function getRandomList(size) {
    return getArrayByLength(size).fill(1).map(num => parseInt(Math.random() * 100));
}

function getRandomDataSource(size) {
    return getRandomList(size).map(num => ({ text: num, key: ++guid }));
}

function scan(){
     document.addEventListener( "plusready", onPlusReady, false );
        function onPlusReady() {
          var e = document.getElementById("scan");
          e.removeAttribute( "disabled" );
        }
        function scanImg() {
            plus.barcode.scan( '_www/barcode.png', function (type,result) {
                alert( "Scan success:("+type+")"+result );
            }, function (error) {
                alert( error.message );
            } );
        }
}

export default Detail;
