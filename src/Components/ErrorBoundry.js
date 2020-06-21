import React , {Component } from 'react';


class  ErrorBoundry extends Component {
    constructor(){
        super();
        this.state={
            hasError :false
        }
    }

    componentDidCatch(){
        this.setState({hasError:true});
    }

    render(){

        if(this.state.error){
        return <h1>ooops!! something went wrong.</h1>
        }

      return  this.props.children
        }


}


export default ErrorBoundry;
