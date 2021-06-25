import React from "react"
import { MembershipBox } from "./membership.elements"

const Membership = () => {
  return (
    <MembershipBox>
      <p>
        Kaiso Women's Group - KWG, is a membership organization whose membership
        is open to local women in kaiso and sorrounding communities. The
        organization runs under a{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          {" "}
          constitution{" "}
        </a>
        that is amendeble under yearly meetings. These meetings would be
        rewarding only if their assembly contain more than 95% representation of
        active members, Guidance and supervision is a mandate of Board of
        Directors.
      </p>
      <p>
        {" "}
        Board of Directors would further approve programmes, budgets and ratify
        internal policies, among other business. The Board is serviced by a full
        time Secretariat headed by the Executive Director who is the Chief
        Executive and Accounting officer. The Secretariat runs the day to day
        affairs of the organization headed by the Executive Director.
      </p>{" "}
      <p>
        KWG Policies are formulated by the General Assembly of Members. The
        General Assembly of members meets on annual basis to appoint senior
        staff and members. This forum provides opportunity for members to
        influence KWG Programmes and exercise their mandate on governance issues
        of the organization.
      </p>
    </MembershipBox>
  )
}

export default Membership
