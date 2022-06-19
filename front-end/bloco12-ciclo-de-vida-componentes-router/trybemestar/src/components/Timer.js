import React from 'react';

const ONE_SECOND = 1000;

class Timer extends React.Component {
    state = {
        seconds: 0,
        phases: ['Inspire...', 'Segure...', 'Expire...'],
        phasesIndex: 0,
    }
 

    componentDidMount() {
        console.log('did mount')
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1}));
        }, ONE_SECOND);
    }

    componentDidUpdate() {
        console.log('did update')
        const { seconds } = this.state;
        if (seconds === 6) {
            this.setState({ seconds: 0})
            this.setState((prevState) => ({
                phasesIndex: prevState.phasesIndex < 2 ? prevState.phasesIndex + 1 : 0}))
        }
    }

    componentWillUnmount() {
        console.log('will unmount')
        clearInterval(this.intervalId);
    }
    render() {
        const { seconds, phases, phasesIndex } = this.state
        return (
            <section>
                <h1>{ phases[phasesIndex] }</h1>
                <h2>{seconds}</h2>
            </section>

        )
    }
}

export default Timer;