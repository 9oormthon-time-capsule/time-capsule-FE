import React from 'react';
import { Form, TextArea } from '../../../styles/timecapsule/write/WriteForm.style';
import CustomButton from './CustomButton';

export default function LetterForm({ placeholder }) {
  const currentPath = window.location.pathname;

  const handleWriteButton = (event) => {
    event.preventDefault();

    if (currentPath === '/write/letter') {
      window.location.href = '/directory/time/1';
    } else {
      window.location.href = '/directory/diary/1';
    }
  };

  return (
    <Form>
      <TextArea placeholder={placeholder} required />
      <CustomButton
        onClick={handleWriteButton}
        type="submit"
        text={'작성하기'}
      />
    </Form>
  );
}
