import React, { useState } from 'react'
import { StyledFeedbackPage } from './style'
import { Header } from '../../Components/Header'
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import emailjs from '@emailjs/browser'

export const FeedbackPage = () => {
  const values = [1,2,3,4,5,6,7,8,9,10]
  const [ satisfactionGrade, setSatisfactionGrade] = useState('')

  const setGrade = (grade)=>{
    setSatisfactionGrade(grade)
  }
  const { register, handleSubmit, reset} = useForm({})

  const handleFeedbackForm = (data) => {
    console.log(data)
    if(data.feedback.length > 0){
      const templateParams = {
        from_name:data.contact,
        topic:data.topic,
        grade: satisfactionGrade,
        message:data.feedback
      }
      emailjs.send("service_n2mmtf7","template_yffogt7",templateParams,"5ItJh1dsj9sEj-ai5")
      .then((res)=>console.log(res.status))
      toast.success('Email sent!')
      toast.success('THANK YOU!👍')
      setSatisfactionGrade('')
      reset()
    }
    else
    return toast.error(" Text area can't be blank! ❌")
  }

  return (
    <StyledFeedbackPage satisfactionGrade={satisfactionGrade}>
      <Header/>
      <main>
        <h1> YOUR FEEDBACK IS IMPORTANT!!</h1>
          <h2> Overall experience : <span>{satisfactionGrade}</span> </h2>
          <div className='grade'>
            {
              values.map(value =>(
                <button key={value} onClick={()=>{setGrade(value)}} className={'selected-grade'}> {value} </button>
              ))
            }
          </div>

          <form onSubmit={handleSubmit(handleFeedbackForm)}>
            <label htmlFor="topic"> Choose a topic to give feedback </label>
              <select name="topic" id="topic" {...register('topic')}>
                <option value="" hidden> Choose a topic</option>
                <option value="Questions" > Questions</option>
                <option value="Suggestions" > Suggestions</option>
                <option value="Complaints" > Complaints</option>
                <option value="Compliments" > Compliments</option>
                <option value="Other" > Other</option>
              </select>
              <textarea name="" id="" cols="30" rows="10" placeholder='Thank you for your time!' {...register('feedback')}></textarea>
              <input type="text" placeholder='Your email (if you want)' {...register('contact')}/>
              <button type='submit' className='submit'> Submit</button>
          </form>
      </main>
  
      
    </StyledFeedbackPage>
  )
}