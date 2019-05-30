import React from 'react';

class Canvas extends React.Component {

    componentDidMount() {
        var ctx = document.getElementById('canvas').getContext('2d');

        var myBarChart = new window.Chart(ctx, {
           
            type: 'bar',
            data: {
            labels: ["Very Negativ", "Negativ", "Neutral", "Postiv", "VeryPositv"],
            datasets: [
            {
            label: "",
            backgroundColor: ["red", "orange","grey","blue","green"],
            data: [15,2,2,4,2]
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
        

 
        /*var chart = new window.Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
        
            // Configuration options go here
            options: {}
        });
      }*/
    }


    render() {
        return(
            <canvas width='2000' id="canvas" />
        )
      }
    }
    export default Canvas