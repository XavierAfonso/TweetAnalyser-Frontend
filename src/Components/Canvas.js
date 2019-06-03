import React from 'react';

class Canvas extends React.Component {

    componentDidMount() {
        var ctx = document.getElementById('canvas').getContext('2d');
        var tmp = this.props.data

        var myBarChart = new window.Chart(ctx, {
           
            type: 'bar',
            data: {
            labels: ["Very Negativ", "Negativ", "Neutral", "Postiv", "VeryPositv"],
            datasets: [
            {
            label: "",
            backgroundColor: ["red", "orange","grey","blue","green"],
            data: tmp
        }
      ]
    },
    options: {
        
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    precision: 0,
                    beginAtZero: true   // minimum value will be 0.
                }
            }]
        },
      legend: { display: false },
      title: {
        display: true,
        text: 'Nb Sentiments'
      }
    }
        });
    }

    render() {
        return(
            <canvas width='2000' id="canvas" />
        )
      }
    }
    export default Canvas