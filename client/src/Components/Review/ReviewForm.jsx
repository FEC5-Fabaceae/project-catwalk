/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, useField,
} from 'formik';
import * as Yup from 'yup';

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
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h4>{label}</h4>
        <textarea className="textarea" {...field} {...props} onChange={props.handleChange} />
      </label>
      {`Minimum required characters left: ${50 - props.bodyLength}`}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CharacteristicRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <Field type="radio" name=""></Field>
      </label>
    </>
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
  const characteristicsValues = getCharacteristicInitialValues(characteristics);
  const [bodyLength, setBodyLength] = useState(0);

  const handleBodyChange = (e) => {

  };
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
          characteristics: characteristicsValues,
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
          </fieldset>
          <fieldset id="recommend-fieldset">
            <legend>Do you recommend this product?</legend>
          </fieldset>
          <fieldset id="characteristics-fieldset">
            <legend>Characteristics</legend>
          </fieldset>
          <fieldset className="main-review-fieldset">
            <legend>Write your review</legend>
            <TextInput name="summary" type="text" label="Summary" />
            <ReviewBody
              handleChange={(e) => {
                setBodyLength(e.target.value.length);
                props.handleChange(e);
              }}
              name="body"
              label="Body"
              value={props.body}
              bodyLength={bodyLength}
            />
          </fieldset>

          <TextInput name="nickname" type="text" label="Nickname" />
          <TextInput name="email" type="email" label="Email" />
        </Form>
      </Formik>
    </>
  );
};

const OldReviewForm = () => (
  <div>
    <h1>Submit a review</h1>
    <form onSubmit={formik.handleSubmit}>
      Fields with an asterisk (*) are required.
      <br />
      <fieldset>
        <legend>Score *</legend>
        <p>
          <input name="score" type="radio" value="1" />
          <label htmlFor="1">1</label>
          <input name="score" type="radio" value="2" />
          <label htmlFor="2">2</label>
          <input name="score" type="radio" value="3" />
          <label htmlFor="3">3</label>
          <input name="score" type="radio" value="4" />
          <label htmlFor="4">4</label>
          <input name="score" type="radio" value="5" />
          <label htmlFor="5">5</label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Do you recommend this product?</legend>
        <h3><label htmlFor="recommend"></label></h3>
        <input name="recommend" type="radio" id="yes" value="yes" />
        <label htmlFor="yes">Yes</label>
        <input name="recommend" type="radio" id="no" />
        <label htmlFor="no">No</label>
      </fieldset>
      <fieldset>
        <legend>Characteristics</legend>
      </fieldset>
      {/* We need to decide which descriptors are relevant to the given item */}
      <fieldset>
        <legend>Review Body</legend>
        <h3><label htmlFor="summary">Summary</label></h3>
        <input
          type="text"
          id="summary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="summary"
          value={formik.values.summary}
          placeholder="Example: Best purchase ever!"
        />
        <h3><label htmlFor="body">Body*</label></h3>
        <textarea
          id="body"
          name="body"
          onBlur={formik.handleBlur}
          onChange={handleBodyChange}
          value={formik.values.body}
        >
          Why did you like the product or not?
        </textarea>
        { }
        <p>
          {`Minimum required characters left: ${50 - bodyLength}`}
        </p>
      </fieldset>
      <fieldset>
        <legend>Upload Photos</legend>
        <input type="file" />
      </fieldset>
      <fieldset>
        <legend>Name and Email*</legend>
        <h3><label htmlFor="nickname">Your name*</label></h3>
        <input
          type="text"
          id="nickname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.nickname}
          placeholder="Example: jackson11"
        />
        {formik.touched.nickname
          && formik.errors.nickname
          ? <div>{formik.errors.nickname}</div>
          : null}
        <h3><label htmlFor="email">Your email*</label></h3>
        <input
          id="email"
          type="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Example: jackson11@email.com"
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email
          ? <div>{formik.errors.email}</div> : null}
        <p>For authentication reasons, you will not be emailed.</p>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
);

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
