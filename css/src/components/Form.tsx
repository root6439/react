import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        console.log(name, email);
        
	};

	return (
		<>
			<form onSubmit={onSubmitForm}>
				<div>
					<label>
						<span>Nome:</span>
						<input type="text" name="name" onChange={handleName} />
					</label>
					<label>
						<span>E-mail:</span>
						<input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
					</label>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
};

export default Form;
