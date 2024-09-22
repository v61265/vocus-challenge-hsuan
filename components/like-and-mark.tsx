import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgLike from '~/public/icons/like.svg';
import SvgMark from '~/public/icons/mark.svg';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeWrapper = styled.span<{ isActive: boolean }>`
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

  ${({ isActive }) => {
    if (!isActive) return;
    return `path {
      animation:like 0.5s 1;
      fill:red;
      stroke:none;
    }
    color: red;
    `;
  }}
`;

const CountComponent = styled.span``;

const MarkWrapper = styled.span<{ isActive: boolean }>`
  &:hover {
    cursor: pointer;
    path {
      fill: red;
      opacity: 0.7;
    }
  }

  ${({ isActive }) => {
    if (!isActive) return;
    return `path {
      animation:like 0.5s 1;
      fill:red;
      stroke:none;
    }
    color: red;
    `;
  }}
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
      <LikeWrapper isActive={isLiked} onClick={() => clickLikeFn(articleId)}>
        <SvgLike />
        <CountComponent>{isLiked ? likeCount + 1 : likeCount}</CountComponent>
      </LikeWrapper>
      <MarkWrapper isActive={isMarked} onClick={() => clickMarkFn(articleId)}>
        <SvgMark />
      </MarkWrapper>
    </Wrapper>
  );
}
