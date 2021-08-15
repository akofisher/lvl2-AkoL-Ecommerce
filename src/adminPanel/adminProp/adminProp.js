import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../Components/Loader'
import AdminLoyout from '../../Loyout/adminLoyout/adminLoyout'
import ScrollToTop from '../../scroll'
import { selectLogedIn } from '../../store/user/userSelector'
import AdminContent from '../adminContent/adminContent'
export default function AdminProp() {
  const isLogedIn = useSelector(selectLogedIn)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <React.Fragment>
      <Loader loading={loading}>
        {isLogedIn ? (
          <AdminLoyout>
            <ScrollToTop />
            <AdminContent />
          </AdminLoyout>
        ) : (
          ''
        )}
      </Loader>
    </React.Fragment>
  )
}
