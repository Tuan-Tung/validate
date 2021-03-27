// import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import '../login/style.css'
import React from 'react'

const InputField = (props) => {
    const {field ,form,
    type , label, placeholder,disabled
    } = props
    const {name,value,onChange,onBlur} = field
    // const {errors, touched,values} = form
    // const showError = errors[name] && touched[name]

    return (
        <nav className="Login__content">
            {label && <label className="Login__item" >{label}</label>}
            <input className="Login__list" name={name} type={type} 
            placeholder={placeholder}
            id={name} 
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
           
            />
            <p className="error"><ErrorMessage name={name} /></p>
        </nav>
    )
}

export default InputField
