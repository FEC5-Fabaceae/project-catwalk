/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage, useFormik,
} from 'formik';
import * as Yup from 'yup';

const ReviewForm = () => {
  const [bodyLength, setBodyLength] = useState(0);
  const formik = useFormik({
    initialValues: {
      summary: '',
      body: '',
      nickname: '',
      email: '',
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .max(60, 'Must be 60 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      body: Yup.string()
        .min(50, 'Must be 50 characters or more')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleBodyChange = (e) => {
    setBodyLength(e.target.value.length);
    formik.handleChange(e);
  };

  return (
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
};

export default ReviewForm;
