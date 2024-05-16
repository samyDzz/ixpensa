import DownloadReport from '../components/DownloadReport'
import BarCharts from '../components/Graph/BarCharts'
import CategoryAndHistory from '../components/Graph/CategoryAndHistory'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'

const Charts = () => {
  return (
    <>
      <Header />
      <Hero />
      <DownloadReport />
      <BarCharts />
      <CategoryAndHistory />
    </>
  )
}

export default Charts
