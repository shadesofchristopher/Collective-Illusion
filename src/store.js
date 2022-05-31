import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Collective illusion",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "Why false consensus in society is so dangerous? When so much trust is lost when trust in others can be eroded by the fear of rejection."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Individuals",
      image: "/you can't sit with us.png",
      aspect: 1.5,
      text:
        "Distinct from generalists: those individuals who disagree with a set of policy prescriptions, are typically less likely to say they were wrong, or think they did what they thought."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Interests",
      image: "/ph1.png",
      aspect: 1.6,
      text:
        "Those individuals who disagree with a set of policy prescriptions, are usually less likely to say they were wrong, or think they did what they thought. Implicit bias. People share an interest in certain things and people share an interest in other things. These are often very different things."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Ideas",
      image: "/ph3.png",
      aspect: 0.7,
      text:
        "We don't love our ideas. Our ideas are the product of lies. We don't understand their problems. We don't get to experience true understanding. We don't learn from your failures and have success instead of seeing how other people got it wrong."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "The future",
      image: "/the future.png",
      aspect: 1.55,
      text:
        "You cannot make decisions about the future without feeling that you don't know what your future will be like. We have to have conversations and talk to each others."
    },
    { offset: 7, factor: 1.05, header: "The Change", image: "/photo-1548191265-cc70d3d45ba1.png", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
