/* eslint-disable react/prop-types */
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
// import { showSignTransactionWidthCurrency } from '../../utils/UtilCurrencies'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutCharts({
  circumference = 360,
  rotation = 0,
  cutout = 100,
  radius = '100%',
  total = 0
}) {
  const data = {
    labels: ['Youtube', 'restaurant'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        circumference,
        cutout,
        rotation,
        radius
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <Doughnut data={data} options={options} />
      <Total>
        <TotalText>total</TotalText>
        <TotalCost>{total}</TotalCost>
      </Total>
    </div>
  )
}

const TotalCost = styled.span`
  font-family: InterSemiBold;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.25px;
  color: var(--dark-blue);
  display: block;
`
const TotalText = styled.span`
  display: block;
  font-family: InterRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: var(--light-black);
  margin-bottom: 12px;
`
const Total = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
