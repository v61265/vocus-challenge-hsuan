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
            sizes='110px'
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
              sizes='30px'
            />
          </Avatar>
          <AuthorName>{article.user.fullname}</AuthorName>
        </Author>
      </CardBottom>
    </CardWrapper>
  );
}
