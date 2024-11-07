import { FormEvent, useRef, useState } from "react";

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null)
  //   const person = {name: '', age: 0}
  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     if (nameRef.current !== null) person.name = nameRef.current.value;
  //     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);

  //   };
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   ref={nameRef}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
          type="text"
          name=""
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   ref={ageRef}
          onChange={(e) =>
            setPerson({ ...person, age: e.target.value })
          }
          value={person.age}
          type="number"
          name=""
          id="age"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
