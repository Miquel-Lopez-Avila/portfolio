import styled     from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: ${({ underlineLeft }) => underlineLeft ? 'left' : 'center'};

  &[data-underline*="true"]::before {
    width: 40px;
    height: 2px;
    border-radius: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(-50%);
  }

  &[data-underline-left*="true"]::before {
    left: 0% !important;
    transform: translateY(-50%);
  }

  &[data-underline*="true"] {
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '20px'};
    padding-bottom: ${({ paddingBottom }) => paddingBottom ? paddingBottom : '5px'};
  }
`;
