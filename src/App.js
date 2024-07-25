import { useState } from "react";
import './App.css'
import axios from "axios";

export default function App() {
    const [searchValue, setSearchValue] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.get(`http://localhost:5000/api/brawlstars/${searchValue}`);

            console.log(response.data);

        } catch (error) {
            console.log("Error has occured", error);
        }

    }

    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Player Tag:</label>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => {setSearchValue(e.target.value)}} />
                </div>
                <button type="submit">
                    <span>Search</span>
                </button>
            </form>
        </div>
    );
}