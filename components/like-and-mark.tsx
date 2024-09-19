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

type LikeAndMarkProps = {
  likeCount: number;
  articleId: string;
};

export default function LikeAndMark({
  likeCount,
  articleId,
}: LikeAndMarkProps) {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((cookie: string) =>
      cookie.startsWith('likedIds=')
    );

    const likedIdsValue = cookie ? cookie.split('=')[1].split(',') : [];

    if (likedIdsValue.includes(articleId)) {
      setIsLiked(true);
    }
  }, []);

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLiked((prev) => {
      const newLikedState = !prev;
      const cookies = document.cookie.split('; ');
      const cookie = cookies.find((cookie: string) =>
        cookie.startsWith('likedIds=')
      );
      const likedIdsValue = cookie ? cookie.split('=')[1].split(',') : [];

      if (newLikedState) {
        likedIdsValue.push(articleId);
      } else {
        const index = likedIdsValue.indexOf(articleId);
        if (index !== -1) {
          likedIdsValue.splice(index, 1);
        }
      }
      document.cookie = `likedIds=${likedIdsValue.join(',')}; path=/;`;

      return newLikedState;
    });
  };

  return (
    <Wrapper>
      <LikeWrapper isActive={isLiked} onClick={handleClickLike}>
        <SvgLike />
        <CountComponent>{isLiked ? likeCount + 1 : likeCount}</CountComponent>
      </LikeWrapper>
      <SvgMark />
    </Wrapper>
  );
}
