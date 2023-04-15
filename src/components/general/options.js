
export default function Options({ list }) {
  return list.map((item) => (<option value={item}>{item}</option>));
}
