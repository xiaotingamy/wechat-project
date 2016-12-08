Page({
    data: {
        schedule: 50
        
    },
     onLoad: function(options) {
        // Do some initialize when page load.
        console.log('ss');
    },
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    },
    onReady: function (e) {

        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createContext()

        // context.setStrokeStyle("#00ff00")
        // context.setLineWidth(5)
        // context.rect(0, 0, 200, 200)
        // context.stroke()
        // context.setStrokeStyle("#ff0000")
        // context.setLineWidth(2)
        // context.moveTo(160, 100)
        // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
        // context.moveTo(140, 100)
        // context.arc(100, 100, 40, 0, Math.PI, false)
        // context.moveTo(85, 80)
        // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
        // context.moveTo(125, 80)
        // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
        // context.stroke()
        var canvas_w = 100;
        var canvas_h = 100;
        var line_w = 4;
        context.beginPath();
        context.arc(canvas_w / 2, canvas_h / 2, canvas_w / 2 - line_w, 0, Math.PI * 2,false);
        context.lineWidth = line_w;
        context.strokeStyle = '#d8d7d7';
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(canvas_w / 2, canvas_h / 2, canvas_w / 2 - line_w, -Math.PI * 0.5, Math.PI * 2 * this.data.schedule / 100 - Math.PI * 0.5, false);
        context.strokeStyle = '#ee5b4c';
        context.stroke();
        context.closePath();
        context.font = 'bold 32px Arial';  
        context.fillStyle = '#e74c3c';
        context.textAlign = 'center';  
        context.textBaseline = 'middle';  
        context.moveTo(canvas_w / 2, canvas_h / 2);  
        // context.fillText(text, canvas_w / 2, canvas_h / 2);

        // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
        wx.drawCanvas({
            canvasId: 'firstCanvas',
            actions: context.getActions() // 获取绘图动作数组
        })
    }
})