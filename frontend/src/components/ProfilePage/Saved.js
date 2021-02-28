import { useDispatch } from "react-redux";


export default function ProfileSaved({ restaurantList }) {
  const dispatch = useDispatch();

  // get the saved restaurants
  let savedList = null;

  // set the content based on if there are saved restaurants
  let savedContent = null;
  if (savedList?.length && restaurantList){

  } else {
    savedContent = (
      <p className="profile-block-none">
        You have no favorite restaurants to show on this list.
      </p>
    )
  }

  return (
    <div className="profile-section-saved">
        <h2 className="profile-section-header" id="saved">Saved Restaurants</h2>
        {savedContent}
    </div>
  )
}