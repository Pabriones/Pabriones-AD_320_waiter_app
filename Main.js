import React, {Component} from 'react';
import Dish from './Dish'
import Title from './Title'
import Waiter from './waiter'

class Main extends Component {
    render() {
        return( <div>
                   <Title/>
                    <Dish/>
                    <Waiter/>
                    
                 </div>
        )
    }
}

export default Main