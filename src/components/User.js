export default function UserComponent(props) {
  return (
    <span className="user">
      <span className="name">{props.userInfo.name}</span>
      <span className="handle">{props.userInfo.handle}</span>
    </span>
  );
}
