import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid white;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: blacks;
    color: white;
  }
`

export default function InitialComponent () {
  return (
    <div className="card card-body mb-3" style={{ width: '50%', margin: 'auto' }}>
      <div className="row">
        <div className="col-md-12 mb-3">
          <Button><Link to={'/countries'}>Get All Countries</Link></Button>
          <p>Route : /countries</p>
        </div>
      </div>

    </div>
  )
}
