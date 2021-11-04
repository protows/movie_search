import { useLocation } from "react-router";

interface Props { }

const NoMatch = (props: Props) => {
  let location = useLocation();


  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        <img src="../img/404.jpg" alt="lorem" />
      </h3>
    </div>
  );
};




export default NoMatch;
