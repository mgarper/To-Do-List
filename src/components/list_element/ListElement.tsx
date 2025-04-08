import Button from '../buttons/Button.tsx'

type ListElementProps = {
  element_number: number;
  text: string;  
  class_name: string; 
  isCompleted: boolean;
  onChange: (num? : number) => void;
  onClick: (num? : number) => void;
};

function ListElement(props: ListElementProps) {
    const {class_name, isCompleted, element_number, text, onChange, onClick } = props;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(element_number);
    }

    let id = "element" + element_number;
    return (
        <div className={class_name}>
            <div>
                <input type="checkbox" id={id} name={id} onChange={handleOnChange} checked={isCompleted}/>
                <label htmlFor={id}>{text}</label>
            </div>
            <div>
                <Button text="Delete" onClick={onClick}/>
            </div>
        </div>
    );
}

export default ListElement;