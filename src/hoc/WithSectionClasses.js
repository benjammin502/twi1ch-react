import React from 'react'

const WithSectionClasses = (props) => {
  return (
    <section id={props.id} className={props.className}>
      {props.children}
    </section>
  )
}

export default WithSectionClasses
