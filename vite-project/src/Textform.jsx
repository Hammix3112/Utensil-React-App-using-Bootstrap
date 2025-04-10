import React from 'react'
import { useState } from 'react'


function Textform({heading,mode,showAlert}) {
    const [text,setText]=useState(' ')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        showAlert('Text converted to Uppercase','success')
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        showAlert('Text converted to Lowercase.','success')
    }

    const changeTextOrder = () => {
        let newtext = text.split('').reverse( ).join('')
        setText(newtext)
        showAlert('The text order has been changed.','success')
    }

    const handleClearText = () => {
        let newText = ''
        setText(newText)
        showAlert('Text Area has been cleared.','success')
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
        <div>
            <div className="mb-3">
                <h3>{heading}</h3>
                <textarea className="form-control mt-1" value={text} aria-label="With textarea" onChange={handleOnChange} id='myBox' rows={6} style={{backgroundColor: mode === 'dark' ?'#333' : 'white',color : mode === 'dark' ?'white' : 'black'}}  ></textarea>
                <button className="btn btn-primary mt-2 mx-3 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mt-2 mx-3 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mt-2 mx-3 my-1" onClick={changeTextOrder}>Change Text Order</button>
                <button className="btn btn-primary mt-2 mx-3 my-1" onClick={handleClearText}>Clear Text</button>

            </div>
        </div>
        <div className='container my-3'>
            <h3>Your Text Summary</h3>
            <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters</p>
            <p>It will {0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} minutes to read this content.</p>
        </div>
        <h3>Preview</h3>
        <p>{text}</p>
        </>
    )
}

export default Textform
