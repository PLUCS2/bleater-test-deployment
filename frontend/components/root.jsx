import React from 'react'; 
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom'; 
import App from './app'; 

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

//By wrapping everything in HashRouter we get a # in our URL 
//this # prevents full page refreshes, everything past the # the browser "ignores"
//there are other routers beyond HashRouter (read browser router docs if you have free time/are interested)

export default Root; 