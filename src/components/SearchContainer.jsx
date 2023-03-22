import IconSearch from '../assets/IconSearch';
import InputWithIcon from './InputWithIcon';

const SearchContainer = (props) => {
  const { handleOnChange, handleOnSubmit, value } = props;

  return (
    <form onSubmit={handleOnSubmit}>
      <InputWithIcon
        onChange={handleOnChange}
        value={value}
        icon={
          <button>
            <IconSearch />
          </button>
        }
      />
    </form>
  );
};

export default SearchContainer;
