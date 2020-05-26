import React, {Component} from 'react';
import {StyledLogin} from "./styled";
import {logIn} from "../../services/Login/action";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Spin} from 'antd';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate: false,
            isLoading: false
        }
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         isLoading: true,
    //     })
    //     this.props.postUser(this.state)
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        let {authenticate} = prevState;
        if (nextProps.user.authenticate) {
            if (nextProps.user.userType === 'QuanTri') {
                nextProps.history.push('/admin/dashboard');
            } else {
                nextProps.history.push('/')
            }
        }
        if (nextProps.user.authenticate !== authenticate) {
            return {authenticate: nextProps.user.authenticate};
        } else return null;
    }

    componentWillUnmount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        // console.log(this.props)
        //Get props from formik
        let {values, errors, touched,user,error} = this.props
        console.log(error)
        const {isLoading} = this.state;
        return (

            <StyledLogin>
                <Form className='h-100' onSubmit={this.props.handleSubmit}>
                    <div className="container">
                        <div className="d-flex justify-content-center h-100 align-items-center">
                            <Spin
                                spinning={this.props.isSubmitting}
                            >
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Sign In</h3>
                                        <div className="d-flex justify-content-end social_icon">
                                            <span><i className="fab fa-facebook-square"></i></span>
                                            <span><i className="fab fa-google-plus-square"></i></span>
                                            <span><i className="fab fa-twitter-square"></i></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <Field name='taiKhoan'>
                                                {({field}) => (
                                                    <input
                                                        {...field}
                                                        className='form-control'
                                                        placeholder="username"
                                                    />)}
                                            </Field>
                                        </div>
                                        {touched.taiKhoan ? <div className='text-white'>{errors.taiKhoan}</div> :
                                            <div></div>}
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-key"></i>
                                                </span>
                                            </div>
                                            <Field name='matKhau'>
                                                {({field}) => (
                                                    <input
                                                        {...field}
                                                        type='password'
                                                        className="form-control"
                                                        placeholder="password"
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        {touched.matKhau ? <div className='text-white'>{errors.matKhau}</div> :
                                            <div></div>}
                                        <div className="row align-items-center remember">
                                            <input type="checkbox"/>Remember Me
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Login"
                                                   className="btn float-right login_btn"/>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-center links">
                                            Don't have an account?<a href="a">Sign Up</a>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a href="b">Forgot your password?</a>
                                        </div>
                                    </div>
                                </div>
                            </Spin>
                        </div>
                    </div>
                </Form>
            </StyledLogin>


        )
    }
}

const LoginFormik = withFormik({
    mapPropsToValues() { // Init form field
        return {
            taiKhoan: '',
            matKhau: '',
        }
    },
    validationSchema: Yup.object().shape({ // Validate form field
        taiKhoan: Yup.string()
            .required('Tài khoản không được để trống!')
            .min(5, 'Tài khoản phải có tối thiểu 5 kí tự')
            .max(10, 'Tài khoản chỉ được tối đa 10 kí tự'),
        matKhau: Yup.string()
            .required('Mật khẩu không được để trống')
            .min(5, 'Mat khau phai tu 6 ki tu tro len')
    }),
    handleSubmit: (values, action) => {
        console.log(action)
        // console.log(values)
        action.props.postUser(values)
        console.log(action.props.isSubmitting)

        if(action.props.error){
            // console.log(this.props)
            action.props.setSubmitting(false)
            action.setFieldError('taiKhoan', action.props.error.data)
            action.props.history.push('/admin')
        }
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.LoginReducer.user,
        error:state.LoginReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postUser: (data) => {
            dispatch(logIn(data))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormik(Login)));