import React from 'react'

const WithContainer = (props) => {
  const container = props.container === 'true' ? 'container mx-auto' : '';
  console.log(container);

  return (
    <div id={props.id} className={container}>{props.children}</div>
  )
}

export default WithContainer
