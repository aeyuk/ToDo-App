// import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import moment from 'moment';
import { Formik, Field, Form } from 'formik';

function Todo() {

    const location = useLocation();

    let { description, targetDate } = location.state;

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik 
                    initialValues={{ description, targetDate }}
                    onSubmit={onSubmit}>
                    {
                        (props) => (
                            // <div>{location.state.id} {location.state.description} {location.state.targetDate}</div>
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate" placeholder={targetDate}/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default Todo;