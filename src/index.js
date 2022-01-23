import React from 'react';
import ReactDOM from 'react-dom';


function AddItemButton(props) {
    return (
    <div>
        <input type="text" placeholder='Item To add' id="item" ></input>
        <button type="button" onClick={props.onClick}>Add Item</button>
    </div>);
}

class List extends React.Component {
    listItem(props) {
        if(this.props.list.length === 0) return;
        var list = [];
        console.log(this.props.list);
        for(var i = 0; i<this.props.list.length; i++){
            list.push(<li key={`item${i}`}>{this.props.list[i]}</li>);
        }
        return <ul>{list}</ul>;
    }

    renderList(props) {
        return this.listItem(props);
    }

    render() {
        //console.log(this.props.list);
        const list = this.listItem();
        return (
            <div className='List'>
                <h1 id="header">List</h1>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array(),
        };
    }

    addItem(){
        const items = this.state.items;
        items.push(document.getElementById('item').value);
        document.getElementById('item').value = "";
        this.setState({
            items: items,
        });
    }

    render() {
        const items = this.state.items;
        //console.log(items);
        return (
            <div className='wrapper'>
                <AddItemButton onClick={() => this.addItem()}/>
                <List list={items}></List>
            </div>
        );
    }
}

ReactDOM.render(
    <Todolist/>,
    document.getElementById('app')
);