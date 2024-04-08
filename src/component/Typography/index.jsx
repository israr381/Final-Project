import React from 'react';
import { Typography as TypographyAnt } from 'antd';

const { Text } = TypographyAnt;

const TextComponent = ({ title, fontSize = "16px", color = "#000" }) => {
    return <Text>{title}</Text>;
};

export default TextComponent;
