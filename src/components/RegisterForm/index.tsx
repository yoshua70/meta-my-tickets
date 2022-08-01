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


  const onSubmit = async (data: Register) => {};

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h1 className="text-2xl">Inscription</h1>
      <div className="input-container">
        <label htmlFor="name">Nom et prénoms</label>
        <input type="text" placeholder="John Doe" {...register("name")} />
        <p className="text-red-500">{errors.name && errors.name.message}</p>
      </div>
      <div className="input-container">
        <label htmlFor="phone">Téléphone</label>
        <div className="flex gap-2">
          <select {...register("diallingCode")}>
            <option>+225</option>
          </select>
          <input type="text" placeholder="0101010101" {...register("phone")} />
        </div>
        <p className="text-red-500">
          {errors.diallingCode && errors.diallingCode.message}
        </p>
        <p className="text-red-500">{errors.phone && errors.phone.message}</p>
      </div>
      <div className="input-container">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" {...register("password")} />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
      </div>
      <div className="input-container">
        <label htmlFor="password_confirmation">Confirmation mot de passe</label>
        <input type="password" {...register("password_confirmation")} />
        <p className="text-red-500">
          {errors.password_confirmation && errors.password_confirmation.message}
        </p>
      </div>
      <button className="w-full">Inscription</button>
    </form>
  );
};
