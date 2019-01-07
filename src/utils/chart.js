import Chart from 'chart.js';

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      const activePoint = this.chart.tooltip._active[0];
      const { ctx } = this.chart;
      const { x } = activePoint.tooltipPosition();
      const topY = this.chart.scales['y-axis-0'].top;
      const bottomY = this.chart.scales['y-axis-0'].bottom;

      // Draw the line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#ddd';
      ctx.stroke();
      ctx.restore();
    }
  },
});

export default Chart;
