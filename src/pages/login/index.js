import React from 'react'
import './style.css'
import { Formik, Form, FastField } from 'formik'
import InputField from '../InputField'
import *as Yup from 'yup'

const Login = () => {

    const initalValue = {
        Name: '',
        Email: '',
        Password: ''
    };
    const validationSchema = Yup.object().shape({
        Name: Yup.string().required("vui lòng nhập tên"),
        Email: Yup.string().email().required("vui lòng nhập Email"),
        Password: Yup.string().when('Name',{
            is:'t',
            then: Yup.string().required("vui lòng nhập password"),
            otherwise:Yup.string().notRequired()
        })
    })
    return (
        <Formik initialValues={initalValue}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            {formikProps => {
                // const { values, errors, touched } = formikProps
                // console.log(values, errors, touched);
               
                return (
                    <div className="Login">
                        <div className="container">
                            <img src="./logo192.png" alt="" />
                            <div className="form">
                                <Form className="form__login">
                                    <FastField
                                        name="Name"
                                        type="text"
                                        component={InputField}

                                        label="Name"
                                        placeholder="Nguyen Tuan Tung"
                                    />
                                    <FastField
                                        name="Email"
                                        type="email"
                                        component={InputField}

                                        label="Email"
                                        placeholder="Nguyen@gamil.com"
                                    />
                                    <FastField
                                        type="password"
                                        name="Password"
                                        component={InputField}

                                        label="PassWord"
                                        placeholder="ít nhất 6 kí tự"
                                    />

                                    <div>
                                        <button type="submit" className="Login__button">Login</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Formik>

    )
}

export default Login
