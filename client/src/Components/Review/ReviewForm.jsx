import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';

const ReviewForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
    <h1>Submit a review</h1>
    <form onSubmit={formik.handleSubmit}>
      Fields with an asterisk (*) are required.
      <br />
      <fieldset>
        <legend>Score *</legend>
        <p>
          <input name="score" type="radio" value="1"/>
          <label for="1">1</label>
          <input name="score" type="radio" value="2" />
          <label for="2">2</label>
          <input name="score" type="radio" value="3" />
          <label for="3">3</label>
          <input name="score" type="radio" value="4" />
          <label for="4">4</label>
          <input name="score" type="radio" value="5" />
          <label for="5">5</label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Do you recommend this product?</legend>
        <p>
          <h3><label for="recommend"></label></h3>
          <input name="recommend" type="radio" id="yes" value="yes" />
          <label for="yes">Yes</label>
          <input name="recommend" type="radio" id="no" />
          <label for="no">No</label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Characteristics</legend>
      </fieldset>
      {/* We need to decide which descriptors are relevant to the given item */}
      <fieldset>
        <legend>Review Body</legend>
        <p>
        <h3><label for="summary">Summary</label></h3>
        <input type="text" id="summary" placeholder="Example: Best purchase ever!" />
        </p>
          <h3><label for="body">Body*</label></h3>
          <textarea>Why did you like the product or not?</textarea>
        <p>Minimum required characters left: 50</p>
      </fieldset>
      <fieldset>
        <legend>Upload Photos</legend>
        <input type="file" />
      </fieldset>
      <fieldset>
        <legend>Name and Email*</legend>
        <h3><label for="name">Your name*</label></h3>
      <input type="text" placeholder="Example: jackson11" />
      <h3><label htmlFor="email">Your email*</label></h3>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Example: jackson11@email.com"
          value={formik.values.email}
        />
        <p>For authentication reasons, you will not be emailed.</p>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    </div>
  );

}
