/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help() {
  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](/calculate-docs/docs/getting-started/installation)`,
      title: 'Browse Docs',
    },
    {
      content: '[Ask questions](https://github.com/git-ced/calculate/issues) about the documentation and project.',
      title: 'Join the community',
    },
    {
      content: "Find out [what's new](https://github.com/git-ced/calculate/releases) with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>
            This project is maintained by
            <a href="https://github.com/git-ced" style={{color: '#000'}}> Prince Neil Cedrick Castro</a>
            .
          </p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
