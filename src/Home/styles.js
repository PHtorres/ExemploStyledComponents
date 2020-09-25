import styled from 'styled-components/native';

export const Container = styled.View`

flex:1;
justify-content:center;
align-items:center;
background:${props => props.theme.bg};

`;

export const Title = styled.Text`

font-size:28px;
color:${props => props.theme.color};

`;