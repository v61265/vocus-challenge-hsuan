import Head from 'next/head';
import { styled } from 'styled-components';
import ArticleCard from '~/components/article-card';
import { API_ENDPOINT } from '~/config';
import { Article, ArticleData } from '~/types/article';

const Main = styled.main`
  background: var(--Gray7, #f9f7f5);
  margin: 0;
  display: flex;
  justify-content: center;
  min-height: 100dvh;
`;

const ArticleList = styled.ul`
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--Gray7, #f9f7f5);
  width: fit-content;
  ${({ theme }) => theme.breakpoint.md} {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: auto;
    padding: 0;
    gap: 21px 25px;
    height: fit-content;
  }
`;

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  const firstArticle = articles?.[0] ?? {};
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
        <ArticleList>
          {articles.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
        </ArticleList>
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
  function getRandomArticles(data: ArticleData, count: number = 4): Article[] {
    const { articles } = data;
    const shuffledArticles = articles.sort(() => 0.5 - Math.random());
    return shuffledArticles.slice(0, count);
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
