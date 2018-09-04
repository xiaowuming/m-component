import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Promise from "promise";

class mComponent extends React.Component {
    constructor(props) {
        super(props);
        this.router = {
            /**
             * 页面跳转
             * @param {{}} Object 
             */
            push: this._routerPush.bind(this),
            /**
             * 获取Query对象
             */
            get: this._routerGetQuery.bind(this)
        };
    }

    /**
     * 页面跳转
     * @param {{}} Object 
     */
    _routerPush({ pathname, query }) {
        let search = [];
        for (const i in query) {
            search.push(i + "=" + query[i]);
        }
        const obj = {
            pathname,
            search: "?" + search.join("&")
        };
        this.props.history.push(obj);
    }

    /**
     * 获取
     */
    _routerGetQuery() {
        const { history } = this.props;
        const { location } = history;
        const { search } = location;
        const obj = search.substr(1, search.length - 1).split("&");
        const query = {};
        for (let i = 0; i < obj.length; i++) {
            const item = obj[i].split("=");
            query[item[0]] = item[1];
        }
        return query;
    }

    /**
     * 设置标题
     * @param {String} title 
     */
    setTitle(title) {
        document.title = title;
    }

    /**
     * Get请求
     * @param {String} url 
     * @param {{}} params 
     */
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    /**
    * Post请求
    * @param {String} url 
    * @param {{}} data 
    */
    Post(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, data)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

}

export { mComponent };

export default withRouter(React);