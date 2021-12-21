// Import Components
import AllIces from "./pages/AllIces";
import SingleIce from "./pages/SingleIce";
import Form from "./pages/Form";

// Import Hooks
import { useState, useEffect } from "react"

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom"


function App() {
  
  ////////////////////////
  // State and Other Variables 
  ////////////////////////

  const navigate = useNavigate()

  const url = "https://mlaude-ice-backend.herokuapp.com/ices/";

  // state to hold list of ices
  const [ices, setIces] = useState([]);
  
  // an empty ice cream for initializing the create form
  const nullIce = {
    name: "",
    image: "",
    caption: "",
    description: "",
    ingredients: ""
  }

  const [targetIce, setTargetIce] = useState(nullIce)

  ////////////////////////
  // Functions 
  ////////////////////////
  // function to get list of ice creams from API
  const getIces = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setIces(data);
  };

  // function to add ice creams
  const addIces = async (newIce) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newIce)
    });

    // update the list of ices
    getIces()
  }

  // to select an ice cream to edit
  const getTargetIce = (ice) => {
    setTargetIce(ice);
    navigate("/edit");
  };

  // update ice cream for handlesubmit prop
  const updateIce = async (ice) => {
    await fetch(url + ice.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ice),
    });

    getIces();
  };

  // function to delete ice cream
  const deleteIce = async (ice) => {
    await fetch(url + ice.id, {
      method: "delete"
    })

    getIces()
    navigate("/")
  }

  ////////////////////////
  // useEffects 
  ////////////////////////
  useEffect(() => {
    getIces()
  }, [])


  ////////////////////////
  // Returned JSX 
  ////////////////////////
  return (
    <div className="App">
      <h1>My Ice Cream List</h1>
      <Link to="/new">
        <button>Create New Ice Cream</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllIces ices={ices}/>}/>
        <Route path="/ice/:id" element={<SingleIce
          ices={ices}
          edit={getTargetIce}
          deleteIce={deleteIce}
        />} />
        <Route path="/new" element={<Form
          initialIce={nullIce}
          handleSubmit={addIces}
          buttonLabel="Create"
        />} />
        <Route path="/edit" element={<Form
          initialIce={targetIce}
          handleSubmit={updateIce}
          buttonLabel={"Update Ice Cream"}
        />} />
      </Routes>
    </div>
  );
}

export default App;
