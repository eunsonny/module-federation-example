import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const productLinks = [
  { href: '/p/1', label: 'Product 1' },
  { href: '/p/2', label: 'Product 2' },
  { href: '/p/3', label: 'Product 3' },
].map(link => {
  link.key = `product-link-${link.href}-${link.label}`;
  return link;
});

const Social = props => (
  <div>
    <Head>
      <title>Social</title>
      <link rel="icon" href="/nextjs-ssr/social/public/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Social Page</h1>
      <h3 className="title">This is a federated page owned by localhost:3002</h3>
      <h3 className="title">여기는 소셜의 첫 페이지 입니다.</h3>
      <ul>
        {productLinks.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
export const getServerSideProps = async () => {
  return { props: { test: 1234 } };
};
export default Social;
