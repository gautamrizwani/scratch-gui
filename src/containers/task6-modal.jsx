import React from 'react';
import Task6ModalComponent from '../components/task6-modal/webgl-modal.jsx';


class task6Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: false};
      }
      componentWillMount() {
        setTimeout(() => {
            this.setState({isHidden: true})
          }, 30000)
          setTimeout(() => {
            this.setState({isHidden: false})
          }, 40000)
      }
    render () {
        return (
            <>{this.state.isHidden ? <Task6ModalComponent/>: null}</>
        );
    }
}

export default task6Modal;
