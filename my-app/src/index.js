import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image } from 'semantic-ui-react';
import { Icon, List, Grid, Divider } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const imageStyle = { paddingLeft: "20%" };
    const itemStyle = { paddingRight: "20%" };
    return (
        <div class="topmenu">
          <Menu borderless fixed="top" fluid>
            <Menu.Item style={imageStyle}>
              <Image src="https://d2dqksvx8j00ig.cloudfront.net/CCAP/monavie/mv-logo2.png"/>
            </Menu.Item>
            <Menu.Item position="right">
              BUY NOW
            </Menu.Item>
            <Menu.Item style={itemStyle}>
              <Icon name="shopping cart" size="large"/>
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}

class MiddleImage extends React.Component {
  render() {
    return (
        <Container fluid>
          <Image fluid src="https://d2dqksvx8j00ig.cloudfront.net/CCAP/monavie/mv-bg.jpg"/>
        </Container>

    );
  }
}

class LeftFooterList extends React.Component {
  render() {
    const headerStyle = {
      color: "white",
      fontSize: "large",
      fontWeight: "lighter"
    };
    return (
        <List relaxed="very">
          <List.Item>
            <svg class="ui tiny image" height="80px" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M400,100 l-300,0 l0,574 c0,148,87,201,150,244 c62,-43,150,-96,150,-244 Z M649,1066 l0,134 l-100,0 l0,-134 c0,-195,201,-171,201,-392 l0,-574 l-150,0 l0,-100 l250,0 l0,674 c0,259,-201,269,-201,392 Z M999,1066 l0,134 l-100,0 l0,-134 c0,-195,201,-171,201,-392 l0,-574 l-150,0 l0,-100 l250,0 l0,674 c0,259,-201,269,-201,392 Z M0,0 l500,0 l0,674 c0,259,-201,269,-201,393 l0,133 l-100,0 l0,-133 c0,-124,-199,-134,-199,-393 Z M0,0 " fill="rgba(255,255,255,1.0)" transform="matrix(0.05,0.0,0.0,-0.05,20.0,80.0)"></path>
            </svg>
          </List.Item>
          <List.Item>
            <Header style={headerStyle} as="h1">
              Experience Monavie
            </Header>

          </List.Item>
          <Divider hidden/>
          <List.Item>
            The world's premier Acai juice blend
          </List.Item>
          <List.Item>
            A delicious fusion of 19 super fruits
          </List.Item>
          <List.Item>
            Acai harvested from the Amazon rainforest
          </List.Item>
          <List.Item>
            Loaded with nutrient dense superfoods
          </List.Item>
          <List.Item>
            No artificial flavors, colors or sweeteners
          </List.Item>
          <List.Item>
            Natural antioxidants and phytonutrients
          </List.Item>
        </List>
    );
  }
}

class MiddleFooterList extends React.Component {
  render() {
    const headerStyle = {
      color: "white",
      fontSize: "large",
      fontWeight: "lighter"
    };
    return (
      <List relaxed="very">
        <List.Item>
          <svg class="ui tiny image" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<g id="Layer_1"></g>
							<g id="Layer_2">
								<path d="M24.423,13.124C24.793,12.133,25,11.078,25,10c0-4.963-4.038-9-9-9s-9,4.037-9,9c0,1.078,0.207,2.133,0.577,3.124   C3.29,13.809,0,17.522,0,22c0,4.963,4.038,9,9,9c2.83,0,5.355-1.316,7.007-3.364C17.69,29.734,20.245,31,23,31c4.962,0,9-4.037,9-9   C32,17.522,28.71,13.809,24.423,13.124z M16,3c3.86,0,7,3.141,7,7c0,1.071-0.257,2.11-0.719,3.049   c-2.477,0.199-4.739,1.402-6.274,3.316c-1.511-1.875-3.755-3.128-6.294-3.328C9.254,12.101,9,11.066,9,10C9,6.141,12.14,3,16,3z    M9,29c-3.86,0-7-3.141-7-7s3.14-7,7-7s7,3.141,7,7S12.86,29,9,29z M23,29c-2.387,0-4.579-1.22-5.854-3.198   C17.688,24.645,18,23.36,18,22s-0.312-2.645-0.854-3.802C18.421,16.22,20.613,15,23,15c3.86,0,7,3.141,7,7S26.86,29,23,29z" fill="rgba(255,255,255,1.0)"></path>
								<polygon fill="rgba(255,255,255,1.0)" points="9.943,15.643 9,16.586 8.057,15.643 6.643,17.057 7.586,18 6.643,18.943 8.057,20.357 9,19.414 9.943,20.357    11.357,18.943 10.414,18 11.357,17.057  "></polygon>
								<polygon fill="rgba(255,255,255,1.0)" points="24.293,15.293 23.35,16.236 22.407,15.293 20.993,16.707 21.936,17.65 20.993,18.593 22.407,20.007 23.35,19.064    24.293,20.007 25.707,18.593 24.764,17.65 25.707,16.707  "></polygon>
								<polygon fill="rgba(255,255,255,1.0)" points="14.374,9.624 15.316,8.681 16.259,9.624 17.673,8.21 16.73,7.267 17.673,6.324 16.259,4.91 15.316,5.853    14.374,4.91 12.959,6.324 13.902,7.267 12.959,8.21  "></polygon>
							</g>
							<g id="Layer_3"></g>
							<g id="Layer_4"></g>
						</svg>
        </List.Item>
        <List.Item>
          <Header style={headerStyle} as="h1">
            Antioxidants
          </Header>
        </List.Item>
        <Divider hidden/>
        <List.Item>
          Powerful antioxidant blend
        </List.Item>
        <List.Item>
          Acai berry, Blueberry
        </List.Item>
        <List.Item>
          Cranberry, Pomegranate
        </List.Item>
        <List.Item>
          Grape, Banana, Kiwi
        </List.Item>
        <List.Item>
          Apple, Pear, Camu Camu
        </List.Item>
        <List.Item>
          Wolfberry, Prune, Bilberry
        </List.Item>
      </List>
    );
  }
}

