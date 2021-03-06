import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import Cards from '../Cards'

import { VscDebugRestart as Restart } from 'react-icons/vsc'

function index() {
  
  const [time, setTime] = useState({s:0, m:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  const table = useRef()
  const timer = useRef()

  const start = () => {
    table.current.style.filter = 'grayscale(0)'
    timer.current.style.color = 'rgb(255, 208, 0)'
    console.log(status)
    run()
    setStatus(1)
    setInterv(setInterval(run, 1000))
  }

  var UpdateS = time.s, UpdateM = time.m;

  const run = () => {
    if(UpdateS === 60) {
      UpdateM++;
      UpdateS = 0;
    }
    if(UpdateM === 60) {
        UpdateM++;
        UpdateM = 0;
    }
    UpdateS++;
    return setTime({m:UpdateM, s:UpdateS})
  }

  let [gotItRight, setGotItRight] = useState([])
  const restart = () => {document.location.reload()}
  
  useEffect(()=>{
      if(gotItRight.length === 6) {
        console.log(gotItRight)
        clearInterval(interv)
        timer.current.style.color = 'rgb(36, 182, 0)'
    }
  },[gotItRight])
  
  return (
    <section className='container'>
    <div className='box'>
      <div className='headerGame'>
        <h2 className='title'>Memory Game</h2>
        <p className='timer' ref={timer}>
        <span>{(time.m >= 10) ? time.m : '0' + time.m}:</span>
        <span>{(time.s >= 10) ? time.s : '0' + time.s}</span>
        </p>
        <button className='restart' onClick={restart}><Restart /></button>
      </div>
      <div className='table' ref={table}>
        <Cards status={status} gotItRight={gotItRight} setGotItRight={setGotItRight}/>
      </div>
      <div className='play'>
        <button className={status === 0 ? 'start' : 'startoff'} onClick={start}>Start</button>
      </div>
    </div>
  </section>
  )
}

export default index