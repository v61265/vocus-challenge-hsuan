import Head from 'next/head';
import { useState } from 'react';
import { styled } from 'styled-components';
import ArticleCard from '~/components/article-card';
import { API_ENDPOINT } from '~/config';
import { Article, ArticleData } from '~/types/article';

const Main = styled.main`
  background: var(--Gray7, #f9f7f5);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
`;

const ArticleList = styled.ul`
  padding: 28px 20px;
  display: flex;
  gap: 4px;
  background: var(--Gray7, #f9f7f5);
  width: fit-content;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md} {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    gap: 21px 25px;
    max-width: 907px;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 40px;
  width: fit-content;
  text-align: center;
`;

const MarkFilterBtn = styled.button`
  border: 1px solid var(--Secondary-Dark, #222222);
  color: var(--Secondary-Dark, #222222);
  padding: 8px;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    background: #f9f7f5;
  }
  &:focus {
    outline: none !important;
  }
`;

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  const firstArticle = articles?.[0] ?? {};
  const [renderedArticles, setRenderedArticles] = useState<Article[]>(
    articles.slice(0, 4)
  );
  const [isOnlyShowMarked, setIsOnlyShowMarked] = useState<boolean>(false);

  const handleClickFilterArticle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cookies = document.cookie.split('; ');
    const markCookie = cookies.find((cookie: string) =>
      cookie.startsWith('markedIds=')
    );
    if (isOnlyShowMarked) {
      setIsOnlyShowMarked(false);
      return setRenderedArticles(articles.slice(0, 4));
    }
    if (!markCookie) {
      alert('您還沒有收藏任何文章');
    } else {
      const markedIds = markCookie.split('=')[1].split(',');
      setRenderedArticles(() =>
        articles.filter((article) => markedIds.includes(article._id))
      );
    }
    setIsOnlyShowMarked(true);
  };

  return (
    <>
      <Head>
        <title> {firstArticle.title ?? 'vocus F2E challenge'}</title>
        <meta name='description' content={firstArticle.abstract} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='https://vocus.cc/static/favicon.ico' />
        <meta
          property='og:title'
          content={firstArticle.title ?? 'vocus F2E challenge'}
        />
        <meta
          property='og:description'
          content={firstArticle.abstract ?? 'Explore the latest articles.'}
        />
        <meta
          property='og:image'
          content={
            firstArticle.thumbnailUrl ??
            'https://images.vocus.cc/static/og_img/vocus_kv.jpeg'
          }
        />
        <meta property='og:type' content='website' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={firstArticle.title ?? 'vocus F2E challenge'}
        />
        <meta
          name='twitter:description'
          content={firstArticle.abstract ?? 'Explore the latest articles.'}
        />
        <meta
          name='twitter:image'
          content={
            firstArticle.thumbnailUrl ??
            'https://images.vocus.cc/static/og_img/vocus_kv.jpeg'
          }
        />
      </Head>
      <Main>
        <BtnWrapper>
          <MarkFilterBtn onClick={handleClickFilterArticle}>
            僅顯示我收藏文章
          </MarkFilterBtn>
        </BtnWrapper>
        <ArticleList>
          {renderedArticles.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
        </ArticleList>{' '}
      </Main>
    </>
  );
}

/**
 * @type {import('next').GetServerSideProps}
 */
export async function getServerSideProps() {
  // res.setHeader('Cache-Control', `public, max-age=600`);
  let articles: Article[] = [];
  function getRandomArticles(data: ArticleData): Article[] {
    const { articles } = data;
    return articles.sort(() => 0.5 - Math.random());
  }

  try {
    const dataResponse: ArticleData = await fetch(
      `${API_ENDPOINT}/api/articles?userId=601aa114fd89780001d24d4d`
    ).then((response) => response.json() as Promise<ArticleData>);
    articles = getRandomArticles(dataResponse);
  } catch (error) {
    console.log('error when fetch post', error);
  }

  const props = {
    articles,
  };

  return { props };
}
