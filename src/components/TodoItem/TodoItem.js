import React, {Component, Fragment} from 'react';

class TodoItem extends Component {

    render(){
        return (
            <Fragment>
                <div className="item">
                <input type="checkbox" checked={this.props.task.done} onChange={this.props.setDone}/>
                {this.props.task.title}
                </div>
            </Fragment>
        )
    }


}

export default TodoItem;