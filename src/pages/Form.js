import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Form = ({ initialIce, handleSubmit, buttonLabel }) => {
  
  const navigate = useNavigate()
  
  // The Form State
  const [formData, setFormData] = useState(initialIce)

  // HandleChange to update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form is submitted
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function as props
    handleSubmit(formData)
    // return the user to Index
    navigate("/")
  }

  return <form onSubmit={handleSubmission}>
    <h1>Add a new ice cream</h1>
    <input
      type="text"
      onChange={handleChange}
      value={formData.name}
      name="name"
      placeholder="Name"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.image}
      name="image"
      placeholder="Image"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.caption}
      name="caption"
      placeholder="Caption"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.description}
      name="description"
      placeholder="Description"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.ingredients}
      name="ingredients"
      placeholder="Ingredients"
    />
    <input type="submit" value={buttonLabel} />
  </form>
}

export default Form
