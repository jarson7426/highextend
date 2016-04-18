!function(t,e){"object"==typeof module&&module.exports?module.exports=t.document?e(t):e:t.Highextend=e(t)}("undefined"!=typeof window?window:this,function(t){function e(e,r){var i="Highextend error: "+e;if(r)throw new Error(i);t.console&&console.error(i)}function r(t,e,r){this.elem=t,this.data=e||{},this.options=r||{}}var i,n="0.0.3",o=(t.Highcharts||e("Highcharts is not found",!0),'<div style="padding-top:100px;text-align:center;font-size:16px;">sorry,没有查询到数据！</div>'),s={chart:{backgroundColor:"#fff",events:{load:null}},title:{text:null},subtitle:{text:""},labels:{items:[]},legend:{itemStyle:{color:"#606060"},itemHoverStyle:{color:"#999"}},credits:{enabled:!1},colors:["#09c","#ff9800","#096","#00bcd4","#fc6","#0277bd","#f63","#4caf50","#9c27b0","#607d8b","#069","#e91e63","#cddc39","#673ab7","#795548"],xAxis:{tickmarkPlacement:"on",labels:{}},yAxis:{gridLineInterpolation:"polygon",title:{text:""},labels:{}},pane:{size:"100%"},tooltip:{xDateFormat:"%Y-%m-%d",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgba(96, 96, 96, .8)"],[1,"rgba(16, 16, 16, .8)"]]},borderWidth:0,style:{color:"#FFF"}},plotOptions:{series:{fillOpacity:.2,marker:{symbol:"circle",fillColor:"#fff",lineWidth:2}},pie:{showInLegend:!0,allowPointSelect:!0,size:"105%",innerSize:"55%",dataLabels:{enabled:!1,color:"#333333",connectorColor:"#333333",format:"<b>{point.name}</b>:{point.percentage:.1f}%"},events:{}},scatter:{marker:{radius:8,states:{hover:{lineColor:"rgb(100,100,100)"}}},tooltip:{headerFormat:"<b>{point.key}</b><br/>"}},bubble:{marker:{radius:5,states:{hover:{lineColor:"rgb(100,100,100)"}}},tooltip:{headerFormat:"<b>{point.key}</b><br/>"}},bar:{},areaspline:{}}},a={config:{},legendArr:["legendEnabled","legendLayout","legendAlign","legendItemMarginBottom","legendVerticalAlign"],tooltipArr:["valuePrefix","valueSuffix","xDateFormat","shared"],pieArr:["size","innerSize","showInLegend","startAngle","endAngle"],pieEventArr:["pieClick","pieMouseOut","pieMouseOver"]},l={convertData:function(t,e,r){var i=t.items||[],n=[];if("pie"==r||"pyramid"==r){for(var o=0;o<i.length;o++)n.push([i[o].name,i[o].data]);return[{name:"%"==e.valueSuffix?"占比":e.pieLabel||"数量",data:n}]}if("polar"==r){for(var s=0;s<i.length;s++)i[s].pointPlacement="on";return i}if("mix"==r){for(var a={center:e.mixPieCenter&&e.mixPieCenter||[100,60],size:e.mixPieSize&&e.mixPieSize||"60%",innerSize:e.mixPieInnerSize&&e.mixPieInnerSize||0,showInLegend:e.miePieShowInLegend?!0:!1},l=0;l<i.length;l++)if("pie"==i[l].type)for(var p in a)i[l][p]=a[p];return i}return i},replaceStr:function(t,e){var r=t.replace(e,"");return r.replace(/\b\w+\b/g,function(t){return t.substring(0,1).toLowerCase()+t.substring(1)})},formatRate:function(t){return 1024>t?function(){return 0==t?0:t+"KB"}():function(){return 1048576>t?Math.round(t/1024*Math.pow(10,2))/Math.pow(10,2)+"MB":function(){return Math.round(t/1048576*Math.pow(10,2))/Math.pow(10,2)+"GB"}()}()},cloneObj:function(t){var e=t.constructor==Object?new t.constructor:new t.constructor(t.valueOf());for(var r in t)e[r]!=t[r]&&("object"==typeof t[r]?e[r]=l.cloneObj(t[r]):e[r]=t[r]);return e},dateFormatter:function(t,e,r,i){if("datetime"==e.Xtype){var n=parseInt(r.timeScope.interval);return n>=864e5?"axis"==i?Highcharts.dateFormat("%m-%d",t):function(){return"tooltip"==i?"%Y-%m-%d":Highcharts.dateFormat("%Y-%m-%d",t)}():n>=36e5?"axis"==i?Highcharts.dateFormat("%H:%M",t):function(){return"tooltip"==i?"%Y-%m-%d %H:%M":Highcharts.dateFormat("%Y-%m-%d %H:%M",t)}():"axis"==i?Highcharts.dateFormat("%H:%M:%S",t):function(){return"tooltip"==i?"%Y-%m-%d %H:%M:%S":Highcharts.dateFormat("%Y-%m-%d %H:%M:%S",t)}()}return t}},p=function(){this.version=n,this.defaultConfig=s};p.prototype={set:function(t,e){if(void 0!==e){var r=t.split(".");1==r.length?a.config[r[0]]=e:2==r.length?a.config[r[0]][r[1]]=e:3==r.length?a.config[r[0]][r[1]][r[2]]=e:4==r.length&&(a.config[r[0]][r[1]][r[2]][r[3]]=e)}},setExtendConfig:function(t,e){var r=e.rateUnit||1;this.set("xAxis.categories",t.categories),this.set("xAxis.type",e.Xtype),this.set("xAxis.tickWidth",e.XtickWidth),this.set("yAxis.title.text",e.Ytitle),this.set("yAxis.tickInterval","rate"==e.Ytype?1024*r:null),this.set("xAxis.labels.formatter",function(){return l.dateFormatter(this.value,e,t,"axis")}),this.set("yAxis.labels.formatter",function(){var t=parseInt(this.value);return"rate"==e.Ytype?l.formatRate(t):this.value}),this.set("plotOptions.areaspline.fillColor",function(){return!t.items||t.items.length>1?void 0:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]]}}()),this.set("tooltip.xDateFormat",l.dateFormatter("",e,t,"tooltip")),"rate"==e.Ytype&&this.set("tooltip.formatter",function(){var r=l.dateFormatter(this.x,e,t,"rateTooltip"),i="<b>"+r+"</b>";if(e.shared&&"object"==typeof this.points)for(var n=this.points,o=0;o<n.length;o++)i+='<br/><span style="color:'+n[o].color+'">●</span>  '+n[o].series.name+": "+l.formatRate(n[o].y);else i+='<br/><span style="color:'+this.point.color+'">●</span>  '+this.point.series.name+": "+l.formatRate(this.point.y);return i})},setPieConfig:function(t,e){var r=a.pieArr;e.pieClick&&(this.set("plotOptions.pie.allowPointSelect",!1),this.set("plotOptions.pie.cursor","pointer")),this.set("plotOptions.pie.dataLabels.enabled",e.showPercentLabels||!1);for(var i=0;i<r.length;i++){var n=r[i];this.set("plotOptions.pie."+n,e[n])}for(var o=a.pieEventArr,s=0;s<o.length;s++){var p=o[s];this.set("plotOptions.pie.events."+l.replaceStr(p,"pie"),e[p])}},setPolarConfig:function(t,e){this.set("xAxis.categories",t.categories),this.set("yAxis.gridLineInterpolation",e.polarType),this.set("pane.size",e.polarSize),this.set("xAxis.lineWidth",0)},setBarConfig:function(t,e){var r=[{categories:t.categories,labels:{step:1}},{opposite:!0,categories:t.categories,linkedTo:0,labels:{step:1}}];this.set("xAxis",r),this.set("plotOptions.bar.stacking",e.barStacking||null)},getConfig:function(t,e,r,i){"polar"==i?this.set("chart.polar",!0):this.set("chart.type",i),this.set("chart.renderTo",t),this.set("chart.backgroundColor",r.backgroundColor),this.set("chart.marginTop",r.marginTop),this.set("chart.marginRight",r.marginRight),this.set("chart.events.load",r.chartLoad),this.set("colors",r.colors),this.set("title.text",r.title||null),this.set("subtitle.text",r.subtitle);var n=[];n.push(r.chartLabel&&r.chartLabel||{});this.set("labels.items",n),this.set("plotOptions.series.pointStart",e.timeScope&&parseInt(e.timeScope.start)||null),this.set("plotOptions.series.pointInterval",e.timeScope&&parseInt(e.timeScope.interval)||null),this.set("plotOptions.series.marker.enabled",r.markerEnabled),this.set("plotOptions.series.marker.symbol",r.markerSymbol),this.set("plotOptions.series.marker.lineColor",null),this.set("series",l.convertData(e,r,i));for(var o=a.legendArr,s=0;s<o.length;s++){var p=o[s],c=l.replaceStr(p,"legend");this.set("legend."+c,r[p])}this.set("tooltip.crosshairs",r.shared);for(var h=a.tooltipArr,u=0;u<h.length;u++){var f=h[u];this.set("tooltip."+f,r[f])}return this.set("tooltip.pointFormatter",function(){var t=r.valuePrefix?r.valuePrefix:"",e=r.valueSuffix?r.valueSuffix:"";return'<span style="color:'+this.color+'">●</span> '+t+this.series.name+": "+Math.abs(this.y)+e+"<br/>"}),("scatter"==i||"bubble"==i)&&(this.set("plotOptions.series.marker",{}),this.set("plotOptions.series.marker.symbol","circle"),this.set("chart.zoomType","xy")),a.config},getChartConfig:function(t,e,r,i){a.config=l.cloneObj(this.defaultConfig),"pie"==i?this.setPieConfig(e,r):"polar"==i?this.setPolarConfig(e,r):"bar"==i&&"normal"==r.barStacking?(this.setBarConfig(e,r),this.set("yAxis.labels.formatter",function(){return Math.abs(this.value)})):this.setExtendConfig(e,r);var n=this.getConfig(t,e,r,i);return n}},r.prototype=new p,r.prototype.constructor=r,r.prototype.draw=function(t){Highcharts.setOptions({global:{useUTC:!1}}),this.type=t;var e=this.elem,r=this.data,i=this.options;if(!r.items||0===r.items.length){var n=i.emptyHtml||o;return void("string"==typeof e?document.getElementById(e).innerHTML=n:e.html(n))}var s=t||"spline";if("string"==typeof e){var a=this.getChartConfig(e,r,i,s);this.fn=new Highcharts.Chart(a)}else{var a=this.getChartConfig("",r,i,s);delete a.chart.renderTo,e.highcharts(a)}return this},r.prototype.reload=function(){this.draw(this.type)},i={line:function(t,e,i){return new r(t,e,i).draw("line")},spline:function(t,e,i){return new r(t,e,i).draw("spline")},scatter:function(t,e,i){return new r(t,e,i).draw("scatter")},bubble:function(t,e,i){return new r(t,e,i).draw("bubble")},column:function(t,e,i){return new r(t,e,i).draw("column")},bar:function(t,e,i){return new r(t,e,i).draw("bar")},area:function(t,e,i){return new r(t,e,i).draw("areaspline")},pie:function(t,e,i){return new r(t,e,i).draw("pie")},polar:function(t,e,i){return new r(t,e,i).draw("polar")},pyramid:function(t,e,i){return new r(t,e,i).draw("pyramid")},mix:function(t,e,i){return new r(t,e,i).draw("mix")}},t.Hxt?e("Hxt is already exits",!0):t.Hxt=i});