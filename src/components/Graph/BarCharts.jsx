/* eslint-disable space-before-function-paren */
import React, { useRef } from 'react'
import styled from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarCharts = () => {
  const chart = useRef()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          color: 'rgb(0,0,0)',
          pointStyle: 'circle'
        }
      }
    },
    layout: {
      padding: 20
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return '$ ' + value
          }
        }
      }
    }
  }

  const labels = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Expense',
        data: [50, 10, 0, 1, 3, 28, 50, 51],
        backgroundColor: '#0f62fe'
      },
      {
        label: 'Income',
        data: [50, 10, 0, 1, 3, 28, 50],
        backgroundColor: '#a7f0ba'
      }
    ]
  }

  return (
    <Container>
      <div className="flex2h"></div>
      <Center>
        <CenterHeader>
          <CenterHeaderLeft>
            <span>Transactions</span>
          </CenterHeaderLeft>
          <CenterHeaderRight>
            <WrapperInput>
              <Placeholder>Filter by</Placeholder>
              <Select name="" id="">
                <option value="">Expense {'&'} Income</option>
                <option value="">Expense</option>
                <option value="">Income</option>
              </Select>
            </WrapperInput>
            <WrapperInput>
              <Placeholder>Period</Placeholder>
              <Select name="" id="">
                <option value="">This week</option>
                <option value="">This month</option>
                <option value="">This year</option>
              </Select>
            </WrapperInput>
          </CenterHeaderRight>
        </CenterHeader>
        <WrapperAnalytics>
          <Bar ref={chart} options={options} data={data} />
        </WrapperAnalytics>
      </Center>
      <div className="flex2h"></div>
    </Container>
  )
}

export default BarCharts

const WrapperAnalytics = styled.div`
  padding: 10px;
`

const Select = styled.select`
  border: 0;
  cursor: pointer;
  outline: 0;
  font-family: InterMedium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue);
`

const Placeholder = styled.span`
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--blue-gray);
`

const WrapperInput = styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  padding: 12px;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
`

const CenterHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`
const CenterHeaderLeft = styled.div`
  span {
    font-family: InterSemiBold;
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--dark-blue);
  }
`
const CenterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 28px 28px 0px 28px;
`

const Center = styled.div`
  display: flex;
  flex: 8;
  border-radius: 8px;
  border: solid 1px var(--light-gray);
  background-color: var(--white);
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 28px;
  .flex2h {
    display: flex;
    flex: 2;
  }
`
