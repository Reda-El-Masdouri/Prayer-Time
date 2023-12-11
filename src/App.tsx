import './style.scss';
import IMAGE from './react.png';
import LOGO from './pngwing.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width={300} height={300} />
      <img src={LOGO} alt="React Logo" />
      <ClickCounter />
    </>
  );
};
