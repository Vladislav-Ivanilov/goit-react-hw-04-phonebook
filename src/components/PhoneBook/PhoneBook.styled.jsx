import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

//.color1 {color: #004971;}
//.color2 {color: #205d76;}
//.color3 {color: #54767f;}
//.color4 {color: #848d8d;}
//.color5 {color: #a89e9f;}

export const Container = styled.div`
  margin: 30px;
  padding: 30px 80px;
  width: 400px;
  background-color: #54767f;
  border-radius: 3px;
`;

export const Title = styled.h2`
  color: #004971;
  font-size: 26px;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

export const Forma = styled(Form)`
  border: solid 1px #54767f;
  border-radius: 2px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
export const Label = styled.label`
  color: #004971;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 3px;
`;

export const Input = styled(Field)`
  background-color: #848d8d;
  border: none;
  outline: transparent;
  padding: 10px;
  margin: 0;
`;

export const ErrorMes = styled(ErrorMessage)`
  padding: 5px;
  border: solid 1px #ff2400;
  border-radius: 2px;
  color: #ff2400;
`;

export const Btn = styled.button`
  background-color: #848d8d;
  color: #004971;
  border: none;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 3px;

  &:hover,
  &:focus {
    background-color: #004971;
    color: #848d8d;
  }
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 20px;
`;

export const FilterLabel = styled.label`
  color: #004971;
  font-size: 18px;
  font-weight: 600;
`;

export const FilterInput = styled.input`
  background-color: #848d8d;
  border: none;
  outline: transparent;
  padding: 10px;
  margin: 0;
  border-radius: 3px;
  margin-top: 15px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Name = styled.span`
  &:first-child {
    margin-right: 15px;
  }
  color: #004971;
  font-size: 16px;
  font-weight: 600;
`;

export const BtnDel = styled.button`
  background-color: #848d8d;
  color: #004971;
  border: none;
  display: block;

  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: #004971;
    color: #848d8d;
  }
`;
