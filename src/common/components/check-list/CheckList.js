import Check from './components/check';
import { Wrapper, Item, Bullet, Text } from './CheckList.styled';

const CheckList = ({ checks }) => (
  <Wrapper>
    {checks.map(({ text, small }, index) => (
      <Item small={small} key={index}>
        <Bullet small={small}>
          <Check />
        </Bullet>
        <Text>{text}</Text>
      </Item>
    ))}
  </Wrapper>
);

export default CheckList;
