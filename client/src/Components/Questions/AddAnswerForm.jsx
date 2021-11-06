import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextInput from './TextInput';
import PhotosInput from './PhotosInput';
import ProductIdContext from '../Context';
// import GetProductName from './getProductName';

const AddAnswerForm = (props) => {
  const { questionID, setQuestions } = props;
  const productID = useContext(ProductIdContext);

  return (
    <>
      <h1>Submit Your Answer</h1>
      <h3>[Product Name]: [Question Body]</h3>
      <Formik
        initialValues={{
          answer: '',
          nickName: '',
          email: '',
          photos: [],
        }}
        validationSchema={Yup.object().shape({
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
          photos: Yup.array()
            .of(Yup.mixed())
            .nullable(true),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.photos);
          const newValues = {
            body: values.answer,
            name: values.nickName,
            email: values.email,
            photos: [], // how I am going to retrieve this from the files uploaded
          };

        //   axios.post(`qa/questions/${questionID}/answers`, newValues)
        //     .then(() => {
        //       axios.get(`/qa/questions/?product_id=${productID}&count=100`)
        //         .then((res) => {
        //           setQuestions(res.data.results);
        //         });
        //     })
        //     .catch((err) => console.log(err));
        //   setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
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
            <div>
              <PhotosInput
                label="Photo Upload"
                name="photos"
                type="file"
                mulitple="true"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAnswerForm;
