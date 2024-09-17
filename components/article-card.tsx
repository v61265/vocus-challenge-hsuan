import styled from 'styled-components';
import Link from 'next/link';
import { Article } from '~/types/article';
import Image from 'next/image';

const CardWrapper = styled.li`
  display: block;
  width: 100vwh;
  padding-bottom: 20px;
  margin-bottom: 20px;
  gap: 20px;
  background: var(--Gray7, #f9f7f5);
  border-bottom: 1px solid var(--Gray4, #cbc3c2);
  max-width: 335px;
`;

const CardTop = styled.div`
  display: flex;
  gap: 29px;
`;

const TitleAndAbstract = styled.div``;

const Title = styled.h2`
  color: var(--Secondary-Dark, #222);
  font-size: 16px;
  font-style: normal;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
`;

const Thumb = styled.div`
  position: relative !important;
  min-width: 100px;
  height: 52.5px;
  border-radius: 3px;
  overflow: hidden;
  margin: 0;
`;

const CardBottom = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Author = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
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
  return (
    <CardWrapper>
      <CardTop>
        <TitleAndAbstract>
          <Title>{article.title}</Title>
          <Abstract>{article.abstract}</Abstract>
        </TitleAndAbstract>
        <Thumb>
          <Image
            src={article.thumbnailUrl}
            alt={article.thumbnailUrl}
            style={{ objectFit: 'cover' }}
            fill
          />
        </Thumb>
      </CardTop>
      <CardBottom>
        <Author>
          <Avatar>
            <Image
              src={article.user.avatarUrl}
              alt={article.user.fullname}
              style={{ objectFit: 'cover' }}
              fill
            />
          </Avatar>
          <AuthorName>{article.user.fullname}</AuthorName>
        </Author>
      </CardBottom>
    </CardWrapper>
  );
}
