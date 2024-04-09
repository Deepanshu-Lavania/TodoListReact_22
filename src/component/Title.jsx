import React from 'react'
import style from "./Title.module.css";

export default function Title({heading, react}) {
  return (
    <>
      <h1 className={`text-center ${style.heading}`}>{heading} {react}</h1>
    </>
  )
}
