/* Big thanks for spinner to dev who wrote it (https://codepen.io/luisiniMagigi/pen/VwjbxgV?editors=0110) */
import { FunctionComponent } from 'react';
import { Container, styled } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { keyframes } from '@mui/system';
import { shouldForwardProp } from '@/utils/custom-component-props';

const Wrapper = styled(Container)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .book {
    --color: blue;
    --duration: 6.8s;
    width: 32px;
    height: 12px;
    position: relative;
    margin: 32px 0 0 0;
    //Demo
    zoom: 1.5;
    .inner {
      width: 32px;
      height: 12px;
      position: relative;
      transform-origin: 2px 2px;
      transform: rotateZ(-90deg);
      animation: book var(--duration) ease infinite;
      .left,
      .right {
        width: 60px;
        height: 4px;
        top: 0;
        border-radius: 2px;
        background: var(--color);
        position: absolute;
        &:before {
          content: '';
          width: 48px;
          height: 4px;
          border-radius: 2px;
          background: inherit;
          position: absolute;
          top: -10px;
          left: 6px;
        }
      }
      .left {
        right: 28px;
        transform-origin: 58px 2px;
        transform: rotateZ(90deg);
        animation: left var(--duration) ease infinite;
      }
      .right {
        left: 28px;
        transform-origin: 2px 2px;
        transform: rotateZ(-90deg);
        animation: right var(--duration) ease infinite;
      }
      .middle {
        width: 32px;
        height: 12px;
        border: 4px solid var(--color);
        border-top: 0;
        border-radius: 0 0 9px 9px;
        transform: translateY(2px);
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      left: 50%;
      top: 0;
    }
  }

  @keyframes left {
    4% {
      transform: rotateZ(90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(90deg);
    }
  }

  @keyframes right {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
    }
    46%,
    54% {
      transform: rotateZ(-90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }

  @keyframes book {
    4% {
      transform: rotateZ(-90deg);
    }
    10%,
    40% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    40.01%,
    59.99% {
      transform-origin: 30px 2px;
    }
    46%,
    54% {
      transform: rotateZ(90deg);
    }
    60%,
    90% {
      transform: rotateZ(0deg);
      transform-origin: 2px 2px;
    }
    96% {
      transform: rotateZ(-90deg);
    }
  }
`;

const n2A = (n: number): number[] => {
  let i = 0;
  const arr = [];

  // eslint-disable-next-line no-plusplus
  while (i < n) arr[i] = i++;

  return arr;
};
const pageAnimations = n2A(18).map((i: number) => {
  const delay = i * 1.86;
  const delayAfter = i * 1.74;
  /*
    4 + delay
    13 + delayAfter
    54 + delay
    63 + delayAfter
  */
  return keyframes`
    ${4 + delay}% {
      transform: rotateZ(0deg) translateX(-18px);
    }
    ${13 + delayAfter}%, ${54 + delay}% {
      transform: rotateZ(180deg) translateX(-18px);
    }
    ${63 + delayAfter}% {
      transform: rotateZ(0deg) translateX(-18px);
    }
  `;
});

const Li = styled('li', {
  shouldForwardProp: (prop) => shouldForwardProp<any>(['num'], prop)
})<any>(({ num }: { num: number }) => ({
  height: '4px',
  borderRadius: '2px',
  transformOrigin: '100% 2px',
  width: '48px',
  right: '0',
  top: '-10px',
  position: 'absolute',
  background: 'blue',
  transform: 'rotateZ(0deg) translateX(-18px)',
  animationDuration: 'var(--duration)',
  animationTimingFunction: 'ease',
  animationIterationCount: 'infinite',
  animationName: pageAnimations[num]
}));

export const Spinner: FunctionComponent = () => (
  <Wrapper>
    <div className="book">
      <div className="inner">
        <div className="left" />
        <div className="middle" />
        <div className="right" />
      </div>
      <ul>
        {n2A(18).map((key: number) => (
          <Li num={key} key={key} />
        ))}
      </ul>
    </div>
  </Wrapper>
);
