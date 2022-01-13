/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { rem, color, hover, shadow, host } from '../common';
import { Button } from './Button';
import { useState } from 'react';
import Complete from './Complete';
import { useRecoilState } from 'recoil';
import { showConfirmModal } from '../Atom';
import axios from 'axios';

const box = css`
  position: fixed;
  width: ${rem(420)};
  background-color: white;
  border-radius: ${rem(15)};
  box-shadow: ${shadow};
  z-index: 999;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: left;
`;

const titleStyle = css`
  margin: ${rem(20)} ${rem(24)};
  font-size: ${rem(20)};
`;

const message = css`
  color: black;
  font-size: ${rem(14)};
  margin: ${rem(5)} ${rem(24)};
`;

interface Props {
  text: string;
  text1: string;
  text2: string;
  title: string;
  reservationId: number;
  reservation_status: number;
}

function YesOrNo({
  text1,
  text2,
  title,
  text,
  reservationId,
  reservation_status,
}: Props) {
  const [confirm, setConfirm] = useRecoilState(showConfirmModal);
  const [complete, setComplete] = useState<boolean>(false);
  const onOkClick = () => {
    // axios
    //   .patch(
    //     `${host}/reservation/:${reservationId}`,
    //     { reservation_status },
    //     { headers: { 'Content-Type': 'application/json' } },
    //   )
    //   .then((res) => {
    // console.log(res);
    setConfirm(false);
    setComplete(true);
    // });
  };
  const onNoClick = () => {
    setConfirm(false);
  };
  const onCompleteClick = () => {
    setComplete(false);
  };
  return (
    <>
      {confirm ? (
        <div css={box}>
          <h3 css={titleStyle}>{title}</h3>
          <p css={message}>{text1}</p>
          <p css={message}>{text2}</p>
          <Button
            text="돌아가기"
            width={`${rem(180)}`}
            height={`${rem(43)}`}
            background={`white`}
            color={`${color.point}`}
            border={`1px solid ${color.point}`}
            size={`${rem(14)}`}
            margin={`${rem(16)} ${rem(6)} ${rem(20)} ${rem(24)}`}
            hover="80%"
            cursor="pointer"
            onClick={onNoClick}
          />
          <Button
            text={text}
            width={`${rem(180)}`}
            height={`${rem(43)}`}
            background={`${color.point}`}
            color={`white`}
            border="none"
            size={`${rem(14)}`}
            margin={`${rem(16)} ${rem(24)} ${rem(20)} ${rem(6)}`}
            hover="80%"
            cursor="pointer"
            onClick={onOkClick}
          />
        </div>
      ) : null}
      {complete ? (
        <Complete text="예약이 취소되었습니다" onClick={onCompleteClick} />
      ) : null}
    </>
  );
}

export default YesOrNo;
