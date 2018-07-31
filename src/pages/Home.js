import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from '../components/Hero';
import logo from '../images/nldc2019-logo.png';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const Lorem = styled.p`
  max-width: 2em;
`;

class Home extends Component {
  render() {
    return (
      <App>
        <AppHeader>
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/pages/Home.js</code> and save to reload.
        </AppIntro>
        <Hero />
        <Lorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Etiam dignissim diam quis enim lobortis scelerisque. Suspendisse ultrices gravida dictum fusce ut placerat orci. At quis risus sed vulputate odio. Ultrices eros in cursus turpis massa tincidunt dui ut. Donec pretium vulputate sapien nec sagittis. Non nisi est sit amet. Augue eget arcu dictum varius duis at consectetur lorem.

Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Ante metus dictum at tempor. Odio morbi quis commodo odio. Faucibus in ornare quam viverra orci sagittis eu volutpat. Non arcu risus quis varius quam. Pretium fusce id velit ut tortor. Eu volutpat odio facilisis mauris sit amet massa vitae. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Nulla facilisi nullam vehicula ipsum a. Diam quis enim lobortis scelerisque fermentum. In egestas erat imperdiet sed euismod nisi porta lorem. Augue eget arcu dictum varius duis. Tincidunt id aliquet risus feugiat in ante metus dictum at. Pretium viverra suspendisse potenti nullam ac. Magna fringilla urna porttitor rhoncus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.

Ultricies tristique nulla aliquet enim tortor at. In metus vulputate eu scelerisque felis imperdiet. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sit amet justo donec enim diam. Aliquet risus feugiat in ante metus dictum at tempor commodo. Egestas congue quisque egestas diam in arcu. Et leo duis ut diam quam nulla porttitor. Porttitor massa id neque aliquam vestibulum. Non diam phasellus vestibulum lorem sed risus ultricies. Etiam erat velit scelerisque in dictum non consectetur a erat. Turpis in eu mi bibendum neque egestas congue.

Pretium aenean pharetra magna ac placerat vestibulum. Id volutpat lacus laoreet non. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Nunc sed id semper risus in hendrerit. Eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget. Lectus arcu bibendum at varius vel pharetra vel. Molestie at elementum eu facilisis. Turpis egestas maecenas pharetra convallis posuere morbi leo. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Ac tortor vitae purus faucibus ornare suspendisse sed. Dui sapien eget mi proin sed libero. Vestibulum sed arcu non odio euismod lacinia. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.

Eget mauris pharetra et ultrices neque ornare aenean euismod. Aliquam vestibulum morbi blandit cursus. Odio facilisis mauris sit amet massa vitae tortor. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nibh ipsum consequat nisl vel pretium lectus quam. Urna et pharetra pharetra massa. Elit ullamcorper dignissim cras tincidunt. Non arcu risus quis varius quam quisque id. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nibh tortor id aliquet lectus. Rhoncus dolor purus non enim praesent elementum. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Scelerisque fermentum dui faucibus in. Ut etiam sit amet nisl purus in. Ornare massa eget egestas purus viverra accumsan. Blandit aliquam etiam erat velit scelerisque in. Sit amet risus nullam eget felis eget nunc lobortis mattis.

Quam viverra orci sagittis eu volutpat odio facilisis. Volutpat est velit egestas dui id ornare. Augue ut lectus arcu bibendum at varius vel pharetra. Arcu cursus vitae congue mauris rhoncus. Augue mauris augue neque gravida in fermentum. Faucibus et molestie ac feugiat sed lectus. Fames ac turpis egestas maecenas pharetra convallis. Eget aliquet nibh praesent tristique magna sit amet purus gravida. In tellus integer feugiat scelerisque varius morbi enim nunc. Tellus molestie nunc non blandit massa. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Est sit amet facilisis magna etiam tempor orci eu. Tristique nulla aliquet enim tortor at auctor. Mauris pellentesque pulvinar pellentesque habitant. Integer eget aliquet nibh praesent tristique magna sit amet. Nibh sit amet commodo nulla facilisi nullam vehicula. Augue ut lectus arcu bibendum at varius vel.

Mauris pellentesque pulvinar pellentesque habitant morbi. Iaculis urna id volutpat lacus laoreet non. Elementum facilisis leo vel fringilla est ullamcorper eget. Cursus turpis massa tincidunt dui ut ornare lectus sit. Sociis natoque penatibus et magnis dis parturient montes. In arcu cursus euismod quis viverra nibh. Tellus at urna condimentum mattis pellentesque id nibh tortor. Ut sem nulla pharetra diam sit. Pharetra et ultrices neque ornare aenean. Dui faucibus in ornare quam viverra orci sagittis.

A iaculis at erat pellentesque adipiscing commodo elit at. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Facilisi nullam vehicula ipsum a arcu cursus. Elementum eu facilisis sed odio morbi. Vitae purus faucibus ornare suspendisse sed nisi. Egestas dui id ornare arcu odio ut sem nulla pharetra. Sit amet mattis vulputate enim. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Et ligula ullamcorper malesuada proin libero nunc consequat.

Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Praesent tristique magna sit amet purus gravida quis blandit. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Tristique risus nec feugiat in fermentum posuere. Nulla aliquet porttitor lacus luctus. Tortor dignissim convallis aenean et tortor at. Nec feugiat in fermentum posuere urna nec. Porttitor lacus luctus accumsan tortor. Facilisis gravida neque convallis a cras. Scelerisque viverra mauris in aliquam sem fringilla. Venenatis cras sed felis eget velit aliquet sagittis id. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Massa tincidunt dui ut ornare lectus sit. Ut venenatis tellus in metus. Volutpat blandit aliquam etiam erat. Ultrices in iaculis nunc sed. Faucibus in ornare quam viverra orci sagittis eu. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Eget arcu dictum varius duis.

Nam aliquam sem et tortor consequat id. Diam phasellus vestibulum lorem sed risus ultricies. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sit amet volutpat consequat mauris. Aliquet risus feugiat in ante. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Vitae ultricies leo integer malesuada nunc vel risus. Donec pretium vulputate sapien nec sagittis aliquam. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Diam donec adipiscing tristique risus nec. Amet tellus cras adipiscing enim eu turpis. Sed risus ultricies tristique nulla. Urna neque viverra justo nec ultrices dui. Rhoncus urna neque viverra justo nec ultrices dui sapien. Consectetur lorem donec massa sapien faucibus et. Sapien eget mi proin sed libero enim sed faucibus. Fermentum leo vel orci porta.
        </Lorem>
      </App>
    );
  }
}

export default Home;
