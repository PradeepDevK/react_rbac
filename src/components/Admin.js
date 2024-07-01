import React from 'react'

export default function Admin({currentUser}) {
  return (
    (currentUser === "admin") ?
    <div>
      Admin
    </div>
    : <div>You are not authorized</div>
  )
}
