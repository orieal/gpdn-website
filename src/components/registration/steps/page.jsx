import React from 'react';
import { Steps } from 'antd';
const Step = () => (
  <Steps
    size="small"
    current={0}
    items={[
      {
        title: 'Personal Information',
      },
      {
        title: 'Professional Background',
      },
      {
        title: 'Palliative Care Profileg',
      },
    ]}
  />
);
export default Step;