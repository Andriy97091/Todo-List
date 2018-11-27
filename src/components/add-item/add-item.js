import React, { Component } from 'react';
import './add-item.css';

export  default class AddItem extends Component  {

    state = {
      label: ''
    };

    onLabelChange = (e) => {
      this.setState({
         label: e.target.value
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        if(label !== '') {
            this.setState({ label: '' });
            const cb = this.props.onAddItem || (() => {});
            cb(label);
        } else {
            alert('Write Item!');
        }
    };

    render() {

        return (
            <form className="input-group d-flex"
                  onSubmit={this.onSubmit}>

                <input
                    type="text"
                    className="form-control add-input"
                    value={this.state.label}
                    placeholder="Write Item"
                    onChange={this.onLabelChange}/>
                <input
                    type="submit"
                    className="input-group-btn btn btn-success"
                    value="Add Item"/>
            </form>

        );
    }
};