import "../estilos/campotexto.css";

// pwd = password ou senha
interface Props {
  name: string;
  label: string;
  pwd?: boolean;
  required?: boolean;
}

export default function CampoTexto({ name, label, pwd=false, required=false }: Props) {

  return (
    <>
      <div className="label_campo">
        <input
          type={pwd ? "password" : "text"}
          name={name}
          id={name}
          required={required}
        />
        <label>{label}</label>
      </div>
    </>
  );
}
