import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <div active size="massive" />;

export default ReactDelayRender({ delay: 1000 })(Loading);
