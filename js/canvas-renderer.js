/**
 * Canvas Rendering Engine
 */

class CanvasRenderer {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.centerY = this.height / 2;
        this.poleX = 100;
        this.scale = options.scale || 1;
        this.pixelsPerUnit = options.pixelsPerUnit || 20;
        this.showGrid = options.showGrid !== false;
        this.showLabels = options.showLabels !== false;
    }

    clear(bgColor = '#ffffff') {
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawPrincipalAxis(color = '#999999', width = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.centerY);
        this.ctx.lineTo(this.width, this.centerY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    drawPole(color = '#000000', size = 6) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(this.poleX, this.centerY, size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawFocus(focalLength, color = '#f59e0b', size = 4) {
        const focalX = this.poleX + focalLength * this.pixelsPerUnit;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(focalX, this.centerY, size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}
