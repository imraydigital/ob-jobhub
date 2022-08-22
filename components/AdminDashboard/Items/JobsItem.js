import React from 'react'

const JobsItem = ({ clickHandler }) => {

  
  return (
    <button onClick={() => {
      clickHandler(() => {
        return {
          home: false,
          jobs: true,
          applications: false,
          stats: false
        }
      });
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
        <path d="M24,23H8a9,9,0,0,1-7-3.36V26a5,5,0,0,0,5,5H26a5,5,0,0,0,5-5V19.64A9,9,0,0,1,24,23Z" fill="#FFF" />
        <path d="M8 21V18.5a1 1 0 0 1 2 0V21H22V18.5a1 1 0 0 1 2 0V21a7 7 0 0 0 7-7 5 5 0 0 0-5-5H6a5 5 0 0 0-5 5A7 7 0 0 0 8 21zM16 3a9.23 9.23 0 0 1 7.59 4h2.35A11.23 11.23 0 0 0 6.06 7H8.41A9.23 9.23 0 0 1 16 3z" fill="#FFF" />
      </svg>
    </button>
  )
}

export default JobsItem