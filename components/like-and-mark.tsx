import styled from 'styled-components';
import SvgLike from '~/public/icons/like.svg';
import SvgMark from '~/public/icons/mark.svg';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeWrapper = styled.span`
  display: flex;
  color: var(--Gray2, #665e5c);
  font-size: 12px;
  line-height: 12px;
  align-items: center;
`;

const CountComponent = styled.span``;

type LikeAndMarkProps = {
  likeCount: number;
};

export default function LikeAndMark({ likeCount }: LikeAndMarkProps) {
  return (
    <Wrapper>
      <LikeWrapper>
        <SvgLike />
        <CountComponent>{likeCount}</CountComponent>
      </LikeWrapper>
      <SvgMark />
    </Wrapper>
  );
}
