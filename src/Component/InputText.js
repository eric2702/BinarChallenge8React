import * as React from 'react'

const InputText = ({label, value, onChange, type, error}) => {
    if (error) {
        return (
        <div className="mb-3">
            <label>{label}: </label>
            <input type={type} className="form-control is-invalid" defaultValue={value} onChange={onChange} />
        </div>  
        )
    }
    return (
        <div className="mb-3">
            <label className="form-label">{label}: </label>
            <input type={type} className="form-control" defaultValue={value} onChange={onChange} />
        </div>  
    )
}

export default InputText