
// CHILD COMPONENT
const Avatar = ({ w, h }) => {
  return (
    <img
      src={`https://placehold.co/${w}X${h}/orange/white`}
      alt="avatar"
      width={w}
      height={h}
      style={{ borderRadius: "5%", padding: "10px" }}
    />
  )
}

export default Avatar;