class RightFooterList extends React.Component {
  render() {
    const headerStyle = {
      color: "white",
      fontSize: "large",
      fontWeight: "lighter"
    };
    return (
      <List relaxed="very">
        <List.Item>
          <svg class="ui tiny image" enable-background="new 0 0 48 48" height="48px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M39.552,11.818c-0.026-0.281-0.17-0.537-0.395-0.707c-0.226-0.171-0.516-0.234-0.788-0.184   c-0.314,0.06-0.648,0.09-0.992,0.09c-1.647,0-3.439-0.688-5.172-1.353c-1.023-0.394-2.082-0.8-3.113-1.064   c-0.335-0.087-0.656-0.191-0.973-0.295c-0.906-0.294-1.867-0.603-3.002-0.516c-2.024,0.146-4.226,0.864-6.167,1.498   c-0.529,0.173-1.047,0.342-1.545,0.494c-3.147,0.964-5.365,1.048-7.521,0.311c-0.281-0.097-0.588-0.063-0.842,0.091   c-0.253,0.154-0.425,0.412-0.47,0.704c-0.132,0.864-0.196,1.638-0.196,2.364c0,8.614,7.009,15.623,15.623,15.623   s15.623-7.009,15.623-15.623C39.623,12.768,39.596,12.292,39.552,11.818z" fill="rgba(255,255,255,1.0)"></path>
							<path d="M44.911,13.252c0-4.685-1.514-9.113-4.379-12.807c-0.339-0.436-0.966-0.516-1.403-0.177   c-0.436,0.338-0.516,0.967-0.177,1.403c2.59,3.339,3.959,7.344,3.959,11.58c0,10.427-8.483,18.91-18.911,18.91   S5.089,23.679,5.089,13.252c0-4.263,1.384-8.286,4.002-11.636c0.34-0.436,0.263-1.064-0.172-1.404   C8.48-0.129,7.854-0.05,7.515,0.384C4.619,4.089,3.089,8.539,3.089,13.252c0,11.066,8.647,20.127,19.536,20.841V46h-8.309   c-0.553,0-1,0.447-1,1s0.447,1,1,1h19.367c0.553,0,1-0.447,1-1s-0.447-1-1-1h-8.309V34.093   C36.264,33.379,44.911,24.318,44.911,13.252z" fill="rgba(255,255,255,1.0)"></path>
						</g>
					</svg>
        </List.Item>
        <List.Item>
          <Header style={headerStyle} as="h1">
            Phytonutrients
          </Header>
        </List.Item>
        <Divider hidden/>
        <List.Item>
          Proprietary MonaVie Acai blend:
        </List.Item>
        <List.Item>
          Loaded with natural phytonutrients
        </List.Item>
        <List.Item>
          Targeted nutrition for the body
        </List.Item>
        <List.Item>
          Promotes a more active lifestyle
        </List.Item>
        <List.Item>
          Delivers antioxidant protection
        </List.Item>
        <List.Item>
          Offers multiple nutritional benefits
        </List.Item>

      </List>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid container columns={3} relaxed centered>
            <Grid.Column floated="right" verticalAlign="left">
              <LeftFooterList />
            </Grid.Column>
          <Grid.Column floated="right" verticalAlign="left">
            <MiddleFooterList />
          </Grid.Column>
          <Grid.Column floated="right" verticalAlign="left">
            <RightFooterList />
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

class MonaVie extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <Footer/>
        </div>
    );

  }

}

ReactDOM.render(
    <MonaVie/>,
    document.getElementById('root')
);
