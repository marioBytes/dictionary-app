import Input from './Input';

const InputWithIcon = (props) => {
  const { icon, id, name, onChange, value } = props;

  return (
    <div className="relative w-full mb-5">
      <Input id={id} name={name} onChange={onChange} value={value} />
      <div className="absolute top-0 right-0 p-6">{icon}</div>
    </div>
  );
};

export default InputWithIcon;
