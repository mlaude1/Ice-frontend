import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'

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
    
    <h1 className="title has-text-centered">Add a new ice cream</h1>
    
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input is-rounded" 
          type="text" 
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder="What's it called?"
        />
      </div>
    </div>
    
    <div class="field">
      <label class="label">Image</label>
      <div class="control">
        <input class="input is-rounded" 
          type="text"
          onChange={handleChange}
          value={formData.image}
          name="image"
          placeholder="Image URL"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Caption</label>
      <div class="control">
        <input class="input is-rounded" 
          type="text"
          onChange={handleChange}
          value={formData.caption}
          name="caption"
          placeholder="Give it a catchy phrase"
        />
      </div>
    </div>
    
    <div class="field">
      <label class="label">Ingredients</label>
      <div class="control">
        <input class="input is-rounded" 
          type="text"
          onChange={handleChange}
          value={formData.ingredients}
          name="ingredients"
          placeholder="What's inside?"
        />
      </div>
    </div>
    
    <div class="field">
      <label class="label">Details</label>
      <div class="control">
        <textarea class="textarea" 
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
          placeholder="Add a description"
        >
        </textarea>
      </div>
    </div>
    
    <br />
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-info">Submit</button>
      </div>
      <div class="control">
        <Link to="/">
          <button class="button is-info is-light">Cancel</button>
        </Link>
      </div>
    </div>
    
  </form>
}

export default Form
