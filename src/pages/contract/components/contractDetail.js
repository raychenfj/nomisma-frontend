import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './contractDetail.module.css'
import { mode } from '../../../constants'
import { dateFormatter } from '../../..//formatters'

export default class ContractDetail extends Component {
  render () {
    if (!this.props.show) {
      return null;
    }

    const defaultInitialValues = {
      name: '',
      surname: '',
      amountInUsd: '',
      currency: '',
      date: '',
    }

    const initialValues = this.props.mode === mode.CREATE
      ? defaultInitialValues
      : {
        ...this.props.data,
        name: this.props.data.user.name,
        surname: this.props.data.user.surname,
        date: dateFormatter(this.props.data.date)
      }
    
    const readOnly = this.props.mode === mode.VIEW

    return (
      <div className={styles.contractDetail}>
        {/* <h1>Any place in your app!</h1> */}
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors = {};
            const rules = {
              name: {
                required: true
              },
              surname: {
                required: true
              },
              amountInUsd: {
                required: true
              },
              currency: {
                required: true
              },
              date: {
                required: true
              }
            }
            Object.keys(rules).forEach(key => {
              if (rules[key].required && !values[key]) {
                errors[key] = `${key} is required`
              }
            })
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            if(window.confirm('are you sure to submit ?')) {
              this.props.onSubmit(values)
            }
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.formItem}>
                <label className={styles.label}>name:</label>
                <Field className={styles.field} name="name" placeholder="please enter your name" readOnly={readOnly}/>
                <ErrorMessage className={styles.error} name="name" component="div" />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>surname:</label>
                <Field className={styles.field} name="surname" placeholder="please enter your surname" readOnly={readOnly}/>
                <ErrorMessage className={styles.error} name="surname" component="div" />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>amountInUsd:</label>
                <Field className={styles.field} name="amountInUsd" placeholder="please enter the amount in usd" readOnly={readOnly}/>
                <ErrorMessage className={styles.error} name="amountInUsd" component="div" />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>currency:</label>
                <Field className={styles.field} name="currency" placeholder="please enter the currency" readOnly={readOnly}/>
                <ErrorMessage className={styles.error} name="currency" component="div" />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>date:</label>
                <Field className={styles.field} type="date" name="date" placeholder="please enter the date" readOnly={readOnly}/>
                <ErrorMessage className={styles.error} name="date" component="div" />
              </div>
              <div className={styles.formItem}>
                {!readOnly && <button type="submit" disabled={isSubmitting}>Submit</button>}
                <button type="back" onClick={this.props.onBack}>Back</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
