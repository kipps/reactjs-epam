import React from 'react';

class Radio extends React.Component {
    setGender(event) {
        console.log(event.target.value);
    }
    render() {
        const renderRadioList = (array) => {
            return array.label.map((item) =>
                <label key={item} name={array.name} className='inline ml-8 mr-8'>
                    <span className='inline mr-4'>{item}</span>
                    <input type='radio' value={item} name={array.name} ref={(input) => {
                        this.radioInput = input
                    }}/>
                </label>
            );
        };
        return (
            <div className={this.props.className + ' Radio'} onChange={this.setGender.bind(this)}>
                {renderRadioList(this.props)}
            </div>
        )
    }
}

export default Radio;