import React, { Component } from 'react';
import axios from 'axios'
import { DatePicker } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.getDate();
    }

    // 测试axios请求数据
    getDate = () => {
        const url = "https://lengyuexin.github.io/json/app.json";
        axios.get(url)
            .then((res) => {
                console.log("res",res)
            })
    }

    render() { 
        return ( 
            <div>
                home page
                <DatePicker />
            </div>
         );
    }
}
 
export default Home;