import { Component, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'my-flash',
  styleUrl: 'my-flash.css'
})
export class MyFlash {

  @Element() flashElement: HTMLElement;

  @State() active: boolean = false;
  @State() message: string;
  @State() activeClass: string = 'primary';

  private timeout: any;
  private timeBar: HTMLElement;

  componentDidLoad(){
    this.timeBar = this.flashElement.querySelector('.time-bar');
  }

  @Method() show(message: string, activeClass: string, duration: number): void {
    
    this.message = message;
    this.activeClass = activeClass;
    this.active = true;

    this.timeBar.style.opacity = '0.3';
    this.timeBar.style.transition = 'width ' + duration + 'ms linear';
    this.timeBar.style.width = '0%';

    this.timeout = setTimeout(() => {
      this.dismiss();
    }, duration)

  }

  dismiss(){
    this.active = false;
    this.timeBar.style.opacity = '0';
    this.timeBar.style.transition = 'none';
    this.timeBar.style.width = '100%';
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div onClick={() => this.dismiss()} class={'flash-container ' + (this.active ? 'show ' : 'hide ') + this.activeClass}>
        
        <div class="message">
          {this.message}
        </div>

        <p class="dismiss">tap to dismiss</p>

        <div class="time-bar-container">
          <div class="time-bar"></div>
        </div>

      </div>
    );
  }
}
