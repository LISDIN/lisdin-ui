import { Fragment, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../services/AuthProvider'
import styles from '../styles/profile.module.scss'
import { reduceFormSpecs } from '../../utils/forms'

const PROFILE_FORM_SPECS: FormSpecs<UserProfile> = {
  currentJob: {
    label: 'What is your current job position?',
    type: 'text',
    defaultValue: '',
    required: true,
  },
  education: {
    label:
      'Fill in Your Education Information (Major, GPA, Relevant Coursework, etc.)',
    type: 'text',
    defaultValue: '',
  },
  experience: {
    label: 'Experience (Work, Startups, etc.)',
    type: 'text',
    defaultValue: '',
  },
  skills: {
    label: 'Skills',
    type: 'text',
    defaultValue: '',
  },
}

const PROFILE_FORM_SPEC_KEYS = Object.keys(PROFILE_FORM_SPECS) as Array<
  keyof FormSpecs<UserProfile>
>

const Profile = () => {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate()

  console.log(user)

  return (
    <div className={styles.profileContainer}>
      {/* <p>Hello, {user.username}!!</p> */}

      <button onClick={signOut}>Sign out</button>

      <h1>First, tell us a bit about yourself</h1>

      <Formik
        initialValues={reduceFormSpecs<UserProfile>(
          PROFILE_FORM_SPEC_KEYS,
          (e) => [e, PROFILE_FORM_SPECS[e].defaultValue]
        )}
        validate={(values) =>
          reduceFormSpecs<UserProfile>(PROFILE_FORM_SPEC_KEYS, (e) =>
            PROFILE_FORM_SPECS[e].required && !values[e]
              ? [e, 'Required']
              : undefined
          )
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
            navigate('/home')
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.profileForm}>
            {PROFILE_FORM_SPEC_KEYS.map((currKey) => {
              const currSpec = PROFILE_FORM_SPECS[currKey]
              const inputId = `input-${currKey}`
              return (
                <Fragment key={inputId}>
                  <label htmlFor={inputId} className={styles.profileLabel}>
                    {currSpec.label}
                  </label>
                  <Field
                    type={currSpec.type}
                    name={currKey}
                    className={styles.profileAttribute}
                  />
                  <ErrorMessage
                    name={currKey}
                    component="div"
                    className={styles.profileError}
                  />
                </Fragment>
              )
            })}

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.profileButton}
            >
              Finish Setup!
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Profile
