import React from 'react';
import '../style.css';

document.body.classList = 'bg-gray-800 selection:bg-blue-800 selection:text-white';

let interval;
let number = 20;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: number--,
        };
    };

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                timer: number--,
            });
            // if (this.state.timer === 0) {
            //     clearInterval(interval);
            // }
        }, 1000);
    };

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(interval);
        }
    };

    render() {
        return(
            <p className="text-center text-gray-100 text-base mt-4 animate-pulse shadow-md shadow-slate-900 flex justify-center items-center w-48 py-3 px-7 rounded-lg mx-auto" dir="ltr">{this.state.timer}</p>
        );
    }
}

class App extends React.Component {
    render(){
        return (
            <div className="flex justify-center items-center min-h-screen flex-col">
                <h1 className="text-red-500 mt-5 text-4xl text-center font-bold">تایمر:</h1>
                <Timer />
            </div>
        );
    };
    
};

export default App;