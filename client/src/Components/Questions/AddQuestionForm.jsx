import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextInput from './TextInput';
import ProductIdContext from '../Context';
import ProviderContext from '../Context/provider/ProviderContext';

const AddQuestionForm = (props) => {
  const { setQuestions } = props;
  const productID = useContext(ProductIdContext);
  const currentProduct = useContext(ProviderContext);
  const { currentStyle } = currentProduct;
  const { name } = currentStyle;

  return (
    <>
      <h1>Ask Your Question</h1>
      <h3>
        About the
        {' '}
        {name}
      </h3>
      <Formik
        initialValues={{
          question: '',
          nickName: '',
          email: '',
        }}
        validationSchema={Yup.object({
          question: Yup.string()
            .max(1000, 'Must be 1000 characters or less')
            .required('You must enter the following: \nquestion'),
          nickName: Yup.string()
            .max(60, 'Must be 60 characters or less')
            .required('You must enter the following: \nNickname'),
          email: Yup.string()
            .email('Invalid email')
            .max(60, 'Must be 60 characters or less')
            .required('You must enter the following: \nemail address'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newValues = {
            body: values.question,
            name: values.nickName,
            email: values.email,
            product_id: Number(productID),
          };

          axios.post('/qa/questions', newValues)
            .then(() => {
              axios.get(`/qa/questions/?product_id=${productID}&count=100`)
                .then((res) => {
                  setQuestions(res.data.results);
                });
            })
            .catch((err) => console.log(err));
          setSubmitting(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-container">
              <div className="form-input-container">
                <TextInput
                  label="Your Question *"
                  name="question"
                  type="textarea"
                  placeholder="Your question..."
                  className="input-box"
                />
              </div>
              <div className="form-input-container">
                <TextInput
                  label="Nickname *"
                  name="nickName"
                  type="text"
                  placeholder="Example: jackson11!"
                  className="input-box"
                />
                <div className="form-footnotes">For privacy reasons, do not use your full name or email address</div>
              </div>
              <div className="form-input-container">
                <TextInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="Example: jack@email.com"
                  className="input-box"
                />
                <div className="form-footnotes">For authentication reasons, you will not be emailed</div>
              </div>
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddQuestionForm;
