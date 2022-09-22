import React, { useState } from 'react';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from './FormStyles';

import { Container } from '../../globalStyles';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmedPass] = useState('');

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const resultError = null;
    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName('');
    setEmail('');
    setPassword('');
    setConfirmedPass('');
    setError(null);
    setSuccess('Application was submitted Successfully');

    setTimeout(() => {
      history.pushState('/');
    });
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const FormData = [
    {
      label: 'Name',
      value: name,
      onchange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onchange: (e) => setName(e.target.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onchange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Name',
      value: name,
      onchange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Name',
      value: name,
      onchange: (e) => setName(e.target.value),
      type: 'text',
    },
  ];

  return <div>Form</div>;
};

export default Form;
