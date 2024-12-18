import React from 'react';
import { Form, TextArea } from '../styles/WriteForm';
import CustomButton from './CustomButton';

export default function LetterForm({ placeholder }) {
	return (
		<Form>
			<TextArea placeholder={placeholder} required />
			<CustomButton type="submit" text={'작성하기'} />
		</Form>
	);
}
