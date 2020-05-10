import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import headerImage from './images/covid-header-image.png';

class App extends React.Component{
    
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){        
         const data = await fetchData(); // with null argument

         this.setState({ data });
    }

    handleCountryChange = async (country) => {

        // fetch data
        const data = await fetchData(country); // with country as argument

        //console.log(data);
        // set state
        this.setState({data, country});
    }

    render(){
        const {data, country} = this.state;

        return(
            <div className = { styles.container }>
                <img className={styles.image} src={headerImage} alt="COVID-19"/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;