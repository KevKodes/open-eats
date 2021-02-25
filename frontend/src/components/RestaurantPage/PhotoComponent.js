import './PhotoComponent.css';

export default function PhotoComponent({ photo }) {

  return (
    <>
      <img src={photo.imageUrl} />
    </>
  )
}