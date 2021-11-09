import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Todo() {

    const location = useLocation();

    let { description, targetDate } = location.state;

    function onSubmit(values) {
        console.log(values);
    }

    function validate(values) {
        let errors = {};
        if (!values.description) {
            errors.description = 'Enter a Description';
        } else if (values.description.length < 5) {
            errors.description = 'Description should be at least five characters';
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date';
        }

        return errors;
    }

    return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik 
                    initialValues={{ description, targetDate }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
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