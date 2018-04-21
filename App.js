import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, StatusBar } from 'react-native';

import App from './src';
import configureStore from './src/configure-store';

class Nipio extends Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}
export default Nipio;

// AppRegistry.registerComponent('Nipio', () => Nipio);
