import Button from '../buttons/Button.tsx'

type ListElementProps = {
  element_number: number;
  text: string;  
  class_name: string; 
  onClick: (num? : number) => void;
};

function ListElement(props: ListElementProps) {
    const {class_name, element_number, text, onClick } = props;

    let id = "element" + element_number;
    return (
        <div className={class_name}>
            <div>
                <input type="checkbox" id={id} name={id} />
                <label htmlFor={id}>{text}</label>
            </div>
            <div>
                <Button text="Delete" onClick={onClick}/>
            </div>
        </div>
    );
}

export default ListElement;