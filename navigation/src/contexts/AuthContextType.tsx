
export interface AuthContextType {
    user: string;
    login(email: string): void
    logout(): void;
}