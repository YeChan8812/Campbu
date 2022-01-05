/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import WritingButton from '../components/WritingButton';
import { rem } from '../common';

const divStyle = css`
  text-align: center;
  margin: 0 auto;
  width: ${rem(1280)};
`;

const ulStyle = css`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const categoryStyle = css`
  background-color: #eeefcb;
  margin-left: ${rem(5)};
  margin-right: ${rem(5)};
  width: ${rem(97)};
  height: ${rem(122)};
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
`;

const inputStyle = css`
  font-size: 0.875rem;
  width: ${rem(420)};
  height: ${rem(43)};
`;

const section = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  row-gap: ${rem(26)};
`;

function Main() {
  const category: string[] = [
    '전체',
    '패키지',
    '텐트/침낭',
    '그릴/버너',
    '의자/테이블',
    '배낭/아이스박스',
    '취식용품',
    '기타',
  ];

  return (
    <div css={divStyle}>
      <ul css={ulStyle}>
        {category.map((list) => (
          <li css={categoryStyle}>
            <a href="#">{list}</a>
          </li>
        ))}
      </ul>
      <input placeholder="지역을 검색해보세요!" css={inputStyle} />
      <button>검색</button>
      <section css={section}>
        <Link to="1">
          <Product />
        </Link>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
      <WritingButton />
    </div>
  );
}

export default Main;
