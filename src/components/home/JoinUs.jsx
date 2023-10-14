import React from 'react'
import Card from './Card'

const cards = [
  {head: 'Commencement of business', 
  body: 'Invested shareholders must confirm payment and office address', 
  foot: {dueDate: 'Within 180 days', penalty: [{amount: '₹50,000 ', desc: "for the company"},
  ]},
  badge: {pos: '1', sup: 'st'}
  }, {
    head: 'Auditor Appointment', 
    body: 'Company informs new auditor and submits ADT.1 form to ROC.', 
    foot: {dueDate: 'Within 30 days', penalty: [{amount: '₹3,000 ', desc: "per month."}]},
    badge: {pos: '2', sup: 'nd'}
  }, {
    head: 'DIN eKYC', 
    body: 'Directors share personal information for identification & verification', 
    foot: {dueDate: 'Every Year', penalty: [{amount: '₹5000 ', desc: "one time"}]},
    badge: {pos: '3', sup: 'rd'}
  }, {
    head: 'DPT-3', 
    body: 'Companies report money taken from people to ROC; auditors confirm details.', 
    foot: {dueDate: 'Within 30 days', penalty: [{amount: '₹300 ', desc: "per month."}]},
    badge: {pos: '4', sup: 'th'}
  }, {
    head: 'MCA Form AOC-4', 
    body: "It's like an official report card for a company's documents", 
    foot: {dueDate: 'On or Before 30th November', penalty: [{amount: '₹200 ', desc: "per day (No upper limit)*"}]},
    badge: {pos: '5', sup: 'th'}
  }, {
    head: 'MCA Form MGT-7', 
    body: "Companies must annually report activities and finances to the registrar.", 
    foot: {dueDate: 'On or Before 31st December', penalty: [{amount: '₹200 ', desc: "per day (No upper limit)*"}]},
    badge: {pos: '6', sup: 'th'}
  }
]

function JoinUs() {
  return (
    <div className='flex flex-col items-center px-3 pt-4'>
      <h2 className='text-6xl font-bold text-black '>Want to <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Join</span> Us?</h2>

      <p className='text-black text-2xl mt-9 mb-20'>To remain with us, it is essential that you diligently follow the steps provided</p>

      <div className="card-wrapper flex flex-wrap gap-6 md:gap-16 justify-center"> {
        cards.map((item) => (
          <Card key={item.head} item={item}/>
        ))
      }
      </div>

      <p className='text-base text-black my-4'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <b>every day</b> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
    </div>
  )
}

export default JoinUs