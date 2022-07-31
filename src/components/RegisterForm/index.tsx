import { useForm } from "react-hook-form";
import { Register, RegisterSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: Register) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h1 className="text-2xl">Inscription</h1>
      <div className="input-container">
        <label htmlFor="name">Nom et prénoms</label>
        <input type="text" placeholder="John Doe" {...register("name")} />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Téléphone</label>
        <div className="flex gap-2">
          <select {...register("diallingCode")}>
            <option>+225</option>
          </select>
          <input type="text" placeholder="0101010101" {...register("phone")} />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" {...register("password")} />
      </div>
      <div className="input-container">
        <label htmlFor="password_confirmation">Confirmation mot de passe</label>
        <input type="password" {...register("password_confirmation")} />
      </div>
      <button className="w-full">Inscription</button>
    </form>
  );
};
