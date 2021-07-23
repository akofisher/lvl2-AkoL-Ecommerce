import React from 'react'
import ScrollToTop from '../../scroll'
import AdminLoyout from '../adminLoyout/adminLoyout'
import AdminContent from '../components/adminContent/adminContent'

export default function AdminProp() {
  return (
    <AdminLoyout>
      <ScrollToTop />
      <AdminContent />
    </AdminLoyout>
  )
}
