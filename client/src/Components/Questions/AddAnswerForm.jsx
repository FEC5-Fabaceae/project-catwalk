import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextInput from './TextInput';
import ProductIdContext from '../Context';
import GetProductName from './getProductName';

const AddAnswerForm = () => {
  const value = useContext(ProductIdContext);

  return (
    <>
      <h1>Submit Your Answer</h1>
      <h3>[Product Name]: [Question Body]</h3>
      <Formik
        initialValues={{
          answer: '',
          nickName: '',
          email: '',
        }}
        validationSchema={Yup.object({
          answer: Yup.string()
            .max(1000, 'Must be 1000 characters or less')
            .required('You must enter the following: \nanswer'),
          nickName: Yup.string()
            .max(60, 'Must be 60 characters or less')
            .required('You must enter the following: \nNickname'),
          email: Yup.string()
            .email('Invalid email')
            .max(60, 'Must be 60 characters or less')
            .required('You must enter the following: \nemail address'),
        })}
      >
        <Form>
          <TextInput
            label="Your Answer *"
            name="answer"
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
          <button type="button">Upload Photos</button>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddAnswerForm;
