import { useHistory } from "react-router";

export default function usePushTag(tag) {
  const history = useHistory();
  //

  return () => {
    history.location = {
      pathname: `/#${tag}`,
    };
  };
}
