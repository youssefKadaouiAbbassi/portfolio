import React from 'react';

interface TemplateProps {
  number: number;
}

export const Template: React.FC<TemplateProps> = ({ number }) => {
  return <div>Template {number}</div>;
};
