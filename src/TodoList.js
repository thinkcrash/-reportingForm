import React from "react";

// class TodoItem extends React.Component {
//     render() {
//         const { todo } = this.props;
//         return (
//             <div>
//                 {this.state.todoList.map(todo => <li>{todo}</li>)}
//             </div>
//         )
//     }
// }

const TodoItem = ({ todo }) => <li>{todo}</li>

class TodoList extends React.Component {
    state = {
        todoList : ['파이썬 익히기', '장고 익히기'],
        current : ''
    }

    onChange = (e) => {
        const {value } = e.target;
        this.setState({
            current: value
        })
    }

    onKeyDown = (e) => {
        if ( e.keyCode === 13 ){ //keyCode 13 is ENTER KEY
            const { todoList, current} = this.state;
            if ( current.trim().length > 0){
                this.setState({
                    current: '',
                    todoList: [...todoList, current.trim()]
                })
            }
        }
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.todoList.map((todo, index) => 
                        <TodoItem key={index} todo={todo} />)}
                </ul>
                <input 
                    type="text" 
                    value={this.state.current} 
                    onChange={this.onChange} 
                    onKeyDown={this.onKeyDown}
                    placeholder="할일을 입력해 주세요"
                />
                <hr/>
                {JSON.stringify(this.state)}
            </div>
        ) 
    }
}

export default TodoList;