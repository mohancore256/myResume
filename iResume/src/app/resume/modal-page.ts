import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'modal-page',
  template: `
  <style>
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
 }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 25px;
 }
  .popup-container {
    display: inline-block;
 }
  .popup-container .popup-button {
    background: #333;
    line-height: 34px;
    color: #fff;
    padding: 0 20px;
    border-radius: 3px;
    display: block;
    cursor: pointer;
 }
  .popup-container .popup-button:hover {
    background: #444;
 }
  .popup-container .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;
 }
  .popup-container .popup .popup-inner {
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 150%;
    transition: 250ms all;
 }
  .popup-container .popup .popup-inner .popup-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
 }
  .popup-container .popup .popup-inner .popup-title h6 {
    font-size: 18px;
    font-weight: 500;
 }
  .popup-container .popup .popup-inner .popup-title .popup-close-btn {
    cursor: pointer;
    background: #eee;
    display: block;
    line-height: 30px;
    padding: 0 15px;
    font-size: 14px;
    color: #222;
    border-radius: 3px;
 }
  .popup-container .popup .popup-inner .popup-content ul li {
    margin-bottom: 10px;
 }
  .popup-container .popup .popup-inner .popup-content ul li:last-child {
    margin-bottom: 0;
 }
  .popup-container .popup .popup-inner .popup-content ul li input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    line-height: 34px;
    padding: 0 15px;
    font-size: 14px;
    box-sizing: border-box;
 }
  .popup-container .popup .popup-inner .popup-content ul li button {
    width: 100%;
    line-height: 34px;
    
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    background-color :#22A39F;
 }
  .popup-container .popup .popup-inner .popup-content ul li button:hover {
    background: #444;
 }
  .popup-container .popup .transparent-label {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    cursor: pointer;
 }
  .popup-container > input {
    display: none;
 }
  .popup-container > .popup {
    opacity: 1;
    visibility: visible;
 }
  .popup-container >  .popup .popup-inner {
    top: 50%;
 }

  </style>

  <div class="popup-container">
	<input type="checkbox" id="login-popup">
	<div class="popup">
		<label for="login-popup" class="transparent-label"></label>
		<div class="popup-inner">
			<div class="popup-title">
				<h6>Thank You for Contacting me!</h6>
			</div>
			<div class="popup-content">
				<form action="">
					<ul>					
            <li>I will reply back for your mail {{from}} or contact you at {{phone}}!</li>
						<li>
							<button  type="submit">Close</button>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
</div>

  `
})
export class ModalPage {
@Input() from: string;
@Input() phone: string;
  constructor(private modalCtrl: ModalController) {}
  closeModel() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}