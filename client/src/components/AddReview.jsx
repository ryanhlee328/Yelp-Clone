import React, {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReview = () => {
    const {id} = useParams();

    const[name, setName] = useState("");
    const[reviewText, setReviewText] = useState("");
    const[rating, setRating] = useState("Rating");

  

  return (
    <div className="mb-2">
        <form action="">
            <div className="row">
                <div className="form-row col-8">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} id="name" placeholder="Name" type="text" className="form-control"/>
                </div>
                <div className="group col">
                    <label htmlFor="rating">Rating</label>
                    <select value={rating} onChange={(e)=>setRating(e.target.value)} id="rating" className="form-select">
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea value={reviewText} onChange={(e)=> setReviewText(e.target.value)} id="Review" placeholder="Type a Review..." className="form-control"></textarea>
            </div>
            <button className="btn mt-2 btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddReview;