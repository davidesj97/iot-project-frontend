import '../assets/styles/Layout.scss';
import { Aside } from './Aside';
import { Content1 } from './Content1';
import { Content2 } from './Content2';

export const Layout = () => {
  return (
    <>
    <div className="container-fluid gutter-0">
      <Aside className="aside" />
      <div className="info">
        <Content1>Content 1</Content1>
        <Content2>Content 2</Content2>
      </div>
    </div>
    </>
  )
}
