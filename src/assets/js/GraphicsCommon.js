
class graphicsCommon {
    constructor(canvasContext) {
        this.ctx = canvasContext
    }

    colorCircle( centerX, centerY, radius, fillColor) {
        this.ctx.fillStyle = fillColor;
        this.ctx.beginPath();
        this.ctx.arc(centerX,centerY, radius, 0, Math.PI *2, true);
        this.ctx.fill();
    }

    drawBitmapWithRotation(useBitmap, atX, atY, withAngle) {
        this.ctx.save();
        this.ctx.translate(atX, atY);
        this.ctx.rotate(withAngle);
        this.ctx.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
        this.ctx.restore();
    }

    colorRect( topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
        this.ctx.fillStyle = fillColor;
        this.ctx.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
    }

    colorText(words, textX,textY, fillColor ) {
        this.ctx.fillStyle = fillColor;
        this.ctx.fillText(words, textX, textY)

    }

}

export default graphicsCommon;