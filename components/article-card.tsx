import styled from 'styled-components';
import { Article } from '~/types/article';
import Image from 'next/image';
import LikeAndMark from './like-and-mark';
import { useEffect, useState } from 'react';

const CardWrapper = styled.li`
  display: block;

  padding-bottom: 20px;
  margin-bottom: 20px;
  gap: 20px;
  background: var(--Gray7, #f9f7f5);
  border-bottom: 1px solid var(--Gray4, #cbc3c2);
  max-width: 335px;
  ${({ theme }) => theme.breakpoint.md} {
    max-width: fit-content;
    width: 441px;
    padding: 16px 20px;
    border-radius: 6px;
    border: 1px solid var(--Gray4, #cbc3c2);
    background: var(--White, #fff);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
  }
`;

const CardTop = styled.div`
  display: flex;
  gap: 29px;
`;

const TitleAndAbstract = styled.div``;

const Title = styled.h2`
  color: var(--Secondary-Dark, #222);
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.breakpoint.md} {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Abstract = styled.p`
  color: var(--Gray2, #665e5c);
  font-size: 14px;
  line-height: 20.5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  ${({ theme }) => theme.breakpoint.md} {
    margin-top: 15px;
    font-size: 16px;
    line-height: 27px;
  }
`;

const Thumb = styled.div`
  position: relative !important;
  min-width: 100px;
  height: 52.5px;
  border-radius: 3px;
  overflow: hidden;
  margin: 0;
  ${({ theme }) => theme.breakpoint.md} {
    width: 110px;
    height: 57.75px;
  }
`;

const CardBottom = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
  justify-content: space-between;
`;

const Author = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Avatar = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
  margin: 0;
`;

const AuthorName = styled.span`
  color: var(--Gray1, #222);
  font-size: 13px;
  line-height: 13px;
`;

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [markedIds, setMarkedIds] = useState<string[]>([]);
  const setCookie = (name: string, value: string, maxAgeInDays: number) => {
    const maxAge = maxAgeInDays * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
  };
  useEffect(() => {
    const cookies = document.cookie.split('; ');

    //like
    const cookie = cookies.find((cookie: string) =>
      cookie.startsWith('likedIds=')
    );
    setLikedIds(cookie ? cookie.split('=')[1].split(',') : []);
    //mark
    const markCookie = cookies.find((cookie: string) =>
      cookie.startsWith('markedIds=')
    );
    setMarkedIds(markCookie ? markCookie.split('=')[1].split(',') : []);
  }, []);

  const handleClickLike = (id: string) => {
    setLikedIds((prev) => {
      const newLikeId = [...prev];
      if (likedIds.includes(id)) {
        const index = likedIds.indexOf(id);
        newLikeId.splice(index, 1);
      } else {
        newLikeId.push(id);
      }
      setCookie('likedIds', newLikeId.join(','), 7);
      return newLikeId;
    });
  };

  const handleClickMark = (id: string) => {
    setMarkedIds((prev) => {
      const newMarkId = [...prev];
      if (newMarkId.includes(id)) {
        const index = newMarkId.indexOf(id);
        newMarkId.splice(index, 1);
      } else {
        newMarkId.push(id);
      }
      setCookie('markedIds', newMarkId.join(','), 7);
      return newMarkId;
    });
  };

  const {
    likeCount = 0,
    title = '',
    abstract = '',
    thumbnailUrl = 'https://images.vocus.cc/static/og_img/vocus_kv.jpeg',
    user: {
      avatarUrl = 'https://images.vocus.cc/static/og_img/vocus_kv.jpeg',
      fullname = '',
    },
    _id = '',
  } = article;
  return (
    <CardWrapper>
      <CardTop>
        <TitleAndAbstract>
          <Title>{title}</Title>
          <Abstract>{abstract}</Abstract>
        </TitleAndAbstract>
        <Thumb>
          <Image
            src={thumbnailUrl}
            alt={thumbnailUrl}
            style={{ objectFit: 'cover' }}
            fill
            sizes='110px'
          />
        </Thumb>
      </CardTop>
      <CardBottom>
        <Author>
          <Avatar>
            <Image
              src={avatarUrl}
              alt={fullname}
              style={{ objectFit: 'cover' }}
              fill
              sizes='30px'
            />
          </Avatar>
          <AuthorName>{fullname}</AuthorName>
        </Author>
        <LikeAndMark
          likeCount={likeCount}
          articleId={_id}
          isLiked={likedIds.includes(_id)}
          isMarked={markedIds.includes(_id)}
          clickLikeFn={handleClickLike}
          clickMarkFn={handleClickMark}
        />
      </CardBottom>
    </CardWrapper>
  );
}
