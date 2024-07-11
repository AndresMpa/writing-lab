import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const saltRounds = process.env.SALT_ROUNDS;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
