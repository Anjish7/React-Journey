import React from 'react'
import Section1 from './components/Section1/Section1'

const users = [
  {
    id: 1,
    mark: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Rohit is a frontend developer who loves building clean UI with React and Tailwind.",
    buttonText: "Frontend Dev",
  },
  {
    id: 2,
    mark: "2",
    image:
      "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
    description:
      "Priya works on UX research and helps teams design better user experiences.",
    buttonText: "UX Designer",
  },
  {
    id: 3,
    mark: "3",
    image:
      "https://images.unsplash.com/photo-1621784563286-84f7646ef221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
    description:
      "Aman is a backend engineer focusing on APIs, databases, and scalability.",
    buttonText: "Backend Dev",
  },
  {
    id: 4,
    mark: "4",
    image:
      "https://media.gettyimages.com/id/2085135619/photo/beverly-hills-california-sydney-sweeney-attends-the-35th-glaad-media-awards-los-angeles-at.jpg?s=612x612&w=gi&k=20&c=9iOfLG74Eg-T-7dSBSHGDz448QjOdw8p1b-MH3padc8=",
    description:
      "Sneha is learning full-stack development and building real-world projects.",
    buttonText: "Full Stack",
  },
  {
    id: 5,
    mark: "5",
    image:
      "https://assets.teenvogue.com/photos/6406048bea175e99d64ede22/4:3/w_2560%2Cc_limit/IZRRc4Ro.jpg",
    description:
      "Karan is a product manager who bridges the gap between tech and business.",
    buttonText: "Product",
  },
  {
    id: 6,
    mark: "6",
    image:
      "https://assets.vogue.com/photos/684968bad7fa74da1b0e3b91/master/w_2560%2Cc_limit/GettyImages-2219551862.jpg",
    description:
      "Neha focuses on QA and makes sure the product is bug-free before release.",
    buttonText: "QA Engineer",
  },
];


function App() {
  return (
    <div >
      <Section1 user={users}/>

    </div>
  )
}

export default App
