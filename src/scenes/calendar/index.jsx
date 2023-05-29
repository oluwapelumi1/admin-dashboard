import React from 'react'
import { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, Typography, useTheme } from '@mui/materials'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.Palette.mode)
}

export default Calendar
