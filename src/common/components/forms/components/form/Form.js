import React, { forwardRef, useState } from 'react';
import { Form as AntdForm } from 'antd';
import { removeEmptyProps } from 'common/utils/object';

export const { useForm } = AntdForm;

export const FormList = AntdForm.List;

const Form = forwardRef(({ children, onFinishFailed, layout = 'vertical', onFinish, initialValues = {}, ...rest }, ref) => {
  return (
    <AntdForm
      ref={ref}
      layout={layout}
      onFinish={onFinish}
      initialValues={removeEmptyProps(initialValues)}
      {...rest}
    >
      {children}
    </AntdForm>
  );
});

export default Form;
