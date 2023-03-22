const Input = (props) => (
  <input
    id={props.id}
    name={props.name}
    className="bg-lightest-gray dark:bg-gray rounded-2xl w-full p-5 font-bold text-xl"
    value={props.value}
    onChange={props.onChange}
  />
);

export default Input;
