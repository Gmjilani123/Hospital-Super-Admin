import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
import { Link } from 'react-router-dom';

function AddAppointmentComp() {
    const defalutValue = {
        doctor: '',
        fees: '',
        app_date: '',
        shift: '',
        slot: '',
        app_priority: '',
        pay_mode: '',
        status: '',
        live_consult: '',
        address: '',
        message: '',
    }

    const validationSceema = yup.object().shape({
        doctor: yup.string().required('Doctor is Requird!'),
        fees: yup.string().required('Fees Number is Requird!'),
        app_date: yup.string().required('Appointment Date is Requird!'),
        shift: yup.string().required('Shift is Requird!'),
        slot: yup.string().required('Slot is Requird!'),
        status: yup.string().required('Status is Requird!'),
        live_consult: yup.string().required('This is Requird!'),
    })
    const handleSubmit = (value) => {
        console.log(value);
    };


    return <div>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-ecommerce">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3 ms-2">Add Appointment</h4>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-3">
                            <Link
                                className="btn btn-secondary add-new btn-primary waves-effect waves-light me-2"
                                to={'/admin/newPatient/add'}
                            >
                                <span>
                                    <i className="ti ti-plus me-0 me-sm-1 ti-xs" />
                                    <span className="d-none d-sm-inline-block">New Patient</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-tile mb-0">Appointment information</h5>
                                </div>

                                <div className="card-body row">
                                    <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
                                        {({ errors, touched, resetForm }) => {
                                            return <Form className="row">

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Doctor<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field component='select' name='doctor' className={
                                                        `form-control
                                                    ${errors.doctor && touched.doctor ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Joe Black(9000)</option>
                                                        <option value={82}>Shivam Verma(9002)</option>
                                                        <option value={86}>Brandon Heart(9006)</option>
                                                        <option value={87}>William Abort(9003)</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="doctor" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Doctor Fees<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field type='number' name='fees' placeholder='Enter Fess'
                                                        className={
                                                            `form-control
                                                    ${errors.fees && touched.fees ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="fees" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Appointment Date<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field type='date' name='app_date' placeholder=''
                                                        className={
                                                            `form-control
                                                    ${errors.app_date && touched.app_date ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="app_date" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Shift<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field component='select' name='shift' className={
                                                        `form-control
                                                    ${errors.shift && touched.shift ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={733}>Night</option>
                                                        <option value={8452}>Day</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="shift" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Slot<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field component='select' name='slot' className={
                                                        `form-control
                                                    ${errors.slot && touched.slot ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={7353}>One</option>
                                                        <option value={84552}>Two</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="slot" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Appointment Priority
                                                    </label>
                                                    <Field component='select' name='app_priority' className={
                                                        `form-control`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={73553}>Normal</option>
                                                        <option value={845552}>Urgent</option>
                                                        <option value={845552}>Low</option>
                                                    </Field>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Payment Mode
                                                    </label>
                                                    <Field component='select' name='pay_mode' className={
                                                        `form-control`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={736553}>Cash</option>
                                                        <option value={8456552}>UPI</option>
                                                        <option value={8456552}>Cheque</option>
                                                    </Field>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Status<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field component='select' name='status' className={
                                                        `form-control
                                                    ${errors.status && touched.status ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={713}>Pending</option>
                                                        <option value={823}>Approved</option>
                                                        <option value={836}>Cancel</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="status" /></p>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Live Consultant (On Video Conference)<span className='text-danger'>*</span>
                                                    </label>
                                                    <Field component='select' name='live_consult' className={
                                                        `form-control
                                                    ${errors.live_consult && touched.live_consult ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={7313}>Yes</option>
                                                        <option value={8323}>No</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="live_consult" /></p>
                                                </div>


                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Alternate Address
                                                    </label>
                                                    <Field as='textarea' name='address' placeholder='Enter Address'
                                                        className={
                                                            `form-control
                                                    ${errors.address && touched.address ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="address" /></p>
                                                </div>


                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Message
                                                    </label>
                                                    <Field as='textarea' name='message' placeholder='Enter Message'
                                                        className={
                                                            `form-control
                                                    ${errors.message && touched.message ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="message" /></p>
                                                </div>





                                                <div className="col-6">
                                                    <button type="submit" className="btn btn-primary" style={{ margin: "20px 0" }}>
                                                        Save
                                                    </button>
                                                    <button type="button" className="btn btn-danger" onClick={resetForm} style={{ margin: "20px 10px" }}>
                                                        Reset
                                                    </button>
                                                </div>

                                            </Form>
                                        }}
                                    </Formik>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default AddAppointmentComp