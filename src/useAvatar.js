import { colors } from "./colors";
const useAvatar = e => {
  const handleContent = () => {
    var res = e.split(" ", 2);
    let first = res[0];
    let seconde = res[1];
    const dist = (first[0] + seconde[0]).toUpperCase();
    return dist;
  };
  const dist = handleContent();

  const handleColor = () => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let color = alphabet.indexOf(dist[0].toLowerCase());
    const picked = colors[color];

    return picked;
  };

  return [handleContent(), handleColor()];
};
export default useAvatar;
