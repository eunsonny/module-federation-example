import SocialPage from 'social/social';

console.log('SARE SCOP{E', __webpack_share_scopes__);
const Social = SocialPage;
Social.getInitialProps = SocialPage.getInitialProps;
export default Social;
