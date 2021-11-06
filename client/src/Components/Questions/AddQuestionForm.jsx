import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextInput from './TextInput';
import ProductIdContext from '../Context';
// import GetProductName from './getProductName';

const AddQuestionForm = (props) => {
  const {setQuestions} = props;
  const productID = useContext(ProductIdContext);

  return (
    <>
      <h1>Ask Your Question</h1>
      <h3>
        About the [Product Name]
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
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label="Your Question *"
              name="question"
              type="textarea"
              placeholder="Your question..."
            />
            <TextInput
              label="Nickname *"
              name="nickName"
              type="text"
              placeholder="Example: jackson11!"
            />
            <div>For privacy reasons, do not use your full name or email address</div>
            <TextInput
              label="Email Address *"
              name="email"
              type="email"
              placeholder="Example: jack@email.com"
            />
            <div>For authentication reasons, you will not be emailed</div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddQuestionForm;
