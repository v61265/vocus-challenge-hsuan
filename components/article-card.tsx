import styled from 'styled-components';
import Link from 'next/link';

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

const TitleAndDesc = styled.div``;

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

const Description = styled.p`
  color: var(--Gray2, #665e5c);
  font-size: 14px;
  line-height: 20.5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Thumb = styled.figure`
  width: 100px;
  height: 52.5px;
  border-radius: 3px;
  overflow: hidden;
`;

const CardBottom = styled.div`
  display: flex;
`;

const Author = styled.div`
  display: flex;
  gap: 7px;
`;

const Avatar = styled.figure`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function ArticleCard() {
  return (
    <CardWrapper>
      <CardTop>
        <TitleAndDesc>
          <Title>誰適合使用 iPhone SE 2020 ？適合買iPhone SE2 族群...</Title>
          <Description>
            我是一個普通的使用者，首次使用IOS系統，分享這五個月的使用心得，還有SE2的優點及缺點...
          </Description>
        </TitleAndDesc>
        <Thumb></Thumb>
      </CardTop>
      <CardBottom>
        <Author>
          <Avatar></Avatar>
          <AuthorName>舒國治</AuthorName>
        </Author>
      </CardBottom>
    </CardWrapper>
  );
}
