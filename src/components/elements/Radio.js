import React from 'react';

class Radio extends React.Component {
    state={
        value: ''
    }
    handleChange(event) {
       this.setState({value: event.target.value})
    }
    render() {
        const renderRadioList = (array) => {
            return array.label.map((item) =>
                <label key={item} name={array.name} className='inline ml-8 mr-8'>
                    <span className='inline mr-4'>{item}</span>
                    <input type='radio'
                           onChange={this.handleChange.bind(this)}
                           value={this.state.value}
                           name={array.name}
                    />
                </label>
            );
        };
        return (
            <div className={this.props.className + ' Radio'}>
                {renderRadioList(this.props)}
            </div>
        )
    }
}

export default Radio;