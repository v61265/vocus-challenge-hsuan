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

  &:hover {
    cursor: pointer;
    path {
      fill: red;
      opacity: 0.7;
    }
  }

  @-webkit-keyframes like {
    0% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.2) translate(-1px, -1px);
    }
    100% {
      transform: scale(1.1);
    }
  }
  &.active {
    path {
      animation: like 0.5s 1;
      fill: red;
      stroke: none;
    }
    color: red;
  }
`;

const CountComponent = styled.span``;

const MarkWrapper = styled.span`
  &:hover {
    cursor: pointer;
    path {
      fill: red;
      opacity: 0.7;
    }
  }

  &.active {
    path {
      animation: like 0.5s 1;
      fill: red;
      stroke: none;
    }
    color: red;
  }
`;

type LikeAndMarkProps = {
  likeCount: number;
  articleId: string;
  isLiked: boolean;
  isMarked: boolean;
  clickLikeFn: (id: string) => void;
  clickMarkFn: (id: string) => void;
};

export default function LikeAndMark({
  likeCount,
  articleId,
  isLiked,
  isMarked,
  clickLikeFn,
  clickMarkFn,
}: LikeAndMarkProps) {
  return (
    <Wrapper>
      <LikeWrapper
        className={isLiked ? 'active' : undefined}
        onClick={() => clickLikeFn(articleId)}
      >
        <SvgLike />
        <CountComponent>{isLiked ? likeCount + 1 : likeCount}</CountComponent>
      </LikeWrapper>
      <MarkWrapper
        className={isMarked ? 'active' : undefined}
        onClick={() => clickMarkFn(articleId)}
      >
        <SvgMark />
      </MarkWrapper>
    </Wrapper>
  );
}
