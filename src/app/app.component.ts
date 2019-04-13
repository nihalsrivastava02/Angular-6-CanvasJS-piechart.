import { Component, OnInit} from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent implements OnInit {
  title = 'consumption';
	ngOnInit() {
	let chart = new CanvasJS.Chart("chartContainer", {
		theme: "light1",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Browsers Consumption"
		},
		data: [{
			type: "pie",
      showInLegend: false,
      fontFamily: "comic sans ms",
      explodeOnClick :true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
      // indexLabel: "{name} - #percent%",
      visible: true,
			dataPoints: [
				{ y: 145, name: "firefox",color: "#1ad1ff" },
				{ y: 120, name: "chorme",color: " #66e0ff" },
				{ y: 300, name: "netscape",color: "#99ebff" },
				{ y: 800, name: "opera",color : "#1ab2ff" },
				{ y: 150, name: "tor",color:" #538cc6" },
				{ y: 150, name: "uc browser"},
        { y: 250, name: "bvbv" , color: "#0099cc"},
        { y: 250, name: "random",color : "#3385ff" },
        { y: 250, name: "others",color:"#99ebff" }
      ]
		}]
	});
		
  chart.render();
  chart.destroy();
    }
}
