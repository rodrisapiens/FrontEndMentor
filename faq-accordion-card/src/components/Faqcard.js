import React from 'react'
import "./card.css"
import Imgbox from "./illustration-box-desktop.svg"
import Qbox from './Qbox'
function Faqcard() {
    return (
        <div className="card">
            <div className="left">
                <img src={Imgbox} alt="box" className="box" />
            </div>

            <div className="faq">
                <h1 className="title">FAQ</h1>
                <Qbox question={"How many team members can I invite?"} answer={"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."} />
                <Qbox question={"What is the maximum file upload size?"} answer={"No more than 2GB. All files in your account must fit your allotted storage space."} />
                <Qbox question={"How do I reset my password?"} answer={"Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."} />
                <Qbox question={"Can I cancel my subscription?"} answer={"Yes! Send us a message and we’ll process your request no questions asked."} />
                <Qbox question={"Do you provide additional support?"} answer={"Chat and email support is available 24/7. Phone lines are open during normal business hours."} />
            </div>
        </div>

    )
}

export default Faqcard
/* How many team members can I invite?
  You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.

  What is the maximum file upload size?
  No more than 2GB. All files in your account must fit your allotted storage space.

  How do I reset my password?
  Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.

  Can I cancel my subscription?
  Yes! Send us a message and we’ll process your request no questions asked.

  Do you provide additional support?
  Chat and email support is available 24/7. Phone lines are open during normal business hours. */