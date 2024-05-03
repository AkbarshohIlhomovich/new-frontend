import React, { useState } from 'react';

const Validation = ({ initialValues, validations, onSubmit }) => {
	const [values, setValues] = useState(initialValues || {});
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });

		// Validate the field when it changes
		validateField(name, value);
	};

	const validateField = (name, value) => {
		const validation = validations[name];

		if (validation) {
			const {
				required,
				minLength,
				maxLength,
				pattern,
				customValidation,
				requiredErrorMessage,
				minLengthErrorMessage,
				maxLengthErrorMessage,
				patternErrorMessage,
			} = validation;
			let error = '';

			if (required && !value.trim()) {
				error = requiredErrorMessage || 'This field is required';
			} else if (minLength && value.length < minLength) {
				error =
					minLengthErrorMessage || `Minimum length is ${minLength}`;
			} else if (maxLength && value.length > maxLength) {
				error =
					maxLengthErrorMessage || `Maximum length is ${maxLength}`;
			} else if (pattern && !pattern.test(value)) {
				error = patternErrorMessage || 'Invalid format';
			} else if (
				customValidation &&
				typeof customValidation === 'function'
			) {
				error = customValidation(value);
			}

			setErrors({ ...errors, [name]: error });
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		// Validate all fields before submission
		Object.keys(validations).forEach(name => {
			validateField(name, values[name]);
		});

		// Check if there are any errors
		const hasErrors = Object.values(errors).some(error => error);
		if (!hasErrors && onSubmit) {
			onSubmit(values);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{Object.keys(initialValues).map(fieldName => (
				<div key={fieldName}>
					<input
						type='text'
						name={fieldName}
						value={values[fieldName] || ''}
						onChange={handleChange}
					/>
					{errors[fieldName] && <div>{errors[fieldName]}</div>}
				</div>
			))}
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Validation;
