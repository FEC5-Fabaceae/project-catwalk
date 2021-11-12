/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik, Form, useField,
} from 'formik';
import * as Yup from 'yup';
import ImageUploading from 'react-images-uploading';

const TextInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h4>{label}</h4>
        <input className="text-input" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const ReviewBody = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [bodyLength, setBodyLength] = useState(0);
  const handleBodyChange = (e) => {
    setBodyLength(e.target.value.length);
  };
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h4>{label}</h4>
        <textarea className="textarea" {...field} {...props} onKeyPress={handleBodyChange} />
      </label>
      {bodyLength >= 50 ? null : <p>{`Minimum required characters left: ${50 - bodyLength}`}</p>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const PhotoUpload = (props) => {
  const { setImages, images } = props;
  const max = 5;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <fieldset>
      <legend>Upload images</legend>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={max}
        dataURLKey="dataURL"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,

        }) => (
          <div className="upload_image-wrapper">
            <button onClick={onImageUpload} type="button">Upload image</button>
            <button onClick={onImageRemoveAll} type="button">Remove all images</button>
            <ul>
              {imageList.map((image, index) => (
                <li key={image} className="image-item">
                  <img src={image.dataURL} alt="" width="100" />
                  <section className="image-item-btn-wrapper">
                    <button onClick={() => onImageUpdate(index)} type="button"> Update</button>
                    <button onClick={() => onImageRemove(index)} type="button"> Remove</button>
                  </section>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ImageUploading>
    </fieldset>
  );
};

const CharacteristicRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <fieldset id="score-fieldset">
      <legend>{label}</legend>
      <p>
        <label className="radio-choice">
          <input name="score" type="radio" value="1" />
          1
        </label>
        <label className="radio-choice">
          <input name="score" type="radio" value="2" />
          2
        </label>
        <label className="radio-choice">
          <input name="score" type="radio" value="3" />
          3
        </label>
        <label className="radio-choice">
          <input name="score" type="radio" value="4" />
          4
        </label>
        <label className="radio-choice">
          <input name="score" type="radio" value="5" />
          5
        </label>
      </p>
    </fieldset>
  );
};

const getCharacteristicInitialValues = (characteristicsObject) => {
  const initialValuesObj = {};
  Object.entries(characteristicsObject).forEach(
    (entry) => { initialValuesObj[entry[0]] = { id: entry[1].id, value: '' }; },
  );
  return initialValuesObj;
};
const ReviewForm = (props) => {
  const { characteristics } = props;
  const characteristicsInitialValues = getCharacteristicInitialValues(characteristics);
  const [images, setImages] = useState([]);
  const characteristicsNames = Object.keys(characteristics);
  const characteristicsQuestions = characteristicsNames
    .map((name) => <CharacteristicRadio label={name} name={name} />);
  return (
    <>
      <h1>Submit a review</h1>
      <Formik
        initialValues={{
          score: '',
          recommend: '',
          summary: '',
          body: '',
          nickname: '',
          email: '',
          characteristics: characteristicsInitialValues,
        }}
        validationSchema={Yup.object({
          nickname: Yup.string()
            .max(60, 'Must be 60 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          body: Yup.string()
            .min(50, 'Must be 50 characters or more')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <fieldset id="score-fieldset">
            <legend>Score *</legend>
            <p>
              <label className="score-radio">
                <input name="score" type="radio" value="1" />
                1
              </label>
              <label className="score-radio">
                <input name="score" type="radio" value="2" />
                2
              </label>
              <label className="score-radio">
                <input name="score" type="radio" value="3" />
                3
              </label>
              <label className="score-radio">
                <input name="score" type="radio" value="4" />
                4
              </label>
              <label className="score-radio">
                <input name="score" type="radio" value="5" />
                5
              </label>
            </p>
          </fieldset>
          <fieldset id="recommend-fieldset">
            <legend>Do you recommend this product?</legend>
            <label className="radio-array">
              <input name="recommend" type="radio" value="yes" />
              Yes
            </label>
            <label className="score-radio">
              <input name="recommend" type="radio" value="no" />
              2
            </label>
          </fieldset>
          <fieldset id="characteristics-fieldset">
            <legend>Characteristics</legend>
            {characteristicsQuestions}
          </fieldset>
          <fieldset className="main-review-fieldset">
            <legend>Write your review</legend>
            <TextInput name="summary" type="text" label="Summary" />
            <ReviewBody
              name="body"
              label="Body"
            />
          </fieldset>
          <PhotoUpload setImages={setImages} images={images} />
          <fieldset>
          <legend>Name and Email</legend>
          <TextInput name="nickname" type="text" label="Nickname" />
          <TextInput name="email" type="email" label="Email" />
          <button type="submit">Submit</button>
          </fieldset>
        </Form>
      </Formik>
    </>
  );
};

ReviewForm.propTypes = {
  characteristics: PropTypes.shape({
    Size: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Width: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Comfort: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Quality: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Length: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Fit: PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  }).isRequired,
};

export default ReviewForm;
