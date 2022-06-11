import { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

import {AuthContext} from './Auth'
import './App.css'

const Profile = () => {

    const { user, signOut } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)
    return (
        <>
            
            {/* <p>Hello, {user.username}!!</p> */}
            <button onClick={signOut}>Sign out</button>
            <h1>First, tell us a bit about yourself</h1>
            <Formik
                initialValues={{ 
                    currentJob: '',
                    education: '',
                    experience: '',
                    skills: ''
                }}
                validate={values => {
                    const errors = {}
                    if (!values.currentJob){
                        errors.currentJob = 'Required'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        navigate('/home')
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='profile-form'>
                        <label htmlFor="currentJob" className='profile-labels'>What is your current job position?*</label>
                        <Field type="text" name="currentJob" className="profile-attributes"/>
                        <ErrorMessage name="currentJob" component="div" className='profile-error'/>

                        <label htmlFor="education" className='profile-labels'>Fill in Your Education Information(Major, GPA, Relevant Coursework, etc.)*</label>
                        <Field type="text" name="education" className="profile-attributes" style={{height: "200px"}}/>
                        <ErrorMessage name="education" component="div" className='profile-error'/>

                        <label htmlFor="experience" className='profile-labels'>Experience(Work, Startups, etc.)*</label>
                        <Field type="text" name="experience" className="profile-attributes" style={{height: "200px"}}/>
                        <ErrorMessage name="experience" component="div" className='profile-error'/>

                        <label htmlFor="skills" className='profile-labels'>Skills*</label>
                        <Field type="text" name="skills" className="profile-attributes" style={{height: "200px"}}/>
                        <ErrorMessage name="skills" component="div" className='profile-error'/>
                        
                        
                        <button type="submit" disabled={isSubmitting} className="profile-button">
                            Finish Setup!
                        </button>
                    </Form>
                )}


            </Formik>
        </>
        
    )
}

export default Profile