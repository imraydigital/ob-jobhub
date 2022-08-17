import React from 'react'
//CSS

const DualForm = () => {
  return (
        <>
        <input type="date" name="dob" />
        <input type="text" placeholder="Enter postcode"/>
        <input type="text" placeholder="Have you lived in the UK/EU for the past 3 years?"/>
        <div>
          <label>Have you got a National Insurance Number</label>
        <input type="checkbox"/>
        </div>
        <div>
                <label>Are you currently unemployed?</label>
                <input type="checkbox" name="unemployed" />
                <input type="checkbox" name="employed" />
            </div>
            <div>
                <label>Are you currently studying at College or University?</label>
                <input type="checkbox" name="studying"/>
                <input type="checkbox" name="notStudying"/>
            </div>

        </>

  )
}

export default DualForm;