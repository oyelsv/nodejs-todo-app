import * as bcrypt from 'bcrypt';

export const useHashPassword = (password: string, salt = 10): Promise<string> => bcrypt.hash(password, salt);
