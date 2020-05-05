// ANCHOR React
const React = require('react');

// ANCHOR Comp Library
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

// ANCHOR Home Page Container
const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);


// ANCHOR Section Container
const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align={props.align}
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

class HomeSplash extends React.Component {
  render() {
    const {siteConfig} = this.props;

    // ANCHOR Home Page Title
    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    // ANCHOR Home Page Button
    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <Button href={`${siteConfig.baseUrl}docs/getting-started/installation`}>Try It Out</Button>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig} = this.props;

    // ANCHOR Features Section
    const Features = () => (
      <Block layout="threeColumn" align="center">
        {[
          {
            content: 'What you will use are tried and tested.',
            image: `${siteConfig.baseUrl}img/undraw_reliable.svg`,
            imageAlign: 'top',
            title: 'Reliable',
          },
          {
            content: 'Performs fast, which ensures lag-free content.',
            image: `${siteConfig.baseUrl}img/undraw_fast.svg`,
            imageAlign: 'top',
            title: 'Fast',
          },
          {
            content: 'Choose what you need, no more, no less.',
            image: `${siteConfig.baseUrl}img/undraw_modular.svg`,
            imageAlign: 'top',
            title: 'Modular',
          },
          {
            content: 'Built with typescript, ensures predictable operations.',
            image: `${siteConfig.baseUrl}img/undraw_typed.svg`,
            imageAlign: 'top',
            title: 'Typed',
          },
          {
            content: 'Functions are documented and viewable [**here**](/docs/math/sum) or in your IDE (JSDoc)',
            image: `${siteConfig.baseUrl}img/undraw_docs.svg`,
            imageAlign: 'top',
            title: 'Docs',
          },
        ]}
      </Block>
    );

    // ANCHOR Tree Shake Section
    const TreeShake = () => (
      <Block background="highlight" align="left">
        {[
          {
            content:
              'Calculate supports dead code elimination (**tree shaking**) or in simpler terms, it removes unused code.',
            image: `${siteConfig.baseUrl}img/undraw_treeshake.svg`,
            imageAlign: 'left',
            title: 'Get what you need.',
          },
        ]}
      </Block>
    );

    // ANCHOR Module Format Section
    const ModuleFormat = () => (
      <Block background="light" align="left">
        {[
          {
            content:
              'Calculate supports both ESM and CJS module formats, **import** it or **require** it however you want.',
            image: `${siteConfig.baseUrl}img/undraw_package.svg`,
            imageAlign: 'right',
            title: 'Get how you want.',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href="/">
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig}/>
        <div className="mainContainer">
          <Features />
          <TreeShake />
          <ModuleFormat />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
