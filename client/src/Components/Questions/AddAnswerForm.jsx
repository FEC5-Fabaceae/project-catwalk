import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextInput from './TextInput';
import ProductIdContext from '../Context';
import AddPhotos from './AddPhotos';
import Modal from './Modal';

const AddAnswerForm = (props) => {
  const { questionID, questionBody, setQuestions } = props;
  const productID = useContext(ProductIdContext);
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(images);

  const thumbnails = images.map((image, index) => (
    <img className="answers-form-thumbnails" src={image} alt="" key={index} />
  ));

  const clickAddPhotosButton = () => {
    setModalVisible(true);
  };

  return (
    <>
      <h1>Submit Your Answer</h1>
      <h3>
        [Product Name]:
        {' '}
        {questionBody}
      </h3>
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
            .of(Yup.string())
            .max(5, 'Must have 5 images or less'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newValues = {
            body: values.answer,
            name: values.nickName,
            email: values.email,
            photos: images,
          };
          console.log(newValues);

          axios.post(`qa/questions/${questionID}/answers`, newValues)
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
            <div className="photo-input">
              {images.length < 5 && (
                <button type="button" onClick={clickAddPhotosButton}>
                  Add Photo URL
                </button>
              )}
              {modalVisible
                ? (
                  <Modal
                    setModalVisible={setModalVisible}
                    component={(
                      <AddPhotos
                        imagesState={images}
                        setImages={setImages}
                      />
                    )}
                  />
                )
                : <></>}
              <div className="thumbnail-container">
                {thumbnails}
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

AddAnswerForm.propTypes = {
  questionID: PropTypes.number.isRequired,
  questionBody: PropTypes.string.isRequired,
};

export default AddAnswerForm;
