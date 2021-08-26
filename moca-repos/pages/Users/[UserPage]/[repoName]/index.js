import React, {useState} from 'react';
import RepoDetails from '../../../../components/RepoDetails';

const repoPage = () => {
    return(
        <RepoDetails />
    )
}

//a little hack to make sure this page is not rendered as a static page
repoPage.getInitialProps = async (ctx) => {
    return { a:'remove warning' }
  }

export default repoPage;

