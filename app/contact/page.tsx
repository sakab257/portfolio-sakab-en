'use client'

import {Input, TextArea} from '@/components/contact/input'
import {Button} from '@/components/contact/button'
import React, { useState } from 'react'
import Mail from '@/components/contact/mail'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = () => {
    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!formData.subject.trim()) {
      setError('Please enter the message subject')
      return
    }
    if (!formData.message.trim()) {
      setError('Please enter your message')
      return
    }

    setError('')

    // Construct email body with user info
    const emailBody = `${formData.message}\n\nName: ${formData.name}`
    const mailtoLink = `mailto:salim.bouskine@dauphine.eu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className='w-full h-full'>
      <h1 className="w-full text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-3">
        Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">contact me</span>?
      </h1>
      <p className="text-center text-[#C1C2D3]/70 text-sm md:text-base mb-8">
        Fill out the form below to automatically send me an email
      </p>
      <div className='w-full h-full flex flex-col gap-4 mt-6'>
        <Input
          placeholder='Your name'
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Input
          placeholder='Your email'
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Input
          placeholder='Subject'
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
        />
        <TextArea
          placeholder='Your message'
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        {error && (
          <p className='text-center text-red-400 text-sm'>
            {error}
          </p>
        )}
        <Button onClick={handleSubmit}>
          Send message
        </Button>
        <Mail />
      </div>
    </div>
  )
}

export default ContactPage
