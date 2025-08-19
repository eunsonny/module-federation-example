import { Suspense, lazy } from 'react';
import App from 'next/app';
import dynamic from 'next/dynamic';
const Nav = lazy(() => {
  console.log(import('layout/gnb'));
  return import('layout/gnb');
});

function MyApp({ Component, pageProps }) {
  console.log('in app');
  return (
    <>
      <Suspense fallback={'loading'}>
        <Nav />
      </Suspense>
      <Component {...pageProps} />
      <div className="test">test</div>
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  console.log('in app getInitialProps');
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
