import React from 'react'
import Heatmap from 'react-calendar-heatmap'
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'

import { Container, Wrapper } from './styles'
import { HeatmapValue } from './types'

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  const generateHeatmapValues = (start: Date, end: Date) => {
    const values: HeatmapValue[] = []
    let currentDate = start
    while (isBefore(currentDate, end) || isSameDay(currentDate, end)) {
      const count = Math.random() * 4
      values.push({ date: currentDate, count: Math.round(count) })
      currentDate = addDays(currentDate, 1)
    }
    return values
  }

  return (
    <Container>
      <Wrapper>
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          gutterSize={3.5}
          values={generateHeatmapValues(startDate, endDate)}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0
            if (item !== null) {
              clampedCount = Math.max(item.count, 0)
              clampedCount = Math.min(item.count, 4)
            }
            return `scale-${clampedCount}`
          }}
          showWeekdayLabels
        />
      </Wrapper>
      <span> Random calendar (do not represent actual data)</span>
    </Container>
  )
}

export default RandomCalendar
