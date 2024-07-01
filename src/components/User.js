import React from 'react'

export default function User({currentUser}) {
  return (
    (currentUser === "admin" || currentUser === "register") ?
    <div>
      User
    </div>
    : <div>You cannot access this page.</div>
  )
}
