import { Form, Input, Button } from './SearchBox.styled';

export const SearchBox = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />

      <Button type="submit">Search</Button>
    </Form>
  );
};
