import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  testFlash(){
    let flashComponent = document.querySelector('my-flash');
    flashComponent.show('Our SCV\'s are under attack!', 'danger', 2000);
  }

  render() {
    return (
      <div class='app-home'>

        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <ion-button onClick={() => this.testFlash()}>Test Flash</ion-button>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
