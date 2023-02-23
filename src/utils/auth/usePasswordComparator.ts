import * as bcrypt from 'bcrypt';

export const usePasswordComparator = (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash);
