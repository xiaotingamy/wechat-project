Page({
    data: {
        currentTime: 1481201423708,
        page: 2,
        pages:94,
        products:[
            {
                id:100,
                financePeriod:65,
                increaseInterest:0,
                interestDate:"2016-12-06",
                label:"",
                lowestAmount:200,
                name:"新手专享72期",
                productContract:null,
                risk:"超低",
                shippedTime:1480932000000,
                totalAmount:100000,
                actualAmount:100000,
                yearIncome:9.6,
            },
            {
                id:101,
                financePeriod:65,
                increaseInterest:0,
                interestDate:"2016-12-09",
                label:"",
                lowestAmount:200,
                name:"嘉家乐75期",
                productContract:null,
                risk:"超低",
                shippedTime:1480932000000,
                totalAmount:100000,
                actualAmount:18000,
                yearIncome:13.3,
            },
            {
                id:102,
                financePeriod:120,
                increaseInterest:0,
                interestDate:"2016-12-09",
                label:"",
                lowestAmount:200,
                name:"嘉家乐76期",
                productContract:null,
                risk:"超低",
                shippedTime:1480932000000,
                totalAmount:100000,
                actualAmount:8000,
                yearIncome:16,
            }
        ]
    },
     onLoad: function(options) {
        // Do some initialize when page load.
        console.log('ss');
    },
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    },
    onReady: function (e) {
        var context = wx.createContext();
        var products = this.data.products;
       products.forEach(function(obj){
           var rate = (obj.actualAmount/obj.totalAmount).toFixed(6);
           var percent = rate * 100;
           console.log(percent);
           var showPercent = new Number(percent).toFixed();
           if (percent > 0 && percent < 1){
               showPercent = 1;
           } else if (percent > 99 && percent < 100) {
               showPercent = 99
           } else if (percent >=100){
               showPercent = 100;
           }
            context.clearActions();
            context.beginPath();
            context.arc(25,25,20,0,Math.PI*2,true);
            context.setStrokeStyle("#dddddd");
            context.setLineWidth(2);
            context.stroke();
            context.closePath();
            if(percent < 100 && percent > 0) {
                context.beginPath();
                context.arc(25,25,20,0, Math.PI * 2 * rate, false);
                context.setStrokeStyle("#da3417");
                context.setLineWidth(2);
                context.stroke();
                context.closePath();
                context.moveTo(25,25);
                context.setFillStyle('#da3417');
                if(percent >= 10){
                    context.fillText(showPercent + '%',12,30)
                } else {
                    context.fillText(showPercent + '%',16,30)
                }
            } else {
                context.moveTo(25,25);
                context.setFillStyle('#dddddd');
                context.fillText('售罄',12,30);
            }

            // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
            wx.drawCanvas({
                canvasId: 'canvas' + obj.id,
                actions: context.getActions() // 获取绘图动作数组
            })
        })
        
    }
})